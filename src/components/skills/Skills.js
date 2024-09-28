import React from "react";
import "./Skills.css";
import Programming from "./ProgrammingLanguage.js";
import Software from "./Software.js";


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h1 className="section-title">Skills</h1>
            <span className="section-subtitle">My areas of expertise</span>

            <div className="skills-container container grid">
                <Programming />
                <Software />
            </div>
        </section>
    )
}

export default Skills;