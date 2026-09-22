/** Stands in for a session's live transcript: tool calls, a message, a diff. */
export function SessionTranscriptIllustration() {
  return (
    <div className="illustration-grid absolute inset-0 flex flex-col gap-3 p-5 font-mono text-[0.68rem] sm:p-7 sm:text-xs">
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-(--color-verify) animate-pulse-dot" />
        <span className="rounded-full border border-(--color-border) bg-(--color-bg-raised) px-2.5 py-1 text-(--color-fg-muted)">
          agent/&lt;KEY&gt;
        </span>
        <span className="text-(--color-fg-dim)">from main</span>
      </div>

      <div className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-3 sm:p-4">
        <p className="text-(--color-fg-dim)">$ git status --short</p>
        <div className="mt-2 space-y-1.5">
          <span className="block h-1 w-4/5 rounded-full bg-(--color-border-soft)" />
          <span className="block h-1 w-3/5 rounded-full bg-(--color-border-soft)" />
        </div>
      </div>

      <div className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-3 sm:p-4">
        <div className="space-y-1.5">
          <span className="block h-1 w-full rounded-full bg-(--color-border-soft)" />
          <span className="block h-1 w-11/12 rounded-full bg-(--color-border-soft)" />
          <span className="block h-1 w-2/3 rounded-full bg-(--color-border-soft)" />
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 rounded-lg border border-(--color-border) bg-(--color-bg-raised) px-3 py-2">
        <span className="text-(--color-verify)">+</span>
        <span className="text-(--color-fg-muted)">index.html</span>
        <span className="ml-auto inline-block h-3 w-1.5 bg-(--color-fg-dim) animate-blink" />
      </div>
    </div>
  );
}
