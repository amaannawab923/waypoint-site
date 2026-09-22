import { Reveal } from "../reveal";

type SplitRowProps = {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  href?: string;
  linkLabel?: string;
  panel: React.ReactNode;
  /** Panel on the left, text on the right. */
  reverse?: boolean;
  theme?: "light" | "dark";
};

/**
 * The serval.com "split row" move: a text column paired with a large panel
 * that bleeds past the container edge on wide viewports. Alternates side
 * via `reverse`. The bleed is a negative margin on the panel's own column,
 * clamped so it never forces horizontal scroll on narrow screens.
 */
export function SplitRow({
  eyebrow,
  title,
  body,
  href,
  linkLabel = "Learn more",
  panel,
  reverse = false,
  theme = "light",
}: SplitRowProps) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="relative overflow-hidden border-t border-(--color-border) bg-(--color-bg) py-20 md:py-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal
            className={`lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-(--color-fg) sm:text-3xl">
              {title}
            </h2>
            <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              {body}
            </div>
            {href ? (
              <a
                href={href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-accent) transition-colors hover:text-(--color-fg)"
              >
                {linkLabel}
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

          <Reveal
            y={20}
            className={`lg:col-span-7 ${reverse ? "lg:order-1" : "lg:order-2"} ${
              reverse
                ? "lg:-ml-16 xl:-ml-28"
                : "lg:-mr-16 xl:-mr-28"
            }`}
          >
            {panel}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
