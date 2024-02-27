    import React from "react";
import { Links } from "./Links";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Links/>
            <p>
                Sebastian Meckovski | {currentYear}
            </p>
        </footer>
    )
}