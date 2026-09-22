import { Reveal } from "../reveal";
import { MachineSignalIllustration } from "../illustrations/machine-signal";
import { CheckIcon } from "../icons";

const rows = [
  {
    label: "Your tickets",
    value: "Only the ones you ask Copilot or a session about.",
  },
  {
    label: "Your code",
    value: "Only what a Fix or Investigate session reads for its ticket.",
  },
  {
    label: "Agent prompts",
    value: "To Anthropic, on your own Claude subscription — same as the CLI.",
  },
  {
    label: "Browser tasks in a session",
    value:
      "To TypeSafe: the page's text and controls, only while a session runs one.",
  },
  {
    label: "Telemetry",
    value: "Off.",
  },
];

export function HonestByDesign() {
  return (
    <section
      id="honest"
      data-theme="light"
      className="relative overflow-hidden bg-(--color-bg) py-20 text-(--color-fg) md:py-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Honest by design</p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              &ldquo;This machine&rdquo; says exactly what leaves it.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              There&rsquo;s no cloud backend — the server Waypoint talks to
              runs on your machine. A page inside the app states the rest as
              plainly:
            </p>

            <dl className="mt-8 space-y-4">
              {rows.map((row) => (
                <div key={row.label} className="flex gap-3">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-(--color-accent)" />
                  <div>
                    <dt className="text-sm font-medium">{row.label}</dt>
                    <dd className="mt-0.5 text-sm text-(--color-fg-muted)">
                      {row.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-(--color-fg-dim)">
              Nothing posts, moves, opens a PR, or starts an agent without a
              person pressing the button.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:-mr-24 xl:-mr-40">
            <div className="rounded-3xl border border-(--color-border) bg-(--color-bg-raised) p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]">
              <MachineSignalIllustration />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
