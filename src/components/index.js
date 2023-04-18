/**
 * @file components/index.js
 * @desc the main file to import components
 * @TODO should this be a JSX file?
 */
// TODO: something that handles backgrounds

import Page from './components/Page.jsx';        // The container of everything. (Give it an XML vibe instead of using a div)
import Header from './components/Header.jsx';    // The header part of the page
import Nav from './components/Nav.jsx';          // The nav/dashboard part of a page
import Content from './components/Content.jsx';  // The main part of a page
import Footer from './components/Footer.jsx';    // The footer part of a page

import Ribbon from './components/Ribbon.jsx';        // The Ribbon that points to the repository
import Bio from './components/Bio.jsx';              // A biography component
import Projects from './components/Projects.jsx';    // A Project component

export {
    Page,
    Header,
    Nav,
    Content,
    Footer,
    Ribbon,
    Bio,
    Projects
}
