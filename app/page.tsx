import Link from "next/link";

const Home = () => {
  return (
    <main className="flex grow flex-col justify-around gap-8 lg:flex-row lg:justify-between lg:gap-12">
      {/* Name and photo section */}
      <section className="flex w-full flex-col justify-center gap-6 text-balance lg:w-2/5">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-right lg:text-2xl xl:text-3xl">
          ALEJANDRO PEREZ DURAN
        </h1>
        <div className="aspect-square w-full border border-celtic-950 md:aspect-video lg:aspect-square">
          <div className="flex h-full w-full items-center justify-center text-celtic-600">
            Photo here
          </div>
        </div>
        <h2 className="text-xl font-light md:text-2xl lg:text-xl xl:text-2xl">
          Passionate <span className="font-semibold">Frontend Developer</span>{" "}
          who loves bringing ideas to life.
        </h2>
        <h2 className="text-lg font-light md:text-xl lg:text-lg xl:text-xl">
          Let&apos;s collaborate and create something amazing{" "}
          <span className="font-semibold">together!</span>
        </h2>
      </section>

      {/* Links section */}
      <section className="relative flex flex-col items-start justify-center gap-8 text-5xl font-light md:items-end md:gap-10 md:text-6xl lg:gap-12 lg:text-7xl xl:gap-14 xl:text-8xl">
        <Link
          href="/about"
          className="relative p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-16 before:hover:duration-300 md:before:bottom-3 md:before:h-4 md:before:hover:h-20 lg:before:hover:h-24 xl:before:hover:h-32"
        >
          ABOUT
        </Link>
        <Link
          href="/experience"
          className="relative p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-16 before:hover:duration-300 md:before:bottom-3 md:before:h-4 md:before:hover:h-20 lg:before:hover:h-24 xl:before:hover:h-32"
        >
          EXPERIENCE
        </Link>
        <Link
          href="/projects"
          className="relative p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-16 before:hover:duration-300 md:before:bottom-3 md:before:h-4 md:before:hover:h-20 lg:before:hover:h-24 xl:before:hover:h-32"
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className="relative p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-16 before:hover:duration-300 md:before:bottom-3 md:before:h-4 md:before:hover:h-20 lg:before:hover:h-24 xl:before:hover:h-32"
        >
          CONTACT
        </Link>
      </section>
    </main>
  );
};

export default Home;
