const ITEMS = [
  "ISTC 2025 · EMERGENCE · ONGOING",
  "SECTOR 01 — EDUCATION · ACTIVE",
  "SECTOR 02 — RESEARCH · T-MINUS 2026",
  "SECTOR 03 — DESIGN & MANUFACTURING · PLANNED",
  "GROUND STATION · LAGOS 06.5244°N 3.3792°E",
  "HUMAN CAPACITY DEVELOPMENT · CONTINUOUS",
];

/** Mission-control telemetry ticker. */
export function Telemetry() {
  const line = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-border bg-surface/40 py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
        {line.map((item, i) => (
          <span key={i} className="label-tech flex items-center gap-3">
            <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
