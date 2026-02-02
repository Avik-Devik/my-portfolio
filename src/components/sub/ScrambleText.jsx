'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

const ScrambleText = ({ text = "Hello World!", className = "", visible = true }) => {
    const [displayText, setDisplayText] = useState(text.split('').map(() => ''))
    const [isHovered, setIsHovered] = useState(false)
    const [isScrambling, setIsScrambling] = useState(false)
    const letters = text.split('')

    useEffect(() => {
        if (!isScrambling) return

        let iteration = 0
        const maxIterations = 20

        const interval = setInterval(() => {
            setDisplayText(prev =>
                letters.map((letter, index) => {
                    if (iteration > index * 2) {
                        return letter
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)]
                })
            )

            iteration++

            if (iteration > maxIterations) {
                clearInterval(interval)
                setDisplayText(letters)
                setIsScrambling(false)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [isScrambling, text])

    // Trigger scramble effect when component becomes visible
    useEffect(() => {
        if (visible) {
            setIsScrambling(true)
        }
    }, [visible])

    return (
        <motion.div
            className={`flex flex-col items-center justify-center ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText.map((letter, index) => (
                <motion.span
                    key={index}
                    animate={isHovered ? {
                        y: [0, -10, 0, 10, 0],
                    } : {
                        y: 0
                    }}
                    transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut",
                        delay: index * 0.1,
                    }}
                    className="inline-block leading-tight select-none"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default ScrambleText
