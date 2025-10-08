const Experience = () => {
  return (
    <main className="flex grow flex-col gap-8 overflow-y-auto">
      <h1 className="text-[6vw]">EXPERIENCE</h1>

      {/* GapAI */}
      <section className="flex flex-col gap-4 border-l-4 border-celtic-300 pl-6">
        <div>
          <h2 className="text-2xl font-semibold">Frontend Developer</h2>
          <h3 className="text-xl font-medium text-celtic-700">GapAI</h3>
          <p className="text-sm text-celtic-600">
            Florida, USA (Remote) • Apr 2025 - Aug 2025
          </p>
        </div>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Built from scratch a Project-as-a-Service dashboard in Next.js
            enabling users to create and manage projects, workflows, and
            resources.
          </li>
          <li>
            Established a modern UI system with Tailwind CSS and shadcn/ui;
            implemented reusable component patterns and accessible UI.
          </li>
          <li>
            Orchestrated data fetching and caching with TanStack Query;
            integrated internal and third-party REST APIs; validated
            integrations with Postman.
          </li>
          <li>
            Delivered a Next.js site powered by Prismic CMS, designing reusable
            slices and content models so clients could compose sites from a
            shared slice library.
          </li>
          <li>
            Collaborated with product, design, and backend; contributed to
            reviews and documentation to support client self-serve usage.
          </li>
        </ul>
        <p className="text-sm font-medium">
          <span className="font-semibold">Tech:</span> Next.js, TypeScript,
          JavaScript (ES6+), Tailwind CSS, shadcn/ui, TanStack Query, REST APIs,
          Postman, Prismic CMS, GitHub, Visual Studio Code.
        </p>
      </section>

      {/* Middlesoft */}
      <section className="flex flex-col gap-4 border-l-4 border-celtic-300 pl-6">
        <div>
          <h2 className="text-2xl font-semibold">Frontend Developer</h2>
          <h3 className="text-xl font-medium text-celtic-700">Middlesoft</h3>
          <p className="text-sm text-celtic-600">
            Montevideo, Uruguay (Remote) • Oct 2024 - Jan 2025
          </p>
        </div>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Built and maintained responsive internal dashboards with Next.js and
            Tailwind CSS to streamline operations and surface actionable
            insights.
          </li>
          <li>
            Managed state with Zustand and implemented efficient data fetching
            and caching via TanStack Query.
          </li>
          <li>
            Integrated REST services from a .NET backend and collaborated via
            Azure DevOps CI/CD pipelines.
          </li>
          <li>
            Created reusable UI components and interactive charts with
            Highcharts; optimized for performance and responsiveness.
          </li>
          <li>
            Worked cross-functionally; participated in sprints, code reviews,
            and continuous improvement under Agile (Scrum).
          </li>
        </ul>
        <p className="text-sm font-medium">
          <span className="font-semibold">Tech:</span> Next.js, TypeScript,
          JavaScript (ES6+), Tailwind CSS, Zustand, TanStack Query, Highcharts,
          REST, .NET, Azure DevOps, GitHub, Visual Studio Code, Postman, Azure
          App Services.
        </p>
      </section>

      {/* Datamart */}
      <section className="flex flex-col gap-4 border-l-4 border-celtic-300 pl-6">
        <div>
          <h2 className="text-2xl font-semibold">Lead Frontend Developer</h2>
          <h3 className="text-xl font-medium text-celtic-700">Datamart</h3>
          <p className="text-sm text-celtic-600">
            Santiago, Chile (Remote) • Feb 2023 - Sep 2024
          </p>
        </div>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Led frontend for embeddable banking experiences and internal
            dashboard tooling with a focus on performance and customization.
          </li>
          <li>
            Delivered lightweight web components using Preact and Material UI;
            built complex React apps with TypeScript.
          </li>
          <li>
            Modeled complex workflows using XState and managed app state with
            Redux Toolkit.
          </li>
          <li>
            Integrated GraphQL (AWS Lambda) and REST APIs; improved reliability
            of data fetching and error handling.
          </li>
          <li>
            Established and improved CI/CD (GitHub Actions); mentored developers
            and drove best practices.
          </li>
          <li>
            Managed private dependencies with AWS CodeArtifact; collaborated
            across teams under Agile (Scrum).
          </li>
        </ul>
        <p className="text-sm font-medium">
          <span className="font-semibold">Tech:</span> Preact, React,
          TypeScript, JavaScript (ES6+), Material UI, Ant Design, Redux Toolkit,
          XState, GraphQL, REST, AWS Lambda, AWS CodeArtifact, GitHub Actions,
          Visual Studio Code, Postman, AWS Infrastructure.
        </p>
      </section>

      {/* Smerida */}
      <section className="flex flex-col gap-4 border-l-4 border-celtic-300 pl-6">
        <div>
          <h2 className="text-2xl font-semibold">Frontend Developer</h2>
          <h3 className="text-xl font-medium text-celtic-700">Smerida</h3>
          <p className="text-sm text-celtic-600">
            Florida, USA (Remote) • Jan 2022 - Dec 2022
          </p>
        </div>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Delivered customer-facing interfaces with Next.js and React in an
            MVC-inspired structure for clarity and scalability.
          </li>
          <li>
            Built reusable components and integrated REST APIs; focused on
            responsive, accessible UI and performance.
          </li>
          <li>
            Collaborated with backend engineers on API integration and
            debugging; contributed to reviews and documentation.
          </li>
        </ul>
        <p className="text-sm font-medium">
          <span className="font-semibold">Tech:</span> Next.js, React,
          TypeScript, JavaScript (ES6+), REST APIs, Visual Studio Code, GitHub,
          Postman.
        </p>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-4 border-l-4 border-celtic-300 pl-6">
        <div>
          <h2 className="text-2xl font-semibold">Education</h2>
          <h3 className="text-xl font-medium text-celtic-700">
            Universidad Central &quot;Marta Abreu&quot; de Las Villas
          </h3>
          <p className="text-sm text-celtic-600">
            Villa Clara, Cuba • Graduated Dec 2021
          </p>
        </div>
        <p className="pl-6">Automation Engineering</p>
        <p className="pl-6 text-sm italic">
          Diploma Thesis: Reducción de artefactos de endurecimiento del haz de
          rayos X en imágenes de tomografía computarizada.
        </p>
      </section>
    </main>
  );
};

export default Experience;
