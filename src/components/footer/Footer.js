import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/home";
    const isContactPage = location.pathname === "/home";

    return (
        <footer className={`footer ${isHomePage ? "home-page-footer" : isContactPage ? "contact-page-footer" : ""}`}>            
            <div className="footer-container container">
                <h2 className="footer-title">Chi Dang</h2>

                <ul className="footer-list">
                    <li>
                        <a href="/about" className="footer-link">About Me</a>
                    </li>

                    <li>
                        <a href="/skills" className="footer-link">Skills</a>
                    </li>

                    <li>
                        <a href="/experience" className="footer-link">Experience</a>
                    </li>

                    <li>
                        <a href="/projects" className="footer-link">Projects</a>
                    </li>

                    <li>
                        <a href="/contact" className="footer-link">Contact</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href=" https://www.linkedin.com/in/chidang0803/" className="footer-social-icon">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/Vincent3003" className="footer-social-icon" >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
            
            <span className="footer-copy">
                &#169; Copyright 2023 Chi Dang. All Rights Reserved
            </span>
        </footer>
    )
}

export default Footer;