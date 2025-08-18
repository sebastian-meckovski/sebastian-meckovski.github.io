"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { hideNav } from "../../public/mobileNav";

export default function MobileNavHideButton() {
  return (
    <button
      type="button"
      onClick={hideNav}
      style={{ maxWidth: "12rem" }}
      className="md:hidden absolute bottom-4 right-4 bg-[var(--accent)] text-white rounded-full px-4 py-3 shadow-lg flex items-center gap-2"
      aria-label="Close menu"
    >
      <span className="font-semibold text-base">Close menu</span>
      <FontAwesomeIcon icon={faChevronRight} size="lg" />
    </button>
  );
}
