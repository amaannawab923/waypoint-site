/** Stands in for the "This machine" page: what leaves, drawn as a signal map. */
export function MachineSignalIllustration() {
  return (
    <div className="illustration-grid absolute inset-0 p-5 sm:p-7">
      <svg
        viewBox="0 0 400 260"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <line
          x1="145"
          y1="122"
          x2="255"
          y2="60"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.6"
        />
        <line
          x1="145"
          y1="138"
          x2="255"
          y2="200"
          stroke="var(--color-verify)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.6"
        />

        {/* This machine */}
        <rect
          x="35"
          y="105"
          width="110"
          height="50"
          rx="8"
          fill="var(--color-bg-raised)"
          stroke="var(--color-border)"
        />
        <circle cx="58" cy="130" r="4" fill="var(--color-verify)" />
        <text
          x="72"
          y="134"
          fill="var(--color-fg)"
          fontSize="12"
          fontFamily="var(--font-mono)"
        >
          this machine
        </text>

        {/* Anthropic endpoint */}
        <rect
          x="255"
          y="38"
          width="120"
          height="44"
          rx="8"
          fill="var(--color-bg-raised)"
          stroke="var(--color-accent)"
          strokeOpacity="0.4"
        />
        <text
          x="268"
          y="55"
          fill="var(--color-fg-muted)"
          fontSize="11"
          fontFamily="var(--font-mono)"
        >
          Anthropic
        </text>
        <text
          x="268"
          y="70"
          fill="var(--color-fg-dim)"
          fontSize="9"
          fontFamily="var(--font-mono)"
        >
          agent prompts
        </text>

        {/* TypeSafe endpoint */}
        <rect
          x="255"
          y="178"
          width="120"
          height="44"
          rx="8"
          fill="var(--color-bg-raised)"
          stroke="var(--color-verify)"
          strokeOpacity="0.4"
        />
        <text
          x="268"
          y="195"
          fill="var(--color-fg-muted)"
          fontSize="11"
          fontFamily="var(--font-mono)"
        >
          TypeSafe
        </text>
        <text
          x="268"
          y="210"
          fill="var(--color-fg-dim)"
          fontSize="9"
          fontFamily="var(--font-mono)"
        >
          browser tasks only
        </text>
      </svg>

      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-(--color-border) bg-(--color-bg-raised) px-2.5 py-1 sm:bottom-6 sm:left-6">
        <span className="size-1.5 rounded-full bg-(--color-fg-dim)" />
        <span className="font-mono text-[0.62rem] tracking-wide text-(--color-fg-dim) uppercase">
          Telemetry &middot; Off
        </span>
      </div>
      <div className="absolute right-4 bottom-4 font-mono text-[0.6rem] tracking-wide text-(--color-fg-dim) uppercase sm:right-6 sm:bottom-6">
        Everything else &middot; nowhere
      </div>
    </div>
  );
}
