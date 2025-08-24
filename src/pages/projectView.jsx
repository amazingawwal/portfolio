import { Routes, Route } from "react-router-dom"
import Hero from "../components/Hero/hero"
import Projects from "../components/Projects/projects"
import ProjectDetail from "../components/Projects/projectDetails"
import About from "./about"

export default function ProjectView() {
    return(
        <>
        <main className="container max-w-6xl">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="section">
                  <Hero />
                </section>
                <section id="about" className="section">
                  <About/>
                </section>
                <section id="projects" className="section">
                  <h2 className="text-3xl font-bold mb-6">Projects</h2>
                  <Projects />
                </section>
                <section id="contact" className="section">
                  <div className="card">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      Call to action or contact form placeholder.
                    </p>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
        </>
    )
}