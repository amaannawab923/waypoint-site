import { GitHubCta } from "../github-cta";

const liveSteps = ["Page loads", "“Ada” typed", "Submit pressed"];

/**
 * The hero is deliberately animated with plain CSS (`.animate-fade-up`),
 * not GSAP. A rAF-driven tween's "from" state can get stranded — proven
 * in testing: a fresh, not-yet-interacted-with tab can leave
 * requestAnimationFrame un-ticked, so a GSAP `.from()` applies its hidden
 * starting state and then never advances, leaving the headline invisible
 * indefinitely. A CSS keyframe is scheduled by the browser's own
 * compositor and always resolves. `prefers-reduced-motion` still renders
 * the final frame immediately, via the global override in globals.css.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-(--color-border) bg-(--color-bg) pt-28 pb-24 md:pt-36 md:pb-32"
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
              Native desktop · connects to your real Jira
            </p>

            <h1 className="animate-fade-up text-[2.5rem] leading-[1.08] font-semibold tracking-[-0.02em] text-balance sm:text-[3rem] md:text-[3.4rem]">
              An AI layer for the Jira you already have.
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-lg text-base leading-relaxed text-(--color-fg-muted) md:text-lg"
              style={{ animationDelay: "80ms" }}
            >
              Waypoint reads your real tickets, dashboards and JQL, proposes
              the change, and waits for a person to press approve — never a
              chat window bolted onto a database that doesn&rsquo;t know your
              tickets exist.
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
                  browser_task
                </span>
                <span className="font-mono text-2xl font-semibold text-(--color-accent) tnum">
                  13.9s
                </span>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-(--color-border)">
                <div className="h-full w-full origin-left rounded-full bg-(--color-accent)" />
              </div>

              <ul className="mt-6 space-y-3">
                {liveSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-center gap-2.5 text-sm text-(--color-fg-muted)"
                  >
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
                    {step}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-(--color-border) pt-5">
                <span className="font-mono text-xs text-(--color-fg-dim)">
                  agent/ENG-77
                </span>
                <span className="rounded-full border border-(--color-accent) px-3 py-1 font-mono text-xs text-(--color-accent)">
                  fixed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
