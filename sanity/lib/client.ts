import { createClient } from "next-sanity";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "376dycjx",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-13",
  useCdn: true
};

export const client = createClient(sanityConfig);

export const previewClient = client.withConfig({ useCdn: false });
