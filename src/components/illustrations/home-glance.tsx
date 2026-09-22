const rows = [
  { tag: "bg-(--color-accent)", w: "72%", meta: "2h" },
  { tag: "bg-(--color-verify)", w: "54%", meta: "1d" },
  { tag: "bg-(--color-fg-dim)", w: "63%", meta: "2d" },
  { tag: "bg-(--color-accent)", w: "44%", meta: "3d" },
  { tag: "bg-(--color-fg-dim)", w: "58%", meta: "3d" },
  { tag: "bg-(--color-verify)", w: "67%", meta: "4d" },
  { tag: "bg-(--color-fg-dim)", w: "50%", meta: "5d" },
];

/** Stands in for the Home view: proposal/sprint tiles + a recent-tickets list. */
export function HomeGlanceIllustration() {
  return (
    <div className="illustration-grid absolute inset-0 flex flex-col justify-center gap-4 p-5 sm:p-7">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-3.5 sm:p-4">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-(--color-accent) animate-pulse-dot" />
            <span className="font-mono text-[0.6rem] tracking-wide text-(--color-fg-dim) uppercase">
              Waiting on you
            </span>
          </div>
          <p className="font-display mt-1.5 text-2xl font-semibold text-(--color-fg) sm:text-3xl">
            7
          </p>
        </div>
        <div className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-3.5 sm:p-4">
          <span className="font-mono text-[0.6rem] tracking-wide text-(--color-fg-dim) uppercase">
            Sprint progress
          </span>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-(--color-border)">
            <div className="h-full w-[15%] rounded-full bg-(--color-verify)" />
          </div>
          <p className="mt-1.5 font-mono text-[0.65rem] text-(--color-fg-dim)">
            7 / 48
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-3.5 sm:p-4">
        <span className="font-mono text-[0.6rem] tracking-wide text-(--color-fg-dim) uppercase">
          Recents
        </span>
        <div className="mt-3 space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className={`size-1.5 shrink-0 rounded-full ${row.tag}`} />
              <span
                className="h-1.5 rounded-full bg-(--color-border-soft)"
                style={{ width: row.w }}
              />
              <span className="ml-auto font-mono text-[0.6rem] text-(--color-fg-dim)">
                {row.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
