// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const blog = defineCollection({
  // loader: glob({ pattern: "*/*.mdx", base: "./src/content/blog" }),
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.array(z.string()),
    lang: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { blog };