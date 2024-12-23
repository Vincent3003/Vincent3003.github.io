import React from "react";
import "./About.css";
import AboutImg from "../../assets/mypic.JPG";
import Info from "./Info";

const About = () => {
    return (
        <React.Fragment>
            <section className="about section" id="about">
                <h1 className="section-title">About  Me</h1>
                <span className="section-subtitle">My Introduction</span>

                <div className="about-container container grid">
                    <img src={AboutImg} alt="" className="about-img" />

                    <div className="about-data">
                        <Info />

                        <p className="about-description">
                        My name is Chi, and you can call me Alison. As an international student from Vietnam, 
                        I graduated with a bachelor's degree in computer science and data analytics from Drake University. 
                        With internships at EMC Insurance Companies and roles at Drake University's support centers, 
                        I have developed a passion for numbers, problem-solving, and analytical thinking. 
                        I am skilled in Python, R, SQL, and JavaScript and proficient in tools like PowerBI, Tableau, and GitHub. 
                        In addition to being a team player and former secretary of the Drake Association of Technology Advancement 
                        (DATA) Club, I possess strong leadership and communication skills. Feel free to browse my portfolio and 
                        contact me to collaborate!</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;