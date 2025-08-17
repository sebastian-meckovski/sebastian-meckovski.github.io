import Link from "next/link";
import NavColorEffect from "./NavColorEffect";
import BurgerButton from "./BurgerButton";

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
        className="fixed top-0 left-0 z-40 w-full h-full bg-[var(--background)] shadow-2xl
          flex flex-col items-center justify-center gap-8
          text-2xl font-medium
          translate-x-full opacity-0
          max-md:transition-transform duration-300 ease-in-out
          md:static md:bg-transparent md:shadow-none md:translate-x-0 md:opacity-100 md:pointer-events-auto md:flex-row md:h-auto md:text-base md:w-auto md:justify-end"
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
      </nav>
      <BurgerButton />
    </>
  );
}
