import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./globals.css";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durant Portfolio",
  description: "A place to display my latest work and projects.",
};
//Coment here just for fun

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.className} flex h-screen flex-col p-4 md:p-8 lg:p-12`}
      >
        <nav className="flex items-center justify-center gap-4">
          <div className="h-[1px] grow bg-black " />
          <Link href="/">Durant</Link>
          <div className="h-[1px] grow bg-black" />
        </nav>
        {children}
        <Analytics />
        <SpeedInsights />
        <footer className="flex items-center justify-center gap-6">
          <div className="h-[1px] w-4 bg-black" />
          <Link href="https://github.com/durantdurant95">
            <FiGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-dur%C3%A1n-754a8324a/">
            <FiLinkedin />
          </Link>
          <div className="h-[1px] grow bg-black" />
          <p className="text-xs">©/2024</p>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
