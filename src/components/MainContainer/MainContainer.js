import React, { Component } from "react";
import ImgCard from "../imgCard/imgCard"
import NavBar from "../navBar/NavBar"
import images from "../../images.json"
import "./style.css";


// Fisher-Yates (aka Knuth) Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return the shuffled array
    return array
}


class MainContainer extends Component {

    state = {
        images,
        clicked: [],
        counter: 0,
        topScore: 0,
        message: "Click an image to get started!"
        
    }

    // onClick event listener
    handleImgClick = (id) => {
        // Push the id of the image into the clicked array
        let clickedImages = this.state.clicked;

        //clickedImages.push(id)

        // test shuffle by calling here..... WORKS!
        //this.randomize();

        if (clickedImages.length === 0) {
            clickedImages.push(id);

            this.setState(
                { 
                clicked: clickedImages,
                counter: this.state.counter + 1 ,
                message: "Correct!"
                }
            );

            // Call randomize... 
            this.randomize();
            console.log(`length:${clickedImages.length}`);
            console.log(`Array:${clickedImages}`);



        } else if (clickedImages.length > 0) {

            

            // Determine clicked img ID is in the clickedUImages array
            if (clickedImages.indexOf(id) === -1) {
    
                // Add 'this' id to the clicked array
                clickedImages.push(id);
    
                // View the array after push
                console.log(`Array:${clickedImages}`);
                    
                // log the id of image clicked
                console.log(`This id: ${id}`);
    
                // Adjust state of clicked, Increment counter by one, & Display "Correct Guess" message.
                this.setState(
                    { 
                    clicked: clickedImages,
                    counter: this.state.counter + 1 ,
                    message: "Correct!"
                    }
                );
    
                // Call randomize... 
                this.randomize();
                
                // Set top score
                if (this.state.counter >= this.state.topScore) {
                    this.setState({ topScore: this.state.counter })
                }
                
            } else {

                // log the id of image clicked
                console.log(`This id: ${id}`);
                
                // Set top score
                if (this.state.counter > this.state.topScore) {
                    this.setState({ topScore: this.state.counter })
                }

                // Set state of clicked again back to empty array, Reset counter score to zero, & Display "Wrong guess!" message.
                    this.setState(
                    {
                        clicked: [],
                        counter: 0,
                        message: "Incorrect! Play again?" 
                    }
                );
    
                // Call randomize... 
                this.randomize();
            };

        }

    };
        
    
    //  Define function to call shuffle 
    randomize = () => {
        this.setState({ images: shuffleArray(images) });
    };


    // Render to the page
    render() {
        return (
            <div>
                <NavBar 
                    message={this.state.message}
                    score={this.state.counter}
                    top={this.state.topScore}
                />
                <div className="jumbotron">

                    <h1 className="text-center mb-4">Mini-fig Clicky Game!</h1>
                    <h4 className="text-center">Lets Play, click the images, but not the same one twice!</h4>
                
                </div>

                <div className="container">

                    <div className="card-columns">
                        {this.state.images.map(images => (
                            <ImgCard
                                image={images.image}
                                name={images.description}
                                id={images.id}
                                handleImgClick={this.handleImgClick}
                            />
                        ))}
                    </div>
    
                </div>

                <div className="foot card-header mt-4 rounded gradient-border row">

                    <div className="col-4 text-left">
                        <a href="https://github.com/Bauter" target="_blank" className="footer-link">Bauter</a>
                    </div>

                    <div className="col-4">
                        <h5 className="text-center p-5 " id="footer-title">
                        Copyright &copy; 2020
                        </h5>
                    </div>
      
                    <div className="col-4 text-right">
                        <a href="https://bauter.github.io/Updated-portfolio/" target="_blank" className="footer-link">Portfolio</a>
                    </div>

                </div>

            </div>
        )
    };

}

export default MainContainer;