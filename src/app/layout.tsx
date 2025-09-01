import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";
import ThemeMenu from "@/components/ThemeMenu";

// Todo:
// Move nav logic here (no need to have Nav component)
// Theme popup logic, fade out animation, improve styling - DONE
// Sebastian Meckovski header shows up in two lines for some reason (nav issue) - DONE
// Mobile nav change color on tap to indicate that it's being pressed
// Check through Tailwind classes to find if there are any useless ones
// Wrap list items into <ul> for better semantics - DONE
// server side rendered svgs look really big on network tab, maybe make them smaller? Maybe don't need the spans.
// Nav hover kinda differs compared to route based selection
// Typewriter effect breaks on new line on mobiles

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sebastian Meckovski | Web Developer",
    template: "%s | Sebastian Meckovski",
  },
  description: "Portfolio of Sebastian Meckovski – Web Developer.",
  metadataBase: new URL("https://sebastian-meckovski.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  const colorScheme = cookieStore.get("color-scheme");
  const themeAttr = theme && theme.value !== "auto" ? theme.value : undefined;
  const colorSchemeAttr = colorScheme ? colorScheme.value : "cyan";

  // Build html attributes
  const htmlAttrs: Record<string, string> = { lang: "en" };
  if (themeAttr) htmlAttrs["data-theme"] = themeAttr;
  if (colorSchemeAttr) htmlAttrs["data-color-scheme"] = colorSchemeAttr;

  return (
    <html {...htmlAttrs}>
      <body
        className={`${orbitron.variable} antialiased flex min-h-screen flex-col bg-background text-foreground`}
      >
        <header
          className="flex items-center justify-between px-8 2xl:px-[2vw] py-4 2xl:py-[0.6vw] bg-[var(--header-bg)]"
        >
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-lg 2xl:text-[1.2vw] font-semibold mr-2 text-[var(--header-fg)]"
            >
              <span>Sebastian </span>
              <span className="text-[var(--accent)]">Meckovski</span>
            </Link>
          </div>
          <Nav />
          <ThemeMenu />
        </header>
        <main className="container flex-1 px-8 pt-12 pb-10 mx-auto">{children}</main>
        <footer className="py-4 2xl:py-[2vh] text-center text-base 2xl:text-[0.8vw] bg-[var(--header-bg)]">
          © {new Date().getFullYear()} Sebastian Meckovski. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
