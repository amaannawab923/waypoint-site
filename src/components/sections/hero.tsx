import { GitHubCta } from "../github-cta";

const rows = [
  { kind: "Investigate", label: "Root cause found in the scroll handler", meta: "4m" },
  { kind: "Fix", label: "Filter-change race resolved, 42 tests pass", meta: "9m" },
  { kind: "Verify", label: "Checked in a browser · 4 frames", meta: "14s" },
];

/**
 * Full-bleed opener: the statement alone on a near-black ground, then the
 * product itself directly under it. Animated with plain CSS, never GSAP —
 * a rAF-driven tween's "from" state can be left stranded in a fresh tab,
 * which once left this very headline invisible. A CSS keyframe is
 * scheduled by the compositor and always resolves; reduced motion renders
 * the final frame immediately via the global override in globals.css.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        style={{ "--tilt": "-11deg" } as React.CSSProperties}
        className="aura-float absolute top-56 left-8 hidden size-36 rounded-3xl border border-white/60 bg-white/55 p-4 shadow-[0_20px_45px_rgba(21,19,43,0.08)] backdrop-blur-xl lg:flex lg:flex-col xl:left-16"
      >
        <span className="micro text-(--color-fg-dim)">worktree</span>
        <span className="mt-auto font-mono text-[0.72rem] leading-snug text-(--color-fg)">
          agent/WP-77
        </span>
        <span className="font-mono text-[0.65rem] text-(--color-fg-dim)">
          isolated
        </span>
      </div>

      <div
        aria-hidden
        style={{ "--tilt": "9deg" } as React.CSSProperties}
        className="aura-float aura-float--slow absolute top-40 right-8 hidden size-32 flex-col justify-between rounded-3xl border border-white/60 bg-white/55 p-4 shadow-[0_20px_45px_rgba(21,19,43,0.08)] backdrop-blur-xl lg:flex xl:right-16"
      >
        <span className="micro text-(--color-fg-dim)">verified</span>
        <span className="font-mono text-2xl text-(--color-ok)">13.9s</span>
        <span className="font-mono text-[0.65rem] text-(--color-fg-dim)">
          4 frames
        </span>
      </div>

      <div className="relative container-page pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-fade-up micro text-(--color-fg-dim)">
            Native desktop app · local-first
          </p>

          <h1 className="animate-fade-up display display-xl mt-7 text-(--color-fg)">
            The project tracker whose tickets do the the work.
          </h1>

          <p
            className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-relaxed text-balance text-(--color-fg-muted) md:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            Projects, sprints, docs, saved views — and a Session button on
            every ticket that sends an agent to do the work in its own git
            worktree, prove it in a browser, and wait for you.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-4"
            style={{ animationDelay: "140ms" }}
          >
            <GitHubCta size="lg" />
            <span className="micro text-(--color-fg-dim)">
              Open source · AGPL-3.0 · runs on your machine
            </span>
          </div>
        </div>
      </div>

      {/* The product, directly under the statement and running to both
          edges — the opener's second half, not a card beside the text. */}
      <div
        className="animate-fade-up container-page pb-20 md:pb-28"
        style={{ animationDelay: "200ms" }}
      >
        <div className="relative mx-auto max-w-4xl rounded-2xl">
          <span className="aura-glow" aria-hidden />
          <div className="relative rounded-2xl border border-(--color-border) bg-(--color-bg-raised) p-6 sm:p-8 shadow-[0_30px_70px_-30px_rgba(21,19,43,0.22)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--color-border) pb-5">
            <span className="flex items-center gap-2.5 font-mono text-xs text-(--color-fg-dim)">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-(--color-accent)" />
              WP-77 · agent/WP-77
            </span>
            <span className="micro rounded-full border border-(--color-accent) px-3 py-1 text-(--color-accent)">
              fixed
            </span>
          </div>

          <p className="display mt-6 text-[1.35rem] leading-[1.15] text-(--color-fg) sm:text-[1.6rem]">
            Search results duplicate when a filter changes mid-scroll
          </p>

          <ul className="mt-6 space-y-2">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex flex-col gap-1 rounded-xl bg-(--color-bg) px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="flex min-w-0 flex-1 items-baseline gap-3">
                  <span className="micro shrink-0 text-(--color-accent)">
                    {row.kind}
                  </span>
                  <span className="text-sm text-(--color-fg-muted)">
                    {row.label}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs text-(--color-fg-dim)">
                  {row.meta}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-(--color-border) pt-5">
            <span className="text-sm text-(--color-fg-dim)">
              Nothing has shipped. It is waiting on you.
            </span>
            <span className="micro rounded-full bg-(--color-accent) px-4 py-2 text-(--color-on-accent)">
              Approve
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
