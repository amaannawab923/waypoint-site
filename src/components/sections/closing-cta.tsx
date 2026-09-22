import { Reveal } from "../reveal";
import { GitHubCta } from "../github-cta";

export function ClosingCta() {
  return (
    <section
      data-theme="light"
      className="relative bg-(--color-bg) py-20 text-(--color-fg) md:py-28"
    >
      <div className="container-page text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
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
