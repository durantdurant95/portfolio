import Link from "next/link";

const Projects = () => {
  return (
    <main className="flex grow flex-col justify-around gap-10 md:flex-row md:justify-between">
      <section className="flex w-full flex-col justify-center gap-10 lg:w-2/5">
        <h1 className="text-bold text-5xl lg:text-right">
          Bringing Ideas to Life
        </h1>
        <p className="text-xl font-light">
          A sample of the latest projects I&apos;ve worked on. Pixel-perfect
          experiences start here. Explore my work and see how can I become a
          valuable asset to your team.
        </p>
        <p className="text-xl font-light">
          I craft user interfaces that are both beautiful and functional while
          always seeking to push the boundaries of web design with clean,
          responsive code.
        </p>
      </section>
      <section className="relative mt-2 flex flex-col items-end justify-center gap-14 text-4xl font-light md:text-6xl lg:text-7xl xl:text-8xl">
        <Link
          href="/about"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          Project 1
        </Link>
        <Link
          href="/experience"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          Project 2
        </Link>
        <Link
          href="/projects"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          Project 3
        </Link>
        <Link
          href="/contact"
          className="relative ml-3 p-1 transition-all duration-300 ease-in-out before:absolute before:bottom-3 before:left-0 before:-z-10 before:h-4 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:font-extrabold before:hover:h-20 before:hover:transform before:hover:duration-300  lg:before:hover:h-24 xl:before:hover:h-32"
        >
          Project 4
        </Link>
      </section>
    </main>
  );
};

export default Projects;
