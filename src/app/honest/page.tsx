import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { LongForm } from "@/components/ui/long-form";
import { SpecTable } from "@/components/ui/spec-table";
import { SplitRow } from "@/components/ui/split-row";
import { ClosingCta } from "@/components/sections/closing-cta";
import { MachineSignalIllustration } from "@/components/illustrations/machine-signal";

export const metadata: Metadata = {
  title: "What leaves this machine",
  description:
    "The local-first architecture behind Waypoint: no cloud backend, the server runs on your machine, prompts go to Anthropic on your own Claude subscription, page text goes to TypeSafe only while a browser task runs, telemetry off.",
};

const dataRows: React.ReactNode[][] = [
  ["Tickets, sprints, docs, history", "Nowhere", "Never — it lives in Postgres, on your machine, for the life of the project."],
  ["Agent prompts", "Anthropic", "Whenever a session runs, on your own Claude subscription — not a Waypoint-run key."],
  ["Page text during a browser check", "TypeSafe", "Only while a browser-verification task is actively running, and only the page — never your tickets."],
  ["Usage telemetry", "Nowhere", "Off. There is no analytics call in the build to turn back on."],
];

export default function HonestPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Honest"
          title="What leaves this machine."
          body="A local-first architecture only means something if you can see through it. This is the real table — not a summary, the actual list of what goes where, and when."
        />

        <LongForm
          eyebrow="The promise"
          title="A promise you can hold us to."
          quote="The whole promise is that nothing happens without a person approving it."
          quoteCite="the rule this entire product is built around"
          paragraphs={[
            "Waypoint doesn't have a backend you have to trust. The server that holds your tickets, sprints, and docs runs on your own machine, backed by Postgres you can open yourself.",
            "A marketing site that faked proof would contradict the product it's describing — so nothing on this page is a metric we didn't measure or a claim we can't point to in the code.",
          ]}
        />

        <SpecTable
          eyebrow="The real table"
          title="Where your data actually goes."
          headers={["Data", "Goes to", "When"]}
          rows={dataRows}
        />

        <SplitRow
          eyebrow="Architecture"
          title="No cloud backend to trust."
          body={
            <>
              <p>
                There is no hosted Waypoint server holding your tickets. The
                Electron app talks to a backend that runs alongside it, on
                your machine — the same one whether you&rsquo;re on a plane
                or offline entirely.
              </p>
              <p>
                Two endpoints exist outside this machine, and only two: the
                Anthropic API for agent prompts, and TypeSafe for the page
                text a browser-verification step is actively reading.
              </p>
            </>
          }
          panel={
            <div className="panel-frame p-6 sm:p-8">
              <MachineSignalIllustration />
            </div>
          }
        />

        <ClosingCta
          title="Verify it in the code, not just on this page."
          body="Every claim above traces to a real file in the repo — the backend, the agent runtime, and the browser-verification path are all in the open."
          secondaryHref="/changelog"
          secondaryLabel="See what actually shipped"
        />
      </main>
      <SiteFooter />
    </>
  );
}
