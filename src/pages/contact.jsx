import { motion } from "motion/react"
import { Mail, Github, Linkedin, AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState("idle") 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})


  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Name is required"
        }
        if (value.trim().length < 2) {
          return "Name must be at least 2 characters"
        }
        if (value.trim().length > 50) {
          return "Name must be less than 50 characters"
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          return "Name can only contain letters, spaces, hyphens, and apostrophes"
        }
        return ""

      case "email":
        if (!value.trim()) {
          return "Email is required"
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address"
        }
        if (value.length > 100) {
          return "Email must be less than 100 characters"
        }
        return ""

      case "message":
        if (!value.trim()) {
          return "Message is required"
        }
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters"
        }
        if (value.trim().length > 1000) {
          return "Message must be less than 1000 characters"
        }
        return ""

      default:
        return ""
    }
  }

  
  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })
    return newErrors
  }

 
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    
    
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  
  async function handleSubmit(e) {
    e.preventDefault()
    
    
    setTouched({
      name: true,
      email: true,
      message: true
    })

    
    const newErrors = validateForm()
    setErrors(newErrors)

    
    if (Object.keys(newErrors).length > 0) {
      return 
    }

    setStatus("submitting")

    const form = e.currentTarget
    const formDataToSend = new FormData(form)

    
    if (formDataToSend.get("bot-field")) {
      setStatus("success")
      form.reset()
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
      setTouched({})
      return
    }

    try {
      const res = await fetch(import.meta.env.VITE_FORM_SPREE, {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
        setFormData({ name: "", email: "", message: "" })
        setErrors({})
        setTouched({})
        
        
        setTimeout(() => {
          setStatus("idle")
        }, 5000)
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

 
  const showError = (field) => touched[field] && errors[field]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="mb-4 text-gray-600 dark:text-gray-300">
        I'd love to hear from you! Whether it's a project, a question, or just to
        say hi 👋 — drop me a message.
      </p>

      
      <div className="flex gap-4 mb-10">
        <a
          href="mailto:sakeebmawwal@gmail.com"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 transition-colors"
        >
          <Mail className="h-5 w-5" /> Email
        </a>
        <a
          href="https://github.com/amazingawwal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 transition-colors"
        >
          <Github className="h-5 w-5" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/sakeeb-ayigoro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-400 transition-colors"
        >
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
      </div>

      
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5 bg-white dark:bg-gray-900 shadow-md rounded-xl p-6"
      >
        
        <input
          type="text"
          name="bot-field"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

       
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border px-3 py-2 transition-colors focus:outline-none focus:ring-2 ${
              showError("name")
                ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                : "border-gray-300 dark:border-gray-700 bg-transparent focus:border-sky-500 focus:ring-sky-200 dark:focus:ring-sky-800"
            }`}
            placeholder="Your name"
          />
          {showError("name") && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

       
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border px-3 py-2 transition-colors focus:outline-none focus:ring-2 ${
              showError("email")
                ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                : "border-gray-300 dark:border-gray-700 bg-transparent focus:border-sky-500 focus:ring-sky-200 dark:focus:ring-sky-800"
            }`}
            placeholder="your.email@example.com"
          />
          {showError("email") && (
            <div className="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border px-3 py-2 transition-colors focus:outline-none focus:ring-2 resize-y ${
              showError("message")
                ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-800"
                : "border-gray-300 dark:border-gray-700 bg-transparent focus:border-sky-500 focus:ring-sky-200 dark:focus:ring-sky-800"
            }`}
            placeholder="Your message here..."
          />
          <div className="mt-1 flex items-center justify-between">
            {showError("message") ? (
              <div className="flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.message}</span>
              </div>
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {formData.message.length}/1000 characters
              </div>
            )}
          </div>
        </div>

        
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-sky-600 px-4 py-3 font-medium text-white hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

       
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400"
          >
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}
        
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400"
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">Something went wrong. Please try again or email me directly.</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}