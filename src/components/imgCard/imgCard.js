import React from "react";
import "./style.css";

const ImgCard = function(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img
                    className="img"
                    alt={props.name}
                    src={props.image}
                    // pass the id through the click to push into array
                    onClick={() => {props.handleImgClick(props.id)}}
                />
            </div>
        </div>
    );
}

export default ImgCard