"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "../reveal";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";

const steps = [
  {
    src: "/shots/qa-step-1.jpg",
    caption: "Page loads. Empty “Your name” field.",
  },
  {
    src: "/shots/qa-step-2.jpg",
    caption: "“Ada” typed into the field.",
  },
  {
    src: "/shots/qa-step-3.jpg",
    caption: "Submit pressed — “Hello, Ada!” appears.",
  },
  {
    src: "/shots/qa-step-4.jpg",
    caption: "Final frame, confirmed from the image itself.",
  },
];

export function UltrafastShowpiece() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);
  const clockRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    const bar = barRef.current;
    const clock = clockRef.current;
    if (!section || !bar || !clock) return;
    const { gsap, ScrollTrigger } = ensureGsap();

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const frames = frameRefs.current.filter(Boolean) as HTMLDivElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 62%",
          once: true,
        },
      });

      tl.set(frames, { opacity: 0.32, scale: 0.94 });
      tl.set(bar, { scaleX: 0 });
      tl.set(clock, { textContent: "0.0s" });

      tl.to(
        counter,
        {
          v: 13.9,
          duration: 2.8,
          ease: "power1.inOut",
          onUpdate: () => {
            clock.textContent = `${counter.v.toFixed(1)}s`;
          },
        },
        0
      ).to(
        bar,
        {
          scaleX: 1,
          duration: 2.8,
          ease: "power1.inOut",
          transformOrigin: "left center",
        },
        0
      );

      frames.forEach((el, i) => {
        const t = i * 0.62;
        tl.to(el, { opacity: 1, scale: 1, duration: 0.3 }, t);
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="ultrafast-qa"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-(--color-border-soft) bg-(--color-bg) py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 0%, rgba(51,224,168,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="grain -z-10" aria-hidden />

      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-(--color-verify) uppercase">
            Ultrafast browser QA
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A session verifies its own work, in seconds.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-(--color-fg-muted)">
            Instead of driving the page one model round trip at a time, a
            session can hand a multi-step browser walk to a fast decision
            model (TypeSafe&rsquo;s Jev, via browser-use/jev-ultrafast) in one
            call. This is that real run, from Waypoint&rsquo;s own transcript.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="mb-5 flex items-center justify-between font-mono text-xs text-(--color-fg-dim)">
            <span>browser_task</span>
            <span
              ref={clockRef}
              className="font-display text-2xl font-semibold text-(--color-verify) tabular-nums"
            >
              13.9s
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-(--color-border)">
            <div
              ref={barRef}
              className="h-full w-full origin-left rounded-full bg-(--color-verify)"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.src}>
                <div
                  ref={(el) => {
                    frameRefs.current[i] = el;
                  }}
                  className="overflow-hidden rounded-lg border border-(--color-border) bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.src}
                    alt={step.caption}
                    width={1120}
                    height={780}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <p className="mt-2.5 text-xs leading-snug text-(--color-fg-muted)">
                  {step.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-5 font-mono text-[0.78rem] leading-relaxed text-(--color-fg-muted) md:text-[0.82rem]">
            <span className="text-(--color-fg)">
              Timing: 13.9s wall
            </span>{" "}
            · Chromium ready 0.7s · Jev 3 decisions, 5.5s total (avg 1824ms) ·
            Claude 1 text call, 7.0s · 4 screenshots returned
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-(--color-fg-dim) italic">
            &ldquo;<code className="not-italic font-mono text-(--color-fg-muted)">done</code>{" "}
            is Jev&rsquo;s claim — check the screenshots before saying the
            behaviour matches.&rdquo; The line the tool itself prints, every time.
          </p>
        </Reveal>

        <Reveal className="mt-14 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-(--color-border-soft) pt-8 text-sm text-(--color-fg-dim)">
          <span className="font-mono text-(--color-accent)">Proof of mechanism —</span>
          <span>
            a standalone demo booked a Google Flights search in 10 steps /
            17 seconds, each Jev decision landing in 320–390ms.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
