# Swapping in real screenshots

Every visual on this site is currently a self-contained CSS/SVG illustration
— none of it is a real screenshot of the app. That was a deliberate call: the
site should stand on its own design, and real product shots get dropped in
later.

`public/shots/` and `.raw-screens/` still hold real captures from an earlier
pass (see below), but nothing in `src/` references them right now — they're
reference material, not wired into a page.

## The slots

Each slot below is a `VisualSlot` (`src/components/visual-slot.tsx`): a fixed
`aspect-16/10` frame with locked chrome. Swapping one in is mechanical —
replace that section's illustration import with a plain `<img>`:

```tsx
<VisualSlot label="Home">
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    src="/shots/home.jpg"
    alt="…"
    className="absolute inset-0 h-full w-full object-cover"
  />
</VisualSlot>
```

Drop the `illustrative` pulse-dot in the slot header once it's a real image
(it's the tell that today's version is a stand-in, not a screenshot).

| Section | File | Current illustration | Real shot to drop in |
| --- | --- | --- | --- |
| Hero | `src/components/sections/hero.tsx` | `HomeGlanceIllustration` — abstracted proposal/sprint tiles + a recents list | Home view (`public/shots/home.jpg` is a prior capture of this) |
| Sessions | `src/components/sections/sessions.tsx` | `SessionTranscriptIllustration` — tool-call rows + a diff line | A session's live transcript (`public/shots/sessions-list.jpg` was the My sessions list; a transcript view would read better here) |
| Ultrafast browser QA | `src/components/sections/ultrafast-showpiece.tsx` | An inline mock browser window (not a separate `VisualSlot` component — built directly in the section) that fills in as the clock counts to 13.9s | The real run's screenshots (`public/shots/qa-step-1.jpg` … `qa-step-4.jpg`, extracted from run `agent/PL-10-gf6dtpe`'s transcript) — this slot isn't a single 16:10 frame today, so swapping in real screenshots means restoring the 4-image filmstrip layout, not just dropping one `<img>` in |
| Review & verdicts | `src/components/sections/review-verdicts.tsx` | `ReviewCardIllustration` — a proposed-change card with a looping proposed→approved dot | The Review queue (`public/shots/review.jpg` is a prior capture) |
| Honest by design | `src/components/sections/honest-by-design.tsx` | `MachineSignalIllustration` — an SVG signal map (this machine → Anthropic / TypeSafe) | The in-app "This machine" page (`public/shots/machine.jpg` is a prior capture) |

## Illustration source

The four reusable illustrations live in `src/components/illustrations/`:
`home-glance.tsx`, `session-transcript.tsx`, `review-card.tsx`,
`machine-signal.tsx`. The Ultrafast QA mock browser is inlined in its own
section file since it's driven by that section's GSAP timeline (the same
one that runs the 0.0s → 13.9s counter).

## What's sitting unused

- `public/shots/` — `home.jpg`, `sessions-list.jpg`, `review.jpg`,
  `machine.jpg`, `qa-step-1.jpg` … `qa-step-4.jpg`. Real captures from the
  running app (the `qa-step-*` ones are the actual evidence images from a
  real `browser_task` run, extracted from its transcript, not re-screenshot).
- `.raw-screens/` — eight annotated shots with callout overlays, meant for
  the product README, not this site. If they're ever used here, crop out the
  callouts first.
