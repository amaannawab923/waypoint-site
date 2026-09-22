import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/ui/page-hero";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Reveal } from "@/components/reveal";
import { CHANGELOG } from "@/lib/content/changelog";

export const metadata: Metadata = {
  title: "Changelog — what shipped",
  description:
    "What actually merged, grouped by day, read straight from the project's own git history. No invented releases or version numbers.",
};

export default function ChangelogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Changelog"
          title="What shipped."
          body="Built from real merged work on main — no invented releases, no version numbers that don't exist. Grouped by the day it landed."
        />

        <section data-theme="light" className="relative border-t border-(--color-border) bg-(--color-bg) py-20 md:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              {CHANGELOG.map((group) => (
                <Reveal key={group.date} className="mb-14 last:mb-0" y={12}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-[9rem_1fr]">
                    <p className="font-mono text-sm text-(--color-fg-dim) sm:pt-1">
                      {group.date}
                    </p>
                    <ul className="space-y-3 border-l border-(--color-border) pl-6">
                      {group.entries.map((entry, i) => (
                        <li key={i} className="relative text-sm leading-relaxed text-(--color-fg-muted)">
                          <span
                            aria-hidden
                            className="absolute top-[0.55em] -left-[1.6rem] size-1.5 rounded-full bg-(--color-border-strong)"
                          />
                          <span className="text-(--color-fg)">{entry.text}</span>
                          {entry.tag ? (
                            <code className="ml-2 rounded bg-(--color-accent-dim) px-1.5 py-0.5 font-mono text-[0.7rem] text-(--color-accent)">
                              {entry.tag}
                            </code>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          title="Follow along in the open."
          body="Every merge behind this list is public — watch the repo, or read the PRs that built each entry."
          secondaryHref="/honest"
          secondaryLabel="Read what leaves this machine"
        />
      </main>
      <SiteFooter />
    </>
  );
}
