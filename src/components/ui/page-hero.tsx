/**
 * Shared above-the-fold hero for every page but home. Same CSS-only
 * `.animate-fade-up` entrance as the home hero — never GSAP — for the
 * mobile-safe-paint reason documented on `Hero`.
 */
export function PageHero({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="animate-fade-up micro text-(--color-fg-dim)">{eyebrow}</p>
          <h1 className="animate-fade-up display display-lg mt-7">{title}</h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-(--color-fg-muted) md:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            {body}
          </p>
          {cta ? (
            <div
              className="animate-fade-up mt-8"
              style={{ animationDelay: "140ms" }}
            >
              {cta}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
