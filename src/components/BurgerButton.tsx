"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { showNav } from "../helpers/mobileNav";

export default function BurgerButton() {
  return (
    <>
      <button
        onClick={showNav}
        id="burger-button"
        aria-label="Open menu"
        aria-controls="main-nav"
        type="button"
        className={[
          // Visibility
          "md:hidden",
          // Sizing
          "h-[2.7rem]",
          // Positioning
          "ml-3 md:ml-auto order-1",
          // Interaction
          "cursor-pointer",
          // Hover & active effects
          "hover:text-[var(--accent)] active:text-[var(--accent)]",
          // Transitions
          "md:transition-colors duration-300 md:duration-150 md:ease-out",
        ].join(" ")}
      >
        <span
          className={[
            // Accessibility
            "sr-only",
          ].join(" ")}
          data-state="closed"
        >
          Open menu
        </span>
        <FontAwesomeIcon
          icon={faBars}
          style={{ width: "100%", height: "100%", maxHeight: "3rem" }}
        />
      </button>
    </>
  );
}
