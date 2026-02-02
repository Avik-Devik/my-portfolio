'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import GlobalLineIcon from 'remixicon-react/GlobalLineIcon'
import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon'
import InformationLineIcon from 'remixicon-react/InformationLineIcon'

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Image
          src={data.url}
          alt={data.name}
          fill
          className={`object-cover transition-transform duration-500 ${show ? 'scale-110 blur-sm' : 'scale-100'}`}
        />

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`} />

        {/* Hover Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <h2 className="text-xl font-bold text-white mb-2 tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {data.name}
          </h2>
          <p className="text-sm text-gray-200 font-light mb-6 line-clamp-3 max-w-[80%]">
            {data.desc}
          </p>

          <div className="flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <InformationLineIcon size={18} />
              Details
            </button>
            <a
              href={data.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg"
            >
              <ArrowRightUpLineIcon size={18} />
              Live
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-50 dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-white/10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 text-zinc-900 dark:text-white hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
              >
                <CloseLineIcon />
              </button>

              {/* Image Side */}
              <div className="w-full relative bg-zinc-100 dark:bg-zinc-950">
                <Image
                  src={data.url}
                  alt={data.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>

              {/* Content Side */}
              <div className="w-full p-8 flex flex-col">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                  {data.name}
                </h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {data.tech.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-gray-300 font-medium border border-zinc-300 dark:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                  {data.desc}
                </p>

                <div className="mt-auto flex gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href={data.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                  >
                    <GithubLineIcon />
                    GitHub
                  </a>
                  <a
                    href={data.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                  >
                    <GlobalLineIcon />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Project
