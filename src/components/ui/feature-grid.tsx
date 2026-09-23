import { Reveal } from "../reveal";

export type FeatureItem = {
  icon: React.ReactNode;
  name: string;
  body: string;
};

export function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  theme = "light",
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: FeatureItem[];
  theme?: "light" | "dark";
  columns?: 2 | 3;
}) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="relative border-t border-(--color-border) bg-(--color-bg-raised) py-16 md:py-20"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="micro mb-5 text-(--color-fg-dim)">{eyebrow}</p>
          <h2 className="display display-lg text-(--color-fg)">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <Reveal
          className={`mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
          stagger={0.05}
        >
          {items.map((item) => (
            <div key={item.name} className="feature-card">
              <div className="flex size-9 items-center justify-center rounded-lg bg-(--color-accent-dim) text-(--color-accent)">
                {item.icon}
              </div>
              <h3 className="mt-4 text-[0.95rem] font-semibold tracking-tight text-(--color-fg)">
                {item.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-(--color-fg-muted)">
                {item.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
