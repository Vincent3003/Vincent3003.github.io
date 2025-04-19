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
                        Hi! I'm Chi (Alison) Dang — an international student from Vietnam and recent graduate of Drake University with a 
                        B.S. in Computer Science and Data Analytics, along with a minor in Business Administration. </p>
                        <p className="about-description">
                        I bring hands-on experience from EMC Insurance Companies and Drake University’s IT support centers, where 
                        I sharpened my skills in SQL, communication, and cross-functional collaboration. I'm also proficient in Python, R, 
                        SQL, JavaScript, and MySQL, and well-versed in tools like Power BI, Tableau, GitHub, and SAS. </p>
                        <p className="about-description">
                        I have worked with key data science libraries such as Pandas, NumPy, Scikit-learn, PyTorch, and TensorFlow, 
                        and I am passionate about transforming complex data into smart, actionable insights through machine learning, 
                        NLP, and deep learning. </p>
                        <p className="about-description">
                        Feel free to browse my portfolio and contact me to collaborate!</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;