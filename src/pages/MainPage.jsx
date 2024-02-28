import React from "react";
import sebImage from '../assets/PXL_20240226_132844396.NIGHT.jpg'
import { Links } from "../components/Links";
import '../components/Button/Button.scss'
import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <>
            <section id="/">
                <div className="section-container">
                    <img className="about-me-image" src={sebImage} alt="Sebastian" />
                    <h1>Hi, Seb here</h1>
                    <h2 className="placeholder">
                        I am a&nbsp;
                        <span className="typewriter"></span>
                    </h2>

                    <p> A versatile software developer with 3 years of experience in frontend, backend, testing,
                        and web technologies. Passionate about learning and implementing new technologies.</p>
                    <Links />
                    <div>
                        <a className="custom-button" href="#contact">Hire Me</a>
                    </div>
                </div>
            </section>
            <section id="about-me">
                <div className="section-container">
                    <div className="about-me-left">
                        <div className='About-me-header'>
                            <h1>About</h1>
                            <h1>Me</h1>
                        </div>
                        <span className="typewriter"></span>
                        <p>
                            With a passion for crafting seamless digital experiences, I’ve explored diverse industries — e-commerce, private healthcare, and finance.
                            My expertise spans both frontend and backend development. On the frontend, I specialize in React (Typescript and JavaScript), creating highly interactive web applications.
                        </p>
                        <p>
                            Meanwhile, on the backend, I wield C# and ASP.NET Core Web API, building robust APIs and ensuring data access and manipulation. I thrive in collaborative environments and am
                            always eager to learn and implement new technologies.
                        </p>
                        <div style={{ margin: '0.75rem 0' }}>
                            <Link to="about-me" className="custom-button">Read More</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="about-me-image" src={sebImage} alt="Sebastian" />
                </div>
            </section>
            <section id="tech-stack">
                <div className="section-container">
                    My Tech Stack
                </div>
            </section>
            <section id="portfolio">
                <div className="section-container">
                    Portfolio
                </div>
            </section>
            <section id="contact">
                <div className="section-container">
                    Contact
                </div>
            </section>
        </>
    )
}