"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "../reveal";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Point Waypoint at the Jira your team already runs on. It reads your tickets, dashboards and JQL — nothing leaves this machine until you ask it something.",
  },
  {
    n: "02",
    title: "Ask, or dispatch",
    body: "Ask Copilot about your real issues and it shows the JQL it ran. Or dispatch a Session — Investigate to find the root cause, Fix to implement it — each in its own isolated git worktree on an agent/<KEY> branch, from a written brief you read and edit first.",
  },
  {
    n: "03",
    title: "Review",
    body: "Every write back to Jira — a comment, a state change — waits in a propose-to-approve queue, with the reason it exists on the card, until a person presses approve.",
  },
];

export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const track = trackRef.current;
    const line = lineRef.current;
    if (!track || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: track,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        }
      );
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
      id="how-it-works"
      className="relative border-t border-(--color-border-soft) bg-(--color-bg-raised) py-24 md:py-32"
    >
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-accent) uppercase">
            How it works
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Connect, ask, review.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-(--color-border) md:block"
          />
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-(--color-accent) md:block"
            style={{ transform: "scaleX(0)" }}
          />
          <Reveal
            className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
            stagger={0.12}
          >
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="relative z-10 flex size-11 items-center justify-center rounded-full border border-(--color-border) bg-(--color-bg-raised) font-mono text-sm text-(--color-accent)">
                  {step.n}
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
                  {step.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
