'use client'
import { moonIcon, sunIcon } from '@/assets'
import { useState, useEffect } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import { motion } from 'framer-motion'

const Toggle = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  const addDarkTheme = () => {
    document.documentElement.classList.add('dark')
    setDarkTheme(true)
  }

  const removeDarkTheme = () => {
    document.documentElement.classList.remove('dark')
    setDarkTheme(false)
  }

  useEffect(() => {
    const darkTheme = reactLocalStorage.get('darkTheme')
    const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme)

    // User requested default to be Light Mode, ignoring system preference for first visit
    if (darkTheme === undefined) {
      removeDarkTheme()
    } else {
      darkThemeParsed ? addDarkTheme() : removeDarkTheme()
    }
  }, [])

  return (
    <main>
      <div className="min-h-screen transition-colors duration-300">
        <div className="w-full">
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme()
                reactLocalStorage.set('darkTheme', true)
              } else {
                removeDarkTheme()
                reactLocalStorage.set('darkTheme', false)
              }
            }}
            className="fixed right-6 top-6 md:top-24 text-yellow-600 hover:text-yellow-500 z-[60] p-3 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-md shadow-lg transition-all hover:scale-110 border border-zinc-200 dark:border-zinc-700"
          >
            <span className="relative block w-6 h-6 overflow-hidden">
              <motion.span
                animate={{ y: darkTheme ? 30 : 0, opacity: darkTheme ? 0 : 1 }}
                className="absolute inset-0 flex items-center justify-center text-xl text-orange-500"
              >
                {sunIcon}
              </motion.span>
              <motion.span
                animate={{ y: darkTheme ? 0 : -30, opacity: darkTheme ? 1 : 0 }}
                className="absolute inset-0 flex items-center justify-center text-xl text-zinc-100 dark:text-zinc-100 text-zinc-800"
              >
                {moonIcon}
              </motion.span>
            </span>
          </button>

          {children}
        </div>
      </div>
    </main>
  )
}

export default Toggle
