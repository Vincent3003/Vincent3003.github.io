import React from "react";
import "./Footer.css";
import { useLocation, NavLink } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/home";
    const isContactPage = location.pathname === "/home";

    return (
        <footer className={`footer ${isHomePage ? "home-page-footer" : isContactPage ? "contact-page-footer" : ""}`}>            
            <div className="footer-container container">
                <h2 className="footer-title">
                    <a href="/" className="footer-link">Chi (Alison) Dang</a>
                </h2>

                <ul className="footer-list">
                    <li>
                        <NavLink to="/about" className="footer-link">About Me</NavLink>
                    </li>

                    <li>
                        <NavLink to="/skills" className="footer-link">Skills</NavLink>
                    </li>

                    <li>
                        <NavLink to="/experience" className="footer-link">Experience</NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects" className="footer-link">Projects</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className="footer-link">Contact</NavLink>
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
                &#169; Copyright 2023 Chi Dang
            </span>
        </footer>
    )
}

export default Footer;