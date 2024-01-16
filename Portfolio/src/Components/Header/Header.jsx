import "./Header.css"
import React from "react";
import {NavLink} from "react-router-dom";


function Header(){
    return (
    <>
        <nav class="nav-bar navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/"><img
              src="../assets/aA.png"
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
                <a class="nav-item nav-link " href="#">About</a>
                <a class="nav-item nav-link " href="#">Projects</a>
                <a class="nav-item nav-link " href="#">Contact</a>
            </div>
            </div>
        </nav>
    
        
    </>
    )
}


export default Header;