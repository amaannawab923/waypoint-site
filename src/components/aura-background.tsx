/**
 * The ambient colour field behind every page. Three heavily-blurred
 * shapes drifting on long, offset cycles — slow enough that it reads as
 * atmosphere rather than motion. Fixed and inert: it never takes a
 * pointer event and never enters the accessibility tree.
 */
export function AuraBackground() {
  return (
    <div className="aura-bg" aria-hidden>
      <span className="aura-blob aura-blob--1" />
      <span className="aura-blob aura-blob--2" />
      <span className="aura-blob aura-blob--3" />
    </div>
  );
}
