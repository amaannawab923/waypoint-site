export type Proposal = {
  ticket: string;
  summary: string;
  reason: string;
  state?: "pending" | "approved" | "superseded";
};

export function ProposalCard({ ticket, summary, reason, state = "pending" }: Proposal) {
  const stateStyles: Record<string, string> = {
    pending: "border-(--color-accent) text-(--color-accent)",
    approved: "border-(--color-accent) bg-(--color-accent) text-(--color-on-accent)",
    superseded: "border-(--color-border-strong) text-(--color-fg-dim) line-through decoration-1",
  };
  const stateLabel: Record<string, string> = {
    pending: "waiting",
    approved: "approved",
    superseded: "superseded",
  };

  return (
    <div
      className={`rounded-xl border border-(--color-border) bg-(--color-bg) p-4 ${
        state === "superseded" ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-(--color-fg-dim)">{ticket}</span>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] ${stateStyles[state]}`}
        >
          {stateLabel[state]}
        </span>
      </div>
      <p
        className={`mt-2 text-sm font-medium text-(--color-fg) ${
          state === "superseded" ? "line-through decoration-(--color-fg-dim)/60" : ""
        }`}
      >
        {summary}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-(--color-fg-muted)">{reason}</p>
    </div>
  );
}
