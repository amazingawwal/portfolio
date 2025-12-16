import { motion } from "motion/react"
import { Mail, Github, Linkedin } from "lucide-react"
import { useState } from "react"


export default function Contact() {
  const [status, setStatus] = useState("idle")

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)

    
    if (formData.get("bot-field")) {
      setStatus("success") 
      form.reset()
      return
    }

    try {
      const res = await fetch(import.meta.env.VITE_FORM_SPREE, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl "
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="mb-4 text-gray-600 dark:text-gray-300">
        I’d love to hear from you! Whether it’s a project, a question, or just to
        say hi 👋 — drop me a message.
      </p>

      <div className="flex gap-4 mb-10">
        <a
          href="mailto:sakeebmawwal@gmail.com"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400"
        >
          <Mail className="h-5 w-5" /> Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400"
        >
          <Github className="h-5 w-5" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400"
        >
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
      </div>

      {/* Contact form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-900 shadow-md rounded-xl p-6"
      >
        {/* hp field */}
        <input
          type="text"
          name="bot-field"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:border-sky-500 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:border-sky-500 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:border-sky-500 focus:ring focus:ring-sky-200 dark:focus:ring-sky-800"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 transition disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">❌ Something went wrong. Try again.</p>
        )}
      </form>
    </motion.div>
  )
}
