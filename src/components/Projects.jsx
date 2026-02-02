'use client'
import { useState, useRef, useEffect } from 'react'
import Heading from './sub/Heading'
import Project from './sub/Project'
import { projectsData, projectsButton } from '@/assets'
import { animate, motion } from 'framer-motion'

const Projects = () => {
  const [tech, setTech] = useState('All')
  const [index, setIndex] = useState(0)
  const prevIndex = useRef(0)
  const buttonsRef = useRef([])

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 })
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.1 })
  }

  useEffect(() => {
    handleClick()
    prevIndex.current = index
  }, [index])

  const filteredProjects = projectsData.filter((project) =>
    tech === 'All' ? true : project.tech.some((item) => item === tech)
  )

  return (
    <section id="projects" className="min-h-screen py-24 relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-primary/5 -skew-y-6 -z-10" />

      <Heading text={'Projects'} />

      <div className="flex flex-wrap items-center justify-center gap-4 py-10 max-w-4xl mx-auto px-4">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.1 : 1 }}
            ref={(el) => buttonsRef.current.push(el)}
            onClick={() => {
              setTech(text)
              setIndex(i)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${index === i
              ? 'bg-primary text-white shadow-lg shadow-primary/30 border-primary'
              : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 border-transparent'
              }`}
          >
            {text}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((data, i) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            key={`project-${i}`}
          >
            <Project data={data} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
