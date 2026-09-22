import { WaypointMark, GitHubMark } from "./icons";
import { GITHUB_URL } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg) py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-(--color-fg-dim)">
          <WaypointMark className="size-5 text-(--color-accent)" />
          <span className="text-sm font-medium tracking-tight text-(--color-fg-muted)">
            Waypoint
          </span>
          <span className="text-xs">
            · <span className="font-mono">AGPL-3.0</span> · built by Waypoint
            Labs
          </span>
        </div>
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
    </footer>
  );
}
