import { Reveal } from "../reveal";

export function LongForm({
  eyebrow,
  title,
  paragraphs,
  quote,
  quoteCite,
  href,
  linkLabel,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quote: string;
  quoteCite?: string;
  href?: string;
  linkLabel?: string;
  theme?: "light" | "dark";
}) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="relative border-t border-(--color-border) bg-(--color-bg-raised) py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-(--color-fg) sm:text-3xl">
              {title}
            </h2>
            {href ? (
              <a
                href={href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-accent) transition-colors hover:text-(--color-fg)"
              >
                {linkLabel ?? "Read more"}
                <svg
                  viewBox="0 0 20 20"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
            ) : null}
          </Reveal>

          <Reveal className="md:col-span-7">
            <blockquote className="pull-quote">{quote}</blockquote>
            {quoteCite ? (
              <cite className="mt-3 block text-xs text-(--color-fg-dim) not-italic">
                — {quoteCite}
              </cite>
            ) : null}
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
