export const GITHUB_URL = "https://github.com/amaannawab923/waypoint";

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/agent", label: "Sessions" },
  { href: "/verify", label: "Verify" },
  { href: "/review", label: "Review" },
  { href: "/honest", label: "Honest" },
  { href: "/changelog", label: "Changelog" },
];
