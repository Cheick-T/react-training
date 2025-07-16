

import React from 'react';

export default function Main() {



    const  [memeObject, setMemeObject] = React.useState({
        topText: "One does not",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const  [memeArray, setmemeArray] = React.useState([]);


    React.useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())    
        .then(data => setmemeArray(data.data.memes))
    }, [])


    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        const randomMeme = memeArray[randomIndex];
        setMemeObject((prevMeme) => ({ ...prevMeme, randomImage: randomMeme.url }));

    }

    function handleChange(event) {
        //const { name, value } = event.target;
        //console.log(name, value);
        const { value, name } = event.currentTarget;
        setMemeObject(prevMeme => ({
            ...prevMeme,        
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={ memeObject.topText }
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={ memeObject.bottomText }
                    />
                </label>
                <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src= {memeObject.randomImage} />
                <span className="top">{memeObject.topText}</span>
                <span className="bottom">{memeObject.bottomText}</span>
            </div>
        </main>
    )
}