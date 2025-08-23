// import "./Header.css"
// import React from "react";
// import {NavLink} from "react-router-dom";


// function Header(){
//     return (
//     <>
//         <nav class="nav-bar navbar navbar-expand-lg navbar-light bg-light">
//         <NavLink className="navbar-brand" to="/"><img
//               src="../assets/aA.png"
//               width="70"
//               height="50"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             /></NavLink>
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//                 <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
//                 <a class="nav-item nav-link " href="#">Projects</a>
//                 <a class="nav-item nav-link " href="#">Contact</a>
//             </div>
//             </div>
//         </nav>
    
        
//     </>
//     )
// }


// export default Header;
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Hi, I’m <span className="text-sky-600">Your Name</span> 👋
        </motion.h1>
        <motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.1 }}
className="mt-4 max-w-prose text-lg text-gray-600 dark:text-gray-300"
>
I build delightful web experiences with React, TypeScript, and modern tooling.
</motion.p>


<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
className="mt-8 flex flex-wrap items-center gap-3"
>
<a href="#projects" className="btn btn-primary">
View Projects <ArrowRight className="h-4 w-4" />
</a>
<a href="#contact" className="btn btn-ghost">Contact Me</a>
</motion.div>
</div>


{/* Avatar / Illustration */}
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6, delay: 0.1 }}
className="relative mx-auto aspect-square w-56 overflow-hidden rounded-[2rem] md:w-72"
>
<div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-fuchsia-500 to-amber-400 opacity-80" />
<div className="absolute inset-0 m-3 rounded-[1.5rem] bg-white/80 backdrop-blur-sm dark:bg-gray-900/70" />
<div className="absolute inset-0 flex items-center justify-center text-5xl">🧑‍💻</div>
</motion.div>
</div>
  )}