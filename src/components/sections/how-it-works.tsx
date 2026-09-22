import { Reveal } from "../reveal";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Point Waypoint at the Jira your team already runs on. It reads your tickets, dashboards and JQL — nothing leaves this machine until you ask it something.",
  },
  {
    n: "02",
    title: "Ask, or dispatch",
    body: "Ask Copilot about your real issues and it shows the JQL it ran. Or dispatch a Session — Investigate to find the root cause, Fix to implement it — each in its own isolated git worktree on an agent/<KEY> branch, from a written brief you read and edit first.",
  },
  {
    n: "03",
    title: "Review",
    body: "Every write back to Jira — a comment, a state change — waits in a propose-to-approve queue, with the reason it exists on the card, until a person presses approve.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-theme="light"
      className="relative bg-(--color-bg-raised) py-20 text-(--color-fg) md:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Connect, ask, review.
          </h2>
        </Reveal>

        <Reveal
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          stagger={0.08}
        >
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-(--color-border) bg-(--color-bg) p-6"
            >
              <span className="font-mono text-sm text-(--color-accent)">
                {step.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-(--color-fg-muted)">
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
