import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import ThemeToggle from '../Theme/themetoggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close on resize > md for safety
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800/70 dark:bg-gray-950/70">
      <nav className="container flex max-w-6xl items-center justify-between py-3">
        <a href="#home" className="font-extrabold tracking-tight">YourName<span className="text-sky-600">.</span></a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              {l.label}
            </a>
          ))}
          <div className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-800" />
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-xl border border-gray-200/70 p-2 shadow-sm transition hover:bg-gray-100 dark:border-gray-800/70 dark:hover:bg-gray-800">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200/70 bg-white/90 py-2 backdrop-blur-md dark:border-gray-800/70 dark:bg-gray-950/90 md:hidden">
          <div className="container max-w-6xl">
            <div className="flex flex-col gap-1 py-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 px-3">
                <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}