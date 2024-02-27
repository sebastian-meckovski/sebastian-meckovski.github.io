    import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>
                Sebastian Meckovski | {currentYear}
            </p>
        </footer>
    )
}