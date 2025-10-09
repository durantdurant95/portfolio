import Link from "next/link";
import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <main className="flex grow flex-col gap-8 md:gap-10 lg:flex-row lg:gap-12">
      <section className="flex grow items-center justify-center border border-celtic-950 lg:w-1/2">
        <div className="text-center text-celtic-600">photo here</div>
      </section>
      <section className="flex flex-col justify-center gap-6 lg:w-1/2 lg:gap-7">
        <h1 className="text-5xl font-light text-celtic-800 md:text-6xl lg:text-7xl">
          Hello 👋
        </h1>
        <p className="text-balance text-lg leading-relaxed  md:text-xl">
          I specialize in building high-quality web applications — from
          interactive dashboards and embeddable components to complete project
          management platforms. Let&apos;s create something exceptional that
          delivers real value to your users.
        </p>
        <p className="text-balance text-lg leading-relaxed  md:text-xl">
          Currently available for remote opportunities worldwide. Fluent in{" "}
          <span className="font-semibold">English</span> and{" "}
          <span className="font-semibold">Spanish</span>.
        </p>
        <p className="text-balance text-lg leading-relaxed  md:text-xl">
          Ready to collaborate? Let&apos;s connect and discuss your next
          project.
        </p>

        <div className="flex flex-col gap-4 pt-2">
          <Link
            href="/Alejandro_Perez_Duran_CV.pdf"
            download
            className="relative flex w-fit items-center gap-2 p-1 text-base font-semibold transition-all duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:duration-300 md:text-lg"
          >
            <FiFileText className="h-5 w-5" />
            Download my CV
          </Link>
          <Link
            href="mailto:apduran95@gmail.com"
            className="relative flex w-fit items-center gap-2 p-1 text-base font-semibold transition-all duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:duration-300 md:text-lg"
          >
            <FiMail className="h-5 w-5" />
            apduran95@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-dur%C3%A1n-754a8324a/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex w-fit items-center gap-2 p-1 text-base font-semibold transition-all duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:duration-300 md:text-lg"
          >
            <FiLinkedin className="h-5 w-5" />
            Connect on LinkedIn
          </Link>
          <Link
            href="https://github.com/durantdurant95"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex w-fit items-center gap-2 p-1 text-base font-semibold transition-all duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:duration-300 md:text-lg"
          >
            <FiGithub className="h-5 w-5" />
            View my GitHub
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
