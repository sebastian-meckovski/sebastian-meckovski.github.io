import React from "react";
import { Routes, Route } from "react-router";
import { Contact } from "../pages/Contact";

export const AppRoutes = () => {
    return (
        <main>
            <Routes>
                <Route index element={<p>home</p>} />
                <Route path="about-me" element={<p>about me</p>} />
                <Route path="skills" element={<p>skills</p>} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </main>
    )
}