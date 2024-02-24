import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header className="App-header">
            <nav>
                <div className='App-header-left'>
                    <h3>Sebastian</h3>
                    <h3>Meckovski</h3>
                </div>
                <div className='App-header-right'>
                    <a href='/#'>Home</a>
                    <Link to="about-me">About me</Link>
                    <Link to="skills">Skills</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </nav>
        </header>
    )
}