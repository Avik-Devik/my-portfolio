import React from 'react'

const Heading = ({ text }) => {
  return (
    <h1 className="text-4xl sm:text-3xl font-bold text-zinc-800 dark:text-white mb-14 self-center text-center transition-colors relative">
      <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        {text}
      </span>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 blur-sm"></span>
    </h1>
  )
}

export default Heading
