import Link from "next/link";
import NavColorEffect from "./NavColorEffect";

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
      <nav className="flex gap-8 text-sm font-medium">
        {links.map((l) => {
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-[var(--accent)]`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
