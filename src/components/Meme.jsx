import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [memeImg, setMemeImage] = useState(memesData.data.memes[1].url)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const newMemeImg = memesData.data.memes[randomNumber].url;
        setMemeImage(newMemeImg)
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImg} alt="Meme image" className="meme--img"/>
        </main>
    )
}