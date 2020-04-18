//==================================================
// Import needed files
//==================================================

import React from "react";
import "./style.css";

//==================================================
// Define component "Jumbotron"
//==================================================

function Jumbotron() {
    return (
        <div className="jumbotron">

            <h1 className="text-center mb-4">Mini-fig Clicky Game!</h1>
            <h4 className="text-center">Lets Play, click the images, but not the same one twice!</h4>
                
        </div>
    );
}

export default Jumbotron;