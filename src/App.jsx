import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/navbar"
import ProjectView from "./pages/projectView"
// import Hero from "./components/Hero/hero"
// import Projects from "./components/Projects/projects"
// import ProjectDetail from "./components/Projects/projectDetails"

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <ProjectView/>
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} <span>amazingawwal</span>
      </footer>
    </div>
  )
}
