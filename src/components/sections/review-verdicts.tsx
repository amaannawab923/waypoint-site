"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "../reveal";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";
import { EASE_FLOW } from "@/lib/motion";

const verdicts = [
  { label: "fixed", accent: true },
  { label: "delivered" },
  { label: "partial" },
  { label: "not a bug" },
  { label: "needs info" },
  { label: "won't fix", danger: true },
];

const flow = ["Proposed", "Reason on the card", "Approved"];

export function ReviewVerdicts() {
  const flowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const track = flowRef.current;
    const dot = dotRef.current;
    if (!track || !dot) return;

    let ctx: { revert: () => void } | undefined;
    const raf = requestAnimationFrame(() => {
      const { gsap, ScrollTrigger } = ensureGsap();
      ctx = gsap.context(() => {
        gsap.set(dot, { x: 0 });
        gsap.to(dot, {
          x: () => track.offsetWidth - dot.offsetWidth,
          duration: 1.4,
          ease: EASE_FLOW,
          scrollTrigger: { trigger: track, start: "top 70%", once: true },
        });
      }, track);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="review"
      data-theme="light"
      className="relative overflow-hidden bg-(--color-bg-raised) py-20 text-(--color-fg) md:py-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="order-2 lg:order-1 lg:col-span-7 lg:-ml-24 xl:-ml-40">
            <div className="overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-bg) shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]">
              <div className="flex items-center justify-between border-b border-(--color-border) px-6 py-4">
                <span className="text-sm text-(--color-fg-muted)">
                  Proposed change &middot; comment
                </span>
                <span className="rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-fg-dim)">
                  pending
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs text-(--color-fg-dim)">
                  Why this exists: this run&rsquo;s closing report
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-(--color-bg-raised) px-2.5 py-1 font-mono text-sm font-semibold">
                    ENG-77
                  </span>
                  <span className="text-sm text-(--color-fg-muted)">
                    Search indexer misses the last page of results
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3 text-sm">
                  <span className="text-(--color-fg-dim)">Todo</span>
                  <span className="text-(--color-fg-dim)">→</span>
                  <span className="font-semibold text-(--color-accent)">
                    In Review
                  </span>
                </div>

                <p className="mt-5 border-t border-(--color-border) pt-5 text-sm leading-relaxed text-(--color-fg-muted)">
                  Verified in a real browser before filing — the screenshots
                  are the evidence, not the tool&rsquo;s own &ldquo;done&rdquo;
                  claim.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="cursor-not-allowed rounded-xl bg-(--color-accent) px-4 py-2 text-xs font-semibold text-(--color-on-accent) opacity-90">
                    Approve
                  </span>
                  <span className="cursor-not-allowed rounded-xl border border-(--color-border) px-4 py-2 text-xs text-(--color-fg-dim)">
                    Reject
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2 lg:col-span-5">
            <p className="eyebrow mb-4">Review &amp; verdicts</p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Nothing writes to Jira without a person.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
              Every write back — a comment, a state change — waits in a
              propose-to-approve queue, with the reason it exists on the
              card. When two sessions propose competing fixes, both are
              named; approving one supersedes the rest.
            </p>

            <div
              ref={flowRef}
              className="relative mt-9 mb-2 h-1.5 rounded-full bg-(--color-border)"
            >
              <div
                ref={dotRef}
                className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-(--color-accent)"
              />
            </div>
            <div className="flex justify-between text-xs text-(--color-fg-dim)">
              {flow.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>

            <p className="mt-9 text-xs font-medium tracking-wide text-(--color-fg-dim) uppercase">
              A session ends with one word
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {verdicts.map((v) => (
                <span
                  key={v.label}
                  className={`rounded-full border px-3 py-1.5 font-mono text-xs ${
                    v.accent
                      ? "border-(--color-accent) text-(--color-accent)"
                      : v.danger
                        ? "border-(--color-border) text-(--color-danger)"
                        : "border-(--color-border) text-(--color-fg-muted)"
                  }`}
                >
                  {v.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
