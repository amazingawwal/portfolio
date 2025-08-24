import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"



export default function ProjectCard({ title, description, tags, image, slug }) {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-md dark:bg-gray-900 hover:shadow-lg transition"
    >
      {image && (
        <div className="h-40 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5 flex flex-col ">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 dark:bg-sky-900/50 dark:text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {
        slug && 
        (
          <Link
            to={`/projects/${slug}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
