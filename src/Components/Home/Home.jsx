import "./Home.css";
import Project from "../Project/Project";
import projects from "../Project Gallery/Project";
import { useState } from "react";
import Contacts from "../Contact/Contact";
import icons from "../Icon/Icon";
import Header from "../Header/Header";

function createProject(project){
    return(
      <>
      <Project
      key={project.key}
      name={project.name}
      url={project.projectURL}
      image={project.image}
      > 
      </Project>
      </>
    )
  };


function createContact(contact){
    return(<Contacts
    key={contact.key}
    iconName={contact.iconName}
    iconSVG={contact.iconSVG}
    iconLink={contact.iconLink}
    ></Contacts>

    )
}


function Home(){
    const[project,setProject] = useState("");

    function showProject(){
        setProject(projects.map(createProject))
    }

    return(
    <>
    <Header></Header>
    <div class="container-fluid">
     <div class="row">
        <aside class="col-lg jumbo">
            <div class="jumbotron">
                <h1 class="display-4 hello">Hello!</h1>
                <h2>I am Awwal</h2>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a onClick={showProject} class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                <div className="contact-icon">{icons.map(createContact)}</div>
            </div>
            
        </aside>
        <aside class="bio col-lg">
        <div className="scroll">{project}</div>
        </aside>
     </div>
    </div>
    </>
    )
}

export default Home;