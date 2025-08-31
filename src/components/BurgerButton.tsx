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
        className="md:hidden cursor-pointer md:ml-auto order-1 ml-2"
      >
        <span className="sr-only" data-state="closed">
          Open menu
        </span>
        <FontAwesomeIcon icon={faBars} size="3x" />
      </button>
    </>
  );
}
