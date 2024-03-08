import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
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
        <SpeedInsights />
        <footer className="flex items-center justify-center gap-6">
          {/* //TODO: Add real links to social media */}
          <div className="h-[1px] w-4 bg-black" />
          <Link href="https://github.com/durantdurant95">
            <FiGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-dur%C3%A1n-754a8324a/">
            <FiLinkedin />
          </Link>
          <div className="h-[1px] grow bg-black" />
        </footer>
      </body>
    </html>
  );
}
