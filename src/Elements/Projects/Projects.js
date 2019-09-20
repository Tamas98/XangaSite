import React from 'react'
import Radium from 'radium'
import Project from '../../Components/Project'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Projects = props => {
    
    let projects = [];

    for(let i = 0;i<props.projects.length;i++){
        let project=props.projects[i];
        projects.push(
            <Link to={'/Proj'+ (i+1)}>
                <Project 
                    name={project.name} 
                    img={project.img} 
                    type={project.type} 
                    price={project.price} 
                    industrie={project.industrie} 
                    year={project.year}
                />
            </Link>
        )
    }

    return(projects)
}

export default Radium(Projects)