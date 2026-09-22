import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0a12",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 60% at 70% 10%, rgba(129,140,248,0.28) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="34" height="34" viewBox="0 0 32 32">
            <path
              d="M16 3 L29 16 L16 29 L3 16 Z"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2.5"
            />
            <circle cx="16" cy="16" r="3.5" fill="#818cf8" />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 600, color: "#f5f5f7" }}>
            Waypoint
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 60,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#f5f5f7",
              maxWidth: 980,
            }}
          >
            <span>The project tracker</span>
            <span>whose tickets do the work.</span>
          </div>
          <span style={{ fontSize: 24, color: "#a1a1ac" }}>
            Dispatch, verify, and review — in one native, local-first tracker.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(148,163,184,0.16)",
            paddingTop: 24,
            fontSize: 20,
            color: "#6b6b78",
          }}
        >
          <span>github.com/amaannawab923/waypoint</span>
          <span style={{ color: "#818cf8" }}>AGPL-3.0</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
