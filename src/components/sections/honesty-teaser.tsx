import { LongForm } from "../ui/long-form";

export function HonestyTeaser() {
  return (
    <LongForm
      eyebrow="What leaves this machine"
      title="A promise you can check."
      quote="The whole promise is that nothing happens without a person approving it."
      quoteCite="the rule this entire product is built around"
      paragraphs={[
        "There is no cloud backend to trust. The server that holds your tickets runs on your own machine. Agent prompts go to Anthropic, on your own Claude subscription — nothing routes through us.",
        "Page text is sent to TypeSafe only while a browser-verification task is actually running, and only the page, never your tickets. Telemetry is off. We wrote down exactly what leaves and when, so you don't have to take our word for it.",
      ]}
      href="/honest"
      linkLabel="Read the real table"
    />
  );
}
