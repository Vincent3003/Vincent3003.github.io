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

                        <p className="about-description">I'm Chi, and I am from Vietnam. I recent graduated with a Bachelor of Science 
                            in Computer Science and Data Analytics from Drake University. I have a strong passion for numbers, problem-solving, 
                            and data-driven decision-making, which I have developed through internships at EMC Insurance Companies 
                            and roles at Drake University’s support centers. I am skilled in Python, R, SQL, and JavaScript, 
                            and proficient in tools like PowerBI, Tableau, and GitHub. As a dedicated team player and former 
                            Secretary of the Drake Association of Technology Advancement (DATA) Club, I bring strong leadership 
                            and communication skills to every project. Feel free to explore my portfolio and reach out 
                            for collaboration opportunities!</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;