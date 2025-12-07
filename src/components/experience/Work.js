import React, { useState } from "react";
import "./Work.css";

const Experience = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
        <section className="experience section" id="experience">
            <h1 className="section-title">Experience</h1>
            <span className="section-subtitle">Most recent experience</span>

            <div className="experience-container container">
                {/* Switch Tabs part */}
                <div className="experience-tabs">
                    <div className={toggleState === 1 ? "experience-button experience-active button--flex" : "experience-button button--flex"}
                                onClick={() => toggleTab(1)}>
                        <i className="fa-solid fa-user-group experience-icon"></i> Leadership & Community Engagement
                    </div>

                    <div className={toggleState === 2 ? "experience-button experience-active button--flex" : "experience-button button--flex"}
                            onClick={() => toggleTab(2)}>
                        <i className="fa-solid fa-briefcase experience-icon"></i>Work Experience
                    </div>
                </div>

                {/* Leadership & Community Engagement tabs */}
                <div className="experience-sections">
                    <div className={toggleState === 1 ? "experience-content experience-content-active" : "experience-content"}>
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Peer Research Mentor and Access Services Student Assistant</h3>
                                <span className="experience-subtitle">Drake University</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 06/2022 - 12/2023
                                </div>
                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Des Moines, IA
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div></div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>

                            <div>
                                <h3 className="experience-title">Crew Member</h3>
                                <span className="experience-subtitle">Drake University</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 03/2022 - 06/2022
                                </div>
                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Des Moines, IA
                                </div>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Secretary</h3>
                                <span className="experience-subtitle">Drake Association of Technology Advancement (DATA) Club</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 09/2021 - 12/2022
                                </div>
                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Des Moines, IA
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience tabs */}
                <div className="experience-sections">
                    <div className={toggleState === 2 ? "experience-content experience-content-active" : "experience-content"}>
                        <div className="experience-data">
                            <div></div>
                            
                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                            
                            <div>
                                <h3 className="experience-title">Business Operations Analyst</h3>
                                <span className="experience-subtitle">Lake Bellevue Dental Care, Inc.</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 07/2025 - Present
                                </div>
                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Bellevue, WA
                                </div>
                            </div>
                        </div>
                        
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Sales Data Analyst</h3>
                                <span className="experience-subtitle">Il Mulino Di Valenzano Bakery</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 05/2024 - 07/2025
                                </div>
                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Franklin Park, IL
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div></div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>

                            <div>
                                <h3 className="experience-title">Intern – Strategic Analyst</h3>
                                <span className="experience-subtitle">EMC Insurance Companies</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 05/2023 - 08/2023
                                </div>

                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Des Moines, IA
                                </div>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Application Systems Analyst Student Technician</h3>
                                <span className="experience-subtitle">Drake University</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 06/2022 - 09/2023
                                </div>

                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Des Moines, IA
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div></div>
                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                            
                            <div>
                                <h3 className="experience-title">Front-desk Student Technician</h3>
                                <span className="experience-subtitle">Drake University</span>
                                <div className="experience-calender">
                                    <i className="fa-solid fa-calendar-days"></i> 03/2021 - 09/2023
                                </div>

                                <div className="experience-location">
                                    <i className="fa-solid fa-location-dot"></i> Des Moines, IA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;