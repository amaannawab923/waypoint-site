import { SplitRow } from "../ui/split-row";
import { ProposalCard } from "../illustrations/proposal-card";

export function SplitReview() {
  return (
    <SplitRow
      eyebrow="Review"
      title="Nothing ships without you."
      body={
        <>
          <p>
            Every proposed change — a fix, a comment, a status flip — lands
            as one card in a queue: what changed, why the session thinks
            it&rsquo;s right, and a single approve.
          </p>
          <p>
            Two competing fixes for the same ticket can both show up —
            approving one supersedes the other. Any approval can be undone.
          </p>
        </>
      }
      href="/review"
      linkLabel="Walk through a proposal"
      panel={
        <div className="panel-frame space-y-3 p-5 sm:p-7">
          <p className="font-mono text-xs text-(--color-fg-dim)">Review queue</p>
          <ProposalCard
            ticket="WP-77"
            summary="Fix: resolve the filter-change race"
            reason="Investigate found the root cause; this is the smallest change that closes it."
            state="pending"
          />
          <ProposalCard
            ticket="WP-77"
            summary="Fix: debounce the filter handler instead"
            reason="An earlier attempt at the same ticket — superseded by the change above."
            state="superseded"
          />
        </div>
      }
    />
  );
}
