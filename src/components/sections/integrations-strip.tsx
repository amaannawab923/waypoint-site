import { Reveal } from "../reveal";

const items = [
  {
    name: "Jira",
    body: "Already on Jira? Waypoint connects to it and works your real issues, side by side with native ones.",
  },
  {
    name: "Claude Code",
    body: "The agent runtime a Session dispatches to for Investigate, Fix, and browser verification.",
  },
  {
    name: "GitHub",
    body: "Sessions open pull requests through the gh CLI, as you, once a proposal is approved.",
  },
];

export function IntegrationsStrip() {
  return (
    <section data-theme="light" className="relative border-t border-(--color-border) bg-(--color-bg) py-16 md:py-20">
      <div className="container-page">
        <Reveal className="mb-10 text-center">
          <p className="micro text-(--color-fg-dim)">Real integrations, not a wall of logos</p>
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.06}>
          {items.map((item) => (
            <div key={item.name} className="rounded-xl border border-(--color-border) p-5">
              <p className="font-mono text-sm font-semibold text-(--color-fg)">
                {item.name}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-(--color-fg-muted)">
                {item.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
