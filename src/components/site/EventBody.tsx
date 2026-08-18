import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { imageUrlFromRef } from "@/lib/sanity";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-9 font-display text-xl font-semibold tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="mt-8 font-display text-lg font-semibold">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-2 border-primary pl-5 text-lg italic text-foreground/75">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-base text-justify leading-relaxed text-foreground/75">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 space-y-2 text-base text-foreground/75">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-5 text-base text-foreground/75">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-primary underline underline-offset-4 hover:no-underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  },
  types: {
    image: ({ value }) => {
      const url = imageUrlFromRef(value?.asset?._ref, 1400);
      if (!url) return null;
      return (
        <figure className="mt-10 overflow-hidden rounded-md border border-border">
          <img src={url} alt={value?.alt ?? ""} loading="lazy" className="w-full" />
        </figure>
      );
    },
  },
};

export function EventBody({ value }: { value: unknown[] }) {
  return (
    <div className="max-w-3xl">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <PortableText value={value as any} components={components} />
    </div>
  );
}
