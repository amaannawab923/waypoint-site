import { Reveal } from "../reveal";
import { DeviceFrame } from "../device-frame";
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
      className="relative border-t border-(--color-border-soft) bg-(--color-bg) py-24 md:py-32"
    >
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-accent) uppercase">
            Honest by design
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            &ldquo;This machine&rdquo; says exactly what leaves it.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
            There&rsquo;s no cloud backend — the server Waypoint talks to runs on
            your machine. A page inside the app states the rest as plainly:
          </p>

          <dl className="mt-8 divide-y divide-(--color-border-soft)">
            {rows.map((row) => (
              <div key={row.label} className="flex gap-3 py-3.5">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-(--color-verify)" />
                <div>
                  <dt className="font-mono text-xs tracking-wide text-(--color-fg-dim)">
                    {row.label}
                  </dt>
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

        <Reveal>
          <DeviceFrame
            src="/shots/machine.jpg"
            alt="Waypoint's This machine page, listing exactly what leaves the laptop and what runs locally."
            label="waypoint.local/machine"
          />
        </Reveal>
      </div>
    </section>
  );
}
