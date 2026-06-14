import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["Solar Guides", "Government Subsidies", "Residential Solar", "Industrial Solar", "Commercial Solar", "Agriculture Solar", "Net Metering", "Financing"]
      }
    }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "seoTitle", type: "string" }),
    defineField({ name: "seoDescription", type: "text" }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] })
  ]
});
