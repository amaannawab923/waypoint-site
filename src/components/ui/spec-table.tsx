import { Reveal } from "../reveal";

export function SpecTable({
  eyebrow,
  title,
  intro,
  headers,
  rows,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  headers: string[];
  rows: React.ReactNode[][];
  theme?: "light" | "dark";
}) {
  return (
    <section
      data-theme={theme === "light" ? "light" : undefined}
      className="relative border-t border-(--color-border) bg-(--color-bg) py-16 md:py-20"
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

        <Reveal className="mt-12">
          <div className="panel-frame">
            <table className="spec-table">
              <thead>
                <tr>
                  {headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        data-label={headers[j]}
                        className="text-(--color-fg-muted)"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
