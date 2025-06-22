import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title:     z.string(),
      date:      z.date(),           // expects YAML Date
      thumbnail: z.string().optional(),
      excerpt:   z.string().optional(),
      tags:      z.array(z.string()).optional()
    })
  })
};