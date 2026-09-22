/**
 * The four frames one real `browser_task` run returned. Only the run's
 * own measured figures appear here — the aggregate timings below. No
 * per-frame timestamp is shown because the run never reported one, and
 * no skeleton bars stand in for content: each frame says what it is.
 */
const frames = [
  { step: "load", note: "The page, before anything is touched." },
  { step: "type", note: "Field found and filled — one decision." },
  { step: "submit", note: "Submit located and clicked — one decision." },
  { step: "confirm", note: "The verdict, read off this frame." },
];

const decisions = [
  { t: "0.7s", label: "Chromium ready" },
  { t: "5.5s", label: "3 Jev decisions" },
  { t: "7.0s", label: "1 Claude call" },
];

export function VerifyFramesPanel() {
  return (
    <div className="panel-frame p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-(--color-fg-dim)">browser_task</span>
        <span className="font-mono text-2xl font-semibold text-(--color-accent) tnum">
          13.9s
        </span>
      </div>

      <ol className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {frames.map((f, i) => (
          <li
            key={f.step}
            className="flex flex-col rounded-lg border border-(--color-border) bg-(--color-bg) p-2.5"
          >
            <p className="font-mono text-[0.62rem] text-(--color-fg-dim) tnum">
              frame {i + 1}/4
            </p>
            <p className="mt-0.5 font-mono text-[0.78rem] font-medium text-(--color-accent)">
              {f.step}
            </p>
            <p className="mt-2 text-[0.68rem] leading-snug text-(--color-fg-muted)">
              {f.note}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-(--color-border)">
        <div className="h-full w-full rounded-full bg-(--color-accent)" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-(--color-border) pt-4">
        {decisions.map((d) => (
          <div key={d.label}>
            <p className="font-mono text-sm font-semibold text-(--color-fg) tnum">{d.t}</p>
            <p className="mt-0.5 text-[0.7rem] text-(--color-fg-dim)">{d.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
