import React from "react";
import "./style.css";


function NavBar(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-light">

            <div className="col">
            <h2 className="gameTitle float-left" >Mini-fig Clicky Game!</h2>
            </div>

            <div className="col">
            <p className="messageDisplay text-center">{props.message}</p>
            </div>

            <div className="col">
            <p className="scoreDisplay float-right">Score: {props.score} / TopScore: {props.top} </p>
            </div>
        </nav>
    );
}

export default NavBar;