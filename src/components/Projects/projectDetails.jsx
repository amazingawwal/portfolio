import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { projects } from "../../Data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-10">
        <p className="text-red-500">Project not found.</p>
        <Link to="/#projects" className="text-sky-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl shadow mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 dark:bg-sky-900/50 dark:text-sky-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 prose dark:prose-invert">
        <p>{project.content}</p>
      </div>
    </div>
  )
}
