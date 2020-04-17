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
                    onClick={props.handleImgClick}
                />
            </div>
        </div>
    );
}

export default ImgCard