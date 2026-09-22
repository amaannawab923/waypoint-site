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
      className="relative border-t border-(--color-border) bg-(--color-bg) py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-(--color-fg) md:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <Reveal className="mt-12">
          <div className="panel-frame overflow-x-auto">
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
