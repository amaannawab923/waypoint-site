import { WaypointMark, GitHubMark } from "./icons";
import { GITHUB_URL, NAV_LINKS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer data-theme="light" className="border-t border-(--color-border) bg-(--color-bg) pt-14 pb-10">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 text-(--color-fg)">
              <WaypointMark className="size-5 text-(--color-accent)" />
              <span className="text-sm font-semibold tracking-tight">Waypoint</span>
            </div>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-(--color-fg-muted)">
              The project tracker whose tickets do the work — and never move
              without your approval.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-(--color-fg-dim) uppercase">
              Product
            </p>
            <ul className="mt-3 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-(--color-fg-dim) uppercase">
              Project
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
                >
                  Source on GitHub
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
                >
                  AGPL-3.0 license
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-(--color-fg-dim) uppercase">
              Honesty
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <a
                  href="/honest"
                  className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
                >
                  What leaves this machine
                </a>
              </li>
              <li>
                <a
                  href="/changelog"
                  className="text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
                >
                  What shipped
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--color-border) pt-6 sm:flex-row">
          <p className="text-xs text-(--color-fg-dim)">
            Open source · <span className="font-mono">AGPL-3.0</span>
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
          >
            <GitHubMark className="size-4" />
            github.com/amaannawab923/waypoint
          </a>
        </div>
      </div>
    </footer>
  );
}
