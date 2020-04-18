//==================================================
// Import needed files
//==================================================

import React from "react";
import "./style.css";

//==================================================
// Define component "Footer"
//==================================================

function Footer() {
    return (
        <div className="foot card-header mt-4 rounded gradient-border row">

            <div className="col-4 text-left">
                <a href="https://github.com/Bauter" target="_blank" rel="noopener noreferrer" className="btn btn-dark footer-link">Bauter</a>
            </div>

            <div className="col-4">
                <h5 className="text-center p-5 " id="footer-title">
                    Copyright &copy; 2020
                </h5>
            </div>
      
            <div className="col-4 text-right">
                <a href="https://bauter.github.io/Updated-portfolio/" target="_blank" rel="noopener noreferrer" className="btn btn-dark footer-link">Portfolio</a>
            </div>

        </div>
    );
}

export default Footer