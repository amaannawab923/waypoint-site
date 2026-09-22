import { Reveal } from "../reveal";

export function Problem() {
  return (
    <section className="relative border-t border-(--color-border-soft) bg-(--color-bg) py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-fg-dim) uppercase">
            The problem
          </p>
          <p className="font-display mt-6 text-2xl leading-snug text-balance text-(--color-fg) sm:text-3xl md:text-[2.15rem]">
            Every PM tool promises an AI layer now. Most of them are a chat
            window bolted onto a database that doesn&rsquo;t know your tickets
            exist — it can talk about your work, but it can&rsquo;t read it, act on
            it, or wait for you to say yes. Waypoint connects to the Jira your
            team already runs on, reads the tickets, dashboards and history
            that are already there, and puts every write — a comment, a state
            change, a fix — behind a person pressing approve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
