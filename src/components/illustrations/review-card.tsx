import { CheckIcon } from "../icons";

/** Stands in for a Review card, looping proposed -> reason -> approved. */
export function ReviewCardIllustration() {
  return (
    <div className="illustration-grid absolute inset-0 flex flex-col gap-4 p-5 sm:p-7">
      <div className="rounded-lg border border-(--color-border) bg-(--color-bg-raised) p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.62rem] tracking-wide text-(--color-fg-dim) uppercase">
            Proposed change &middot; comment
          </span>
          <span className="rounded-full border border-(--color-accent)/35 bg-(--color-accent)/10 px-2 py-0.5 font-mono text-[0.6rem] text-(--color-accent)">
            pending
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded border border-(--color-border) px-1.5 py-0.5 font-mono text-[0.62rem] text-(--color-fg-muted)">
            XXX-00
          </span>
          <span className="h-1.5 w-2/5 rounded-full bg-(--color-border-soft)" />
        </div>
        <div className="mt-3 space-y-1.5">
          <span className="block h-1 w-full rounded-full bg-(--color-border-soft)" />
          <span className="block h-1 w-5/6 rounded-full bg-(--color-border-soft)" />
          <span className="block h-1 w-2/3 rounded-full bg-(--color-border-soft)" />
        </div>
      </div>

      <div className="relative mt-2 h-px w-full bg-(--color-border)">
        <div className="animate-flow-dot absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent) shadow-[0_0_0_4px_rgba(255,176,32,0.18)]" />
      </div>
      <div className="flex justify-between font-mono text-[0.6rem] tracking-wide text-(--color-fg-dim) uppercase">
        <span>Proposed</span>
        <span>Reason on the card</span>
        <span>Approved</span>
      </div>

      <div className="animate-stamp flex items-center gap-2 self-start rounded-full border border-(--color-verify)/40 bg-(--color-verify)/10 px-3 py-1.5">
        <CheckIcon className="size-3.5 text-(--color-verify)" />
        <span className="font-mono text-[0.65rem] text-(--color-verify)">
          approved
        </span>
      </div>
    </div>
  );
}
