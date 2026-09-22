"use client";

import { useEffect, useRef } from "react";
import { GitHubCta } from "../github-cta";
import { DeviceFrame } from "../device-frame";
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const frameRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const root = rootRef.current;

    const ctx = gsap.context(() => {
      const lines = lineRefs.current.filter(Boolean);
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(lines, {
        yPercent: 115,
        opacity: 0,
        duration: 1.1,
        stagger: 0.1,
      })
        .from(
          ".hero-sub, .hero-cta",
          { opacity: 0, y: 16, duration: 0.8, stagger: 0.08 },
          "-=0.55"
        )
        .from(
          frameRef.current,
          { opacity: 0, y: 40, scale: 0.97, duration: 1.1 },
          "-=0.5"
        );

      if (frameRef.current) {
        gsap.to(frameRef.current, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, root ?? undefined);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === root) st.kill();
      });
    };
  }, []);

  const headlineLines = ["An AI layer for", "the Jira you", "already have."];

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-(--color-bg) pt-24 pb-16 md:pt-28"
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-10%] -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 20%, rgba(255,176,32,0.16) 0%, rgba(255,176,32,0.05) 45%, transparent 75%)",
        }}
      />
      <div className="grain -z-10" aria-hidden />
      <div className="vignette -z-10" aria-hidden />

      <div className="container-page">
        <p className="hero-sub mb-5 font-mono text-xs tracking-[0.2em] text-(--color-accent) uppercase">
          Native desktop · connects to your real Jira
        </p>

        <h1 className="font-display max-w-4xl text-[2.75rem] font-semibold leading-[0.98] tracking-tight text-balance sm:text-[3.75rem] md:text-[4.75rem]">
          {headlineLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="block"
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-7 max-w-xl text-lg leading-relaxed text-(--color-fg-muted) md:text-xl">
          Waypoint is a PM companion that reads your real tickets, dashboards
          and JQL, proposes the change, and waits for a person to press
          approve — never a chat window bolted onto a database that doesn&rsquo;t
          know your tickets exist.
        </p>

        <div className="hero-cta mt-9 flex flex-wrap items-center gap-4">
          <GitHubCta size="lg" />
          <span className="font-mono text-xs tracking-wide text-(--color-fg-dim)">
            Open source · AGPL-3.0 · runs on your machine
          </span>
        </div>
      </div>

      <div className="container-page mt-16 md:mt-20">
        <div ref={frameRef} className="mx-auto max-w-5xl">
          <DeviceFrame
            src="/shots/home.jpg"
            alt="Waypoint's home view: proposals waiting on you, the active sprint, and a live feed of recent tickets across projects."
            label="waypoint.local"
            priority
          />
        </div>
      </div>
    </section>
  );
}
