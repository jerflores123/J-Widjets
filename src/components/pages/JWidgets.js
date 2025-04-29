import React from 'react';
import RandomBibleVerse from './randomBibleVerse/RandomBibleVerse';

function Home() {
    return (
    <>
        <div className="react-project">
            <p>
            Your everyday life, simplified — one fun, smart widget at a time
            </p>
        </div>
        <div className="react-project-req">
            <p>
            Developed by Jerry Flores — the author and programmer behind this innovative widget application, designed to simplify and enhance your daily experience
            </p>
        </div>
        <div >
            <RandomBibleVerse/>
        </div>
    </>
    )
}

export default Home