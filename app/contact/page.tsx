import Link from "next/link";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <main className="flex grow flex-col gap-8 md:gap-10 lg:flex-row lg:gap-12">
      <section className="flex grow items-center justify-center border border-celtic-950 lg:w-1/2">
        <div className="text-center text-celtic-600">photo here</div>
      </section>
      <section className="flex flex-col justify-center gap-6 lg:w-1/2 lg:gap-7">
        <h1 className="text-5xl font-light md:text-6xl lg:text-7xl">Hello 👋</h1>
        <p className="text-balance text-lg leading-relaxed text-celtic-900 md:text-xl">
          I craft websites that are not only visually appealing but also
          intuitive and user-friendly. Let&apos;s create a website that your
          visitors will love using!
        </p>
        <p className="text-balance text-lg leading-relaxed text-celtic-900 md:text-xl">
          Get in touch today.
        </p>

        <div className="flex flex-col gap-4 pt-2">
          <Link
            href="/Alejandro_Resume.pdf"
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
            href="tel:+5358184065"
            className="relative flex w-fit items-center gap-2 p-1 text-base font-semibold transition-all duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:duration-300 md:text-lg"
          >
            <FiPhone className="h-5 w-5" />
            +53 58 18 40 65
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
