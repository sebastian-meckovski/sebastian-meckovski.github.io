import React from "react";
import sebImage from '../assets/PXL_20240226_132844396.NIGHT.jpg'
import { Button } from "../components/Button/Button";
import { Links } from "../components/Links";

export const MainPage = () => {
    return (
        <>
            <section id="/">
                <img className="about-me-image" src={sebImage} alt="Sebastian" />
                <h1>Hi, Seb here</h1>
                <h2 className="placeholder">
                    I am a&nbsp;
                    <span className="typewriter"></span>
                </h2>

                <p> A versatile software developer with 3 years of experience in frontend, backend, testing,
                    and web technologies. Passionate about learning and implementing new technologies.</p>
                <Links />
                <Button />
            </section>
            <section id="about-me">
                About me
            </section>
            <section id="tech-stack">
                My Tech Stack
            </section>
            <section id="portfolio">
                Portfolio
            </section>
        </>
    )
}