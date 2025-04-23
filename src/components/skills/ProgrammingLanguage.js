import React from "react";

const Programming = () => {
    return (
        <div className="skills-content">
            <h2 className="skills-title">Programming Languages:</h2>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="fa-regular fa-circle-check"></i>
                        
                        <div>
                            <h3 className="skills-name">Advanced:</h3>
                            <span className="skills-level">Python, R, SQL</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i className="fa-regular fa-circle-check"></i>
                        
                        <div>
                            <h3 className="skills-name">Intermediate:</h3>
                            <span className="skills-level">HTML, CSS, SAS</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i className="fa-regular fa-circle-check"></i>
                        
                        <div>
                            <h3 className="skills-name">Basic:</h3>
                            <span className="skills-level">Java, JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programming;