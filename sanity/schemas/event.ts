/**
 * MARVECX — ISTC event schema.
 *
 * Copy this file into your Sanity Studio (project `fsmhaobl`, dataset
 * `production`) and register it in your schema list. The website reads these
 * exact field names.
 */
import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "ISTC Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "edition", title: "Edition label", type: "string" }),
    defineField({ name: "theme", title: "Theme", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "closed",
      options: {
        list: [
          { title: "Registration open", value: "open" },
          { title: "Ongoing", value: "ongoing" },
          { title: "Closed", value: "closed" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "startDate", title: "Start date", type: "date" }),
    defineField({ name: "endDate", title: "End date", type: "date" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration link",
      type: "url",
      description: "Shown when status is Registration open or Ongoing.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
      ],
    }),
    defineField({
      name: "speakers",
      title: "Speakers",
      type: "array",
      of: [
        {
          type: "object",
          name: "speaker",
          fields: [
            { name: "name", title: "Name", type: "string", validation: (r: any) => r.required() },
            { name: "role", title: "Role", type: "string" },
            { name: "organization", title: "Organization", type: "string" },
            { name: "keynote", title: "Keynote speaker", type: "boolean", initialValue: false },
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt text", type: "string" }],
            },
          ],
          preview: { select: { title: "name", subtitle: "role", media: "photo" } },
        },
      ],
    }),
    defineField({
      name: "sessions",
      title: "Sessions & timings",
      type: "array",
      of: [
        {
          type: "object",
          name: "session",
          fields: [
            { name: "title", title: "Session title", type: "string", validation: (r: any) => r.required() },
            { name: "day", title: "Day label", type: "string" },
            { name: "start", title: "Start time", type: "string", description: "e.g. 10:00" },
            { name: "end", title: "End time", type: "string", description: "e.g. 11:30" },
            { name: "speaker", title: "Speaker", type: "string" },
            { name: "keynote", title: "Keynote session", type: "boolean", initialValue: false },
          ],
          preview: { select: { title: "title", subtitle: "start" } },
        },
      ],
    }),
    defineField({
      name: "resources",
      title: "Resources shared",
      type: "array",
      of: [
        {
          type: "object",
          name: "resource",
          fields: [
            { name: "title", title: "Title", type: "string", validation: (r: any) => r.required() },
            { name: "url", title: "URL", type: "url", validation: (r: any) => r.required() },
            {
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["Slides", "Paper", "Video", "Photos", "Link"] },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Full write-up",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: { select: { title: "title", subtitle: "status", media: "coverImage" } },
});

export default eventType;
