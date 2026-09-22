const modes = ["Investigate", "Fix", "Something else"];

/** The editable brief a person reads before a session ever runs. */
export function BriefPanel() {
  return (
    <div className="panel-frame p-5 sm:p-7">
      <div className="flex items-center gap-2">
        {modes.map((m, i) => (
          <span
            key={m}
            className={`rounded-full px-3 py-1 font-mono text-[0.7rem] ${
              i === 1
                ? "bg-(--color-accent) text-(--color-on-accent)"
                : "border border-(--color-border-strong) text-(--color-fg-dim)"
            }`}
          >
            {m}
          </span>
        ))}
      </div>

      <p className="mt-5 font-mono text-xs text-(--color-fg-dim)">WP-77 · brief</p>
      <div className="mt-2 space-y-2 rounded-lg bg-(--color-bg) p-4 text-sm leading-relaxed text-(--color-fg-muted)">
        <p>
          Reproduce the duplicate rows in{" "}
          <span className="text-(--color-fg)">SearchResults</span>, fix the
          filter-change race, and add a regression test.
        </p>
        <p className="text-(--color-fg-dim)">
          <span className="text-(--color-accent)">edited</span> — added
          &ldquo;check the scroll-position handler too&rdquo;
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-(--color-border) pt-4">
        <span className="text-xs text-(--color-fg-dim)">
          Runs in its own worktree on <code className="font-mono">agent/WP-77</code>
        </span>
        <span className="rounded-lg bg-(--color-accent) px-4 py-2 font-mono text-xs font-medium text-(--color-on-accent)">
          Dispatch
        </span>
      </div>
    </div>
  );
}
