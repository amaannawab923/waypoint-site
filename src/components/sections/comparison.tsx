import { Reveal } from "../reveal";

const rows = [
  {
    is: "A real tracker with its own tickets, sprints, and board.",
    isnt: "A chat window bolted onto someone else's database.",
  },
  {
    is: "Local-first — the backend runs on your machine.",
    isnt: "A hosted SaaS holding your data on our servers.",
  },
  {
    is: "Agents that propose changes for a person to approve.",
    isnt: "Agents that push straight to your tracker or your code.",
  },
  {
    is: "One native desktop app for the whole workflow.",
    isnt: "A browser tab pretending to be a product.",
  },
  {
    is: "Connected to Jira, if you already run one.",
    isnt: "Built to be a Jira reskin.",
  },
];

export function Comparison() {
  return (
    <section data-theme="light" className="relative border-t border-(--color-border) bg-(--color-bg-raised) py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Plainly put</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-(--color-fg) md:text-4xl">
            What Waypoint is — and isn&rsquo;t.
          </h2>
        </Reveal>

        <Reveal className="mt-12 mx-auto max-w-3xl">
          <div className="panel-frame overflow-hidden">
            <div className="grid grid-cols-2 border-b border-(--color-border)">
              <p className="px-5 py-3 text-xs font-medium tracking-wide text-(--color-accent) uppercase sm:px-6">
                It is
              </p>
              <p className="border-l border-(--color-border) px-5 py-3 text-xs font-medium tracking-wide text-(--color-fg-dim) uppercase sm:px-6">
                It is not
              </p>
            </div>
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i > 0 ? "border-t border-(--color-border)" : ""}`}
              >
                <p className="px-5 py-4 text-sm leading-relaxed text-(--color-fg) sm:px-6">
                  {row.is}
                </p>
                <p className="border-l border-(--color-border) px-5 py-4 text-sm leading-relaxed text-(--color-fg-muted) sm:px-6">
                  {row.isnt}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
