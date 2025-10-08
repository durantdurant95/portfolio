import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex grow flex-col gap-8 md:flex-row">
      <section className="flex flex-col gap-5 md:w-1/2">
        <h1 className="text-[6vw]">ABOUT ME</h1>
        <h2 className="text-2xl font-semibold">I&apos;m Alejandro 👋</h2>
        <h2 className="text-2xl font-semibold">
          Engineer, Web Developer and competent Problem Solver 💡
        </h2>
        <p>
          Born and raised in Cuba 🇨🇺, I graduated as an Automatic Engineer from
          the Universidad Central &quot;Marta Abreu&quot; de Las Villas (UCLV).
          While studying, I discovered a passion for web development and
          actively participated in open source projects.
        </p>
        <p>
          A die-hard Boston Celtics 🍀 fan (notice the green all over), I
          understand the importance of teamwork. Just like on the court, where
          success relies on seamless collaboration, clear communication, and
          individual strengths complementing each other, I excel in working with
          teams. I value both proficiency and proactive problem-solving,
          constantly seeking out new technologies to build exceptional web
          experiences, just like the Celtics strive for that next championship.
        </p>
        <p>
          Like any other engineer, I value well-crafted machinery, so my passion
          for crafting exceptional code is akin to building a meticulously
          designed Swiss watch. Just like each intricate component within the
          watch works together seamlessly, my code prioritizes clarity,
          structure, and reusability. This ensures not only a high-performing
          product today, but also a well-oiled machine ready for future
          enhancements and adaptations.
        </p>
        <p>
          I bring more than just technical expertise to the table. My
          collaborative spirit, meticulous attention to detail, and constant
          drive to learn new technologies make me a valuable asset to any
          project. I&apos;m a strong believer in open communication and
          fostering a positive team environment, ensuring a smooth development
          process and exceptional results.
        </p>
        <p>
          Are you looking for a skilled and passionate front-end developer?
          <Link
            className="relative ml-3 inline-block p-1 font-bold transition duration-300 ease-in-out before:absolute before:bottom-2 before:left-0 before:-z-10 before:h-1 before:w-full before:bg-celtic-300 hover:scale-[1.02] hover:uppercase before:hover:h-5 before:hover:transform before:hover:duration-300"
            href="/contact"
          >
            Let&apos;s connect!
          </Link>
        </p>
      </section>
      <section className="border-main grow border">
        <div>photo here</div>
      </section>
    </main>
  );
}
