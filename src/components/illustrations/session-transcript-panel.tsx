const rows = [
  { kind: "read", label: "src/search/filters.ts", meta: "read" },
  { kind: "edit", label: "src/search/filters.ts", meta: "edit · +14 −3" },
  { kind: "run", label: "pnpm test search", meta: "42 passed" },
  { kind: "verify", label: "browser_task: rerun the filter", meta: "4 frames" },
];

/**
 * A condensed session transcript: mode + ticket header, a handful of tool
 * rows (read / edit / run / verify), and a closing verdict stamp. Used on
 * the home split row and, larger, on /agents.
 */
export function SessionTranscriptPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className="panel-frame p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="rounded-full border border-(--color-accent) px-2.5 py-1 font-mono text-[0.7rem] text-(--color-accent)">
            Fix
          </span>
          <span className="font-mono text-xs text-(--color-fg-dim)">
            WP-77 · agent/WP-77
          </span>
        </div>
        <span className="size-1.5 rounded-full bg-(--color-accent) animate-pulse-dot" />
      </div>

      <p className="mt-4 text-sm font-medium text-(--color-fg)">
        Search results duplicate when a filter changes mid-scroll
      </p>

      <ul className="mt-5 space-y-2.5">
        {rows.slice(0, compact ? 3 : 4).map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-3 rounded-lg bg-(--color-bg) px-3.5 py-2.5"
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <span className="font-mono text-[0.65rem] uppercase tracking-wide text-(--color-fg-dim)">
                {row.kind}
              </span>
              <span className="truncate font-mono text-xs text-(--color-fg-muted)">
                {row.label}
              </span>
            </span>
            <span className="shrink-0 font-mono text-[0.7rem] text-(--color-fg-dim)">
              {row.meta}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-(--color-border) pt-4">
        <span className="text-xs text-(--color-fg-dim)">
          Verified in browser · 4 screenshots
        </span>
        <span className="rounded-full border border-(--color-accent) px-3 py-1 font-mono text-xs text-(--color-accent)">
          fixed
        </span>
      </div>
    </div>
  );
}
