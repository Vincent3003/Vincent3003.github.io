import React from "react";
import NavPage from "./NavPage";
import Navbar from "./Navbar";

const MainNav = () => {
    return (
        <React.Fragment>
            <section>
                <Navbar />
                <NavPage />
            </section>
        </React.Fragment>
    )
}

export default MainNav;