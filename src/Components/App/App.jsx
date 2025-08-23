import Navbar from '../Navbar/navbar'
import Hero from '../Header/Hero'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="container max-w-6xl">
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about" className="section">
          <div className="card">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Short intro about you. We'll expand this in the next steps.</p>
          </div>
        </section>
        <section id="projects" className="section">
          <div className="card">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Project cards coming soon ✨</p>
          </div>
        </section>
        <section id="contact" className="section">
          <div className="card">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Call to action or contact form placeholder.</p>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Your Name</footer>
    </div>
  )
}