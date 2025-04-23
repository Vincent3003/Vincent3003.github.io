import React from "react";

const Software = () => {
    return (
        <div className="skills-content">
            <h2 className="skills-title">Tools & Platforms</h2>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="fa-regular fa-circle-check"></i>
                        
                        <div>
                            <h3 className="skills-name">Advanced</h3>
                            <span className="skills-level">MySQL, PostgreSQL, RStudio, Microsoft Excel</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i className="fa-regular fa-circle-check"></i>
                        
                        <div>
                            <h3 className="skills-name">Intermediate</h3>
                            <span className="skills-level">Denodo, QuickBooks</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i className="fa-regular fa-circle-check"></i>
                        
                        <div>
                            <h3 className="skills-name">Basic</h3>
                            <span className="skills-level">GitHub, Git, Figma, Jira, PowerBI, Tableau, TeamDynamix</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Software;