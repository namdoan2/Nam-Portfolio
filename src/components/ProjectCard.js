import React from "react";
import './ProjectCard.css';

const ProjectCard = ({projectImage, title, description, tools, mainFocus, code, website}) => {
    return(
        <div className="project-card">
            <div className="project-image"><img src={projectImage} alt="project images" /></div>
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <p className="built-with">Built with: {tools}</p>
            <p className="main-focus">Main Focus: {mainFocus}</p>
            <div className='site-code-links'>
                <a href={code} target='blank'>Code</a>
                <a href={website} target='blank'>Website</a>
            </div>
        </div>
    )
}

export default ProjectCard;