// import "./Home.css";
// import Project from "../Project/Project";
// import projects from "../Project Gallery/Project";
// import { useState } from "react";
// import Contacts from "../Contact/Contact";
// import icons from "../Icon/Icon";
// import Header from "../Header/Header";


// function createProject(project){
//     return(
//       <>
//       <Project
//       key={project.key}
//       name={project.name}
//       url={project.projectURL}
//       image={project.image}
//       > 
//       </Project>
//       </>
//     )
//   };


// function createContact(contact){
//     return(<Contacts
//     key={contact.key}
//     iconName={contact.iconName}
//     iconSVG={contact.iconSVG}
//     iconLink={contact.iconLink}
//     ></Contacts>

//     )
// }


// function Home(){
//     const[project,setProject] = useState("");

//     function showProject(){
//         setProject(projects.map(createProject))
//     }

//     return(
//     <>
//     <Header></Header>
//     <div className="container-fluid">
//      <div className="row">
//         <aside class="col-lg jumbo">
//             <div className="jumbotron">
//                 <h1 className="display-4 hello">Hello!</h1>
//                 <h2>I am Awwal</h2>
//                 <h2 className="lead note">Welcome to my Portfolio</h2>
//                 <hr className="my-4"/>
//                 <h4>Tech Stack</h4>
//                 <div className="container">
//                 <div className="row">
//                 <div className="col-lg">
//                 <p>Languages
//                 <ul className="tech-stack">
//                     <li>HTML5</li>
//                     <li>CSS3 (including pre-processors like Sass)</li>
//                     <li>JavaScript (ES6+)</li>
//                 </ul>
//                 </p>
//                 <p>Frameworks and Libraries
//                 <ul className="tech-stack">
//                     <li>React.js </li>
//                     <li>Bootstrap5</li>
//                     <li>Tailwind</li>
//                 </ul>
//                 </p>
//                 <p> Version Control & CI/CD Tools
//                 <ul className="tech-stack">
//                     <li>Git/GitHub</li>
//                     <li>GitLab</li>
//                 </ul>
//                 </p>
//                 <p>Package Manager
//                 <ul className="tech-stack">
//                     <li>npm (Node Package Manager)</li>
//                 </ul>
//                 </p>
//                 </div>
//                 <div className="col-lg">
//                 <p>Build Tools & Dev Server
//                 <ul className="tech-stack">
//                     <li>Vite </li>
//                     <li>Babel</li>
//                     <li>Webpack</li>
//                 </ul>
//                 </p>
//                 <p> Testing
//                 <ul className="tech-stack">
//                     <li>Jest (TDD)</li>
//                     <li>Vitest(BDD)</li>
//                 </ul>
//                 </p>
//                 <p> Other Tools and Skills
//                 <ul className="tech-stack">
//                     <li>Code editors (VS Code, CodeSandbox)</li>
//                     <li>Browser Developer Tools</li>
//                     <li>Understanding of SEO best practices</li>
//                     <li>Basic graphic design skills (Canva, Figma)</li>
//                 </ul>
//                 </p>
//                 </div>
//                 </div>
//                 </div>
//                 <a onClick={showProject} class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//                 <div className="contact-icon">{icons.map(createContact)}</div>
//             </div>
            
//         </aside>
//         <aside class="bio col-lg">
//         <div className="scroll">
//             <div className="about">
//                 <img   src="../assets/profile-pic.png"/>
//             </div>
//             <article>
//                 I am a Web Developer (Front-End) with with a professional background in Supply Chain Management. <br />
//                 I am available to help business build mobile-first, responsive client-side web applications.
//                 Eager to contribute to dynamic projects, create engaging user interfaces, and continue learning in a collaborative team environment. <br />
//             </article>
//         </div>
//         </aside>
//      </div>
//     </div>
//     {/* <MyChart/> */}
//     </>
//     )
// }

// export default Home;