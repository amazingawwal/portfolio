import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";


export default function Navbar() {
const [dark, setDark] = useState(false);


useEffect(() => {
if (dark) {
document.documentElement.classList.add("dark");
} else {
document.documentElement.classList.remove("dark");
}
}, [dark]);


return (
<header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md dark:bg-gray-900/70">
<nav className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<a href="/" className="text-xl font-bold text-sky-600">
MyPortfolio
</a>


<ul className="hidden gap-6 md:flex">
<li>
<a
href="#about"
className="text-gray-700 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
>
About
</a>
</li>
<li>
<a
href="#projects"
className="text-gray-700 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
>
Projects
</a>
</li>
<li>
<a
href="#contact"
className="text-gray-700 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
>
Contact
</a>
</li>
</ul>


<button
onClick={() => setDark(!dark)}
className="ml-4 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
>
{dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
</button>
</nav>
</header>
);
}