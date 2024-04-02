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
        className={`${montserrat.className} text-celtic-950 bg-celtic-50 flex min-h-screen flex-col justify-center bg-opacity-30 p-4 md:h-screen md:p-6 lg:p-8 xl:p-12 2xl:p-16`}
      >
        <nav className="flex items-center justify-center gap-4">
          <div className="bg-celtic-950 h-[1px] grow" />
          <Link
            className="before:bg-celtic-300 relative inline-block p-1 font-bold transition duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-1 before:w-full hover:scale-[1.02] hover:uppercase before:hover:h-5 before:hover:transform before:hover:duration-300"
            href="/"
          >
            DURANT.DEV
          </Link>
          <div className="bg-celtic-950 h-[1px] grow" />
        </nav>
        {children}
        <Analytics />
        <SpeedInsights />
        <footer className="flex items-center justify-center gap-6">
          <div className="bg-celtic-950 h-[1px] w-4" />
          <Link
            href="https://github.com/durantdurant95"
            className="before:bg-celtic-300 relative inline-block h-8 w-8 p-1 font-bold transition duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[10px] before:w-full hover:scale-[1.02] hover:uppercase before:hover:h-7 before:hover:transform before:hover:duration-300"
          >
            <FiGithub className="h-5 w-5 pl-1" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-dur%C3%A1n-754a8324a/"
            className="before:bg-celtic-300 relative inline-block h-8 w-8 p-1 font-bold transition duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[10px] before:w-full hover:scale-[1.02] hover:uppercase before:hover:h-7 before:hover:transform before:hover:duration-300"
          >
            <FiLinkedin className="h-5 w-5 pl-1" />
          </Link>
          <div className="bg-celtic-950 h-[1px] grow" />
          <p className="text-xs">©/2024</p>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
