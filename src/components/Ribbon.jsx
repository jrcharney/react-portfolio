/**
 * @file component/Ribbon.jsx
 * @desc A corner ribbon that has a link to the repository
 */
import * as React from "react";
import { Link } from "react-router-dom";

export default function Ribbon(){
    return (
        <div className="ribbon">
            <Link to="https://github.com/jrcharney/react-portfolio">Fork on Github</Link>
        </div>
    );
}
