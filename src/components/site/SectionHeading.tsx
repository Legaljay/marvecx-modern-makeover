export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      data-reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={align === "center" ? "" : "max-w-2xl"}>
        <p className="label-tech text-primary">{eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-sm leading-relaxed text-foreground/60 ${
            align === "center" ? "mx-auto mt-4 max-w-xl" : "max-w-sm"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
