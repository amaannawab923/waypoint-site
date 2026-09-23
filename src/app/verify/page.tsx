import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { SplitRow } from "@/components/ui/split-row";
import { LongForm } from "@/components/ui/long-form";
import { SpecTable } from "@/components/ui/spec-table";
import { QaShowpiece } from "@/components/sections/qa-showpiece";
import { ClosingCta } from "@/components/sections/closing-cta";
import { VerifyFramesPanel } from "@/components/illustrations/verify-frames-panel";
import { SessionTranscriptPanel } from "@/components/illustrations/session-transcript-panel";

export const metadata: Metadata = {
  title: "Verify — ultrafast browser QA",
  description:
    "Why a fast decision model beats a full model round trip per click, the measured numbers from a real run, the honesty rule behind every verdict, and what the browser can't drive yet.",
};

const limitRows: React.ReactNode[][] = [
  ["Standard DOM pages", "Works today", "Forms, links, buttons, standard navigation — the common case, including the run timed above."],
  ["Shadow DOM", "Not yet", "Elements inside a shadow root aren't visible to the decision model's page read."],
  ["Iframes", "Not yet", "A same- or cross-origin frame's content isn't included in the page snapshot."],
  ["Canvas-rendered UI", "Not yet", "There's no DOM to read — canvas draws pixels, not elements."],
  ["File uploads", "Not yet", "No mechanism yet to hand a real file to a native file picker."],
  ["Pop-up / new-window flows", "Not yet", "A second window isn't tracked as part of the same task."],
];

export default function VerifyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Verify"
          title="It checks itself before it tells you."
          body="A session doesn't take a fix's word for it. It opens a real browser, drives it, and comes back with screenshots — judged by the agent, not by the tool's own claim of done."
        />

        <SplitRow
          eyebrow="Why it's fast"
          title="A decision, not a round trip."
          body={
            <>
              <p>
                Driving a browser with a full model call per click is slow —
                every button press waits on a full reasoning pass. Waypoint
                routes each step through a small, fast decision model (Jev,
                via <code className="font-mono text-(--color-fg)">browser-use/jev-ultrafast</code>)
                instead.
              </p>
              <p>
                A standalone benchmark chained ten of those steps — booking
                a Google Flights search — in 17 seconds, each decision
                landing in 320&ndash;390ms.
              </p>
            </>
          }
          panel={<VerifyFramesPanel />}
        />

        <QaShowpiece />

        <LongForm
          eyebrow="The honesty rule"
          title="“Done” is a claim. Screenshots are the evidence."
          quote="done is Jev's claim — check the screenshots before saying the behaviour matches."
          quoteCite="the line the tool itself prints, every time"
          paragraphs={[
            "A browser task can report success and still be wrong — a field that silently rejected input, a toast that never appeared. So the tool's own “done” is never the last word.",
            "Every run returns its captured frames, and the agent looks at them before writing a verdict. If the screenshots don't show what the task claims, the verdict says so.",
          ]}
        />

        <SplitRow
          eyebrow="Where frames land"
          title="Right next to the tool call that took them."
          reverse
          body={
            <>
              <p>
                Screenshots aren&rsquo;t a separate artifact you have to go
                find — they land inline in the session transcript, attached
                to the verify step that produced them.
              </p>
              <p>
                When a Fix goes to Review, its screenshots go with it, so
                the person approving sees the same evidence the agent did.
              </p>
            </>
          }
          href="/review"
          linkLabel="See a proposal with its evidence"
          panel={<SessionTranscriptPanel session="export" compact />}
        />

        <SpecTable
          eyebrow="Honestly, not everything yet"
          title="What it can and can't drive."
          intro="Stating the limits plainly builds more trust than hiding them."
          headers={["Surface", "Status", "Why"]}
          rows={limitRows}
        />

        <ClosingCta
          title="Watch a session verify itself."
          body="The transcript, the frames, and the verdict all live in one Session view."
          secondaryHref="/agents"
          secondaryLabel="See how sessions are dispatched"
        />
      </main>
      <SiteFooter />
    </>
  );
}
