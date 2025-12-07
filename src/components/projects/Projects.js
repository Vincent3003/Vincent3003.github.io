import React, { useState, useEffect } from "react";
import "./Projects.css";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpeg";
import Project4 from "../../assets/project4.jpeg";
import Project5 from "../../assets/project5.jpeg";
import Project10 from "../../assets/sudoku.jpg";

const Projects = () => {
    const [activeTab, setActiveTab] = useState(1); 
    const [openModal, setOpenModal] = useState(null); // null or 3/4/6/7/8/10...

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                setOpenModal(null);
            }
        };

        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, []);
    
    return (
       <React.Fragment>
           <section className="projects section" id="projects">
                <h1 className="section-title">Projects</h1>
                <span className="section-subtitle">My academic/personal projects</span>

                <div className="project-container container">
                {/* Switch Tabs part */}
                <div className="projects-tabs">
                    <div className={activeTab === 1 ? "project-button project-active button--flex" : "project-button button--flex"}
                                onClick={() => { setActiveTab(1); setOpenModal(null); }}>
                        <i className="fa-solid fa-user-group project-icon"></i> Data Analyst & Data Science
                    </div>

                    <div className={activeTab === 2 ? "project-button project-active button--flex" : "project-button button--flex"}
                            onClick={() => { setActiveTab(2); setOpenModal(null);}}>
                        <i className="fa-solid fa-briefcase project-icon"></i> Software Engineering
                    </div>
                </div>

                {/* Data Analyst & Data Science tabs */}
                <div className="projects-sections">
                    <div className={activeTab === 1 ? "project-content project-content-active" : "project-content"}>
                        <div className="projects-container container grid">
                            <div className="projects-content">
                                <div className="projects-icon">
                                    <img className="projects-img" src={Project1} alt="Skincare Project"></img>
                                    <h3 onClick={() => setOpenModal(3)} className="projects-title">
                                    Sales Analyst for<br /> The Glow Company
                                    </h3>
                                </div>

                                <span onClick={() => setOpenModal(3)} className="projects-button">
                                    View More
                                    <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                                </span>

                                <div className={openModal === 3 ? "projects-modal active-modal" : "projects-modal"}>
                                    <div className="projects-modal-content">
                                        <i onClick={() => setOpenModal(null)} className="fa-solid fa-xmark projects-modal-close"></i>
                                        <h2 className="projects-modal-title">Sales Data Analyst for The Glow Co.</h2>
                                        <h4 className="projects-modal-subtitle">Data Analytics project</h4>
                                        <p className="projects-modal-description"> <b>🧠 Project Overview: </b> 
                                        Analyzed skincare sales data to identify revenue drivers, evaluate 
                                        promotional effectiveness, and understand customer preferences.
                                        </p>

                                        <ul className="projects-modal-services grid">
                                            <li className="projects-modal-service">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🛠️ Method & Tools: </b> </p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                    <b>R: </b> Data cleaning, preprocessing, and enrichment
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    <b>SQL:</b> Product, sales, and customer review querying.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    <b>Power BI: </b>Interactive dashboards for customer segmentation and trend analysis.
                                                    </li>
                                                </ul>
                                            </li>
                                            

                                            <li className="projects-modal-service">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"><b>💰 Key Results:</b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                        🏆 Identified top 2 products driving $500K+ revenue
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        📢 Found Sephora-exclusive products = 50% of sales
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        📈 Discovered online channels drive 47.66% of volume
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        👥 Recommended focus on high-performing skincare segments
                                                    </li>
                                                </ul>
                                            </li>

                                            
                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🔗 View Full Report: </b> </p>
                                                <a href="https://github.com/Vincent3003/Sales_Analyst" className="projects-modal-link"> Click here</a>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>

                            <div className="projects-content">
                                <div className="projects-icon">
                                    <img className="projects-img" src={Project2} alt="Unemployment Project"></img>
                                    <h3 onClick={() => setOpenModal(4)} className="projects-title">
                                    Predicting Layoffs Using Machine Learning on Company Attributes
                                    </h3>
                                </div>

                                <span onClick={() => setOpenModal(4)} className="projects-button">
                                    View More
                                    <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                                </span>

                                <div className={openModal === 4 ? "projects-modal active-modal" : "projects-modal"}>
                                    <div className="projects-modal-content">
                                        <i onClick={() => setOpenModal(null)} className="fa-solid fa-xmark projects-modal-close"></i>
                                        <h2 className="projects-modal-title">Predicting Layoffs Using Machine Learning on <br/> Company Attributes</h2>
                                        <h4 className="projects-modal-subtitle">Data Science Project</h4>
                                        <p className="projects-modal-description"><b>🧠 Project Overview: </b>
                                        Predicted layoff trends across industries using machine learning 
                                        to identify key factors driving workforce reductions..
                                        </p>

                                        <ul className="projects-modal-services grid">
                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>🛠️ Method & Tools: </b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                        <b>Python: </b>Data cleaning, EDA, and predictive modeling.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>ML Models: </b>Decision Tree, Random Forest, Linear Regression.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>EDA: </b>Identified trends by industry, quarter, and geography.
                                                    </li>
                                                </ul>
                                            </li>
                                            

                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>🔍 Key Findings:</b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                    Meta led in total layoffs (global + USA)
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    Q1 2023 = highest layoff volume                                               
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    Retail, Consumer industries most affected
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    San Francisco had highest city-level concentration
                                                    </li>
                                                </ul>
                                            </li>
                                            

                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>📌 Conclusion & Strategic Recommendations:</b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                    <b>✅ Conclusion: </b> Best Model is Decision tree (strong R² on train/test, best overall performance).<b> Linear regression </b> underperformed due to non-linear data structure (low R², high MSE).
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    <b>🔁 Recommendations:</b> Tune Random Forest to reduce overfitting (train R² = 0.850 vs test R² = 0.238); 
                                                    apply cross-validation across all models for robustness.
                                                    </li>
                                                </ul>
                                            </li>
                                            

                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🔗 View Full Report: </b> </p>
                                                <a href="https://github.com/Vincent3003/Analyze-Layoff-Data" className="projects-modal-link"> Click here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="projects-content">
                                <div className="projects-icon">
                                    <img className="projects-img" alt="" src={Project3}></img>
                                    <h3 onClick={() => setOpenModal(5)} className="projects-title">Personalized Skincare Strategies for High-Income Consumers</h3>
                                </div>

                                <span onClick={() => setOpenModal(5)} className="projects-button">
                                    View More
                                    <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                                </span>

                                <div className={openModal === 5 ? "projects-modal active-modal" : "projects-modal"}>
                                    <div className="projects-modal-content">
                                        <i onClick={() => setOpenModal(null)} className="fa-solid fa-xmark projects-modal-close"></i>
                                        <h3 className="projects-modal-title">Personalized Skincare Strategies for High-Income Consumers</h3>
                                        <h4 className="projects-modal-subtitle">Data Science Project</h4>
                                        <p className="projects-modal-description"><b>🧠 Project Overview: </b> 
                                        Analyzed census data to identify high-income demographics and 
                                        create personalized skincare marketing strategies.
                                        </p>

                                        <ul className="projects-modal-services grid">
                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>🛠️ Method & Tools: </b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                    <b>R: </b> Data cleaning, visualization, handling missing values.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    <b>SAS:</b> Statistical analysis
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                    <b>Algorithms:</b> Decision Trees, Random Forests
                                                    </li>
                                                </ul>
                                            </li>
                                            

                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>🔍 Key Findings:</b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list"> 
                                                    Age, education, occupation = strongest income predictors
                                                    </li>
                                                    <li className="projects-modal-info-list"> 
                                                    Created clear high-income customer profiles
                                                    </li>
                                                    <li className="projects-modal-info-list"> 
                                                    Quantified variable impacts for targeted marketing
                                                    </li>
                                                    <li className="projects-modal-info-list"> 
                                                    Enabled personalized skincare recommendations
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🔗 View Full Report: </b> </p>
                                                <a href="https://github.com/Vincent3003/STAT172_FinalProject" className="projects-modal-link"> Click here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="projects-content">
                                <div className="projects-icon">
                                    <img className="projects-img" src={Project5} alt="Diamond Project"></img>
                                    <h3 onClick={() => setOpenModal(6)} className="projects-title">
                                    Diamond Quality vs. Price Tradeoff: Finding the Best Value Combinations
                                    </h3>
                                </div>

                                <span onClick={() => setOpenModal(6)} className="projects-button">
                                    View More
                                    <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                                </span>

                                <div className={openModal === 6 ? "projects-modal active-modal" : "projects-modal"}>
                                    <div className="projects-modal-content">
                                        <i onClick={() => setOpenModal(null)} className="fa-solid fa-xmark projects-modal-close"></i>
                                        <h2 className="projects-modal-title">Diamond Quality vs. Price Tradeoff: Finding the Best Value Combinations</h2>
                                        <h4 className="projects-modal-subtitle">Data Analyst Project</h4>
                                        <p className="projects-modal-description"><b>🧠 Project Overview: </b>
                                        Help diamond buyers find the best value by analyzing how cut, color, 
                                        and clarity affect price—avoiding overpaying for minimal quality gains.
                                        </p>

                                        <ul className="projects-modal-services grid">
                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>🛠️ Method & Tools: </b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                        <b>✅ Data Cleaning & Preparation: </b>Removed duplicates, checked for nulls, created price_per_carat column.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>📊 Exploratory Data Analysis: </b>Density plots and histograms for price/carat patterns
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>🔥 Heatmaps: </b>Visualized mean price/carat across combinations (e.g., clarity × color, cut × clarity)
                                                    </li>
                                                </ul>
                                            </li>

                                             <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>🔍 Key Findings:</b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list"> 
                                                    "Ideal" cut outperforms "Premium" in value
                                                    </li>
                                                    <li className="projects-modal-info-list"> 
                                                    VVS1 → VS2 or E → G = 30% savings, minimal visible difference
                                                    </li>
                                                    <li className="projects-modal-info-list"> 
                                                    **Best combo:** Ideal cut + E color + SI1/VS2 clarity
                                                    </li>
                                                    <li className="projects-modal-info-list"> 
                                                    Avoid D color and IF clarity unless for investment
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="projects-modal-service">
                                            {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                            <p className="projects-modal-info"><b>📈 Impact & Insights:</b></p>
                                                <ul className="projects-modal-info list">
                                                    <li className="projects-modal-info-list">
                                                        <b>💎 Best Value Combo: </b>cut: "Ideal," color: E, clarity: SI1 or VS2.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>🔍 Overrated Grades:</b> saw the highest global and U.S. layoff volume.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>🎯 Premium Cut Insight: </b> Ideal cut often outperforms Premium in value and sparkle.
                                                    </li>
                                                    <li className="projects-modal-info-list">
                                                        <b>💸 Smart Trade-Off: </b>Going from VVS1 to VS2 or E to G can reduce costs by up to 30% with minimal visible difference.
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🔗 View Full Report: </b> </p>
                                                <a href="https://github.com/Vincent3003/Diamond-Quality-vs.-Price-Tradeoff" className="projects-modal-link"> Click here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Software Engineering tabs */}
                <div className="projects-sections">
                    <div className={activeTab === 2 ? "project-content project-content-active" : "project-content"}>
                        <div className="projects-container container grid">
                            <div className="projects-content">
                                <div className="projects-icon">
                                    <img className="projects-img" src={Project10} alt="Sudoku Solver Project"></img>
                                    <h3 onClick={() => setOpenModal(10)} className="projects-title">
                                    Sudoku Solver
                                    </h3>
                                </div>

                                <span onClick={() => setOpenModal(10)} className="projects-button">
                                    View More
                                    <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                                </span>

                                <div className={openModal === 10 ? "projects-modal active-modal" : "projects-modal"}>
                                    <div className="projects-modal-content">
                                        <i onClick={() => setOpenModal(null)} className="fa-solid fa-xmark projects-modal-close"></i>
                                        <h2 className="projects-modal-title">Sudoku Solver</h2>
                                        <h4 className="projects-modal-subtitle">Coding project</h4>
                                        <p className="projects-modal-description"> <b>🧠 Project Overview: </b> 
        
                                        </p>
                                    </div> 
                                </div>
                            </div>

                            <div className="projects-content">
                                <div className="projects-icon">
                                    <img className="projects-img" alt="" src={Project4}></img>
                                    <h3 onClick={() => setOpenModal(7)} className="projects-title">
                                    Front-end Web<br /> Development
                                    </h3>
                                </div>

                                <span onClick={() => setOpenModal(7)} className="projects-button">
                                    View More
                                    <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                                </span>

                                <div className={openModal === 7 ? "projects-modal active-modal" : "projects-modal"}>
                                    <div className="projects-modal-content">
                                        <i onClick={() => setOpenModal(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                                        <h3 className="projects-modal-title">Front-end Web Development</h3>
                                        <p className="projects-modal-description"><b>🧠 Project Overview: </b> 
                                        This portfolio demonstrates front-end web development skills through multiple website projects, 
                                        featuring responsive design and interactive user interfaces created with HTML and CSS. 
                                        These projects highlight fundamental web development principles, including layout structure, 
                                        styling, and user experience design
                                        </p>

                                        <ul className="projects-modal-services grid">
                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🤖 Chatbots: Meaning, Functionality, and Industry Applications: </b> </p>
                                                <a href="https://github.com/Vincent3003/IS145-Final-project" className="projects-modal-link"> Click here</a>
                                            </li>
                                            <ul className="projects-modal-info list">
                                                <li className="projects-modal-info-list"><b>👩‍💻 Front-End Developer:</b> Chi (Alison) Dang</li>
                                            </ul>

                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"> <b>🧶 Crochet with Love: </b> </p>
                                                <a href="https://github.com/Vincent3003/crochet-with-love" className="projects-modal-link"> Click here</a>
                                            </li>
                                            <ul className="projects-modal-info list">
                                                <li className="projects-modal-info-list"><b>🎨 UI Designer:</b> Mia Do</li>
                                                <li className="projects-modal-info-list"><b>👩‍💻 Front-End Developer: </b>Chi (Alison) Dang</li>
                                            </ul>

                                            <li className="projects-modal-service link">
                                                {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                                <p className="projects-modal-info"><b>📰 Panda News: </b> </p>
                                                <a href="https://github.com/Vincent3003/panda-news" className="projects-modal-link"> Click here</a>
                                            </li>
                                            <ul className="projects-modal-info list">
                                                <li className="projects-modal-info-list"><b>🎨 UI Designer:</b> Mia Do</li>
                                                <li className="projects-modal-info-list"><b>👩‍💻 Front-End Developer:</b> Chi (Alison) Dang</li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
       </React.Fragment>
    )
}

export default Projects;