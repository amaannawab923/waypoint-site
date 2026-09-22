import { Reveal } from "../reveal";

const modes = [
  {
    name: "Investigate",
    tagline: "Finds the root cause. Changes nothing.",
  },
  {
    name: "Fix",
    tagline: "Implements it, in its own worktree.",
  },
];

export function Sessions() {
  return (
    <section
      id="sessions"
      data-theme="light"
      className="relative overflow-hidden bg-(--color-bg) py-20 text-(--color-fg) md:py-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Sessions</p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              A session per ticket, in its own worktree.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              Dispatch a session on any ticket and watch it live. Each one
              runs isolated — its own git worktree, its own branch —
              starting from a brief you read and can edit before anything
              runs.
            </p>

            <div className="mt-8 space-y-5">
              {modes.map((mode) => (
                <div key={mode.name} className="flex items-baseline gap-3">
                  <span className="font-semibold">{mode.name}</span>
                  <span className="text-sm text-(--color-fg-muted)">
                    {mode.tagline}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:-mr-24 xl:-mr-40">
            <div className="overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-bg-raised) shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]">
              <div className="flex items-center justify-between border-b border-(--color-border) px-6 py-4">
                <span className="text-sm text-(--color-fg-muted)">
                  <span className="font-mono">agent/ENG-77</span>{" "}
                  <span className="text-(--color-fg-dim)">from main</span>
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-(--color-accent)">
                  <span className="size-1.5 rounded-full bg-(--color-accent) animate-pulse-dot" />
                  running
                </span>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 font-mono text-[0.8rem]">
                  <span className="text-(--color-accent)">navigate_page</span>
                  <span className="text-(--color-fg-muted)">
                    → my-jira / ENG-77
                  </span>
                  <span className="text-(--color-accent)">grep</span>
                  <span className="text-(--color-fg-muted)">
                    → &quot;search index|indexer&quot; across the repo
                  </span>
                  <span className="text-(--color-accent)">take_screenshot</span>
                  <span className="text-(--color-fg-muted)">
                    → jiraClient.ts:713&ndash;726
                  </span>
                </div>

                <p className="rounded-xl bg-(--color-bg) p-4 text-sm leading-relaxed text-(--color-fg-muted)">
                  &ldquo;Every paginating code path is capped by design
                  (MAX_PAGES = 5, PAGE_SIZE = 100), and truncation is never
                  silent — a live cursor caps the page. This is the class of
                  bug the ticket describes, and it was already fixed
                  historically. Nothing left unhandled.&rdquo;
                </p>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-(--color-fg-dim)">
                    2 turns &middot; read-only
                  </span>
                  <span className="rounded-full border border-(--color-border) px-3 py-1 font-mono text-xs text-(--color-fg-muted)">
                    not a bug
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
