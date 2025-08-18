"use client";

import { useEffect } from "react";
import { hideNav, showNav } from "../../public/mobileNav";

export default function BurgerButtonClient() {
  useEffect(() => {
    const btn = document.getElementById("burger-button");
    if (!btn) return;
    const sr = btn.querySelector<HTMLElement>(".sr-only");
    if (sr) {
      sr.textContent = "Open menu";
      sr.dataset.state = "closed";
    }

    const openNav = () => {
      showNav();
    };

    btn.addEventListener("click", openNav);

    // Close nav when clicking a link inside nav
    const nav = document.getElementById("main-nav");
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        hideNav();
      }
    };
    nav?.addEventListener("click", handleAnchorClick);

    return () => {
      btn.removeEventListener("click", openNav);
      nav?.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
