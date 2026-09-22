import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { SplitRow } from "@/components/ui/split-row";
import { SpecTable } from "@/components/ui/spec-table";
import { ClosingCta } from "@/components/sections/closing-cta";
import { CalloutBand } from "@/components/ui/callout-band";
import { BriefPanel } from "@/components/illustrations/brief-panel";
import { WorktreeDiagram } from "@/components/illustrations/worktree-diagram";
import { SessionTranscriptPanel } from "@/components/illustrations/session-transcript-panel";
import { SessionIcon, HistoryIcon, LockOffIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sessions — tickets that do the work",
  description:
    "Dispatch Investigate, Fix, or something else on any ticket. A written brief you read and edit first, an isolated git worktree on its own agent/<KEY> branch, a live transcript, and a composer that never locks — even mid-run.",
};

const modes = [
  {
    icon: <SessionIcon />,
    name: "Investigate",
    body: "No code changes. The agent reproduces the problem and comes back with a written root-cause report you can act on.",
  },
  {
    icon: <SessionIcon />,
    name: "Fix",
    body: "A working change, tests included, proposed as a diff — never pushed straight to your branch.",
  },
  {
    icon: <SessionIcon />,
    name: "Something else",
    body: "A scoped one-off brief for anything that doesn't fit Investigate or Fix — you write the ask, the session runs it the same way.",
  },
];

const verdictRows: React.ReactNode[][] = [
  [
    <code key="v" className="font-mono text-(--color-fg)">Fixed</code>,
    "A diff is ready",
    "Ticket moves to Ready for review; the diff opens the Review queue card.",
  ],
  [
    <code key="v" className="font-mono text-(--color-fg)">Investigated</code>,
    "A report, no diff",
    "Ticket stays open with the written report attached to its activity log.",
  ],
  [
    <code key="v" className="font-mono text-(--color-fg)">Needs input</code>,
    "Blocked on a decision only you can make",
    "Ticket flips to Blocked; the composer stays open for you to answer inline.",
  ],
  [
    <code key="v" className="font-mono text-(--color-fg)">No repro</code>,
    "Couldn't reproduce the problem",
    "Ticket closes with notes on what was tried, so it isn't silently dropped.",
  ],
];

export default function AgentsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Sessions"
          title="Tickets that do the work."
          body="A Session is a ticket dispatched to an agent — Investigate to understand it, Fix to resolve it, or something else entirely. It runs in isolation, checks its own work, and waits for you before anything ships."
        />

        <FeatureGrid
          eyebrow="Three modes"
          title="Pick the shape of the work, not just the ticket."
          items={modes}
          columns={3}
        />

        <SplitRow
          eyebrow="The brief"
          title="You read it before anything runs."
          body={
            <>
              <p>
                Dispatching a session writes a brief first — what the agent
                understood the ticket to mean, and what it plans to do.
              </p>
              <p>
                Edit it like you would a ticket description. Nothing starts
                until you send it.
              </p>
            </>
          }
          panel={<BriefPanel />}
        />

        <SplitRow
          eyebrow="Isolation"
          title="Your working copy never moves."
          reverse
          body={
            <>
              <p>
                Every session gets its own git worktree and its own{" "}
                <code className="font-mono text-(--color-fg)">agent/&lt;KEY&gt;</code>{" "}
                branch, checked out from a clean copy of your default branch.
              </p>
              <p>
                It reads, edits, and runs tests entirely inside that
                worktree — the repo you have open is untouched until you
                approve a merge.
              </p>
            </>
          }
          panel={<WorktreeDiagram />}
        />

        <SplitRow
          eyebrow="Live transcript"
          title="Watch it work, tool call by tool call."
          body={
            <>
              <p>
                Every read, edit, test run, and browser check streams into
                the transcript as it happens — not a summary written after
                the fact.
              </p>
              <p>
                Screenshots from a browser-verification step land inline,
                next to the tool call that produced them.
              </p>
            </>
          }
          href="/verify"
          linkLabel="See how verification works"
          panel={<SessionTranscriptPanel />}
        />

        <CalloutBand
          eyebrow="Never locked"
          title="Message any run, at any status."
          body="The composer is never disabled — not while a session is running, not after it's finished, not while it's blocked waiting on someone else. Send a correction mid-fix, or resume a session that went quiet, by just typing into it."
          icon={<LockOffIcon />}
        />

        <SpecTable
          eyebrow="Verdicts"
          title="What a session comes back with."
          intro="Every run ends in one of four verdicts, and each maps to a real state change on the ticket — nothing is left ambiguous."
          headers={["Verdict", "Means", "What happens to the ticket"]}
          rows={verdictRows}
        />

        <CalloutBand
          eyebrow="Close run"
          title="Cleans up after itself."
          body="Closing a run deletes its worktree and its branch once you're done with it — nothing lingers on disk, and nothing is left half-merged."
          icon={<HistoryIcon />}
          theme="dark"
        />

        <ClosingCta
          title="Dispatch your first session."
          body="Sessions are one part of a real tracker. Clone it, connect a project, and try Investigate on a ticket of your own."
          secondaryHref="/verify"
          secondaryLabel="See how it verifies its own work"
        />
      </main>
      <SiteFooter />
    </>
  );
}
