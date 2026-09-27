import { Reveal } from "../reveal";
import { HEADLINE_METRICS } from "@/lib/content/metrics";

export function MetricsBand() {
  return (
    <section className="relative overflow-hidden border-t border-(--color-border) bg-transparent py-20 md:py-28">
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="micro mb-5 text-(--color-fg-dim)">Measured, not estimated</p>
          <h2 className="display display-lg text-(--color-fg)">
            One real run, timed end to end.
          </h2>
        </Reveal>

        <Reveal
          className="mt-14 grid min-w-[720px] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-border) lg:grid-cols-4"
          stagger={0.06}
        >
          {HEADLINE_METRICS.map((m) => (
            <div key={m.label} className="bg-(--color-bg) p-6 sm:p-7">
              <p className="metric-figure text-3xl text-(--color-bg) sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm font-medium text-(--color-fg)">{m.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-(--color-fg-dim)">
                {m.detail}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 text-center">
          <a
            href="/verify"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-(--color-accent) transition-colors hover:text-(--color-fg)"
          >
            See the full breakdown
            <svg viewBox="0 0 20 20" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
