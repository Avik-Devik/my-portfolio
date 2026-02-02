'use client'

import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'

const Footer = () => {
    return (
        <footer className="w-full py-10 bg-zinc-100 dark:bg-zinc-950 flex flex-col justify-center items-center gap-6 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 text-center px-4">
                Thank you everyone for visiting my portfolio
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                    <MailLineIcon size={20} />
                    <span>Contact Me</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/avik-das-226133ok/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                >
                    <LinkedinLineIcon size={20} color="#0077b5" />
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/Avik-Devik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                >
                    <GithubLineIcon size={20} />
                    <span>Github</span>
                </a>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
                © {new Date().getFullYear()} Avik Kumar Das. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
