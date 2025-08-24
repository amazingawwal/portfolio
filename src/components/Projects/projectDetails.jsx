import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function ProjectDetail() {
  const { slug } = useParams()

  return (
    <div className="max-w-3xl mx-auto py-10">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {slug?.replace("-", " ")}
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        This is a placeholder detail page for <strong>{slug}</strong>.  
        Later, we’ll fetch project data dynamically from a `projects.ts` file and render full details here.
      </p>
    </div>
  )
}
