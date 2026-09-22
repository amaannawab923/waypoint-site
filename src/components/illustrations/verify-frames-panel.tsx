const frames = ["load", "type", "submit", "confirm"];
const decisions = [
  { t: "0.7s", label: "Chromium ready" },
  { t: "5.5s", label: "3 Jev decisions" },
  { t: "7.0s", label: "1 Claude call" },
];

/** Four captured frames plus the decision timeline beneath them. */
export function VerifyFramesPanel() {
  return (
    <div className="panel-frame p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-(--color-fg-dim)">
          browser_task
        </span>
        <span className="font-mono text-2xl font-semibold text-(--color-accent) tnum">
          13.9s
        </span>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2.5">
        {frames.map((f, i) => (
          <div
            key={f}
            className="aspect-[3/4] rounded-lg border border-(--color-border) bg-(--color-bg) p-2"
          >
            <span className="font-mono text-[0.6rem] text-(--color-fg-dim)">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-1.5 h-full space-y-1">
              <div className="h-1 w-4/5 rounded-full bg-(--color-border-strong)" />
              <div className="h-1 w-3/5 rounded-full bg-(--color-border-strong)" />
              <div className="mt-2 h-1 w-2/5 rounded-full bg-(--color-accent)/60" />
            </div>
            <p className="mt-1.5 truncate font-mono text-[0.6rem] text-(--color-fg-dim)">
              {f}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-(--color-border)">
        <div className="h-full w-full rounded-full bg-(--color-accent)" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-(--color-border) pt-4">
        {decisions.map((d) => (
          <div key={d.label}>
            <p className="font-mono text-sm font-semibold text-(--color-fg) tnum">
              {d.t}
            </p>
            <p className="mt-0.5 text-[0.7rem] text-(--color-fg-dim)">{d.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
