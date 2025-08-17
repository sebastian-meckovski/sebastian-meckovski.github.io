import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";
import HeaderPopupButton from "@/components/HeaderPopupButton";

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
  const colorSchemeAttr = colorScheme ? colorScheme.value : "blue";

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
          className="flex items-center justify-between px-8 py-4"
          style={{ background: "var(--header-bg)" }}
        >
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-lg font-semibold"
              style={{ color: "var(--header-fg)" }}
            >
              <span>Sebastian </span>
              <span className="text-[var(--accent)]">Meckovski</span>
            </Link>
            <HeaderPopupButton />
          </div>
          <Nav />
        </header>
        <main className="container flex-1 px-8 py-12 mx-auto">{children}</main>
        <footer className="mt-12 py-8 text-center text-xs bg-[var(--header-bg)]">
          © {new Date().getFullYear()} Sebastian Meckovski. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
