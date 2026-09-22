import { SplitRow } from "../ui/split-row";
import { SessionTranscriptPanel } from "../illustrations/session-transcript-panel";

export function SplitSessions() {
  return (
    <SplitRow
      eyebrow="Sessions"
      title="Tickets that do the work."
      body={
        <>
          <p>
            Every ticket carries a Session button. Pick{" "}
            <span className="text-(--color-fg)">Investigate</span> for a
            written root-cause report, <span className="text-(--color-fg)">Fix</span>{" "}
            for a working change, or{" "}
            <span className="text-(--color-fg)">something else</span> for a
            scoped one-off.
          </p>
          <p>
            Read the agent&rsquo;s brief and edit it before anything runs.
            Then it gets its own git worktree on an{" "}
            <code className="font-mono text-(--color-fg)">agent/&lt;KEY&gt;</code>{" "}
            branch — your working copy never moves.
          </p>
        </>
      }
      href="/agents"
      linkLabel="See how sessions work"
      panel={<SessionTranscriptPanel />}
    />
  );
}
