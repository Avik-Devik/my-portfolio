'use client'
import Heading from './sub/Heading'
import { experienceData } from '@/assets'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end center'],
  })
  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })

  return (
    <section id="experience" className="relative py-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <Heading text={'Experience & Education'} />

      <div
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-y-20 py-10 mt-10"
      >
        {/* Center Line */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800/50 rounded-full lg:-translate-x-1/2 transition-colors">
          <motion.div
            style={{ scaleY: scrollY }}
            className="absolute top-0 left-0 w-full bg-linear-to-b from-primary to-secondary origin-top rounded-full h-full"
          />
        </div>

        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`relative w-full flex flex-col lg:flex-row items-center lg:items-start ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
              }`}
          >
            {/* Timeline Dot (Desktop center, Mobile left) */}
            <div className={`absolute left-4 lg:left-1/2 w-4 h-4 bg-zinc-100 dark:bg-zinc-950 border-2 border-primary rounded-full z-20 
              -translate-x-[6px] lg:-translate-x-1/2 top-0 mt-6 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)] transition-colors`}
            />

            {/* Date Badge */}
            <div className={`absolute left-10 lg:left-1/2 top-6 -translate-y-1/2 lg:transform 
               ${i % 2 === 0 ? 'lg:-translate-x-[160%]' : 'lg:translate-x-[60%]'}
               text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20`}
            >
              {data.year}
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-[calc(100%-60px)] ml-14 lg:ml-0 lg:w-[45%] relative p-6 glass dark:glass-dark bg-white/50 dark:bg-transparent rounded-2xl border border-zinc-200 dark:border-white/5
                hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 group
                ${i % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {data.title}
              </h3>

              <div className="space-y-4">
                <div className="bg-zinc-100 dark:bg-white/5 p-3 rounded-lg transition-colors">
                  <p className="text-xs text-primary uppercase font-bold tracking-wider mb-1">
                    {data.experience ? 'Company' : 'Education'}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-gray-300 leading-relaxed font-light transition-colors">
                    {data.education}
                  </p>
                </div>

                {data.experience && (
                  <div className="pl-2 border-l border-zinc-300 dark:border-zinc-700 transition-colors">
                    <p className="text-xs text-secondary uppercase font-bold tracking-wider mb-2">Experience</p>
                    <ul className="space-y-2">
                      {data.experience.map((exp, j) => (
                        <li key={j} className="text-sm text-zinc-600 dark:text-gray-400 flex items-start gap-2 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 shrink-0" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
