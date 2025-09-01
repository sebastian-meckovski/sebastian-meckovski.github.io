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
        className="md:hidden h-[2.7rem] cursor-pointer ml-3 md:ml-auto order-1 "
      >
        <span className="sr-only" data-state="closed">
          Open menu
        </span>
        <FontAwesomeIcon
          icon={faBars}
          style={{ width: "100%", height: "100%" }}
        />
      </button>
    </>
  );
}
