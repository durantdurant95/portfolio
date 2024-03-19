import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Durant Portfolio",
  description:
    "The place where you can find my latest work and get to know about me.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} text-main bg-background flex h-screen flex-col p-4 md:p-8 lg:p-12`}
      >
        <nav className="flex items-center justify-center gap-4">
          <div className="bg-main h-[1px] grow " />
          <Link className="font-bold" href="/">
            DURANT.DEV
          </Link>
          <div className="bg-main h-[1px] grow" />
        </nav>
        {children}
        <Analytics />
        <SpeedInsights />
        <footer className="flex items-center justify-center gap-6">
          <div className="bg-main h-[1px] w-4" />
          <Link href="https://github.com/durantdurant95">
            <FiGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-dur%C3%A1n-754a8324a/">
            <FiLinkedin />
          </Link>
          <div className="bg-main h-[1px] grow" />
          <p className="text-xs">©/2024</p>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
