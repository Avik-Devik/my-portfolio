import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Avik Das',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localValue = localStorage.getItem('darkTheme');
                  var darkThemeParsed = localValue !== null && JSON.parse(localValue);
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  // Default to light if not set (as requested)
                  if (localValue === null) {
                    document.documentElement.classList.remove('dark');
                  } else {
                     if (darkThemeParsed) {
                       document.documentElement.classList.add('dark');
                     } else {
                       document.documentElement.classList.remove('dark');
                     }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${outfit.className} bg-zinc-50 text-gray-700 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300`}>{children}</body>
    </html>
  )
}
