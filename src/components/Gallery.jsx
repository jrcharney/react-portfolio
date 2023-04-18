/**
 * @file components/Gallery.jsx
 * @desc display a set of projects
 */
import * as React from "react";
import PropTypes from "prop-types";
import Project from "./Project";
// import { projects } from "../data/projects.json";

/** TODO: What if some project links don't have some attributes? */
function Gallery({projects}){
    return (
        <div className="gallery">
            {projects.map((project,index) => {
                const name = project.name;
                const toProject = project.toProject;
                const screenshot = project.screenshot;
                const alt = project.alt;
                const toRepo = (toRepo === "") ? project.toProject : project.toRepo;
                {<Project
                  key={index}
                  name={name}
                  toProject={toProject}
                  screenshot={screenshot}
                  alt={alt}
                  toRepo={toRepo}
                />}
            })}
        </div>
    );
}

Gallery.propTypes = {
    projects : PropTypes.arrayOf(
        PropTypes.instanceOf(Project)
    ).isRequired
}

export default Gallery;
