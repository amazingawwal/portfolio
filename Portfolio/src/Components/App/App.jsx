import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import projects from "../Project Gallery/Project";
import Project from '../Project/Project';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';

// function createProject(project){
//   return(
//     <>
//     <Project
//     key={project.key}
//     name={project.name}
//     url={project.projectURL}
//     image={project.image}
//     > 
//     </Project>
//     </>
//   )
// };


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Header/>}></Route> */}
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header></Header>
      <Home></Home> */}
      {/* {projects.map(createProject)} */}
    </>
  )
}

export default App
