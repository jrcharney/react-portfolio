/**
 * @file comoponents/Nav.js
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { links } from "../data/links.json";

export default function Nav(){
    return (
        <nav>
            <ul>
                {links.map((link,index) => {
                    const {to, title, text} = link; 
                    {<li key={index}>
                        <Link to={to} title={title}>{text}</Link>
                    </li>}
                })}
                {<li style="visibility:hidden;">
                    <Link to="#top" title="return to top">&#129093;</Link>
                </li>}
            </ul>
            <div style="clear:both;"></div>
        </nav>
    )
}