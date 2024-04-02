import { notoSerif } from "../fonts";

const Work = () => {
  return (
    <main className="flex grow flex-col gap-10 md:flex-row">
      <p className={`${notoSerif.className}`}>My work</p>
    </main>
  );
};

export default Work;
