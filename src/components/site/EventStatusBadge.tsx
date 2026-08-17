import type { EventStatus } from "@/lib/sanity";
import { STATUS_LABEL } from "@/lib/sanity";

const STYLES: Record<EventStatus, string> = {
  open: "border-primary/45 text-primary",
  ongoing: "border-accent/50 text-accent",
  closed: "border-border text-foreground/55",
};

export function EventStatusBadge({ status }: { status: EventStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${STYLES[status]}`}
    >
      {status !== "closed" && (
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full animate-pulse-slow ${
            status === "ongoing" ? "bg-accent" : "bg-primary"
          }`}
        />
      )}
      {STATUS_LABEL[status]}
    </span>
  );
}
