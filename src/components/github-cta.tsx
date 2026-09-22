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
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-[0.95rem] px-5 py-2.5 gap-2.5",
    lg: "text-base px-6 py-3.5 gap-3",
  } as const;

  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center rounded-full bg-(--color-accent) text-(--color-on-accent) font-medium tracking-tight transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] ${sizes[size]} ${className}`}
    >
      <GitHubMark className="size-[1.1em] shrink-0" />
      View on GitHub
    </a>
  );
}
