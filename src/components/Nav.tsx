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
          flex bg-[var(--background)] flex-col fixed top-0 left-0 w-full h-full items-center justify-center translate-x-full z-50 ml-auto
          md:bg-[var(--header-bg)] md:flex-row md:static md:justify-end md:translate-x-0 md:w-auto md:h-auto md:py-0 md:px-0
      "
      >
        <ul className="flex flex-col gap-8 2xl:gap-[1.2vw] items-center md:flex-row">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-[var(--accent)] whitespace-nowrap text-3xl md:text-base 2xl:text-[1.2vw]"
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
