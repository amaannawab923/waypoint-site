import { GitHubCta } from "../github-cta";

const rows = [
  { kind: "session", label: "Investigate: root cause found", meta: "4m" },
  { kind: "session", label: "Fix: filter race resolved", meta: "9m" },
  { kind: "verify", label: "Verified in browser · 4 frames", meta: "14s" },
];

/**
 * The hero is deliberately animated with plain CSS (`.animate-fade-up`),
 * not GSAP. A rAF-driven tween's "from" state can get stranded — proven in
 * testing: a fresh, not-yet-interacted-with tab can leave
 * requestAnimationFrame un-ticked, so a GSAP `.from()` applies its hidden
 * starting state and then never advances, leaving the headline invisible
 * indefinitely. A CSS keyframe is scheduled by the browser's own
 * compositor and always resolves. `prefers-reduced-motion` still renders
 * the final frame immediately, via the global override in globals.css.
 * Every other page hero on the site follows this same rule.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-(--color-border) bg-(--color-bg) pt-28 pb-24 md:pt-40 md:pb-32"
    >
      <div className="dot-grid" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-20%] -z-0 h-[70%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 20%, rgba(129,140,248,0.22) 0%, rgba(34,211,238,0.06) 45%, transparent 75%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="animate-fade-up eyebrow mb-5">
              Native desktop app · local-first backend
            </p>

            <h1 className="animate-fade-up text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.03] font-semibold tracking-[-0.025em] text-balance">
              The project tracker whose tickets do the work.
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-lg text-base leading-relaxed text-(--color-fg-muted) md:text-lg"
              style={{ animationDelay: "80ms" }}
            >
              Waypoint is a real tracker — projects, sprints, docs, saved
              views, a requests queue, full activity history. Every ticket
              also carries a Session button: dispatch an agent to
              investigate or fix it in its own git worktree, verify the
              result in a browser, and wait for you to approve it.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "140ms" }}
            >
              <GitHubCta size="lg" />
              <span className="text-sm text-(--color-fg-dim)">
                Open source · AGPL-3.0 · runs on your machine
              </span>
            </div>
          </div>

          <div
            className="animate-fade-up lg:col-span-5"
            style={{ animationDelay: "120ms" }}
          >
            <div className="rounded-3xl border border-(--color-border) bg-(--color-bg-raised) p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs text-(--color-fg-dim)">
                  <span className="size-1.5 rounded-full bg-(--color-accent) animate-pulse-dot" />
                  WP-77 · agent/WP-77
                </span>
                <span className="rounded-full border border-(--color-accent) px-2.5 py-1 font-mono text-[0.7rem] text-(--color-accent)">
                  fixed
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-(--color-fg)">
                Search results duplicate when a filter changes mid-scroll
              </p>

              <ul className="mt-5 space-y-2.5">
                {rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-lg bg-(--color-bg) px-3.5 py-2.5 text-sm text-(--color-fg-muted)"
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <svg
                        viewBox="0 0 16 16"
                        className="size-4 shrink-0 text-(--color-accent)"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                      </svg>
                      <span className="truncate">{row.label}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs text-(--color-fg-dim)">
                      {row.meta}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-(--color-border) pt-5">
                <span className="text-xs text-(--color-fg-dim)">
                  Waiting on your approval
                </span>
                <span className="rounded-lg bg-(--color-accent) px-3.5 py-1.5 font-mono text-xs font-medium text-(--color-on-accent)">
                  Approve
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
