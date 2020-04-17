import React, { Component } from "react";
import ImgCard from "../imgCard/imgCard"
import images from "../../images.json"
import "./style.css";

class MainContainer extends Component {

    state = {
        images,
        clicked: false,
        counter: 0,
        message: "Lets Play, click the images, but not the same one twice!"
        
    }

    handleImgClick = () => {

        // Determine clicked condition
        if ( this.state.clicked === false) {

            // Increment counter by one, set clicked prop to true,
            this.setState({ counter: this.state.counter + 1, clicked: true});
            //this.setState({ clicked: true })  ~~~ Maybe cleaner ^^^

            // Display "Correct Guess" message
            this.setState({ message: "Correct Guess! 1pt! " })

            // Randomize... HOW????

        } else if ( this.state.clicked === true) {

            // Reset counter score to zero
            this.setState({ counter: 0});

            // Display "Wrong guess!" message
            this.setState({ message: "Guessed that one already... play again?" })

            // Reset all "clicked" props to false

        }

    };


    render() {
        return (
            <div>
            <div className="jumbotron">

                
                <h1 className="text-center mb-4">Clicky Game!</h1>

                <p className="score text-center">
                    Score:{this.state.counter}
                </p>
                
            </div>
            <div className="container">
                <div className="message text-center">
                    <h5>{this.state.message}</h5>
                </div>

                <div className="card-body">
                <div className="card-group">
                    {this.state.images.map(images => (
                        <ImgCard
                            image={images.image}
                            name={images.description}
                        />
                    ))}
                </div>
                </div>
                

            </div>
            </div>
        )
    }

}

export default MainContainer;