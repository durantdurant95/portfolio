import { Montserrat } from "next/font/google";
import Link from "next/link";

const sourceCodePro = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="flex grow flex-col gap-10 md:flex-row">
      {/* Name and photo section */}
      <section
        className={` ${sourceCodePro.className} flex w-full flex-col justify-center gap-10 md:w-2/5`}
      >
        <div className="h-28 w-full border border-black">Photo here</div>
        <div className="">
          <h1 className="pb-8 text-2xl font-bold md:text-4xl">
            Alejandro Perez Duran
          </h1>
          <h2 className="pb-2 text-2xl font-extralight">
            Hello there! 👋 I&apos;m a passionate Frontend Developer who loves
            bringing ideas to life. Let&apos;s collaborate and create something
            amazing together!
          </h2>
          <p></p>
        </div>
      </section>
      {/* //TODO Links section */}
      <section className="flex grow flex-col justify-center gap-4 md:text-right">
        <Link href="/about" className="text-[16vw] md:text-[10vw]">
          ABOUT
        </Link>
        <Link href="/work" className="text-[16vw] md:text-[10vw]">
          WORK
        </Link>
        <Link href="/contact" className="text-[16vw] md:text-[10vw]">
          CONTACT
        </Link>
      </section>
    </main>
  );
};

export default Home;
