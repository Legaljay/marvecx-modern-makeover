import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { Rocket } from "lucide-react";
import { schemaTypes } from "./schemas";
import { StudioLogo } from "./components/StudioLogo";

export default defineConfig({
  name: "marvecx",
  title: "MARVECX CMS",
  icon: Rocket,
  projectId: "fsmhaobl",
  dataset: "production",

  studio: {
    components: { logo: StudioLogo },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("MARVECX")
          .items([
            S.listItem()
              .title("ISTC events")
              .child(
                S.documentTypeList("event")
                  .title("ISTC events")
                  .defaultOrdering([{ field: "startDate", direction: "desc" }]),
              ),
            S.divider(),
            S.listItem()
              .title("Open / ongoing")
              .child(
                S.documentList()
                  .title("Open / ongoing")
                  .filter('_type == "event" && status in ["open", "ongoing"]')
                  .defaultOrdering([{ field: "startDate", direction: "desc" }]),
              ),
            S.listItem()
              .title("Past editions")
              .child(
                S.documentList()
                  .title("Past editions")
                  .filter('_type == "event" && status == "closed"')
                  .defaultOrdering([{ field: "startDate", direction: "desc" }]),
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],

  schema: { types: schemaTypes },
});
