import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex grow flex-col gap-8 md:gap-10 lg:flex-row lg:gap-12">
      <section className="flex flex-col gap-6 lg:w-1/2 lg:gap-7">
        <h1 className="text-4xl font-light md:text-5xl lg:text-6xl">
          ABOUT ME
        </h1>
        <h2 className="text-xl font-semibold md:text-2xl">
          I&apos;m Alejandro 👋
        </h2>
        <h2 className="text-xl font-semibold md:text-2xl">
          Engineer, Web Developer and competent Problem Solver 💡
        </h2>
        <p className="leading-relaxed text-celtic-900">
          Born and raised in Cuba 🇨🇺, I graduated as an Automation Engineer from
          the Universidad Central &quot;Marta Abreu&quot; de Las Villas (UCLV).
          While studying, I discovered a passion for web development and
          actively participated in open source projects.
        </p>
        <p className="leading-relaxed text-celtic-900">
          With a proven track record of delivering high-quality work on time,
          I&apos;ve had the opportunity to work remotely with companies across
          the globe — from the USA to Chile, Uruguay, and beyond. I thrive in
          Agile environments, where collaboration, iterative development, and
          continuous improvement are at the core of every sprint.
        </p>
        <p className="leading-relaxed text-celtic-900">
          A die-hard Boston Celtics 🍀 fan (notice the green all over), I
          understand the importance of teamwork. Just like on the court, where
          success relies on seamless collaboration, clear communication, and
          individual strengths complementing each other, I excel in working with
          teams. Whether it&apos;s mentoring developers, participating in code
          reviews, or contributing to technical documentation, I believe in
          fostering a positive team environment.
        </p>
        <p className="leading-relaxed text-celtic-900">
          Like any other engineer, I value well-crafted machinery, so my passion
          for crafting exceptional code is akin to building a meticulously
          designed Swiss watch. Just like each intricate component within the
          watch works together seamlessly, my code prioritizes clarity,
          structure, and reusability. This ensures not only a high-performing
          product today, but also a well-oiled machine ready for future
          enhancements and adaptations.
        </p>
        <p className="leading-relaxed text-celtic-900">
          I bring more than just technical expertise to the table. My
          collaborative spirit, meticulous attention to detail, and constant
          drive to learn new technologies make me a valuable asset to any
          project. From building dashboards and embeddable components to
          establishing CI/CD pipelines and modern UI systems, I&apos;m committed
          to delivering exceptional results that stand the test of time.
        </p>
        <p className="leading-relaxed text-celtic-900">
          Are you looking for a skilled and passionate web developer?
          <Link
            className="relative ml-3 inline-block p-1 font-bold transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-1 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:uppercase before:hover:h-5 before:hover:duration-300"
            href="/contact"
          >
            Let&apos;s connect!
          </Link>
        </p>
      </section>
      <section className="flex grow items-center justify-center border border-celtic-950">
        <div className="text-center text-celtic-600">photo here</div>
      </section>
    </main>
  );
}
