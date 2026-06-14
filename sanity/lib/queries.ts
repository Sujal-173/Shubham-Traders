import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(coalesce(completionDate, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    clientName,
    capacity,
    projectType,
    description,
    completionDate,
    savings,
    roi,
    testimonial,
    featuredImage
  }
`);

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    location,
    clientName,
    capacity,
    projectType,
    description,
    completionDate,
    savings,
    roi,
    testimonial,
    featuredImage,
    gallery
  }
`);

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    seoTitle,
    seoDescription,
    coverImage
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    seoTitle,
    seoDescription,
    coverImage,
    body
  }
`);
