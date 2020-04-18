import React, { Component } from "react";
import ImgCard from "../imgCard/imgCard"
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
        message: "Lets Play, click the images, but not the same one twice!"
        
    }

    // onClick event listener
    handleImgClick = (id) => {
        // Push the id of the image into the clicked array
        let clickedImages = this.state.clicked;

        //clickedImages.push(id)

        // test shuffle by calling here..... WORKS!
        //this.randomize();

        


        for (let i=0; i <= this.state.clicked.length; i++) {

            // Determine clicked condition
            if ( this.state.clicked[] !== id) {

                // Add 'this' id to the clicked array
                clickedImages.push(id);

                // View the array after push
                console.log(`Array:${clickedImages}`);

                // log the id to compare to logged array ^^^
                console.log(`This id: ${id}`);

                // And adjust state of clicked
                this.setState({ clicked: clickedImages });
                
                // Increment counter by one, set clicked prop to true,
                this.setState({ counter: this.state.counter + 1 });
                //this.setState({ clicked: true })  

                // Display "Correct Guess" message
                this.setState({ message: "Correct Guess! 1pt! " })

                // // Cleaner version of ^^^
                // this.setState(
                //     { 
                //     clicked: clickedImages,
                //     counter: this.state.counter + 1 ,
                //     message: "Correct Guess! 1pt! "
                //     }
                // );

                // Call randomize... 
                this.randomize();
            

            } else {

                // Remove all id's from clicked array
                clickedImages = [];
                // And set state of clicked again back to empty array
                this.setState({ clicked: clickedImages });

                // Reset counter score to zero
                this.setState({ counter: 0 });

                // Display "Wrong guess!" message
                this.setState({ message: "Guessed that one already... play again?" });

                // // Cleaner version of ^^^
                // this.setState(
                //     {
                //         clicked: clickedImages,
                //         counter: 0,
                //         message: "Guessed that one already... play again?" 
                //     }
                // );

                // Call randomize... 
                this.randomize();

                

            };


        };
        
    };

    // Function to call shuffle 
    randomize = () => {
        this.setState({ images: shuffleArray(images) });
    }

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
                            id={images.id}
                            handleImgClick={this.handleImgClick}
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