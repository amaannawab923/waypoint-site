"use client";

import { useEffect, useRef } from "react";
import { WaypointMark } from "./icons";
import { GitHubCta } from "./github-cta";

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.dataset.solid = window.scrollY > 24 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      data-solid="false"
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300 data-[solid=true]:border-(--color-border) data-[solid=true]:bg-(--color-bg)/90 data-[solid=true]:backdrop-blur-md"
    >
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-(--color-fg)"
        >
          <WaypointMark className="size-5 text-(--color-accent)" />
          <span className="text-sm font-semibold tracking-tight">
            Waypoint
          </span>
        </a>
        <GitHubCta size="sm" />
      </div>
    </header>
  );
}
