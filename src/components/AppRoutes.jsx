import React from "react";
import { Routes, Route } from "react-router";
import { Contact } from "../pages/Contact";
import { MainPage } from "../pages/MainPage";
import { Expertise } from "../pages/Expertise";

export const AppRoutes = () => {
    return (
        <main>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="about-me" element={<p>about me</p>} />
                <Route path="portfolio" element={<p>Portfolio</p>} />
                <Route path="contact" element={<Contact />} />
                <Route path="expertise" element={<Expertise />} />
            </Routes>
        </main>
    )
}