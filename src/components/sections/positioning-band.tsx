import { Reveal } from "../reveal";

/**
 * The serval.com "big center statement on a dark ground" move — a single
 * declarative sentence that carries the positioning, between the feature
 * grid and the split rows.
 */
export function PositioningBand() {
  return (
    <section className="relative overflow-hidden bg-(--color-bg) py-24 md:py-32">
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="display display-lg text-(--color-fg)">
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
