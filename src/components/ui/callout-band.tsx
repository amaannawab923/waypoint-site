import { Reveal } from "../reveal";

/**
 * A single rule the product holds to, set across the full column width as
 * a statement rather than a small card. It is the only object in its band,
 * so it carries no card chrome — a hairline and the accent icon are enough
 * to separate it, and the type does the rest.
 */
export function CalloutBand({
  eyebrow,
  title,
  body,
  icon,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="relative border-t border-(--color-border) bg-(--color-bg-raised) py-14 md:py-16"
    >
      <div className="container-page">
        <Reveal className="grid gap-x-12 gap-y-5 border-t border-(--color-border-strong) pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--color-accent-dim) text-(--color-accent)">
              {icon}
            </span>
            <div>
              <p className="micro mb-2 text-(--color-fg-dim)">{eyebrow}</p>
              <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance text-(--color-fg) md:text-2xl">
                {title}
              </h3>
            </div>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-(--color-fg-muted) md:pt-7">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
