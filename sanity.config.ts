import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "shubham-traders",
  title: "Shubham Traders CMS",
  projectId: process.env.SANITY_PROJECT_ID || "376dycjx",
  dataset: process.env.SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
});
