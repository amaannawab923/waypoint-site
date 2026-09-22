import { Reveal } from "../reveal";
import { GitHubCta } from "../github-cta";

export function ClosingCta({
  title = "Read the source. Run it yourself.",
  body = "Waypoint is open source under AGPL-3.0 — the frontend, the backend, and every claim on this page, in the same repo.",
  secondaryHref = "/honest",
  secondaryLabel = "Read what leaves this machine",
}: {
  title?: string;
  body?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-(--color-bg) py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-30%] h-[70%]"
        style={{
          background:
            "radial-gradient(55% 70% at 50% 100%, rgba(129,140,248,0.2) 0%, transparent 70%)",
        }}
      />
      <div className="container-page relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-(--color-fg) md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted) md:text-lg">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <GitHubCta size="lg" />
            <a
              href={secondaryHref}
              className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
            >
              {secondaryLabel} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
