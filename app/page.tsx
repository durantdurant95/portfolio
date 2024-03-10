import Link from "next/link";

const Home = () => {
  return (
    <main className="flex grow gap-10">
      {/* Name and photo section */}
      <section className="w-2/5">
        <div className="h-28 w-full border border-black">Photo here</div>
        <h1>ALEJANDRO PEREZ DURAN</h1>
        <h2>Frontend Developer</h2>
        <p>Currently working fulltime as a Frontend Developer at Datamart</p>
      </section>
      {/* //TODO Links section */}
      <section className="flex flex-col justify-around gap-4">
        <Link href="/about">ABOUT</Link>
        <Link href="/work">WORK</Link>
        <Link href="/contact">CONTACT</Link>
      </section>
    </main>
  );
};

export default Home;
