import React from "react";
import { Routes, Route } from "react-router";
import { Contact } from "../pages/Contact";
import { MainPage } from "../pages/MainPage";
import { Expertise } from "../pages/Expertise";
import { Portfolio } from "../pages/Portfolio";
import { AboutMe } from "./AboutMe";

export const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
  );
};
