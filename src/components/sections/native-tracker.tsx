import { Reveal } from "../reveal";

export function NativeTracker() {
  return (
    <section
      data-theme="light"
      className="relative bg-(--color-bg-raised) py-14 text-(--color-fg) md:py-16"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-(--color-border) bg-(--color-bg) p-6">
          <p className="text-xs font-medium tracking-wide text-(--color-fg-dim) uppercase">
            Also in the box
          </p>
          <p className="mt-3 text-sm leading-relaxed text-(--color-fg-muted)">
            Waypoint didn&rsquo;t start as a Jira companion — it started as its
            own native tracker, and that half still ships: boards, lists, a
            calendar view, a Gantt view and a spreadsheet view over the same
            tickets, sprints with burndown charts, workstreams, docs, and a
            requests queue that turns outside asks into real tickets. All of
            it running natively, talking to a real backend, not
            local-storage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
