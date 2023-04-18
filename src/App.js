/**
 * @file src/App.js
 * TODO: Rename this file to App.jsx and DOM the react import
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Ribbon from "./components/Ribbon";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Ribbon/>
      <Header/>
      <Nav/>
      {/* TODO: Page stuff goes here */}
      <Footer/>
    </div>
  );
}

export default App;
