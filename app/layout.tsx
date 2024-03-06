import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durant Portfolio",
  description: "A place to display my latest work and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} flex h-screen flex-col p-4`}>
        <nav className="flex items-center justify-center gap-4">
          <div className="h-[1px] grow bg-black " />
          <Link href="/">Durant</Link>
          <div className="h-[1px] grow bg-black" />
        </nav>
        {children}
        <footer className="flex items-center justify-center gap-4">
          {/* //TODO: Add real links to social media */}
          <Link href="/work">Work</Link>
          <Link href="/work">Work</Link>
          <Link href="/work">Work</Link>
          <div className="h-[1px] grow bg-black" />
        </footer>
      </body>
    </html>
  );
}
