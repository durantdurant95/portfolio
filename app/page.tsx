import Link from "next/link";
import { notoSerif } from "./fonts";

const Home = () => {
  return (
    <main className="flex grow flex-col gap-10 md:flex-row">
      {/* Name and photo section */}
      <section className="flex w-full flex-col justify-center gap-4 text-balance md:w-2/5">
        <h2 className="text-right text-2xl font-semibold">
          ALEJANDRO PEREZ DURAN
        </h2>
        <div className="h-1/2 w-full border border-black">Photo here</div>
        <h2 className="pb-2 text-2xl font-extralight"></h2>
        <h2 className="pb-2 text-2xl font-light">
          Passionate <span className="font-medium">Frontend Developer</span> who
          loves bringing ideas to life. Let&apos;s collaborate and create
          something amazing together!
        </h2>
        <h2 className="pb-2 text-xl font-light">
          Currently working fulltime at{" "}
          <span className="font-medium">Datamart</span> and part-time as a{" "}
          <span className="font-medium">Freelancer</span>.
        </h2>
      </section>
      {/* Links section */}
      <section
        className={`${notoSerif.className} flex grow flex-col items-end justify-center gap-10 text-7xl font-medium lg:text-8xl xl:text-9xl`}
      >
        <Link
          href="/about"
          className="before:bg-celtic-300 relative ml-3 p-1 font-bold transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          ABOUT
        </Link>
        <Link
          href="/work"
          className="before:bg-celtic-300 relative ml-3 p-1 font-bold transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          EXPERIENCE
        </Link>
        <Link
          href="/contact"
          className="before:bg-celtic-300 relative ml-3 p-1 font-bold transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className="before:bg-celtic-300 relative ml-3 p-1 font-bold transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          CONTACT
        </Link>
      </section>
    </main>
  );
};

export default Home;
