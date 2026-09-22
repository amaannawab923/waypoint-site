import { Reveal } from "../reveal";
import { GitHubCta } from "../github-cta";

export function ClosingCta() {
  return (
    <section className="relative border-t border-(--color-border-soft) bg-(--color-bg) py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 40%, rgba(255,176,32,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="container-page text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Read the source. Run it yourself.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted) md:text-lg">
            Waypoint is open source under AGPL-3.0 — the frontend, the
            backend, and every claim on this page, in the same repo.
          </p>
          <div className="mt-9 flex justify-center">
            <GitHubCta size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
