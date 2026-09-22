import { Reveal } from "../reveal";
import { DeviceFrame } from "../device-frame";

const modes = [
  {
    name: "Investigate",
    tagline: "Finds the root cause. Changes nothing.",
    detail:
      "Reads the code and the ticket, works out what's actually wrong, and reports back — including when the answer is “not a bug.”",
  },
  {
    name: "Fix",
    tagline: "Implements it, in its own worktree.",
    detail:
      "Makes the change on its own agent/<KEY> branch, verifies it, and hands the result to Review — nothing lands without a person approving it.",
  },
];

export function Sessions() {
  return (
    <section
      id="sessions"
      className="relative border-t border-(--color-border-soft) bg-(--color-bg) py-24 md:py-32"
    >
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-accent) uppercase">
            Sessions
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A session per ticket, in its own worktree.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
            Dispatch a session on any ticket and watch it live. Each one runs
            isolated — its own git worktree, its own branch — starting from a
            brief you read and can edit before anything runs.
          </p>

          <div className="mt-9 space-y-6">
            {modes.map((mode) => (
              <div
                key={mode.name}
                className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-5"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-lg font-semibold">
                    {mode.name}
                  </h3>
                  <span className="font-mono text-xs text-(--color-fg-dim)">
                    {mode.tagline}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                  {mode.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <DeviceFrame
            src="/shots/sessions-list.jpg"
            alt="Waypoint's My sessions list: Investigate and Fix runs, each on its own agent/<ticket-key> branch, with proposals waiting for review."
            label="waypoint.local/sessions"
          />
        </Reveal>
      </div>
    </section>
  );
}
