import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { eventType } from "./schemas/event";

export default defineConfig({
  name: "marvecx",
  title: "MARVECX Studio",

  projectId: "fsmhaobl",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(), // lets you run GROQ queries directly in the Studio
  ],

  schema: {
    types: [eventType],
  },
});
