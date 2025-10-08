import Link from "next/link";

const Home = () => {
  return (
    <main className="flex grow flex-col justify-around lg:flex-row lg:justify-between">
      {/* Name and photo section */}
      <section className="flex w-full flex-col justify-center gap-4 text-balance lg:w-2/5">
        <h2 className="text-2xl font-semibold lg:text-right">
          ALEJANDRO PEREZ DURAN
        </h2>
        <div className="h-1/2 w-full border border-black">Photo here</div>
        <h2 className="pb-2 text-2xl font-extralight"></h2>
        <h2 className="pb-2 text-2xl font-light">
          Passionate <span className="font-semibold">Frontend Developer</span>{" "}
          who loves bringing ideas to life.
        </h2>
        <h2 className="pb-2 text-xl font-light">
          Let&apos;s collaborate and create something amazing{" "}
          <span className="font-semibold">together!</span>.
        </h2>
      </section>
      {/* Links section */}
      <section className="relative mt-2 flex flex-col items-end justify-center gap-14 text-5xl font-light md:text-6xl lg:text-7xl xl:text-8xl">
        <Link
          href="/about"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          ABOUT
        </Link>
        <Link
          href="/experience"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          EXPERIENCE
        </Link>
        <Link
          href="/projects"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          CONTACT
        </Link>
      </section>
    </main>
  );
};

export default Home;
