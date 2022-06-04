import React from "react";
import { Link } from "react-router-dom";

require('./index.css')

function Index(props) {
    return (
        <main>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
            <div className="container">
                <Link variant="outline-*" className="navbar-brand logo" to="/">Training</Link>
                <div id="navbarNav">
                <ul id="links" className="nav  ml-auto">
                    <Link variant="outline-*" className="nav-link" to="/">Home</Link>
                    <a variant="outline-*" className="nav-link" href="https://dvasquez4155.github.io/Closing-Report/">Closing Report</a>
                    <a variant="outline-*" className="nav-link" href="https://dvasquez4155.github.io/tfm-training/">Training</a>
                    <Link variant="outline-*" className="nav-link" to="/">Server Party Splitting</Link>
                    {/* <Link variant="outline-*" className="nav-link" to="/">Testing</Link> */}
                </ul>
                </div>
            </div>
            </nav>
        </main>
    );
}

export default Index;