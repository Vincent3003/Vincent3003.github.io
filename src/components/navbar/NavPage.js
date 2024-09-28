import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutMe from '../about/About';
import Skills from '../skills/Skills';
import Experience from '../experience/Work';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const NavPage = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default NavPage;