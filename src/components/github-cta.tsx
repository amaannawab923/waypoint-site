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
    sm: "text-sm px-3.5 py-2.5 gap-2 min-h-11",
    md: "text-[0.9rem] px-4 py-2.5 gap-2.5 min-h-11",
    lg: "text-base px-5 py-3 gap-2.5 min-h-11",
  } as const;

  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center rounded-xl bg-(--color-accent) font-medium tracking-tight text-(--color-on-accent) transition-colors duration-200 hover:bg-(--color-accent)/85 ${sizes[size]} ${className}`}
    >
      <GitHubMark className="size-[1.05em] shrink-0" />
      View on GitHub
    </a>
  );
}
