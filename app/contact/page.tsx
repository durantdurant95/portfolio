import Link from "next/link";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="flex grow gap-8">
      <section className="border-main w-1/2 grow border">
        <div>photo here</div>
      </section>
      <section className="flex w-1/2 flex-col justify-center gap-8">
        <h1 className="text-[6vw]">Hello 👋</h1>
        <p className="mr-2 text-balance text-xl leading-relaxed">
          I craft websites that are not only visually appealing but also
          intuitive and user-friendly. Let&apos;s create a website that your
          visitors will love using! Get in touch today.
        </p>
        <Link
          href="/Alejandro_Resume.pdf"
          download
          className="relative flex h-8 w-52 items-center gap-2 p-1 text-lg font-semibold transition duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:transform before:hover:duration-300"
        >
          <FiFileText className="h-5 w-5 pl-1" />
          Download my CV
        </Link>
        <Link
          href="mailto:apduran95@gmail.com"
          className="relative flex h-8 w-64 items-center gap-2 p-1 text-lg font-semibold transition duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:transform before:hover:duration-300"
        >
          <FiMail className="h-5 w-5 pl-1" />
          apduran95@gmail.com
        </Link>
        <Link
          href="tel:+5358184065"
          className="relative flex h-8 w-44 items-center gap-2 p-1 text-lg font-semibold transition duration-300 ease-in-out before:absolute before:bottom-1 before:left-0 before:-z-10 before:h-[6px] before:w-full before:bg-celtic-300 hover:scale-[1.02] before:hover:h-7 before:hover:transform before:hover:duration-300"
        >
          <FiPhone className="h-5 w-5 pl-1" />
          +53 58 18 40 65
        </Link>
      </section>
    </main>
  );
};

export default Contact;
