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
        className="
          flex gap-8 bg-[var(--background)] flex-col fixed top-0 left-0 w-full h-full items-center justify-center translate-x-full z-50
          md:bg-[var(--header-bg)] md:flex-row md:static md:justify-end md:translate-x-0 md:w-auto md:h-auto md:py-0 md:px-0
      "
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hover:text-[var(--accent)]"
            tabIndex={0}
          >
            {l.label}
          </Link>
        ))}
        <MobileNavHideButton />
      </nav>
      <BurgerButton />
    </>
  );
}
