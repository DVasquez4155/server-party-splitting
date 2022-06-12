import React from "react";
import { Link } from "react-router-dom";

require('./index.css')

function Index(props) {
    return (
        <main>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
            <div className="container">
                <Link variant="outline-*" className="navbar-brand logo" to="/">Server Party Splitting</Link>
                <div id="navbarNav">
                <ul id="links" className="nav  ml-auto">
                    <Link variant="outline-*" className="nav-link" to="/">Home</Link>
                    {/* <Link variant="outline-*" className="nav-link" to="/">Testing</Link> */}
                </ul>
                </div>
            </div>
            </nav>
        </main>
    );
}

export default Index;