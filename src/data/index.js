/**
 * @file data/index.js
 * @desc one stop shop to import data
 */

// TODO: some of these imports might be consolidated.
import bio from './data/bio.json';              // Personal bio
import projects from './data/projects.json';    // List of projects
import resume from './data/resume.json';        // Resume, education, work history, skills
import links from './data/links.json';          // Links go in the nav element (possibly a menu?)
import contact from './data/contact.json';      // contact info
import footer from './data/footer.json';        // Links and other data that go in the footer

export {
    bio,
    projects,
    resume,
    links,
    contact,
    footer
};
