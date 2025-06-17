import React, { useState } from "react";
import "./Projects.css";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpeg";
import Project4 from "../../assets/project4.jpeg";
import Project5 from "../../assets/project5.jpeg";


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
                        <div className="projects-icon">
                            <img className="projects-img" src={Project1} alt="Skincare Project"></img>
                            <h3 className="projects-title">
                            Sales Analyst for<br /> The Glow Company
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(1)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 1 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>
                                <h2 className="projects-modal-title">Sales Data Analyst for The Glow Co.</h2>
                                <h4 className="projects-modal-subtitle">Data Analytics project</h4>
                                <p className="projects-modal-description"> <b>🧠 Project Overview: </b> 
                                Partnered with The Glow Co.’s marketing team to analyze sales and customer data to uncover key insights 
                                into product performance, promotional effectiveness, and customer engagement. The goal was to drive
                                data-informed decisions across marketing and inventory strategy.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                        {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                        <p className="projects-modal-info"> <b>⚠️ Key challenges: </b>
                                        </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Limited visibility into top-performing products and their revenue contributions.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Difficulty evaluating promotional strategies (e.g., Sephora-exclusive, online-only).
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Inconsistent performance across product categories.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🎯 Objectives: </b></p>
                                    </li>
                                    
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Identify high-performing products and revenue drivers.                                        
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Assess promotional channel effectiveness.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Understand customer preferences by category to inform future campaigns.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                        {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                        <p className="projects-modal-info"> <b>🛠️ Method & Tools: </b> </p>
                                    </li>
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

                                    <li className="projects-modal-service">
                                        {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                        <p className="projects-modal-info"><b>📈 Impact & Insights:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                            <b>🏆 Bestsellers Identified:</b> Highlighted top-performing products like “Lip Sleeping Mask” and “Crème de la Mer,” which together drove over $500K in revenue.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>📢 Promotional Performance:</b> Sephora-exclusive products contributed over 50% of sales; online-only products drove 47.66% of total volume, demonstrating the significant influence of these distribution channels​.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>👥 Customer Trends:</b> Moisturizers, treatments, and cleansers were the most engaging categories, with skincare products showing the strongest customer retention.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                        {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                        <p className="projects-modal-info"><b>📌 Conclusion & Strategic Recommendations:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"> <b>✅ Conclusion: </b>
                                        Doubling down on high-performing skincare segments and prioritizing Sephora-exclusive and online sales channels can meaningfully boost engagement and revenue. 
                                        </li>
                                        <li className="projects-modal-info-list"> <b>🔁 Recommendations: </b>
                                        Implement a balanced multi-channel strategy to optimize product performance, and develop tailored campaigns for underperforming segments like eye care and sunscree.</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                        <p className="projects-modal-info"> <b>🔗 View Full Repor: </b> </p>
                                        <a href="https://github.com/Vincent3003/Sales_Analyst" className="projects-modal-link"> Click here</a>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>

                    <div className="projects-content">
                        <div className="projects-icon">
                            <img className="projects-img" src={Project2} alt="Unemployment Project"></img>
                            <h3 className="projects-title">
                            Predicting Layoffs Using Machine Learning on Company Attributes
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(2)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 2 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>
                                <h2 className="projects-modal-title">Predicting Layoffs Using Machine Learning on <br/> Company Attributes</h2>
                                <h4 className="projects-modal-subtitle">Data Science Project</h4>
                                <p className="projects-modal-description"><b>🧠 Project Overview: </b>
                                Explored and modeled layoff trends across industries, locations, and company stages using machine learning. 
                                Applied decision trees, random forests, and linear regression to uncover key predictors of layoffs and 
                                provide insights into workforce reduction patterns.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"> <b>⚠️ Key challenges:</b> </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Identified top factors driving layoffs across industries and growth stages.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Analyzed impact of attributes like company location, funding levels, and industry type.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Resolved issues related to missing values, data inconsistencies, and quality.</li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🎯 Objectives: </b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Clean and preprocess the layoff data to ensure accuracy and consistency.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Conduct exploratory data analysis (EDA) to identify initial patterns and insights in layoff trends.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Develop predictive models using machine learning techniques to determine key factors affecting 
                                        layoffs and to predict layoff trends based on company attributes.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🛠️ Method & Tools: </b></p>
                                    </li>
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

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>📈 Impact & Insights:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                            <b>Meta </b>led in total layoffs and funding raised (globally and in the USA).
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>Q1 2023</b> saw the highest global and U.S. layoff volume.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>Retail, Consumer, and Other Industries </b>had the highest global layoff counts.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>U.S. </b>lled in total layoffs; <b>San Francisco </b>showed the highest city-level concentration.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>📌 Conclusion & Strategic Recommendations:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        <b>✅ Conclusion: </b> Best Model is Decision tree (strong R² on train/test, best overall performance).<b> Linear regression </b> underperformed due to non-linear data structure (low R², high MSE).
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>🔁 Recommendations:</b> Tune Random Forest to reduce overfitting (train R² = 0.850 vs test R² = 0.238); 
                                        apply cross-validation across all models for robustness.
                                        </li>
                                    </ul>

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
                            <h3 className="projects-title">Personalized Skincare Strategies for High-Income Consumers</h3>
                        </div>

                        <span onClick={() => toggleTab(3)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 3 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>
                                <h3 className="projects-modal-title">Personalized Skincare Strategies for High-Income Consumers</h3>
                                <h4 className="projects-modal-subtitle">Data Science Project</h4>
                                <p className="projects-modal-description"><b>🧠 Project Overview: </b> 
                                This project uses the Adult Income Census dataset to identify key demographic and employment factors 
                                associated with high-income individuals. We applied machine learning models to develop personalized 
                                skincare recommendations, enhancing The Glow Company’s market reach and customer engagement.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"> <b>⚠️ Key challenges:</b> </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Limited understanding of which demographic/employment traits correlate with high-income status.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Difficulty in identifying distinct segments within high-income customers to improve personalized marketing.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Inconsistent personalization in The Glow Company’s recommendation system.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🎯 Objectives: </b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Identify high-impact demographic and employment attributes using census data.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Segment high-income individuals for personalized skincare targeting.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Develop predictive models to optimize marketing and recommendation strategies.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🛠️ Method & Tools: </b></p>
                                    </li>
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

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>📈 Impact & Insights:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"> 
                                            <b>Influential Factors: </b>Age, education, and occupation strongly linked to high-income status.
                                        </li>
                                        <li className="projects-modal-info-list"> <b>Quantitative Insights: </b>
                                        Model coefficients quantified variable impacts for targeting.
                                        </li>
                                        <li className="projects-modal-info-list"> <b>Customer Segmentation: </b>
                                        Clear high-income profiles created for product recommendation strategy.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>📌 Conclusion & Strategic Recommendations:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                            <b>✅ Conclusion: </b>The predictive models provided actionable insights into high-income 
                                            demographics, enabling tailored skincare product strategies.                                        </li>
                                        <li className="projects-modal-info-list"> 
                                            <b>🔁 Recommendations: </b>
                                            <li className="projects-modal-info-sublist">Focus on top-performing segments for customized skincare offerings.</li>
                                            <li className="projects-modal-info-sublist">Integrate demographic/employment variables into recommendation engines.</li>
                                            <li className="projects-modal-info-sublist">Leverage segmentation insights to increase revenue and satisfaction.</li>
                                        </li>
                                    </ul>

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
                            <img className="projects-img" alt="" src={Project4}></img>
                            <h3 className="projects-title">
                            Front-end Web<br /> Development
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(4)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 4 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                                <h3 className="projects-modal-title">Front-end Web Development</h3>
                                <p className="projects-modal-description"><b>Project Overview: </b> 
                                This portfolio demonstrates front-end web development skills through multiple website projects, 
                                featuring responsive design and interactive user interfaces created with HTML and CSS. 
                                These projects highlight fundamental web development principles, including layout structure, 
                                styling, and user experience design
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Chatbots: Meaning, Functionality, and Industry Applications: </b> </p>
                                        <a href="https://github.com/Vincent3003/IS145-Final-project" className="projects-modal-link"> Click here</a>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"><b>Front-End Developer:</b> Chi (Alison) Dang</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Crochet with Love: </b> </p>
                                        <a href="https://github.com/Vincent3003/crochet-with-love" className="projects-modal-link"> Click here</a>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"><b>UI Designer:</b> Mia Do</li>
                                        <li className="projects-modal-info-list"><b>Front-End Developer:</b> Chi (Alison) Dang</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Panda News: </b> </p>
                                        <a href="https://github.com/Vincent3003/panda-news" className="projects-modal-link"> Click here</a>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"><b>UI Designer:</b> Mia Do</li>
                                        <li className="projects-modal-info-list"><b>Front-End Developer:</b> Chi (Alison) Dang</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="projects-content">
                        <div className="projects-icon">
                            <img className="projects-img" src={Project5} alt="Diamond Project"></img>
                            <h3 className="projects-title">
                            Diamond Quality vs. Price Tradeoff: Finding the Best Value Combinations
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(5)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 5 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>
                                <h2 className="projects-modal-title">Diamond Quality vs. Price Tradeoff: Finding the Best Value Combinations</h2>
                                <h4 className="projects-modal-subtitle">Data Analyst Project</h4>
                                <p className="projects-modal-description"><b>🧠 Project Overview: </b>
                                This project investigates the relationship between diamond quality attributes—namely cut, color, and 
                                clarity—and the price per carat, aimed at guiding first-time or uninformed diamond buyers in making smart, 
                                budget-conscious decisions. Using data visualization and analytical techniques, we help identify combinations 
                                that deliver optimal visual quality for cost, enabling data-backed purchases rather than brand-driven decisions.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"> <b>⚠️ Key challenges:</b> </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        <b>Pricing complexity: </b>Diamond pricing is non-linear and influenced by multiple overlapping quality dimensions.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>Perceived vs. actual value: </b>Higher price does not always equate to a perceptible increase in quality.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>Consumer knowledge gap: </b>Many buyers lack understanding of how cut, clarity, and color interact to influence price.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>Feature overlap: </b>Similar combinations (e.g., VS1 vs. VS2) can behave differently in pricing due to brand or market factors.

                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🎯 Objectives: </b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Quantify how each quality attribute (cut, color, clarity) contributes to price per carat. 
                                         </li>
                                        <li className="projects-modal-info-list">
                                        Identify value-for-money combinations of quality attributes that offer near-identical visual quality at lower prices.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Provide evidence-based recommendations for consumers to avoid overpaying for minimal gains in quality.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>🛠️ Method & Tools: </b></p>
                                    </li>
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

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>📈 Impact & Insights:</b></p>
                                    </li>
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

                                    <li className="projects-modal-service">
                                    {/* <i className="fa fa-check-circle projects-modal-icon"></i> */}
                                    <p className="projects-modal-info"><b>📌 Conclusion & Strategic Recommendations:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        🧠 Educate consumers on the diminishing returns of high-end grades: encourage focusing on balanced combinations rather than chasing perfection.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        💰 Avoid D color and IF clarity unless resale or investment is the goal.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        📊 Encourage Ideal Cut as the most cost-effective cut with maximum brilliance.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        🛍️ "Good Enough" Strategy: VS2 clarity, E or F color, and Ideal cut offer outstanding aesthetics for a fair price.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        🔮 Future addition: Develop a recommendation tool for diamond shoppers to filter optimal combinations based on budget and visual preferences.                                        </li>
                                    </ul>

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
           </section>
       </React.Fragment>
    )
}

export default Projects;