/** main → agent/<KEY> worktree isolation, drawn as a small branch diagram. */
export function WorktreeDiagram() {
  return (
    <div className="panel-frame p-5 sm:p-7">
      <svg viewBox="0 0 360 150" className="h-auto w-full" aria-hidden="true">
        <line x1="30" y1="30" x2="30" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" />
        <circle cx="30" cy="30" r="5" fill="var(--color-border-strong)" />
        <circle cx="30" cy="75" r="5" fill="var(--color-border-strong)" />
        <circle cx="30" cy="120" r="5" fill="var(--color-border-strong)" />
        <text x="46" y="34" fill="var(--color-fg-dim)" fontSize="11" fontFamily="var(--font-mono)">main</text>

        <path d="M30 75 C 110 75, 110 30, 190 30" stroke="var(--color-accent)" strokeWidth="2" fill="none" strokeDasharray="4 5" />
        <circle cx="190" cy="30" r="5" fill="var(--color-accent)" />
        <text x="206" y="34" fill="var(--color-fg)" fontSize="11" fontFamily="var(--font-mono)">agent/WP-77</text>
        <text x="206" y="48" fill="var(--color-fg-dim)" fontSize="9.5" fontFamily="var(--font-mono)">its own worktree</text>

        <rect x="190" y="60" width="150" height="60" rx="10" fill="none" stroke="var(--color-accent)" strokeDasharray="3 4" />
        <text x="204" y="80" fill="var(--color-fg-muted)" fontSize="9.5" fontFamily="var(--font-mono)">.worktrees/wp-77/</text>
        <text x="204" y="94" fill="var(--color-fg-dim)" fontSize="9.5" fontFamily="var(--font-mono)">runs, edits, tests here</text>
        <text x="204" y="108" fill="var(--color-fg-dim)" fontSize="9.5" fontFamily="var(--font-mono)">your checkout never moves</text>
      </svg>
    </div>
  );
}
