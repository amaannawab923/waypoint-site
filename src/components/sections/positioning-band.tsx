import { Reveal } from "../reveal";

/**
 * The serval.com "big center statement on a dark ground" move — a single
 * declarative sentence that carries the positioning, between the feature
 * grid and the split rows.
 */
export function PositioningBand() {
  return (
    <section className="relative overflow-hidden bg-(--color-bg) py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(129,140,248,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-2xl leading-[1.45] font-medium text-balance text-(--color-fg) sm:text-3xl md:text-[2.25rem]">
            Not a chat window bolted onto a database that doesn&rsquo;t know
            your tickets exist.{" "}
            <span className="text-(--color-fg-muted)">
              Waypoint is the tracker — and the tickets can act.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
