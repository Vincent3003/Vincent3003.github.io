import React, { useState } from "react";
import "./Projects.css";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpeg";
import Project4 from "../../assets/project4.jpeg";


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
                            <img className="projects-img" src={Project1} alt="SKincare Project"></img>
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
                                <h3 className="projects-modal-title">Sales Data Analyst for The Glow Co.</h3>
                                <p className="projects-modal-description"> <b>Project Overview: </b>
                                The Glow Company's marketing tema wanted to analyze sales and customer data from 1970 to 1984 to 
                                uncover insights into product performance, customer preferences, and sales patterns. 
                                The project’s goal was to support informed decision-making in marketing and inventory management 
                                by identifying key factors influencing product success and customer engagement.
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
                                        Varied product performance across different categories.
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
                                        <li className="projects-modal-info-list"> <b>Recommendations: </b>
                                        Implement balanced multi-channel approach for high-performing products and 
                                        Develop targeted strategy for eye care and sunscreen categories.</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>For more information: </b> </p>
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
                            Predicting Layoff Patterns<br /> Based on Company <br/> Atributes
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(2)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 2 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                                <h3 className="projects-modal-title">Predicting Layoff Patterns Based on Company Atributes</h3>
                                <p className="projects-modal-description"><b>Project Overview: </b>
                                This project aims to explore and analyze layoff trends in companies across various industries, 
                                locations, and stages of growth using machine learning techniques. By leveraging models like 
                                decision trees, random forests, and linear regression, the project seeks to uncover patterns and 
                                factors associated with layoffs, providing insights into how different attributes impact workforce 
                                reductions.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"> <b>Problems:</b> </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Identifying the key factors associated with layoffs across different industries, locations,
                                        and growth stages.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Understanding which attributes (e.g., industry type, funding levels, or company location) 
                                        are most predictive of layoff trends.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Addressing challenges related to data quality, missing information, and inconsistencies in the dataset.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Task: </b></p>
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
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Method & Tools: </b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                            <b>Python: </b> for data cleaning, Exploratory Data Analysis (EDA), and Predictive Modeling.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Key Results:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                            <b>Meta </b> has the highest funds raised and the largest layoff count, both in the USA 
                                            and globally.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>Quarter 1 of 2023</b> saw the highest number of layoffs worldwide and within the USA.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>The Retail, Consumer, and Other industries </b>have the highest layoff counts, 
                                            both globally and in the USA.
                                        </li>
                                        <li className="projects-modal-info-list">
                                            <b>The United States </b>leads globally in layoff numbers, with San Francisco showing 
                                            the highest concentration among U.S. cities, likely due to its dense technology sector 
                                            and startup ecosystem.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Conclusion & Recommendations:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        <b>Conclusion: </b> The decision tree model demonstrated the highest predictive performance, 
                                        with strong R² scores on both training and test data, indicating its capability to effectively 
                                        capture patterns in layoff data. However, Linear regression struggled with the complex, 
                                        non-linear nature of the data, as shown by its very low R² scores and high mean squared error (MSE).
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>Recommendations:</b> Random forest model requires additional tuning to address overfitting, 
                                        as evidenced by the disparity between training (R² = 0.850) and test (R² = 0.238) scores.
                                        Cross-validation should be applied across all models to ensure robust performance and 
                                        mitigate overfitting.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>For more information: </b> </p>
                                        <a href="https://github.com/Vincent3003/Analyze-Layoff-Data" className="projects-modal-link"> Click here</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="projects-content">
                        <div className="projects-icon">
                            <img className="projects-img" alt="" src={Project3}></img>
                            <h3 className="projects-title">
                            Personalized Skincare<br />Recommendations Based<br /> on Demographic Analysis
                            </h3>
                        </div>

                        <span onClick={() => toggleTab(3)} className="projects-button">
                            View More
                            <i className="fa-solid fa-arrow-right projects-button-icon"></i>
                        </span>

                        <div className={toggleState === 3 ? "projects-modal active-modal" : "projects-modal"}>
                            <div className="projects-modal-content">
                                <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark projects-modal-close"></i>

                                <h3 className="projects-modal-title">Personalized Skincare Recommendations Based on Demographic Analysis</h3>
                                <p className="projects-modal-description"><b>Project Overview: </b> 
                                This project aims to develop personalized skincare recommendations for high-income individuals by 
                                analyzing demographic and employment factors. Using the Adult Income Census dataset from Kaggle, 
                                my team focused on identifying characteristics associated with high-income status to tailor product 
                                offerings better and improve The Glow Company’s market reach.
                                </p>

                                <ul className="projects-modal-services grid">
                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"> <b>Problems:</b> </p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Lack of understanding of which demographic and employment factors are most strongly associated with high-income individuals.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Difficulty in identifying distinct segments within high-income customers to improve personalized marketing.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Limited insights into how income-related variables can enhance The Glow Company’s skincare recommender system.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Task: </b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        Analyze the Adult Income Census dataset to identify trends and correlations between 
                                        demographic/employment factors and high-income status.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Segment customers based on high-income factors for targeted skincare product recommendations.
                                        </li>
                                        <li className="projects-modal-info-list">
                                        Develop predictive models to quantify the influence of critical variables on income status 
                                        and optimize recommendations accordingly.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Method & Tools: </b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list">
                                        <b>R: </b> For data cleaning, formatting, handling missing values, visualizations and 
                                        statistical analysis
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>SAS:</b> For statistical analysis
                                        </li>
                                        <li className="projects-modal-info-list">
                                        <b>Algorithms:</b> Decision Trees, Random Forests
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Key Results:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"> <b>Influential Factors: </b>
                                        Identification of critical demographic and employment factors affecting high-income status, 
                                        visualized through model importance plots.
                                        </li>
                                        <li className="projects-modal-info-list"> <b>Quantitative Insights: </b>
                                        Interpretation of model coefficients to quantify the influence of factors like age, 
                                        education, and occupation on income, providing actionable insights for targeted marketing.
                                        </li>
                                        <li className="projects-modal-info-list"> <b>Customer Segmentation: </b>
                                        Clear segmentation of high-income demographics, enabling The Glow Company to focus on 
                                        specific customer segments for more effective marketing strategies.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service">
                                    <i className="fa fa-check-circle projects-modal-icon"></i>
                                    <p className="projects-modal-info"><b>Conclusion & Recommendations:</b></p>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"> <b>Conclusion: </b>
                                        By understanding the characteristics of high-income individuals, The Glow Company can 
                                        better serve this segment with tailored product recommendations. The predictive models 
                                        highlight the most influential factors that correlate with high-income status.
                                        </li>
                                        <li className="projects-modal-info-list"> <b>Recommendations: </b>
                                        Develop skincare products and recommendations specifically for high-income individuals to 
                                        drive market penetration and increase revenue and Incorporate influential demographic 
                                        and employment variables into the recommendation engine to improve personalized suggestions, 
                                        enhancing customer satisfaction and engagement.
                                        </li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>For more information: </b> </p>
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
                                        <li className="projects-modal-info-list"><b>UX & UI Design:</b> Chi (Alison) Dang</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Crochet with Love: </b> </p>
                                        <a href="https://github.com/Vincent3003/crochet-with-love" className="projects-modal-link"> Click here</a>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"><b>UI Design:</b> Mia Do</li>
                                        <li className="projects-modal-info-list"><b>UX Design:</b> Chi (Alison) Dang</li>
                                    </ul>

                                    <li className="projects-modal-service link">
                                        <i className="fa fa-check-circle projects-modal-icon"></i>
                                        <p className="projects-modal-info"> <b>Panda News: </b> </p>
                                        <a href="https://github.com/Vincent3003/panda-news" className="projects-modal-link"> Click here</a>
                                    </li>
                                    <ul className="projects-modal-info list">
                                        <li className="projects-modal-info-list"><b>UI Design:</b> Mia Do</li>
                                        <li className="projects-modal-info-list"><b>UX Design:</b> Chi (Alison) Dang</li>
                                    </ul>
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