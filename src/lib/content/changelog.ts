/**
 * Built from real merged work on `main` in the product repo
 * (`git log --oneline --merges` and the PR titles behind #33–#87).
 * No invented releases, dates, or version numbers — this is a plain
 * reading of what actually shipped, grouped by day.
 */
export type ChangelogEntry = {
  text: string;
  tag?: string;
};

export type ChangelogGroup = {
  date: string;
  entries: ChangelogEntry[];
};

export const CHANGELOG: ChangelogGroup[] = [
  {
    date: "2026-09-21",
    entries: [
      {
        text: "Sessions never lock: you can message a run at any status, not just while it's waiting on you.",
        tag: "never-lock",
      },
      {
        text: "Browser tools landed — Sessions can now verify a fix themselves and bring screenshots back with the run.",
        tag: "verify",
      },
      {
        text: "Sessions UX cleanup: terminal-style execute rows, a full-width transcript, and Enter to send.",
      },
      {
        text: "ACP sessions now register in the daemon's conversation index and reconnect stale topics on focus, instead of getting stuck at “running.”",
      },
      {
        text: "Turned off the session browser's telemetry watchdog processes.",
      },
      { text: "Fixed a Jira dashboard gadget bound through the wrong config key." },
    ],
  },
  {
    date: "2026-09-19–20",
    entries: [
      { text: "Resume: continue any dispatched session by messaging it, even after the run has gone dead." },
      { text: "Closed a batch of session dispatch and PR-safety gaps." },
      { text: "Ticket drawer session rows now open on a click anywhere in the row." },
      { text: "The transcript shows a real empty state for a run that ended with zero turns." },
      { text: "My Jira redesign: all nine tabs, pagination, starring, and a cleaner Copilot panel." },
      { text: "New MCP tools for Jira dashboards, gadgets, and filters." },
    ],
  },
  {
    date: "2026-09-14–16",
    entries: [
      { text: "Main-process HTTPS now trusts the OS certificate store." },
      { text: "Team workspaces: creation, invite, and join flow." },
      { text: "Workspace-scoping audit for every backend route." },
      { text: "Desktop sign-in for team invite and sync." },
      { text: "Built-in sign-in — GitHub/Google OAuth and email link." },
      { text: "First-run instance setup and an instance admin." },
      { text: "Split identity from workspace membership in the schema." },
    ],
  },
  {
    date: "2026-09-13",
    entries: [
      {
        text: "A Jira issue can be handed to a session and the result handed back — dispatch works on real Jira tickets, not just native ones.",
      },
      {
        text: "Investigate and Fix: the two dispatch modes that send a ticket to an agent and bring the result back.",
        tag: "investigate/fix",
      },
      {
        text: "Sessions anywhere: a folder per independent session, worktree or direct, with auto-approve and a first message.",
        tag: "worktrees",
      },
      { text: "Start, prompt, and resume an independent session from the panel." },
      { text: "The agent-runs engine, ledger, and My Sessions view." },
      { text: "The host can publish a writing run's branch — push and open a pull request, as you." },
    ],
  },
  {
    date: "2026-09-11–12",
    entries: [
      { text: "My Sessions: the multi-session panel on the icon-rail layout." },
      { text: "Session model and persistence: the agent-runs ledger, a worktree per run, boot-time reconcile." },
      { text: "Pinned, installed, and supervised the agent engine that runs sessions." },
      { text: "Collapsible parent/child hierarchy in the ticket list." },
      { text: "Jira rows wrap and reflow at narrow widths instead of clipping." },
      { text: "Restricted and internal Jira comments now show, with a warning before replying in the open." },
      { text: "Removed three Jira sync claims the app couldn't actually back up." },
    ],
  },
  {
    date: "2026-09-06–09",
    entries: [
      { text: "Jira ticket parity: read surfaces, real ADF rendering, conflict detection, and the four comment actions." },
      { text: "Six Jira mapping defects fixed — the app had been reporting values the data didn't support." },
      { text: "A real blocked-review count in place of a hardcoded zero." },
      { text: "Stopped faking a Jira ticket's updated/created timestamp." },
      { text: "Relicensed the project from MIT to AGPL-3.0.", tag: "license" },
      { text: "My Jira: a personal, API-token Jira companion — read and write, approval-gated." },
      { text: "De-modalized the ticket drawer so Copilot stays reachable while it's open." },
    ],
  },
  {
    date: "2026-09-03–04",
    entries: [
      {
        text: "The Waypoint revamp: differentiation pass, the propose/approve review queue, a unified ticket list, and sparse-project support.",
        tag: "review",
      },
      { text: "The Review screen: Waiting on you, Blocked, and Ran overnight, with a live health strip and bulk approve/reject." },
      { text: "One ticket list component serving project, workspace, and sparse-project scopes." },
      { text: "Saved-view filter editor, and a global keyboard layer (j/k/x, g-navigation, Cmd/Ctrl+J)." },
    ],
  },
];
