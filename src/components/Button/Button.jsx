import React from "react";
import './Button.scss'


export const Button = ({ children, href }) => {
    return (
        <a href={href} className="custom-button"> {children} </a>
    )
}