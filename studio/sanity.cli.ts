import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "fsmhaobl",
    dataset: "production",
  },
  /**
   * The studio will be hosted at https://fsmhaobl.sanity.studio
   * You can set a custom studioHost name here (must be globally unique on sanity.studio).
   */
  studioHost: "marvecx",
});
