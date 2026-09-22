import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://waypoint-site.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Waypoint — a PM companion for teams that already live in Jira",
  description:
    "Connect your Jira and an AI layer sits on top of the tickets you already have: Copilot that shows the JQL it ran, Sessions in isolated worktrees, a propose-to-approve Review queue, and verdicts that map to your board. Native desktop app, open source, AGPL-3.0.",
  openGraph: {
    title: "Waypoint — a PM companion for teams that already live in Jira",
    description:
      "Copilot, Sessions, Review, and honest verdicts — layered on your real Jira tickets. Native desktop app, open source.",
    url: siteUrl,
    siteName: "Waypoint",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waypoint — a PM companion for teams that already live in Jira",
    description:
      "Copilot, Sessions, Review, and honest verdicts — layered on your real Jira tickets.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-bg) text-(--color-fg)">
        {children}
      </body>
    </html>
  );
}
