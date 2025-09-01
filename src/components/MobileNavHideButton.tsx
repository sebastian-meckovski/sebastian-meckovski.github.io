"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { hideNav } from "../helpers/mobileNav";

export default function MobileNavHideButton() {
  return (
    <button
      type="button"
      onClick={hideNav}
      className="md:hidden h-20 w-40 absolute bottom-4 right-4 bg-[var(--accent)] text-white rounded-full px-4 py-3 shadow-lg flex items-center"
      aria-label="Close menu"
    >
      <span className="font-semibold text-xl">Close menu</span>
      <FontAwesomeIcon icon={faChevronRight} style={{ width: "50%", height: "100%" }} />
    </button>
  );
}
