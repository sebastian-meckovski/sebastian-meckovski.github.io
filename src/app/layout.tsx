import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";
import ThemeMenu from "@/components/ThemeMenu";
import Script from "next/script";

// Todo:
// Move nav logic here (no need to have Nav component)
// Check through Tailwind classes to find if there are any useless ones
// server side rendered svgs look really big on network tab, maybe make them smaller? Maybe don't need the spans.

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300"],
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

  const tawkPropertyId = process.env.TAWK_TO_PROPERTY_ID;
  const tawkWidgetId = process.env.TAWK_TO_WIDGET_ID;

  return (
    <html {...htmlAttrs}>
      <body
        className={[
          `${unbounded.variable}`,
          // Rendering
          "antialiased",
          // Layout
          "flex min-h-screen flex-col",
          // Appearance
          "bg-background text-foreground",
        ].join(" ")}
      >
        <header
          className={[
            // Layout
            "flex items-center justify-between",
            // Spacing
            "px-8 2xl:px-[2vw] py-4 2xl:py-[0.6vw]",
            // Appearance
            "bg-[var(--foreground)]/5",
          ].join(" ")}
        >
          <div className="flex items-center gap-2 2xl:gap-[1vw]">
            <Link
              href="/"
              className="text-xl md:text-2xl 2xl:text-[1.6vw] font-semibold mr-2"
            >
              <span>Sebastian </span>
              <span className="text-[var(--accent)] transition-colors duration-150 md:duration-300 ease-out">
                Meckovski
              </span>
            </Link>
          </div>
          <Nav />
          <ThemeMenu />
        </header>
        <main
          className={[
            // Layout
            "container flex-1 mx-auto",
            // Spacing
            "px-8 2xl:px-[2vw] pt-8 2xl:pt-[4vh]",
            // Sizing
            "max-w-2xl 2xl:max-w-[55vw]",
          ].join(" ")}
        >
          {children}
        </main>
        <footer
          className={[
            // Spacing
            "py-4 2xl:py-[2vh] mt-6 2xl:mt-[3vh] px-8 2xl:px-[2vw]",
            // Typography
            "text-xs 2xl:text-[0.8vw] text-center",
            // Appearance
            "bg-[var(--foreground)]/5",
          ].join(" ")}
        >
          © {new Date().getFullYear()} Sebastian Meckovski. Designed with
          passion.
        </footer>
        
        {tawkPropertyId && tawkWidgetId ? (
          <Script
            src={`https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`}
            strategy="lazyOnload"
          />
        ) : null}
      </body>
    </html>
  );
}
