import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Links = () => {
    return (
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
    )
}