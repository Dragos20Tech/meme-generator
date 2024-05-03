import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    function handleURL() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(memesData.data.memes[randomNumber].url)
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
                    onClick={handleURL}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}