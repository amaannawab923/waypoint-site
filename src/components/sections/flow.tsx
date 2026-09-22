import { NumberedFlow } from "../ui/numbered-flow";

const steps = [
  {
    title: "Connect",
    body: "Point Waypoint at a git remote and it's a real project: tickets, sprints, a board. Already on Jira? Connect that too and work your real issues alongside native ones.",
  },
  {
    title: "Dispatch",
    body: "Open any ticket, pick Investigate or Fix, edit the brief, send it. It gets its own git worktree and an agent/<KEY> branch — nothing touches your working copy.",
  },
  {
    title: "Review",
    body: "The session comes back with a verdict and evidence — a diff, a report, screenshots. Read it, approve it, or send it back for another pass.",
  },
];

export function Flow() {
  return (
    <NumberedFlow
      eyebrow="End to end"
      title="Connect, dispatch, review."
      steps={steps}
    />
  );
}
