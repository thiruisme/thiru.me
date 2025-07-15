import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datetime: z.date(),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  })
});

const gardenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dateAdded: z.date(),
    growth: z.enum(['seedling', 'growing', 'blooming', 'mature']).default('seedling'),
    type: z.enum(['reflection', 'insight', 'observation', 'principle']).default('reflection'),
    tags: z.array(z.string()).optional(),
    connections: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  posts: postsCollection,
  garden: gardenCollection,
};