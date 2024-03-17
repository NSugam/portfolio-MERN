import React, { useState, useEffect } from 'react';
import ScrollingBody from './mainContents/ScrollingBody';
import '../CSS/mainBody.css';

export default function MainBody() {

    function getRandomQuote() {
        const quotes = [
            ' "Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart." ',
            ' "Pursue what catches your heart, not what catches your eyes." ',
            ' "Whatever choice you make makes you. Choose wisely." ',
            ' "When there is darkness, dare to be the first to shine a light." ',
            ' "Stop giving other people the power to control your happiness." ',
            ' "Don\'t wish it were easier. Wish you were better." ',
            ' "You were born to stand out, stop trying to fit in." '
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    const [quote, setQuote] = useState('');

    useEffect(() => {
        setQuote(getRandomQuote());
    }, []);

    return (
        <>
            <div className={`container-fluid text-light text-center user-select-none`} id="home">
                <div className="fixed-top pt-5 madimi-one-regular" style={{ zIndex: 0, marginTop: 80 }}>

                    <span className="container rounded col-sm-5 fs-5 text-danger bg-light">
                        {quote}
                    </span>

                    <p className="welcome-text"> {'Welcome />'} स्वागतम् </p><br />
                    <p className="writing-animation main-text">I am a MERN stack developer</p>
                    <p className="location-text">from Bangalore, Karnataka</p><br />

                    <div className="container bg-light col-sm-2 col-6 rounded-5 appearfromRight">
                        <a href="https://www.facebook.com/ns.neupane09/" target='_blank' rel="noreferrer"> <i className="bi-facebook fs-3 me-3" style={{ color: 'blue' }}></i> </a>
                        <a href="https://www.instagram.com/ns_neupane09" target='_blank' rel="noreferrer"> <i className="bi-instagram fs-3 me-3" style={{ color: 'red' }}></i> </a>
                        <a href="https://www.linkedin.com/in/sugamneupane/" target='_blank' rel="noreferrer"> <i className="bi-linkedin fs-3 me-3" style={{ color: 'darkblue' }}></i> </a>
                        <a href="https://github.com/NSugam" target='_blank'> <i className="bi-github fs-3" style={{ color: 'black' }}></i> </a>
                    </div>

                    <div className="text-center d-flex justify-content-center appearfromBottom" style={{ marginTop: '5vh' }}>
                        <a className="btn btn-outline-light me-2 fs-5" href="#about">My Resume</a>
                        <a className="btn btn-light fs-5" href="#about">Explore more</a>
                    </div>
                </div>
            </div>

            <ScrollingBody />
        </>
    );
}
