/**
 * @file comoponents/Contacts.js
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { contacts } from "../data/contacts.json";

export default function Contacts(){
    /* TODO: put this in a section */
    return (
        <section id="contact" className="card">
            <h2>Get In Touch</h2>
            <p>I generally do not post my e-mail directly on my sites for security reasons. However, you can reach out to me via social media.</p>
            {/* TODO: Should I consider thumbnails for these links too? */}
            <dl>
                {contacts.map((contact,index) => {
                    const {to, name, description} = contact; 
                    {<dt key={index}>
                        <Link to={to}>{name}</Link>
                    </dt>}
                    {<dd>{description}</dd>}
                })}
            </dl>
        </section>
    )
}