import { Reveal } from "../reveal";

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
      className="relative border-t border-(--color-border) bg-(--color-bg-raised) py-16 md:py-20"
    >
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-(--color-border) bg-(--color-bg) p-7 sm:flex-row sm:items-center">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-(--color-accent-dim) text-(--color-accent)">
            {icon}
          </div>
          <div>
            <p className="eyebrow mb-1.5">{eyebrow}</p>
            <h3 className="text-[0.95rem] font-semibold text-(--color-fg)">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-(--color-fg-muted)">{body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
