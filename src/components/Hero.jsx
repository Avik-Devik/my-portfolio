'use client'
import Image from 'next/image'
import { heroIcons } from '@/assets'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'
import Typewriter from './sub/Typewriter'
import ScrambleText from './sub/ScrambleText'

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
  const [mouseMove, setMouseMove] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
    setMouseMove(true)
  }

  const { innerWidth, innerHeight } = windowOffset

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  const rotateY = useTransform(xSpring, [0, innerWidth], [-5, 5])
  const rotateX = useTransform(ySpring, [0, innerHeight], [5, -5])

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950 pt-20 transition-colors duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Scramble Text Overlay - Vertically Stacked & Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isButtonHovered ? 1 : 0,
          scale: isButtonHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.4, ease: "backOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 flex flex-col items-center"
      >
        <ScrambleText
          text="Hello World!"
          visible={isButtonHovered}
          className="text-2xl md:text-3xl font-extrabold text-zinc-600 dark:text-gray-muted transition-colors"
        />
      </motion.div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left space-y-8"
        >
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-zinc-600 dark:text-gray-muted transition-colors"
            >
              Welcome to my Portfolio
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight transition-colors"
            >
              I'm <span className="text-gradient">Avik Kumar Das</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300 transition-colors h-12"
            >
              <Typewriter
                phrases={[
                  "I am a developer",
                  "I am a gamer",
                  "I love cool design",
                  "I love learning new things"
                ]}
                className="text-primary"
              />
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              View Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
              href="#contact"
              className="px-8 py-4 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Icons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              opacity: { delay: 0.5 },
              y: { delay: 0.5 }
            }}
            className="flex items-center justify-center md:justify-start gap-6 pt-4"
          >
            {heroIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  filter: [
                    'brightness(1) drop-shadow(0 0 0px rgba(99, 102, 241, 0))',
                    'brightness(1.5) drop-shadow(0 0 10px rgba(99, 102, 241, 0.8))',
                    'brightness(1) drop-shadow(0 0 0px rgba(99, 102, 241, 0))',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 5,
                  color: '#6366f1'
                }}
                whileTap={{ scale: 0.9 }}
                className="text-zinc-500 dark:text-gray-muted transition-colors text-3xl"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <motion.div
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              perspective: 1000,
            }}
            className="relative z-10 w-80 h-80 md:w-[500px] md:h-[500px]"
          >
            <div className="absolute inset-4 rounded-3xl bg-linear-to-tr from-primary to-secondary opacity-20 blur-2xl -z-10" />
            <div className="w-full h-full rounded-3xl border border-white/20 glass dark:glass-dark overflow-hidden relative">
              <Image
                src="/avik.jpg"
                alt="Nick Brown"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-20 h-20 glass dark:glass-dark rounded-2xl flex items-center justify-center shadow-xl"
            >
              <span className="text-4xl">🚀</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-auto px-6 py-4 glass dark:glass-dark rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-zinc-800 dark:text-white transition-colors">Open to work</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 dark:text-gray-muted hover:text-primary dark:hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.a>
    </div>
  )
}

export default Hero
