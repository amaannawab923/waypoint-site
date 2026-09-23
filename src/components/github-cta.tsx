import { GitHubMark } from "./icons";
import { GITHUB_URL } from "@/lib/constants";

export function GitHubCta({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-[0.8rem] px-4 gap-2 min-h-11",
    md: "text-[0.82rem] px-5 gap-2.5 min-h-11",
    lg: "text-[0.86rem] px-7 gap-2.5 min-h-12",
  } as const;

  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center rounded-full bg-(--color-fg) font-mono tracking-[0.1em] uppercase text-(--color-bg) transition-opacity duration-200 hover:opacity-85 ${sizes[size]} ${className}`}
    >
      <GitHubMark className="size-[1.05em] shrink-0" />
      View on GitHub
    </a>
  );
}
