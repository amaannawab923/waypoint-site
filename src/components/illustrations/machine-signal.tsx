/** The "This machine" disclosure, drawn as a signal map — one accent only. */
export function MachineSignalIllustration() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="h-auto w-full"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="145"
        y1="98"
        x2="255"
        y2="50"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <line
        x1="145"
        y1="122"
        x2="255"
        y2="170"
        stroke="var(--color-border-strong)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />

      {/* This machine */}
      <rect
        x="30"
        y="85"
        width="115"
        height="50"
        fill="none"
        stroke="var(--color-border-strong)"
      />
      <circle cx="53" cy="110" r="4" fill="var(--color-accent)" />
      <text
        x="67"
        y="114"
        fill="var(--color-fg)"
        fontSize="12"
        fontFamily="var(--font-mono)"
      >
        this machine
      </text>

      {/* Anthropic endpoint */}
      <rect
        x="255"
        y="28"
        width="120"
        height="44"
        fill="none"
        stroke="var(--color-accent)"
      />
      <text
        x="268"
        y="45"
        fill="var(--color-fg)"
        fontSize="11"
        fontFamily="var(--font-mono)"
      >
        Anthropic
      </text>
      <text
        x="268"
        y="60"
        fill="var(--color-fg-dim)"
        fontSize="9"
        fontFamily="var(--font-mono)"
      >
        agent prompts
      </text>

      {/* TypeSafe endpoint */}
      <rect
        x="255"
        y="148"
        width="120"
        height="44"
        fill="none"
        stroke="var(--color-border-strong)"
      />
      <text
        x="268"
        y="165"
        fill="var(--color-fg-muted)"
        fontSize="11"
        fontFamily="var(--font-mono)"
      >
        TypeSafe
      </text>
      <text
        x="268"
        y="180"
        fill="var(--color-fg-dim)"
        fontSize="9"
        fontFamily="var(--font-mono)"
      >
        browser tasks only
      </text>

      <text
        x="30"
        y="205"
        fill="var(--color-fg-dim)"
        fontSize="9.5"
        letterSpacing="1"
        fontFamily="var(--font-mono)"
      >
        EVERYTHING ELSE · NOWHERE · TELEMETRY OFF
      </text>
    </svg>
  );
}
