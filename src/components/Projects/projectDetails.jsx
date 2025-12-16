import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink, Code, Server, Layers } from "lucide-react"
import { projects } from "../../Data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-6">
        <p className="text-red-500 text-lg mb-4">Project not found.</p>
        <Link to="/#projects" className="text-sky-600 hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>
    )
  }

  const categoryConfig = {
    frontend: {
      icon: Code,
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      label: "Frontend Development"
    },
    backend: {
      icon: Server,
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-300",
      label: "Backend Development"
    },
    fullstack: {
      icon: Layers,
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-700 dark:text-purple-300",
      label: "Full-Stack Development"
    }
  }

  const categoryInfo = categoryConfig[project.category] || categoryConfig.frontend
  const CategoryIcon = categoryInfo.icon

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Back Button */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 mb-6 transition"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-2xl shadow-lg mb-8 object-cover max-h-96"
      />

      {/* Header Section */}
      <div className="mb-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className={`${categoryInfo.bg} ${categoryInfo.text} px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2`}>
            <CategoryIcon className="h-4 w-4" />
            {categoryInfo.label}
          </span>
        </div>

        {/* Title and Description */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-600 dark:bg-sky-900/50 dark:text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 transition shadow-md"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition shadow-md"
            >
              <ExternalLink className="h-5 w-5" />
              View Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Project Details Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
          {project.content.split('\n\n').map((paragraph, index) => {
            // Check if paragraph is a header (starts with **)
            if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
              const headerText = paragraph.replace(/\*\*/g, '').trim()
              return (
                <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white first:mt-0">
                  {headerText}
                </h3>
              )
            }
            
            // Check if it's a list item
            if (paragraph.trim().startsWith('- ')) {
              const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '))
              return (
                <ul key={index} className="space-y-2 mb-6">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      {item.replace('- ', '').replace(/\*\*/g, '')}
                    </li>
                  ))}
                </ul>
              )
            }
            
            // Regular paragraph
            return (
              <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {paragraph.replace(/\*\*/g, '').trim()}
              </p>
            )
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Projects
        </Link>
      </div>
    </div>
  )
}