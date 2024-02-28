import React from "react";
import { Routes, Route } from "react-router";
import { Contact } from "../pages/Contact";
import { MainPage } from "../pages/MainPage";

export const AppRoutes = () => {
    return (
        <main>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="about-me" element={<p>about me</p>} />
                <Route path="expertise" element={<p>tech-stack</p>} />
                <Route path="portfolio" element={<p>Portfolio</p>} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </main>
    )
}