'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Load = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? '-100%' : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 z-50 transition-colors duration-300"
    >
      <img src="spinner.gif" alt="Spinner Gif" className="dark:invert" />
    </motion.div>
  )
}

export default Load
