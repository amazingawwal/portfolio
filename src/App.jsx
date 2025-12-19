import Navbar from "./components/Navbar/navbar"
import ProjectView from "./pages/projectView"


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
