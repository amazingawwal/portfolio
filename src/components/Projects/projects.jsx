import ProjectCard from "./projectCard"
import { projects } from "../../Data/projects"

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  )
}
