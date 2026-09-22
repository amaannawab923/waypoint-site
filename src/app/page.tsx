import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { PositioningBand } from "@/components/sections/positioning-band";
import { SplitSessions } from "@/components/sections/split-sessions";
import { SplitVerify } from "@/components/sections/split-verify";
import { SplitReview } from "@/components/sections/split-review";
import { Flow } from "@/components/sections/flow";
import { MetricsBand } from "@/components/sections/metrics-band";
import { HonestyTeaser } from "@/components/sections/honesty-teaser";
import { Comparison } from "@/components/sections/comparison";
import { IntegrationsStrip } from "@/components/sections/integrations-strip";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <PositioningBand />
        <SplitSessions />
        <SplitVerify />
        <SplitReview />
        <Flow />
        <MetricsBand />
        <HonestyTeaser />
        <Comparison />
        <IntegrationsStrip />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
