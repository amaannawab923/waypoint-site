type Session = {
  mode: string;
  ticket: string;
  title: string;
  rows: { kind: string; label: string; meta: string }[];
  closing: string;
  verdict: string;
};

/**
 * Three real-shaped sessions rather than one. The panel appears on three
 * different pages, and showing the identical ticket each time made one
 * illustration read as three fabricated sessions — pick a different key
 * per usage.
 */
export const SESSIONS: Record<"filters" | "queue" | "export", Session> = {
  filters: {
    mode: "Fix",
    ticket: "WP-77",
    title: "Search results duplicate when a filter changes mid-scroll",
    rows: [
      { kind: "read", label: "src/search/filters.ts", meta: "read" },
      { kind: "edit", label: "src/search/filters.ts", meta: "edit · +14 −3" },
      { kind: "run", label: "pnpm test search", meta: "42 passed" },
      { kind: "verify", label: "browser_task: rerun the filter", meta: "4 frames" },
    ],
    closing: "Verified in browser · 4 screenshots",
    verdict: "fixed",
  },
  queue: {
    mode: "Investigate",
    ticket: "WP-91",
    title: "Requests queue drops the second attachment on a forwarded email",
    rows: [
      { kind: "read", label: "server/requests/ingest.ts", meta: "read" },
      { kind: "read", label: "server/requests/mime.ts", meta: "read" },
      { kind: "run", label: "pnpm test requests", meta: "1 failing" },
      { kind: "note", label: "Root cause written to the ticket", meta: "no diff" },
    ],
    closing: "Report attached · no code changed",
    verdict: "investigated",
  },
  export: {
    mode: "Fix",
    ticket: "WP-64",
    title: "Gantt export writes the wrong end date across a DST boundary",
    rows: [
      { kind: "read", label: "src/gantt/export.ts", meta: "read" },
      { kind: "edit", label: "src/gantt/dates.ts", meta: "edit · +9 −6" },
      { kind: "run", label: "pnpm test gantt", meta: "18 passed" },
      { kind: "verify", label: "browser_task: export and reopen", meta: "3 frames" },
    ],
    closing: "Verified in browser · 3 screenshots",
    verdict: "fixed",
  },
};

export function SessionTranscriptPanel({
  session = "filters",
  compact = false,
}: {
  session?: keyof typeof SESSIONS;
  compact?: boolean;
}) {
  const { mode, ticket, title, rows, closing, verdict } = SESSIONS[session];
  return (
    <div className="panel-frame p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="rounded-full border border-(--color-accent) px-2.5 py-1 font-mono text-[0.7rem] text-(--color-accent)">
            {mode}
          </span>
          <span className="font-mono text-xs text-(--color-fg-dim)">
            {ticket} · agent/{ticket}
          </span>
        </div>
        <span className="size-1.5 rounded-full bg-(--color-accent) animate-pulse-dot" />
      </div>

      <p className="mt-4 text-sm font-medium text-(--color-fg)">
        {title}
      </p>

      <ul className="mt-5 space-y-2.5">
        {rows.slice(0, compact ? 3 : 4).map((row) => (
          <li
            key={row.label}
            className="flex flex-col gap-0.5 rounded-lg bg-(--color-bg) px-3.5 py-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3"
          >
            <span className="flex min-w-0 flex-1 items-baseline gap-2.5">
              <span className="font-mono text-[0.65rem] uppercase tracking-wide text-(--color-fg-dim)">
                {row.kind}
              </span>
              <span className="font-mono text-xs text-(--color-fg-muted) sm:truncate">
                {row.label}
              </span>
            </span>
            <span className="shrink-0 font-mono text-[0.7rem] text-(--color-fg-dim) sm:mt-px">
              {row.meta}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-(--color-border) pt-4">
        <span className="text-xs text-(--color-fg-dim)">
          {closing}
        </span>
        <span className="rounded-full border border-(--color-accent) px-3 py-1 font-mono text-xs text-(--color-accent)">
          {verdict}
        </span>
      </div>
    </div>
  );
}
