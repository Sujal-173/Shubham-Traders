import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "clientName", type: "string" }),
    defineField({ name: "capacity", type: "string" }),
    defineField({ name: "projectType", type: "string", options: { list: ["Residential", "Commercial", "Industrial", "Agricultural"] } }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "completionDate", type: "date" }),
    defineField({ name: "savings", type: "string" }),
    defineField({ name: "roi", type: "string" }),
    defineField({ name: "testimonial", type: "text" }),
    defineField({ name: "featuredImage", type: "image", options: { hotspot: true } })
  ]
});
