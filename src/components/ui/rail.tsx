import { Reveal } from "../reveal";

export type RailItem = {
  index: string;
  name: string;
  body: string;
};

/**
 * A heading on the page grid, then a row of cards that runs off the right
 * edge of the screen. Two things this buys over a grid of equal cards: the
 * row always reaches both edges, so the section can never read as a small
 * object marooned in a wide band, and the overflow itself tells the reader
 * there is more without a "+6 more" label.
 */
export function Rail({
  eyebrow,
  title,
  intro,
  items,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: RailItem[];
  theme?: "light" | "dark";
}) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="border-t border-(--color-border) bg-transparent py-16 md:py-24"
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="micro mb-5 text-(--color-fg-dim)">{eyebrow}</p>
          <h2 className="display display-lg text-(--color-fg)">{title}</h2>
          {intro ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-(--color-fg-muted)">
              {intro}
            </p>
          ) : null}
          <p className="micro mt-7 text-(--color-fg-dim)">
            {items.length} of them &mdash; scroll &rarr;
          </p>
        </Reveal>
      </div>

      <div className="mt-12 w-screen max-w-full">
        <ul className="rail">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex min-h-[19rem] flex-col justify-between rounded-2xl border border-(--color-border) bg-(--color-bg-raised) p-6"
            >
              <span className="micro text-(--color-fg-dim)">{item.index}</span>
              <div>
                <h3 className="display text-[1.45rem] leading-[1.1] text-(--color-fg)">
                  {item.name}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-(--color-fg-muted)">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
