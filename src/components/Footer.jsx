/**
 * @file components/Footer.jsx
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { sections } from "../data/footer.json";

export default function Footer(){
    const footer = sections[0];
    const links = footer.links;
    return (
        <footer>
            <section>
                <section>
                    <h3>{footer.name}</h3>
                    <ul>
                        {links.map((link,index) => {
                            const {to, text} = link; 
                            {<li key={index}>
                                <Link to={to}>{text}</Link>
                            </li>}
                        })}
                    </ul>
                </section>
            </section>
            {<section>
                <p>&copy; 2023 | A JRCharney Production | <img src="assets/images/US-United-States-Flag-icon.png" alt="US Flag" width="16px" height="16px" /> Coded in America, by Humans not A.I.</p>
            </section>}
        </footer>
    );
}