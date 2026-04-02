import React from 'react';
import "./App.css";
import MainNav from './components/navbar/MainNav';
import Footer from './components/footer/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DarkMode from "./components/darkmode/DarkMode";
import Home from "./components/home/Home";
import AboutMe from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Work';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
// import ScrollUp from './components/scrollup/ScrollUp';


const App = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <DarkMode />
        <MainNav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </HashRouter>
    </React.Fragment>
  )
}

export default App;
