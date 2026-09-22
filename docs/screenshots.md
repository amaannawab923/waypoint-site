# Swapping in real screenshots

Every visual on this site is a self-contained, hand-typeset panel — none of
it is a real screenshot of the app. That's deliberate: the site stands on
its own design, and real product shots get dropped in later.

`public/shots/` and `.raw-screens/` hold real captures from an earlier pass
(see below), but nothing in `src/` references them right now — they're
reference material, not wired into a page.

## The panels

There's no shared "slot" component this time — each panel is built directly
in its section, sized and styled for its own content, because a generic
fixed-aspect frame doesn't fit an asymmetric, bleeding-panel layout well.
Swapping one in means replacing that panel's JSX with a `<div>` of a similar
footprint holding an `<img>` — expect to adjust padding/rounding by eye
rather than a mechanical one-line swap.

| Section | File | Current panel | Real shot to reference |
| --- | --- | --- | --- |
| Hero | `src/components/sections/hero.tsx` | A live-status card: `browser_task`, `13.9s`, three resolved steps, `agent/ENG-77`, a `fixed` chip | No screenshot needed here by design — it's meant to read as live status, not a window |
| Sessions | `src/components/sections/sessions.tsx` | A transcript card: `navigate_page` / `grep` / `take_screenshot` tool rows, a quoted finding, a `not a bug` chip | A session's live transcript (`public/shots/sessions-list.jpg` was the My sessions list; an actual transcript view would match better) |
| Review & verdicts | `src/components/sections/review-verdicts.tsx` | A proposed-change card: `ENG-77`, `Todo → In Review`, the "why this exists" line, Approve/Reject | The Review queue (`public/shots/review.jpg` is a prior capture) |
| Honest by design | `src/components/sections/honest-by-design.tsx` | `MachineSignalIllustration` (`src/components/illustrations/machine-signal.tsx`) — an SVG signal map, this machine → Anthropic / TypeSafe | The in-app "This machine" page (`public/shots/machine.jpg` is a prior capture) |
| Ultrafast browser QA | `src/components/sections/ultrafast-showpiece.tsx` | The 0.0s → 13.9s counter (kept — it's real, measured data) + a 4-item numbered step list + a timing table | The real run's screenshots (`public/shots/qa-step-1.jpg` … `qa-step-4.jpg`, extracted from run `agent/PL-10-gf6dtpe`'s transcript) could replace the step list with a small filmstrip alongside the counter |

## What's sitting unused

- `public/shots/` — `home.jpg`, `sessions-list.jpg`, `review.jpg`,
  `machine.jpg`, `qa-step-1.jpg` … `qa-step-4.jpg`. Real captures from the
  running app (the `qa-step-*` ones are the actual evidence images from a
  real `browser_task` run, extracted from its transcript, not re-screenshot).
- `.raw-screens/` — eight annotated shots with callout overlays, meant for
  the product README, not this site. If they're ever used here, crop out the
  callouts first.
