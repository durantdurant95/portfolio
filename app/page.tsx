import Link from "next/link";
import { notoSerif } from "./fonts";

const Home = () => {
  return (
    <main className="flex grow flex-col gap-10 md:flex-row">
      {/* Name and photo section */}
      <section className="flex w-full flex-col justify-around md:w-2/5">
        <div className="h-28 w-full border border-black">Photo here</div>
        <div className="">
          {/* <h1
            className={`${notoSerif.className} pb-8 text-2xl font-semibold md:text-5xl`}
          >
            ALEJANDRO PEREZ DURAN
          </h1> */}
          <h2 className="pb-12 text-2xl font-extralight">
            Hello there! 👋, I&apos;m
            <span className="font-medium"> Alejandro</span>
          </h2>
          <h2 className="pb-2 text-2xl font-extralight"></h2>
          <h2 className="pb-2 text-2xl font-extralight">
            Passionate <span className="font-medium">Frontend Developer</span>{" "}
            who loves bringing ideas to life. Let&apos;s collaborate and create
            something amazing together!
          </h2>
          <p></p>
        </div>
      </section>
      {/* //TODO Links section */}
      <section
        className={`${notoSerif.className} flex grow flex-col justify-center gap-4 text-[16vw] font-medium md:text-right md:text-[10vw]`}
      >
        <Link
          href="/about"
          className="transition-all hover:scale-[1.02] hover:font-black"
        >
          ABOUT
        </Link>
        <Link
          href="/work"
          className="transition-all hover:scale-[1.02] hover:font-extrabold"
        >
          WORK
        </Link>
        <Link
          href="/contact"
          className="transition-all hover:scale-[1.02] hover:font-extrabold"
        >
          CONTACT
        </Link>
      </section>
    </main>
  );
};

export default Home;
