"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "../reveal";
import { VisualSlot } from "../visual-slot";
import { ReviewCardIllustration } from "../illustrations/review-card";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";

const verdicts = [
  { label: "fixed", tone: "verify" },
  { label: "delivered", tone: "accent" },
  { label: "partial", tone: "amber" },
  { label: "not a bug", tone: "neutral" },
  { label: "needs info", tone: "neutral" },
  { label: "won't fix", tone: "danger" },
] as const;

const toneClasses: Record<(typeof verdicts)[number]["tone"], string> = {
  verify:
    "border-(--color-verify)/40 bg-(--color-verify)/10 text-(--color-verify)",
  accent:
    "border-(--color-accent)/40 bg-(--color-accent)/10 text-(--color-accent)",
  amber:
    "border-(--color-accent)/25 bg-(--color-accent)/5 text-(--color-fg-muted)",
  neutral: "border-(--color-border) bg-(--color-bg-raised-2) text-(--color-fg-muted)",
  danger: "border-(--color-danger)/35 bg-(--color-danger)/10 text-(--color-danger)",
};

const flow = ["Proposed", "Reason on the card", "Approved"];

export function ReviewVerdicts() {
  const flowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const track = flowRef.current;
    const dot = dotRef.current;
    if (!track || !dot) return;
    const { gsap, ScrollTrigger } = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.set(dot, { left: "0%" });
      gsap.to(dot, {
        left: "100%",
        duration: 1.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: track,
          start: "top 70%",
          once: true,
        },
      });
    }, track);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === track) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="review"
      className="relative border-t border-(--color-border-soft) bg-(--color-bg-raised) py-24 md:py-32"
    >
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-accent) uppercase">
            Review &amp; verdicts
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Nothing writes to Jira without a person.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
            Every write back — a comment, a state change — waits in a
            propose-to-approve queue, with the reason it exists on the card.
            When two sessions propose competing fixes, both are named;
            approving one supersedes the rest.
          </p>

          <div ref={flowRef} className="relative mt-10 mb-2">
            <div className="relative h-px w-full bg-(--color-border)">
              <div
                ref={dotRef}
                className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent) shadow-[0_0_0_4px_rgba(255,176,32,0.18)]"
              />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[0.7rem] tracking-wide text-(--color-fg-dim)">
              {flow.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>

          <p className="mt-8 font-mono text-xs tracking-[0.2em] text-(--color-fg-dim) uppercase">
            A session ends with one word
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {verdicts.map((v) => (
              <span
                key={v.label}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs ${toneClasses[v.tone]}`}
              >
                {v.label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-(--color-fg-dim)">
            One word, mapped to the state your board really has.
          </p>
        </Reveal>

        <Reveal>
          <VisualSlot label="Review card &middot; conceptual">
            <ReviewCardIllustration />
          </VisualSlot>
        </Reveal>
      </div>
    </section>
  );
}
