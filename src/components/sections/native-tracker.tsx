import { Reveal } from "../reveal";

export function NativeTracker() {
  return (
    <section className="relative border-t border-(--color-border-soft) bg-(--color-bg-raised) py-16 md:py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl border-l border-(--color-border) pl-6">
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-fg-dim) uppercase">
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
