import React from "react";
import "./Project.css"

function Project(props){
    return(
        <div className="container">
        <div className="project-card">
            <div className="project-img">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <ul>
                    <li>
                    <strong>Project Name:</strong> {props.name}
                    </li>
                    <li>
                    <strong>Project Link:</strong> <a href={props.url}>Visit Project</a>
                    </li>
                </ul>
            </div>
         </div>   
        </div>
    )
};

export default Project;