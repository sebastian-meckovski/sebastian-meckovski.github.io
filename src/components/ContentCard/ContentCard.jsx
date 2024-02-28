import React from "react";
import { Button } from "../Button/Button";
import './ContentCard.scss'

export const ContentCard = ({ buttonText, children, href }) => {
    return (
        <article className="ContentCard">
            {children}
            <br/>
            <Button href={href}> {buttonText} </Button>
        </article >
    )
}