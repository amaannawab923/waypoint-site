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
    <section className="relative overflow-hidden border-b border-(--color-border) bg-(--color-bg) pt-28 pb-16 md:pt-40 md:pb-20">
      <div className="dot-grid" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-20%] -z-0 h-[70%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 20%, rgba(129,140,248,0.2) 0%, transparent 75%)",
        }}
      />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="animate-fade-up eyebrow mb-5">{eyebrow}</p>
          <h1 className="animate-fade-up text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-balance">
            {title}
          </h1>
          <p
            className="animate-fade-up mt-6 text-base leading-relaxed text-(--color-fg-muted) md:text-lg"
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
