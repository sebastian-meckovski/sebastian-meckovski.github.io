import React from "react";
import sebImage from '../assets/PXL_20240226_132844396.NIGHT.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

export const AboutMe = () => {
    return (
        <>
            <section>
                <img className="about-me-image" src={sebImage} alt="Sebastian" />
                <h1>Hi, Seb here</h1>
                <h2 className="placeholder">
                    I am a&nbsp;
                    <span className="typewriter"></span>
                </h2>
            </section>
            <section>

                <p> A versatile software developer with 3 years of experience in frontend, backend, testing, and web technologies. Passionate about learning and implementing new technologies.</p>
                <div className="icons-container">
                    <Link target="_blank" to={'https://www.linkedin.com/in/sebastian-meckovski/'}>
                        <FontAwesomeIcon className="icon-class" icon={faLinkedin} />
                    </Link>
                    <Link target="_blank" to={'https://www.facebook.com/sebastian.meckovski'}>
                        <FontAwesomeIcon className="icon-class" icon={faFacebook} />
                    </Link>
                    <Link target="_blank" to={'https://www.instagram.com/sebastian_meckovski/'}>
                        <FontAwesomeIcon className="icon-class" icon={faInstagram} />
                    </Link>
                    <Link target="_blank" to={'https://github.com/sebastian-meckovski'}>
                        <FontAwesomeIcon className="icon-class" icon={faGithub} />
                    </Link>
                </div>
                <Button />
            </section>
        </>
    )
}