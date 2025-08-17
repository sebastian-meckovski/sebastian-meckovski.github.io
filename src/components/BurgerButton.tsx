"use client";

import React, { useEffect, useState } from "react";
import { hideNav, showNav } from "../../public/mobileNav";

const burgerButtonBar =
  "absolute left-0 block h-[4px] w-full origin-center rounded bg-current burger-bar ";

// Accessible animated burger button that morphs into a perfect X using Tailwind.
export default function BurgerButton() {
  const [open, setOpen] = useState(false);

  // Call showNav/hideNav from global window (from mobileNav.ts)
  const handleClick = () => {
    if (!open) {
      showNav();
    } else {
      hideNav();
    }
    setOpen((o) => !o);
  };

  // Hide nav if anchor in nav is clicked
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        hideNav();
        setOpen(false);
      }
    };
    nav.addEventListener("click", handleAnchorClick);
    return () => {
      nav.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      type="button"
      onClick={handleClick}
      className="relative inline-flex h-7 w-14 items-center justify-center md:hidden"
    >
      <span className={burgerButtonBar} style={{ top: "0%" }} />
      {/* Middle bar: stays centered & fades out */}
      <span
        className={burgerButtonBar}
        style={{
          top: "50%",
        }}
      />
      {/* Bottom bar: from bottom -> center rotate -45 */}
      <span
        className={burgerButtonBar}
        style={{
          top: "100%",
        }}
      />
    </button>
  );
}
