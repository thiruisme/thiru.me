import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false), // Add draft support
  })
});

export const collections = {
  posts: postsCollection,
};