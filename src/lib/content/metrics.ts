/**
 * The measured QA numbers, verbatim from the one benchmark run. Nothing
 * here is invented — see /verify and the honesty rule on that page for
 * how these were produced.
 */
export const HEADLINE_METRICS = [
  {
    value: "17s",
    label: "Standalone benchmark",
    detail: "10 steps to book a Google Flights search",
  },
  {
    value: "320–390ms",
    label: "Per-decision latency",
    detail: "The Jev decision model, not a full model round trip",
  },
  {
    value: "13.9s",
    label: "In-app QA cycle, wall clock",
    detail: "Chromium ready to final verdict, screenshots included",
  },
  {
    value: "4",
    label: "Screenshots returned",
    detail: "The evidence the agent judges — not the tool's own “done”",
  },
] as const;

export const CYCLE_BREAKDOWN = [
  { label: "Chromium ready", value: "0.7s" },
  { label: "Jev × 3 decisions", value: "5.5s", detail: "avg 1824ms / decision" },
  { label: "Claude, 1 text call", value: "7.0s" },
] as const;
