import { SplitRow } from "../ui/split-row";
import { VerifyFramesPanel } from "../illustrations/verify-frames-panel";

export function SplitVerify() {
  return (
    <SplitRow
      eyebrow="Verify"
      title="It checks itself before it tells you."
      reverse
      body={
        <>
          <p>
            A fast decision model drives the browser instead of a full model
            round trip per click — a standalone benchmark chained 10 steps
            in 17 seconds, each decision landing in 320&ndash;390ms.
          </p>
          <p>
            Inside Waypoint, a full QA cycle — screenshots included — ran in{" "}
            <span className="text-(--color-fg)">13.9 seconds</span> wall
            clock. The agent judges &ldquo;done&rdquo; from the frames it
            captured, not the tool&rsquo;s own say-so.
          </p>
        </>
      }
      facts={[
        { k: "Decision model", v: "Jev, one call per step" },
        { k: "Per decision", v: "320–390ms in the benchmark" },
        { k: "Full QA cycle", v: "13.9s wall, in the app" },
        { k: "Evidence", v: "4 screenshots, returned inline" },
      ]}
      href="/verify"
      linkLabel="See the measured numbers"
      panel={<VerifyFramesPanel />}
    />
  );
}
