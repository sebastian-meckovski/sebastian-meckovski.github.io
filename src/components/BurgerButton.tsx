"use client";

import React, { useState } from "react";

const burgerButtonBar =
  "absolute left-0 block h-[4px] w-full origin-center rounded bg-current burger-bar ";

// Accessible animated burger button that morphs into a perfect X using Tailwind.
export default function BurgerButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="relative inline-flex h-12 w-16 items-center justify-center md:hidden"
    >
      <span
        className={burgerButtonBar}
        style={{
          top: open ? "50%" : "0",
          transform: open
            ? "translateY(-50%) rotate(45deg)"
            : "translateY(0) rotate(0deg)",
        }}
      />
      {/* Middle bar: stays centered & fades out */}
      <span
        className={burgerButtonBar}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          opacity: open ? 0 : 1,
        }}
      />
      {/* Bottom bar: from bottom -> center rotate -45 */}
      <span
        className={burgerButtonBar}
        style={{
          top: open ? "50%" : "95%",
          transform: open
            ? "translateY(-50%) rotate(-45deg)"
            : "translateY(-50%) rotate(0deg)",
        }}
      />
    </button>
  );
}
