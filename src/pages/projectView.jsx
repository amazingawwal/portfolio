import { Routes, Route } from "react-router-dom"
import Hero from "../components/Hero/hero"
import Projects from "../components/Projects/projects"
import ProjectDetail from "../components/Projects/projectDetails"
import About from "./about"
import Contact from "./contact"

export default function ProjectView() {
    return(
        <>
        <main className=" container max-w-6xl">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="section">
                  <Hero />
                </section>
                <section id="about" className="section ml-2">
                  <About/>
                </section>
                <section id="projects" className="section ml-2">
                  <h2 className="text-3xl font-bold mb-6">Projects</h2>
                  <Projects />
                </section>
                <section id="contact" className="section ml-2 mt-4">
                  <Contact/>
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