import ProjectCard from "./projectCard"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, TailwindCSS, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    slug: "portfolio-website",
  },
  {
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with shopping cart and checkout.",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://via.placeholder.com/600x400?text=E-Commerce",
    slug: "ecommerce-app",
  },
  {
    title: "Chat App",
    description: "Realtime chat application with WebSocket support.",
    tags: ["React", "Socket.io", "TypeScript"],
    image: "https://via.placeholder.com/600x400?text=Chat+App",
    slug: "chat-app",
  },
]

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  )
}
