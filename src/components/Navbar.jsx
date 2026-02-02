'use client'
import { navbarData } from '@/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${scrolled
          ? 'glass dark:glass-dark rounded-full mx-4 px-6 py-3'
          : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <a href="/#home" className="relative group">
          <span className="text-2xl font-bold tracking-tighter text-zinc-800 dark:text-white transition-colors">
            A<span className="text-primary">.</span>D
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navbarData.map((item, i) => (
            <a
              key={i}
              href={`/#${item.id}`}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${item.id === id
                ? 'text-zinc-900 dark:text-white'
                : 'text-zinc-600 dark:text-zinc-400'
                }`}
            >
              {item.name}
              {item.id === id && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-800 dark:text-white text-2xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 p-6 glass dark:glass-dark rounded-2xl md:hidden overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navbarData.map((item, i) => (
                <a
                  key={i}
                  href={`/#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${item.id === id ? 'text-primary' : 'text-zinc-700 dark:text-zinc-300'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
