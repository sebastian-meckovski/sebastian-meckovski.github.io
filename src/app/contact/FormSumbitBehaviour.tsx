"use client";
import { useEffect } from "react";

export default function FormSubmitBehaviour() {
  console.log("FormSubmitBehaviour mounted");

  useEffect(() => {
    const contactForm = document.getElementById("contact-form");
    contactForm?.addEventListener("submit", () => {
      const submitButton = contactForm.lastChild as HTMLElement;
      const child = submitButton?.firstElementChild;
      if (child && child instanceof HTMLElement) {
        child.classList.remove("hidden");
      }
    });
  }, []);

  return null;
}
