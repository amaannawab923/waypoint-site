import { Reveal } from "../reveal";

export function Problem() {
  return (
    <section
      data-theme="light"
      className="relative bg-(--color-bg) py-20 text-(--color-fg) md:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">The problem</p>
          <p className="text-xl leading-relaxed text-balance text-(--color-fg) sm:text-2xl md:text-[1.65rem] md:leading-[1.5]">
            Every PM tool promises an AI layer now. Most of them are a chat
            window bolted onto a database that doesn&rsquo;t know your
            tickets exist — it can talk about your work, but it can&rsquo;t
            read it, act on it, or wait for you to say yes. Waypoint connects
            to the Jira your team already runs on, reads the tickets,
            dashboards and history that are already there, and puts every
            write behind a person pressing approve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
