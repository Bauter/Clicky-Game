import React from "react";
import "./style.css";

const ImgCard = function(props) {
    return (
        
        <div className="card-group" key={props.id}>
            <div className="img-container">
                <img
                    className="img"
                    // Description if imag fails to load.
                    alt={props.name}
                    // Assign img url to img tag 'src' attribute.
                    src={props.image}
                    // pass the id through the click to push into array
                    onClick={() => {props.handleImgClick(props.id)}}
                />
            </div>
        </div>
        
    );
}

export default ImgCard