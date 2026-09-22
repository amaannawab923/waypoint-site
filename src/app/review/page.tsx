import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { SplitRow } from "@/components/ui/split-row";
import { CalloutBand } from "@/components/ui/callout-band";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ProposalCard } from "@/components/illustrations/proposal-card";
import { Reveal } from "@/components/reveal";
import { UndoIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Review — propose, then approve",
  description:
    "One card per report: what changed, why the session thinks it's right, and a single approve that applies the comment and the state change together. Competing fixes are named and superseded, and every approval can be undone.",
};

export default function ReviewPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Review"
          title="Propose. Never push."
          body="Every write a session wants to make — a fix, a comment, a status change — waits in one queue. Approve a card and it happens exactly as shown. Nothing reaches your tracker any other way."
        />

        <SplitRow
          eyebrow="Queue anatomy"
          title="One card, the full picture."
          body={
            <>
              <p>
                A card carries the diff or the comment, the ticket it
                belongs to, and the reason the session thinks it&rsquo;s
                right — not just what changed, but why it exists.
              </p>
              <p>
                A single approve applies the comment and the ticket&rsquo;s
                state change together, atomically — there&rsquo;s no
                partial-approved state to clean up after.
              </p>
            </>
          }
          panel={
            <div className="panel-frame space-y-3 p-5 sm:p-7">
              <p className="font-mono text-xs text-(--color-fg-dim)">Waiting on you · 2</p>
              <ProposalCard
                ticket="WP-77"
                summary="Fix: resolve the filter-change race"
                reason="Investigate found the root cause in the scroll-position handler; this closes it with a regression test."
                state="pending"
              />
              <ProposalCard
                ticket="WP-52"
                summary="Comment: root cause found, needs a design call"
                reason="Two valid directions exist; posting both so a human picks."
                state="pending"
              />
            </div>
          }
        />

        <CalloutBand
          eyebrow="Why this exists"
          title="Every card explains itself."
          body="Not just what a session wants to change, but why it believes the change is correct — the same reasoning a teammate would give in a PR description, attached to the card instead of buried in a transcript."
          icon={<UndoIcon />}
        />

        <SplitRow
          eyebrow="Competing fixes"
          title="Named, not silently overwritten."
          reverse
          body={
            <>
              <p>
                Two sessions can propose different fixes for the same
                ticket. Both show up in the queue, each labeled with what it
                tried.
              </p>
              <p>
                Approving one automatically marks the other{" "}
                <span className="text-(--color-fg)">superseded</span> —
                it&rsquo;s still visible in the history, just no longer live.
              </p>
            </>
          }
          panel={
            <div className="panel-frame space-y-3 p-5 sm:p-7">
              <p className="font-mono text-xs text-(--color-fg-dim)">WP-77 · two proposals</p>
              <ProposalCard
                ticket="WP-77"
                summary="Fix: resolve the filter-change race with a version guard"
                reason="Approved — smallest change that closes the root cause."
                state="approved"
              />
              <ProposalCard
                ticket="WP-77"
                summary="Fix: debounce the filter handler instead"
                reason="An earlier attempt at the same ticket."
                state="superseded"
              />
            </div>
          }
        />

        <CalloutBand
          eyebrow="Undo"
          title="Any status change can be reversed."
          body="Approved something you shouldn't have? Undo puts the ticket back where it was and reopens the card — it isn't a one-way door."
          icon={<UndoIcon />}
          theme="dark"
        />

        <section data-theme="light" className="relative border-t border-(--color-border) bg-(--color-bg-raised) py-20 md:py-28">
          <div className="container-page">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">Before and after</p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-(--color-fg) md:text-4xl">
                What a proposal looks like, then what it leaves behind.
              </h2>
            </Reveal>

            <Reveal className="mt-12 mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="panel-frame p-6">
                <p className="font-mono text-xs text-(--color-fg-dim)">Before · in queue</p>
                <p className="mt-3 text-sm font-medium text-(--color-fg)">
                  WP-77 — In Progress
                </p>
                <div className="mt-3 space-y-1.5 text-xs text-(--color-fg-muted)">
                  <p>· Investigate: root cause found</p>
                  <p>· Fix: proposed, waiting on you</p>
                </div>
                <span className="mt-4 inline-block rounded-full border border-(--color-accent) px-3 py-1 font-mono text-xs text-(--color-accent)">
                  pending
                </span>
              </div>
              <div className="panel-frame p-6">
                <p className="font-mono text-xs text-(--color-fg-dim)">After · approved</p>
                <p className="mt-3 text-sm font-medium text-(--color-fg)">
                  WP-77 — Ready for review
                </p>
                <div className="mt-3 space-y-1.5 text-xs text-(--color-fg-muted)">
                  <p>· Fix approved by you, 2m ago</p>
                  <p>· Comment posted, diff attached</p>
                </div>
                <span className="mt-4 inline-block rounded-full bg-(--color-accent) px-3 py-1 font-mono text-xs text-(--color-on-accent)">
                  approved
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <ClosingCta
          title="See the queue for yourself."
          body="Review is where every session's work becomes your decision — clone the repo and dispatch a session to fill it."
          secondaryHref="/agents"
          secondaryLabel="See how sessions are dispatched"
        />
      </main>
      <SiteFooter />
    </>
  );
}
