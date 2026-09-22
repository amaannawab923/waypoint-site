import { FeatureGrid } from "../ui/feature-grid";
import {
  BoardIcon,
  SprintIcon,
  DocIcon,
  InboxIcon,
  HistoryIcon,
  SessionIcon,
  CameraIcon,
  ShieldCheckIcon,
  CalendarIcon,
} from "../icons";

const items = [
  {
    icon: <BoardIcon />,
    name: "List, board, calendar, spreadsheet, Gantt",
    body: "Five views over the same tickets — switch how you look at the work, not which tool holds it.",
  },
  {
    icon: <SprintIcon />,
    name: "Sprints & workstreams",
    body: "Sprint-style iterations with a live burndown chart, plus workstreams for work that doesn't fit a sprint.",
  },
  {
    icon: <DocIcon />,
    name: "Docs & saved views",
    body: "Freeform project docs and shareable, filtered views your team actually reuses instead of rebuilding.",
  },
  {
    icon: <InboxIcon />,
    name: "Requests queue",
    body: "An incoming queue that turns an outside ask — a Slack message, an email — into a real, triaged ticket.",
  },
  {
    icon: <HistoryIcon />,
    name: "Full activity history",
    body: "Every change, human or agent, lands in the same append-only log — in order, never silently overwritten.",
  },
  {
    icon: <SessionIcon />,
    name: "Sessions on any ticket",
    body: "Dispatch Investigate, Fix, or something else straight from a ticket into its own isolated git worktree.",
  },
  {
    icon: <CameraIcon />,
    name: "Browser verification",
    body: "A session checks its own work in a real browser and brings back screenshots, not just a claim of done.",
  },
  {
    icon: <ShieldCheckIcon />,
    name: "Propose, never push",
    body: "Every agent write — a fix, a comment, a status flip — waits in a review queue for a person to approve.",
  },
  {
    icon: <CalendarIcon />,
    name: "Deep-linked routes",
    body: "Real, address-bar-updating routes — hard refresh, back and forward, and shareable links all just work.",
  },
];

export function Capabilities() {
  return (
    <FeatureGrid
      eyebrow="What's in the tracker"
      title="A real project tracker, not a bolt-on."
      intro="Everything a team already expects from a tracker — plus the part no other tracker has: tickets that can go do the work themselves."
      items={items}
      columns={3}
    />
  );
}
