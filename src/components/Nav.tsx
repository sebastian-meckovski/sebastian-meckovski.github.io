import Link from "next/link";
import NavColorEffect from "./NavColorEffect";
import BurgerButton from "./BurgerButton";
import MobileNavHideButton from "./MobileNavHideButton";

export default function Nav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/expertise", label: "Expertise" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <NavColorEffect />
      {/* Desktop nav */}
      <nav
        id="main-nav"
        className={[
          // Mobile layout & positioning
          "flex flex-col fixed top-0 left-0 items-center justify-center",
          // Mobile sizing
          "w-full h-full",
          // Mobile appearance
          "bg-[var(--background)] translate-x-full z-50 ml-auto",
          // Desktop layout & positioning
          "md:flex-row md:static md:justify-end md:translate-x-0",
          // Desktop sizing
          "md:w-auto md:h-auto md:py-0 md:px-0",
          // Desktop appearance
          "md:bg-[var(--header-bg)]",
        ].join(" ")}
      >
        <ul
          className={[
            // Layout & positioning
            "flex flex-col items-center",
            // Spacing
            "gap-8 2xl:gap-[1.2vw]",
            // Desktop layout
            "md:flex-row",
          ].join(" ")}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={[
                  // Typography
                  "whitespace-nowrap text-3xl md:text-base 2xl:text-[1.2vw]",
                  // Hover & active effects
                  "hover:text-[var(--accent)] active:text-[var(--accent)]",
                  // Transitions
                  "md:transition-colors duration-150 md:duration-300 md:ease-out",
                ].join(" ")}
                tabIndex={0}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <MobileNavHideButton />
      </nav>
      <BurgerButton />
    </>
  );
}
