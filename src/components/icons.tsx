export function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function WaypointMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 3 L29 16 L16 29 L3 16 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

/** Generic 20x20 stroke icon wrapper — every feature-grid glyph shares this frame. */
function Glyph({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className ?? "size-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function BoardIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <rect x="3" y="4" width="14" height="12" rx="1.5" />
      <path d="M8 4v12M13 4v12" />
    </Glyph>
  );
}

export function SprintIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M3 15 8 8l3 3 6-7" />
      <path d="M13 4h4v4" />
    </Glyph>
  );
}

export function DocIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M6 3h6l3 3v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M8 11h4M8 14h4" />
    </Glyph>
  );
}

export function InboxIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M3 11 5.5 4h9L17 11" />
      <path d="M3 11v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h-4.2a2.2 2.2 0 0 1-4.4 0H3Z" />
    </Glyph>
  );
}

export function HistoryIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M10 5v5l3.5 2" />
      <path d="M3.5 10a6.5 6.5 0 1 0 1.8-4.5" />
      <path d="M3.5 4.5v3h3" />
    </Glyph>
  );
}

export function SessionIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <rect x="3" y="4" width="14" height="12" rx="1.5" />
      <path d="M6.5 8.5 9 11l-2.5 2.5M11 13.5h3" />
    </Glyph>
  );
}

export function CameraIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M4 7.5h2.2L7.2 5h5.6l1 2.5H16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Z" />
      <circle cx="10" cy="11.2" r="2.6" />
    </Glyph>
  );
}

export function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M10 3 4 5.2V9c0 4 2.5 6.6 6 7.8 3.5-1.2 6-3.8 6-7.8V5.2L10 3Z" />
      <path d="M7.3 10.2 9.3 12.2 12.8 8" />
    </Glyph>
  );
}

export function LinkIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M8.5 11.5 11.5 8.5" />
      <path d="M9 5.5 10.2 4.3a2.6 2.6 0 0 1 3.7 3.7L12.7 9.2M11 14.5 9.8 15.7a2.6 2.6 0 0 1-3.7-3.7L7.3 10.8" />
    </Glyph>
  );
}

export function BranchIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <circle cx="5.5" cy="5" r="1.6" />
      <circle cx="5.5" cy="15" r="1.6" />
      <circle cx="14.5" cy="10" r="1.6" />
      <path d="M5.5 6.6V13.4M5.5 6.6C5.5 9 8 10 10.5 10h2.4" />
    </Glyph>
  );
}

export function UndoIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M5 8h6.5A3.5 3.5 0 0 1 15 11.5v0A3.5 3.5 0 0 1 11.5 15H8" />
      <path d="M7.5 5 4.5 8l3 3" />
    </Glyph>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <rect x="3.5" y="4.5" width="13" height="12" rx="1.5" />
      <path d="M3.5 8.5h13M7 3v3M13 3v3" />
    </Glyph>
  );
}

export function LockOffIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <rect x="4.5" y="9" width="11" height="8" rx="1.5" />
      <path d="M6.5 9V6.5a3.5 3.5 0 0 1 6.4-2" />
      <circle cx="10" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </Glyph>
  );
}
