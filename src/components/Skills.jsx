'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { skillsData } from '@/assets'
import { motion } from 'framer-motion'

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="min-h-screen py-24 flex flex-col items-center justify-center relative bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <Heading text={'Skills'} />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16"
      >
        {skillsData.map((skill, i) => (
          <motion.div
            variants={item}
            key={i}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center gap-4 p-6 glass dark:glass-dark bg-white/50 dark:bg-white/5 rounded-xl transition-all duration-300 group cursor-pointer border border-zinc-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10"
          >
            <div className="relative w-12 h-12">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-sm font-medium text-zinc-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
