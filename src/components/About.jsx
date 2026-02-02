'use client'

import Heading from './sub/Heading'
import ScrollText from './sub/ScrollText'
import Image from 'next/image'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/assets'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

const About = () => {
  const sectionRef = useRef(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Track scroll progress of the About section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Transform scroll progress to x position for animations
  const imageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
  const textX = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  // Tilt card effect
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [0, windowSize.height], [15, -15]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [0, windowSize.width], [-15, 15]), {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setWindowSize({ width: rect.width, height: rect.height })
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-20 flex flex-col items-center justify-center relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <Heading text={'About Me'} />

      <div className="w-full max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-stretch mt-12">
        {/* Image Section */}
        <motion.div
          style={{ x: imageX, opacity }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative w-full max-w-[400px] h-[500px]"
            style={{
              perspective: 1000,
              rotateX,
              rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
          >
            <div className="absolute inset-4 rounded-2xl bg-linear-to-tr from-primary to-secondary opacity-20 blur-xl" />
            <Image
              src={'/avik2.jpeg'}
              alt="About Image"
              fill
              className="object-cover rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl z-10"
            />
            {/* Decorative floaters */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center text-3xl shadow-lg z-20 animate-bounce">
              👨‍💻
            </div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          style={{ x: textX, opacity }}
          className="relative flex flex-col"
        >
          <div className="glass dark:glass-dark p-8 rounded-2xl relative border border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/20 flex-1 flex flex-col justify-between h-[500px]">
            {/* Quote icon decoration */}
            <span className="absolute -top-4 -left-2 text-6xl text-primary/20 opacity-50 font-serif">"</span>

            <p className="text-lg font-light text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 transition-colors overflow-y-auto">
              {aboutText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center justify-center gap-x-2 rounded-full border-2 border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/25"
              >
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Avik_Kumar_Das_Resume.pdf"
                download=""
                className="inline-flex items-center justify-center gap-x-2 rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
              >
                <span>Download Resume</span>
                <span className="text-xl">{downloadIcon}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="w-full mt-24">
        <ScrollText />
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Resume Preview</h3>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zinc-600 dark:text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* PDF Viewer */}
              <iframe
                src="/Avik_Kumar_Das_Resume.pdf"
                className="w-full h-full pt-16"
                title="Resume Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About
