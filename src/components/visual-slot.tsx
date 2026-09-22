import type { ReactNode } from "react";

type VisualSlotProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * A fixed 16:10 frame for a section's supporting visual. Today every slot
 * holds a self-contained CSS/SVG illustration — nothing here claims to be
 * a screenshot of the real app. The aspect ratio and chrome are locked so a
 * real product screenshot can later replace `children` with a single
 * `<img className="absolute inset-0 h-full w-full object-cover" />` without
 * reflowing the section. See docs/screenshots.md for the swap list.
 */
export function VisualSlot({ label, children, className = "" }: VisualSlotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-(--color-border) bg-(--color-bg-raised) shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg-raised-2) px-4 py-2.5">
        <span className="font-mono text-[0.68rem] tracking-[0.15em] text-(--color-fg-dim) uppercase">
          {label}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.62rem] tracking-wide text-(--color-fg-dim) uppercase">
          <span className="size-1.5 rounded-full bg-(--color-verify) animate-pulse-dot" />
          illustrative
        </span>
      </div>
      <div className="relative aspect-16/10 w-full overflow-hidden bg-(--color-bg)">
        {children}
      </div>
    </div>
  );
}
