'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-24 min-h-screen flex flex-col justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <Heading text={'Get in touch'} />

      <div className="w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image / Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
          <div className="glass dark:glass-dark bg-white/50 dark:bg-zinc-900/50 p-8 md:p-10 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-white/5 transition-colors h-full flex items-center justify-center">
            <Image
              src={'/contact.gif'}
              alt="Contact Image"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          action="https://formsubmit.co/avikdas226133@gmail.com"
          method="POST"
          className="glass dark:glass-dark bg-white/50 dark:bg-zinc-900/50 p-8 md:p-10 rounded-3xl w-full flex flex-col gap-6 border border-zinc-200 dark:border-white/5 shadow-xl transition-colors"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-gray-500 outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all min-h-[150px] resize-none"
            placeholder="Your Message..."
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary rounded-xl py-4 font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
