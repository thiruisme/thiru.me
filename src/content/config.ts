import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // Add datetime field for more precise timestamps
    datetime: z.date().optional().or(z.string().datetime({ offset: true }).transform(str => new Date(str))),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  posts: postsCollection,
};