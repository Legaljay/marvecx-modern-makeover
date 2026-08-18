import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "fsmhaobl",
    dataset: "production",
  },
  /**
   * Used by `npm run deploy` (Sanity-hosted studio).
   * Result: https://marvecx.sanity.studio
   * For studio.marvecx.com, see README.md → "Custom subdomain".
   */
  studioHost: "marvecx",
  deployment: { autoUpdates: true },
});
