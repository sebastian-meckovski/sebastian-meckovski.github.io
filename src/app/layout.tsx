import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sebastian Meckovski | Web Developer",
    template: "%s | Sebastian Meckovski",
  },
  description: "Portfolio of Sebastian Meckovski – Web Developer.",
  metadataBase: new URL("https://sebastian-meckovski.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-background text-foreground`}
      >
        <header className="flex items-center justify-between px-8 py-4 border-b border-foreground/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            <span>Sebastian </span>
            <span className="text-accent">Meckovski</span>
          </Link>
          <Nav />
        </header>
        <main className="flex-1 px-8 py-12 max-w-5xl w-full mx-auto">
          {children}
        </main>
        <footer className="mt-12 py-8 text-center text-xs text-foreground/70 border-t border-foreground/10">
          © {new Date().getFullYear()} Sebastian Meckovski. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
