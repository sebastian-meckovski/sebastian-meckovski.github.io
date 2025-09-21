"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavColorEffect() {
  const pathname = usePathname();
  const activeLinkClasses =
    "text-blue-300 font-bold underline underline-offset-4 drop-shadow";
  useEffect(() => {
    const nav = document.querySelector("header > nav");
    if (nav) {
      const links = nav.querySelectorAll("a");
      links.forEach((link) => {
        if (link instanceof HTMLAnchorElement) {
          const linkHref = link.getAttribute("href");
          if (linkHref === pathname) {
            activeLinkClasses
              .split(" ")
              .forEach((cls) => link.classList.add(cls));
          } else {
            activeLinkClasses
              .split(" ")
              .forEach((cls) => link.classList.remove(cls));
          }
        }
      });
    }
  }, [pathname]);
  return null;
}
