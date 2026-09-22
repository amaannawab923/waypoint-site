type DeviceFrameProps = {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

/**
 * A cinematic "screen" chrome for real product screenshots: the app is
 * light-mode, so this frame is what carries the dark, filmic art direction
 * around each piece of evidence.
 */
export function DeviceFrame({
  src,
  alt,
  label,
  priority = false,
  className = "",
  width = 2000,
  height = 1250,
}: DeviceFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-(--color-border) bg-(--color-bg-raised) shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-(--color-border) bg-(--color-bg-raised-2) px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {label ? (
          <span className="ml-3 truncate font-mono text-[0.7rem] tracking-wide text-(--color-fg-dim)">
            {label}
          </span>
        ) : null}
      </div>
      <div className="relative bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="block w-full h-auto select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
