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
      className="border-t border-(--color-border) bg-(--color-bg-raised) py-16 md:py-24"
    >
      <div className="container-page">
        <Reveal className="max-w-4xl">
          <p className="micro mb-6 text-(--color-fg-dim)">{eyebrow}</p>
          <blockquote className="display display-lg text-(--color-fg)">
            &ldquo;{quote}&rdquo;
          </blockquote>
          {quoteCite ? (
            <p className="micro mt-6 text-(--color-fg-dim)">&mdash; {quoteCite}</p>
          ) : null}
        </Reveal>

        <Reveal
          className="mt-14 grid gap-x-12 gap-y-6 border-t border-(--color-border) pt-10 md:grid-cols-3"
          stagger={0.05}
        >
          <h2 className="display display-md text-(--color-fg)">{title}</h2>
          {paragraphs.map((text) => (
            <p
              key={text.slice(0, 32)}
              className="text-[0.95rem] leading-relaxed text-(--color-fg-muted)"
            >
              {text}
            </p>
          ))}
        </Reveal>

        {href ? (
          <Reveal className="mt-10">
            <a
              href={href}
              className="micro inline-flex items-center gap-2 border-b border-(--color-border-strong) pb-1 text-(--color-fg) transition-colors hover:border-(--color-fg)"
            >
              {linkLabel ?? "Read more"} &rarr;
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
