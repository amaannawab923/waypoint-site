import { Reveal } from "../reveal";

export type FlowStep = {
  title: string;
  body: string;
  artifact?: React.ReactNode;
};

export function NumberedFlow({
  eyebrow,
  title,
  steps,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  steps: FlowStep[];
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
        </Reveal>

        <Reveal
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
          stagger={0.08}
        >
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flow-badge">{i + 1}</span>
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 bg-(--color-border) md:block"
                  />
                ) : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-(--color-fg)">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                {step.body}
              </p>
              {step.artifact ? <div className="mt-5">{step.artifact}</div> : null}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
