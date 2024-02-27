import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";


export const Header = () => {
    const [showItems, setShowItems] = useState(false)
    const location = useLocation()

    // function addSmoothScrolling(e) {
    //     e.preventDefault();
    //     document.querySelector(this.getAttribute('href')).scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // }

    // useEffect(
    //     () => {
    //         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //             anchor.addEventListener('click', addSmoothScrolling)

    //             return (
    //                 () => {
    //                     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //                         anchor.removeEventListener('click', addSmoothScrolling)
    //                     })
    //                 }
    //             )
    //         })
    //     }, [location]
    // )

    const hrefName = {
        "": "Home",
        "about-me": "About me",
        "tech-stack": "Tech Stack",
        "portfolio": "Portfolio",
    }

    const returnLink = (href) => {
        if (location.pathname === '/') {
            return (<a href={`#${href}`}>{hrefName[href]}</a>)
        } else {
            return (<NavLink to={href}>{hrefName[href]}</NavLink>)
        }
    }

    return (
        <header className="App-header">
            <nav>
                <div className='App-header-left'>
                    <h3>Sebastian</h3>
                    <h3>Meckovski</h3>
                    <button type="button" className="burger-button" onClick={() => {
                        setShowItems((prev) => { return (!prev) })
                    }}>
                        <>
                            <div className={`burger-button-stripe-1-${showItems ? 'open' : 'closed'}`}></div>
                            <div className={`burger-button-stripe-2-${showItems ? 'open' : 'closed'}`}></div>
                            <div className={`burger-button-stripe-3-${showItems ? 'open' : 'closed'}`}></div>
                        </>
                    </button>
                </div>
                <div className='App-header-right'>
                    {/* <NavLink to='/#'>Home</NavLink> */}
                    {returnLink('')}
                    {returnLink('about-me')}
                    {returnLink('tech-stack')}
                    {returnLink('portfolio')}
                    <NavLink to="contact">Contact</NavLink>
                </div>
                <div className={`App-header-mobile-${showItems ? 'open' : 'closed'}`} onClick={() => { setShowItems(false) }}>
                    {returnLink('')}
                    {returnLink('about-me')}
                    {returnLink('tech-stack')}
                    {returnLink('portfolio')}
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </nav>
        </header>
    )
}