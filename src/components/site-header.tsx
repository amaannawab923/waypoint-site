"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WaypointMark } from "./icons";
import { GitHubCta } from "./github-cta";
import { NAV_LINKS } from "@/lib/constants";

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  // Close the mobile menu on route change — a deliberate exception to
  // "don't setState in an effect": this synchronizes local UI state with
  // an external system (the router), not with other React state, so it
  // doesn't cascade.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <header
      ref={ref}
      data-solid="false"
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300 data-[solid=true]:border-(--color-border) data-[solid=true]:bg-(--color-bg)/90 data-[solid=true]:backdrop-blur-md"
    >
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Link href="/" className="flex items-center gap-2.5 text-(--color-fg)">
          <WaypointMark className="size-5 text-(--color-accent)" />
          <span className="text-sm font-semibold tracking-tight">Waypoint</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg) aria-[current=page]:text-(--color-fg)"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GitHubCta size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-lg text-(--color-fg) md:hidden"
        >
          <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-y-auto border-t border-(--color-border) bg-(--color-bg) transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[calc(100vh-3.5rem)]" : "max-h-0 overflow-hidden border-t-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center text-[0.95rem] text-(--color-fg-muted) hover:text-(--color-fg)"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <GitHubCta size="md" className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
