import React from "react";

const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <i className="fa fa-briefcase about-icon"></i>
                <h3 className="about-title">Experience</h3>
                <ul className="bullet-list">
                    <li className="about-subtitle">2+ Years Working at Drake University IT office</li> <br/>
                    <li className="about-subtitle">Former Strategic Analyst Intern at EMC Insurance Companies</li>
                </ul>
            </div>

            <div className="about-box">
                <i className="fa fa-school about-icon"></i> 
                <h3 className="about-title">Education</h3>
                <ul className="bullet-list">
                    <li className="about-subtitle">Bachelor of Science in Computer Science and Data Analytics at Drake University</li> <br/>
                    <li className="about-subtitle">Presidential Scholarship <br />and International Student Grant Scholarship</li>
                </ul>
            </div>
        </div>
    )
}

export default Info;