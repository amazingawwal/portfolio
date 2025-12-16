import { motion } from "motion/react"
import { skills, timeline } from "../data/skills"



export default function About() {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      
      <motion.div   
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 ">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-300 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ol className="relative border-l ml-1 border-gray-300 dark:border-gray-700">
          {timeline.map((item, i) => (
            <li key={i} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold">
                {item.year.slice(2)}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time className="block text-sm text-gray-500">{item.year}</time>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </div>
  )
}
