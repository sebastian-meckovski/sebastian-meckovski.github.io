import React from "react";
import sebImage from '../assets/PXL_20240226_132844396.NIGHT.jpg'

export const AboutMe = () => {
    return (
        <section className="about-me">
            <img className="about-me-image" src={sebImage} alt="Sebastian" />
            <h1>Hi, Seb here</h1>
            <h2 className="placeholder">
                I am a&nbsp;
                <span className="typewriter"></span>
            </h2>
        </section>
    )
}