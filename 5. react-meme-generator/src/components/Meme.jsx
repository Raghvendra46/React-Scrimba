import { useState, useEffect } from "react";

function Meme(props) {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    return(
        <div id="main">
            <div className="inputs">
                
                <input 
                type="text" 
                name="" 
                id="top-text" 
                placeholder="Top text" />

                <input 
                type="text" 
                name="" 
                id="bottom-text" 
                placeholder="Bottom text" />

            </div>

            <button>Get a new meme image 🖼️</button>

            <div id="meme">
                <img src={meme.randomImage} id="meme-image" alt="Meme Image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme