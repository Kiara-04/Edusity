import React from "react";
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

function Hero() {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales velit quis orci sollicitudin, vitae pretium nulla porttitor. Nunc mollis et eros quis dapibus. Cras non accumsan odio, ut porta velit. Donec vel gravida ligula.</p>
                <button className="btn">Explore more<img src={dark_arrow} /></button>
            </div>
        </div>
    );
}

export default Hero;