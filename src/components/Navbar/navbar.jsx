import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem('theme', 'light');
  }
}, [dark])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md dark:bg-gray-900/70">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-sky-600">
          MyPortfolio
        </a>

      
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

       
        <button
          onClick={() => setDark(!dark)}
          className="hidden md:block ml-4 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

      
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

     
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <ul className="container mx-auto max-w-6xl px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-2 text-gray-700 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}