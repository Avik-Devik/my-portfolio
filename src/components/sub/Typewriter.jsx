'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Typewriter = ({ phrases, className = '' }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex]
        const typingSpeed = isDeleting ? 50 : 100
        const pauseTime = isDeleting ? 500 : 2000

        if (!isDeleting && displayedText === currentPhrase) {
            // Finished typing, pause then start deleting
            const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
            return () => clearTimeout(timeout)
        }

        if (isDeleting && displayedText === '') {
            // Finished deleting, move to next phrase
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
            return
        }

        // Type or delete one character
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => {
                if (isDeleting) {
                    return prev.slice(0, -1)
                } else {
                    return currentPhrase.slice(0, prev.length + 1)
                }
            })
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayedText, isDeleting, currentPhraseIndex, phrases])

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-0.5 h-6 bg-current ml-1 align-middle"
            />
        </span>
    )
}

export default Typewriter
