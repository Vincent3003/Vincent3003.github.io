import React, {useState} from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    /*=============== Close Menu after selecting what you want ===============*/
    const closeMenu = () => {
        showMenu(false); // Close the menu by setting Toggle to false
    };

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    // const [activeNav, setActiveNav] = useState("#home");
    // const [theme, setTheme] = useState('light-theme');
    
    return (
        <React.Fragment>
            <header className="header">
                <nav className="nav container">
                    <a href="/home" className="nav-logo">Welcome to my page</a>

                    <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                            <ul className="nav-list grid">
                                {/* HOME
                                <li className="nav-item">
                                    <NavLink to="/home"
                                    onClick={closeMenu}
                                    className={({isActive}) => (isActive ? "nav-link active-link" : "nav-link")}>
                                        <i className="fa fa-house nav-icon"></i>
                                        Home</NavLink>
                                </li> */}

                                {/* ABOUT ME */}
                                <li className="nav-item">
                                    <NavLink to="/about" 
                                    onClick={closeMenu}
                                    // className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}
                                    className={({isActive}) => (isActive ? "nav-link active-link" : "nav-link")}>
                                        <i className="fa fa-user nav-icon"></i>
                                        About Me</NavLink>
                                </li>

                                {/* SKILLS */}
                                <li className="nav-item">
                                    <NavLink to="/skills"
                                    onClick={closeMenu}
                                    // className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}
                                    className={({isActive}) => (isActive ? "nav-link active-link" : "nav-link")}>
                                        <i className="fa fa-file nav-icon"></i>
                                        Skills</NavLink>
                                </li>

                                {/* EXPERIENCE */}
                                <li className="nav-item">
                                    <NavLink to="/experience"  
                                    onClick={closeMenu}
                                    className={({isActive}) => (isActive ? "nav-link active-link" : "nav-link")}>
                                        <i className="fa fa-briefcase nav-icon"></i>
                                        Experience</NavLink>
                                </li>

                                {/* PROJECTS */}
                                <li className="nav-item">
                                    <NavLink to="/projects"  
                                    onClick={closeMenu}
                                    className={({isActive}) => (isActive ? "nav-link active-link" : "nav-link")}>
                                        <i className="fa fa-folder nav-icon"></i>
                                        Projects</NavLink>
                                </li>

                                {/* CONTACT */}
                                <li className="nav-item">
                                    <NavLink to="/contact"  
                                    onClick={closeMenu}
                                    className={({isActive}) => (isActive ? "nav-link active-link" : "nav-link")}>
                                        <i className="fa fa-address-book nav-icon"></i>
                                        Contact</NavLink>
                                </li>
                            </ul>
                            
                            <i className="fa fa-xmark nav-close" onClick={() => showMenu(false)}></i>

                    </div>
                    
                    <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="fa fa-bars"></i>
                    </div>

                </nav>
            </header>
        </React.Fragment>
    )
}

export default Navbar;