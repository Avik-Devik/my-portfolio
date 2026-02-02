'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isDark, setIsDark] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Theme-aware colors
    const getFollowers = (dark) => [
        {
            size: 40,
            damping: 30,
            stiffness: 200,
            color: dark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.6)'
        },
        {
            size: 30,
            damping: 25,
            stiffness: 150,
            color: dark ? 'rgba(236, 72, 153, 0.35)' : 'rgba(236, 72, 153, 0.5)'
        },
        {
            size: 20,
            damping: 20,
            stiffness: 100,
            color: dark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.45)'
        },
        {
            size: 12,
            damping: 15,
            stiffness: 80,
            color: dark ? 'rgba(236, 72, 153, 0.25)' : 'rgba(236, 72, 153, 0.4)'
        },
    ]

    const [followers, setFollowers] = useState(getFollowers(false))

    const springConfigs = followers.map(f => ({
        damping: f.damping,
        stiffness: f.stiffness
    }))

    const cursorXSprings = springConfigs.map(config => useSpring(cursorX, config))
    const cursorYSprings = springConfigs.map(config => useSpring(cursorY, config))

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            const dark = document.documentElement.classList.contains('dark')
            setIsDark(dark)
            setFollowers(getFollowers(dark))
        }

        checkTheme()

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            setIsVisible(true)
        }

        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            observer.disconnect()
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [cursorX, cursorY])

    return (
        <>
            {followers.map((follower, i) => (
                <motion.div
                    key={i}
                    className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                    style={{
                        x: cursorXSprings[i],
                        y: cursorYSprings[i],
                        width: follower.size,
                        height: follower.size,
                        marginLeft: -follower.size / 2,
                        marginTop: -follower.size / 2,
                        mixBlendMode: isDark ? 'screen' : 'multiply',
                    }}
                >
                    <motion.div
                        className="w-full h-full rounded-full"
                        style={{
                            backgroundColor: follower.color,
                        }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            scale: isVisible ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>
            ))}

            {/* Center dot - theme aware */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[10000] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    marginLeft: -3,
                    marginTop: -3,
                }}
            >
                <motion.div
                    className="w-full h-full rounded-full"
                    style={{
                        backgroundColor: isDark ? 'white' : '#18181b',
                    }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.1 }}
                />
            </motion.div>
        </>
    )
}

export default Cursor
