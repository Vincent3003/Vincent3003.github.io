import React, { useState } from "react";
import "./Projects.css";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";


const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
       <React.Fragment>
           <section className="projects section" id="projects">
                <h1 className="section-title">Projects</h1>
                <span className="section-subtitle">My academic/personal projects</span>

                <div className="projects-container container grid">
                    <div className="projects-content">
                        <div>
                            <img className="projects-img" src={Project1} alt="SKincare Project"></img>
                            <h3 className="projects-title">
                            Sales Data Analyst and <br /> Forecasting for The Glow Company
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(1)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 1
                                ? "projects-modal active-modal"
                                : "projects-modal"}>
                            <div className="projects-modal-content">
                            <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                            <h3 className="projects-modal-title">Sales Data Analyst and Forecasting for The Glow Company</h3>
                            <p className="projects-modal-description"> <b>Project Overview:</b>
                            Conducted a comprehensive analysis of Sephora's publicly available e-commerce data to gain market insights 
                            for The Glow, a skincare company. This project aimed to uncover product performance trends, 
                            customer behavior patterns, and future demand forecasts in the skincare industry to support The Glow's 
                            strategic decision-making and market positioning.
                            </p>

                            <ul className="projects-modal-services grid">
                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <h6>Problems:</h6>
                                <p className="projects-modal-info">
                                The Glow, a skincare company, wanted to gain deeper insights into its business performance using Sephora's publicly available dataset. Specifically:

The company had access to Sephora's e-commerce sales data but needed to extract meaningful insights about product performance and customer behavior in the skincare market.
There was a need to understand market trends and future demand patterns to support strategic decision-making.
The Glow wanted to optimize its product development, inventory, and marketing strategies based on data-driven insights from a major player in the skincare industry.
                                </p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">Web page development.</p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    I create ux element interactions.
                                </p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    I position your company brand.
                                </p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    Design and mockups of products for companies.
                                </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                    <div className="projects-content">
                        <div>
                        <img className="projects-img" src={Project2} alt="Unemployment Project"></img>
                            <h3 className="projects-title">
                            Ui/Ux <br /> Designer
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(2)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 2
                                ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                            <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                            <h3 className="projects-modal-title">Ui/Ux Designer</h3>
                            <p className="projects-modal-description">
                                Service with more than 3 years of experience.Providing quality
                                work to clients and companies.
                            </p>

                            <ul className="projects-modal-services grid">
                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    I develop the user interface.
                                </p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">Web page development.</p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    I create ux element interactions.
                                </p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    I position your company brand.
                                </p>
                                </li>

                                <li className="projects-modal-service">
                                <i className="fa fa-check-circle projects-modal-icon"></i>
                                <p className="projects-modal-info">
                                    Design and mockups of products for companies.
                                </p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="projects-content">
                        <div>
                            <img className="projects-img" alt="" src={Project3}></img>
                            <h3 className="projects-title">
                            Ui/Ux <br /> Designer
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(3)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 3
                                ? "projects-modal active-modal"
                                : "projects-modal"}>
                            <div className="projects-modal-content">
                            <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                        <h3 className="projects-modal-title">Ui/Ux Designer</h3>
                        <p className="projects-modal-description">
                            Service with more than 3 years of experience.Providing quality
                            work to clients and companies.
                        </p>

                        <ul className="projects-modal-services grid">
                            <li className="projects-modal-service">
                            <i className="fa fa-check-circle projects-modal-icon"></i>
                            <p className="projects-modal-info">
                                I develop the user interface.
                            </p>
                            </li>

                            <li className="projects-modal-service">
                            <i className="fa fa-check-circle projects-modal-icon"></i>
                            <p className="projects-modal-info">Web page development.</p>
                            </li>

                            <li className="projects-modal-service">
                            <i className="fa fa-check-circle projects-modal-icon"></i>
                            <p className="projects-modal-info">
                                I create ux element interactions.
                            </p>
                            </li>

                            <li className="projects-modal-service">
                            <i className="fa fa-check-circle projects-modal-icon"></i>
                            <p className="projects-modal-info">
                                I position your company brand.
                            </p>
                            </li>

                            <li className="projects-modal-service">
                            <i className="fa fa-check-circle projects-modal-icon"></i>
                            <p className="projects-modal-info">
                                Design and mockups of products for companies.
                            </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
           </section>
       </React.Fragment>
    )
}

export default Projects;