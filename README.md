# Clicky-Game

## Link to Live pages

https://bauter.github.io/Clicky-Game/

## What this apps about?

Mini-fig Clicky-Game, the purpose of this project was to create a simple react game. The objective is to click an image of a mini-fig to score points. On each click, the images will shuffle around. If the same image is clicked twice, the game is over.

![mini-fig-app](Images/mini-fig-app.PNG);

## What you will need 

-explanations to follow

1. A code editor, I prefer Visual Studio Code ("https://code.visualstudio.com/").
2. Node.js to run node commands in terminal ("https://nodejs.org/en/download/").
3. '.gitignore' file to write what files you would not like to upload. 
4. NPM packages: 'react-dom', 'babel', 'gh-pages'.
5. react (npm create-react-app your-app-name-here).

## Lets get set up!

1. Create a react app.
    - `npm create-react-app your-app-name-here`

2. Create an empty github repo (no readme, or .gitignore).

3. Install github pages.
    - Navigate to the root of your react app in terminal (bash, command, etc).
    - Run: `npm install gh-pages --save-dev`

4. Add properties to the app's "package.json".
    - At the top level, add a "Homepage" property. set its value to a string of: `http.//gitname.github.io/react-app-name-here` (insert your github username in "gitname" and your react app name at the end).
    - In the existing "scripts" property, add: "predeploy" and "deploy" with the listed values below.
    ```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    ```

5. Create a github repository as a "remote" in your local repo.
    - Inside the app's folder run : `git init`
    - then: `git remote add origin https:/github.com/gitname/empty-repo-name-here`

6. Commit to your repo
    - `git ad .`
    - `git commit -m "Create a react app and link toi repo" `
    - `git push origin master`

7. When it comes time to deploy and build your app to github pages, simply run: 
    - `npm run deploy`

8. Inside your app's public folder, navigate to the "index.html" file, and in the head tags add bootstraps cdn link.
    - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>`


## Time to start creating our components
1. Naviagte to the apps "src" folder, and create a directory called "components". All our components will be defined in here.

### What should each component look like?

NOTE:
- Make sure to import the appropriate files and react components in each component file.
- For each component, make a directory inside the "components" directory named for the specific component, then add a JS file for that component and a CSS file as well to control the styling for that specific component.

- EX. "NavBar.js" and "style.css"

#### Navbar

- NavBar should look like this:

```
//==================================================
// Import needed files
//==================================================

import React from "react";
import "./style.css";

//==================================================
// Define component "NavBar"
//==================================================

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

```

#### Jumbotron

- Jumbotron should look like this:

```
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

```

#### MainContainer

- MainContainer unlike the other components will be a "class" component. This is because we will define our component state and functions (such as "onClick") inside MainContainer that all our other dynamic components will reference.

- MainContainer should look like this:

```
//==================================================
// Import needed files
//==================================================

import React, { Component } from "react";
import ImgCard from "../imgCard/imgCard";
import NavBar from "../navBar/NavBar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Footer from "../Footer/Footer";
import images from "../../images.json";
import "./style.css";

//=========================================
// Fisher-Yates (aka Knuth) Shuffle
//=========================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return the shuffled array
    return array
}

//===========================================
// Create extended component "MainContainer"
//===========================================

class MainContainer extends Component {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //  Define State
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    state = {
        images,
        clicked: [],
        counter: 0,
        topScore: 0,
        message: "Click an image to get started!"
        
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // onClick event listener "handleImgClick"
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
        
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //  Define function to call shuffle 
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    randomize = () => {
        this.setState({ images: shuffleArray(images) });
    };

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Render to the page
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    render() {
        return (
            <div>
                <NavBar 
                    message={this.state.message}
                    score={this.state.counter}
                    top={this.state.topScore}
                />
                <Jumbotron />

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

                <Footer />

            </div>
        )
    };

}

export default MainContainer;

```






