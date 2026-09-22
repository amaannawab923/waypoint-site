import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Sessions } from "@/components/sections/sessions";
import { UltrafastShowpiece } from "@/components/sections/ultrafast-showpiece";
import { ReviewVerdicts } from "@/components/sections/review-verdicts";
import { HonestByDesign } from "@/components/sections/honest-by-design";
import { NativeTracker } from "@/components/sections/native-tracker";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Sessions />
        <UltrafastShowpiece />
        <ReviewVerdicts />
        <HonestByDesign />
        <NativeTracker />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
