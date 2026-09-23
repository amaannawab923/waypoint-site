import { Rail } from "../ui/rail";

const items = [
  {
    index: "01",
    name: "Five views, one set of tickets",
    body: "List, board, calendar, spreadsheet and Gantt over the same work — you change how you look at it, not which tool holds it.",
  },
  {
    index: "02",
    name: "Sprints and workstreams",
    body: "Sprint-style iterations with a live burndown, plus workstreams for the work that never did fit inside a sprint.",
  },
  {
    index: "03",
    name: "Docs and saved views",
    body: "Freeform project docs, and filtered views your team actually reuses instead of rebuilding the same filter every Monday.",
  },
  {
    index: "04",
    name: "A requests queue",
    body: "The outside ask — a Slack message, an email, a form — arrives as a real triaged ticket instead of a tap on the shoulder.",
  },
  {
    index: "05",
    name: "Full activity history",
    body: "Every change, human or agent, lands in one append-only log, in order. Nothing is silently overwritten by anyone.",
  },
  {
    index: "06",
    name: "A session on any ticket",
    body: "Dispatch Investigate, Fix, or a one-off brief straight from the ticket into its own isolated git worktree.",
  },
  {
    index: "07",
    name: "Verification with evidence",
    body: "A session drives a real browser against its own change and brings back frames — not a claim that it is done.",
  },
  {
    index: "08",
    name: "Propose, never push",
    body: "Every agent write — a fix, a comment, a status flip — waits in a queue for a person. There is no autonomous path.",
  },
];

export function Capabilities() {
  return (
    <Rail
      eyebrow="What's in the tracker"
      title="A real tracker first. The agents come second."
      intro="Everything a team already expects — and then the part no other tracker has, which only matters because the first part is actually there."
      items={items}
      theme="light"
    />
  );
}
