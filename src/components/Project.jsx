/**
 * @file component/Project.jsx
 * @desc A single project
 */
import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Project({
    name,
    toProject,
    screenshot="assets/images/Coming_Soon.png",
    alt="Coming Soon",
    toRepo="",
    key=0
}){
    if(toRepo===""){
        toRepo = toProject;
    }
    return (
        <div className="project" key={key}>
            <figure>
                <Link to={toProject}>
                    <img src={screenshot} alt={alt} className="thumb" />
                </Link>
                <figcaption>
                    <Link to={toProject}>{name}</Link>
                    <Link to={toRepo} title="Github Repo">
                        <img src="assets/images/Github-Mark-icon.png" alt="Github" className="icon" />
                    </Link>
                </figcaption>
            </figure>
        </div>
    );
}

Project.propTypes = {
    name : PropTypes.string.isRequired,
    toProject : PropTypes.string.isRequired,
    screenshot : PropTypes.string.isRequired,
    alt : PropTypes.string,
    toRepo : PropTypes.string,
    key : PropTypes.number
}

export default Project;