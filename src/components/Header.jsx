import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export const Header = () => {
    const [showItems, setShowItems] = useState(false)
    return (
        <header className="App-header">
            <nav>
                <div className='App-header-left'>
                    <h3>Sebastian</h3>
                    <h3>Meckovski</h3>
                    <button type="button" className="burger-button" onClick={() => {
                        setShowItems((prev) => { return (!prev) })
                    }}>
                        {!showItems &&
                            <>
                                <div className="burger-button-stripe"></div>
                                <div className="burger-button-stripe"></div>
                                <div className="burger-button-stripe"></div>
                            </>
                        }
                    </button>
                </div>
                <div className='App-header-right'>
                    <NavLink to='/#'>Home</NavLink>
                    <NavLink to="about-me">About me</NavLink>
                    <NavLink to="skills">Skills</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
                {showItems &&
                    <div className="App-header-mobile" onClick={() => { setShowItems(false) }}>
                        <NavLink to='/#'>Home</NavLink>
                        <NavLink to="about-me">About me</NavLink>
                        <NavLink to="skills">Skills</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                    </div>
                }
            </nav>
        </header>
    )
}