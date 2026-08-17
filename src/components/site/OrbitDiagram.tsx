/** Decorative orbital-mechanics schematic — a quiet nod to the engineering craft. */
export function OrbitDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Schematic of orbital paths around a planetary body"
      className={`h-auto w-full max-w-[320px] text-primary ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="160" cy="160" r="150" opacity="0.12" />
        <circle cx="160" cy="160" r="118" opacity="0.18" strokeDasharray="3 6" />
        <ellipse cx="160" cy="160" rx="150" ry="62" opacity="0.28" />
        <ellipse
          cx="160"
          cy="160"
          rx="150"
          ry="62"
          opacity="0.22"
          transform="rotate(58 160 160)"
        />
        <ellipse
          cx="160"
          cy="160"
          rx="150"
          ry="62"
          opacity="0.22"
          transform="rotate(-58 160 160)"
        />
      </g>

      {/* Planet */}
      <circle cx="160" cy="160" r="46" fill="currentColor" opacity="0.1" />
      <circle cx="160" cy="160" r="46" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Crosshair ticks */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <line x1="160" y1="0" x2="160" y2="18" />
        <line x1="160" y1="302" x2="160" y2="320" />
        <line x1="0" y1="160" x2="18" y2="160" />
        <line x1="302" y1="160" x2="320" y2="160" />
      </g>

      {/* Craft markers */}
      <g className="animate-spin-slow" style={{ transformOrigin: "160px 160px" }}>
        <circle cx="310" cy="160" r="4" fill="currentColor" />
        <circle cx="10" cy="160" r="2.5" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}
