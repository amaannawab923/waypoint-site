import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuraBackground } from "@/components/aura-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* The display face. A grotesque with actual drawing in it — chosen over
   the usual neutral sans so the very large headings this design leans on
   have a voice of their own. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://waypoint-site.example";

const defaultTitle = "Waypoint — the project tracker whose tickets do the work";
const defaultDescription =
  "Waypoint is a native, local-first project tracker — projects, sprints, docs, saved views, five board views — where every ticket can dispatch an agent to investigate or fix it in its own git worktree, verify the result in a browser, and wait for your approval.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Waypoint",
  },
  description: defaultDescription,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Waypoint",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-bg) text-(--color-fg)">
        <AuraBackground />
        {children}
      </body>
    </html>
  );
}
