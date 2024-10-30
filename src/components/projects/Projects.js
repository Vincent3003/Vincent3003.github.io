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
                        <div className="projects-icon ">
                            <img className="projects-img" src={Project1} alt="SKincare Project"></img>
                            <h3 className="projects-title">
                            Sales Data Analyst<br />for The Glow Co.
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
                                <h3 className="projects-modal-title">Sales Data Analyst for The Glow Co.</h3>
                                <p className="projects-modal-description"> <b>Project Overview: </b>
                                The Glow Co. dashboard project focused on analyzing sales and customer data from 1970 to 1984. 
                                The goal was to uncover key insights into product performance, customer preferences, 
                                and sales patterns, to help drive informed decision-making for marketing and inventory management.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Problems: </b>
                                        </p>
                                    </li>

                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Limited visibility into top-performing products and their revenue contribution.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Difficulty understanding the impact of promotional strategies 
                                        (e.g., Sephora-exclusive, online-only products, etc.).
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Varied product performance across different categories
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Task: </b></p>
                                    </li>
                                    
                                    <li className="projects-modal-info-list">
                                    To analyze customer reviews, product sales, and feedback data to identify the top products, 
                                    assess the effectiveness of promotions, and understand customer engagement across various 
                                    product categories.
                                    </li>

                                    <li className="projects-modal-service">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Method & Tools: </b> </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        <b>R: </b> For data cleaning and data enrichment process
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>SQL:</b> For querying product, review, and sales data.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>Power BI: </b>For building interactive dashboards to visualize product performance, 
                                        customer segmentation, and sales trends.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"><b>Key Results:</b></p>
                                    </li>

                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                            <b>Top-Performing Products:</b> Identified bestsellers like the "Lip Sleeping Mask" and 
                                            "Crème de la Mer" moisturizer, which collectively contributed over 500K in sales.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>Promotional Impact:</b> Products exclusively sold through Sephora more than 50% and online contributed 47.66% of 
                                            the sales volume, highlighting the importance of these channels​.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>Customer Preferences:</b> Moisturizer, Treatment, and Cleansers  were the leading categories in sales, 
                                            with skincare products showing higher customer engagement 
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"><b>Conclusion & Recommendation:</b></p>
                                    </li>

                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"> <b>Conclusion: </b>
                                            Focusing on high-performing categories like moisturizers 
                                            and leveraging online and Sephora-exclusive channels can significantly increase revenue. 
                                        </li>
                                        <li className="projects-modal-info-list"> <b>RecommendationS: </b>
                                        Implement balanced multi-channel approach for high-performing products and 
                                        Develop targeted strategy for eye care and sunscreen categories.</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>For more information: </b> </p>
                                        <a href="https://github.com/Vincent3003" className="projects-modal-link"> Click here</a>
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