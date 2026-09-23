import { Reveal } from "../reveal";

type SplitRowProps = {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  href?: string;
  linkLabel?: string;
  panel: React.ReactNode;
  /** Two to three concrete specifics, shown as a strip under the body. */
  facts?: { k: string; v: string }[];
  /** Run the panel to the viewport edge. Off for fixed-width diagrams,
   *  whose right-hand labels would be clipped by the overflow. */
  bleed?: boolean;
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
  facts,
  bleed = true,
  reverse = false,
  theme = "light",
}: SplitRowProps) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="relative overflow-hidden border-t border-(--color-border) bg-transparent py-16 md:py-24"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal
            className={`lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <p className="micro mb-5 text-(--color-fg-dim)">{eyebrow}</p>
            <h2 className="display display-md text-(--color-fg)">{title}</h2>
            <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              {body}
            </div>
            {href ? (
              <a
                href={href}
                className="micro mt-8 inline-flex items-center gap-2 border-b border-(--color-border-strong) pb-1 text-(--color-fg) transition-colors hover:border-(--color-fg)"
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
            className={`lg:col-span-7 ${
              /* Only ever bleeds right. A left bleed pushes the start of the
                 panel off-screen, which hid the first frame of the verify
                 panel entirely — the reversed row keeps its panel inside
                 the container instead. */
              reverse ? "lg:order-1" : `lg:order-2 ${bleed ? "bleed-r" : ""}`
            }`}
          >
            {panel}
          </Reveal>
        </div>

        {facts?.length ? (
          <Reveal className="mt-14 border-t border-(--color-border) pt-8">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="micro text-(--color-fg-dim)">{f.k}</dt>
                  <dd className="mt-2 text-[0.9rem] leading-snug text-(--color-fg)">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
