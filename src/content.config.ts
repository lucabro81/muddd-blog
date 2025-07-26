import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // loader: glob({ pattern: "*/*.mdx", base: "./src/content/blog" }),
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.array(z.string()),
    lang: z.string(),
  }),
});

const i18n = defineCollection({
  type: "data",
  schema: z.object({
    header: z.object({
      subtitle: z.string(),
    }),
    sidebar: z.object({
      about_me: z.string(),
      bio: z.string(),
      categories: z.string(),
    }),
    menu: z.object({
      home: z.string(),
      about: z.string(),
      categories: z.string(),
      project: z.string(),
      milestones: z.string(),
      ai_disclaimer: z.string(),
    }),
    page_titles: z.object({
      latest_posts: z.string(),
      category: z.string(),
      all_categories: z.string(),
    }),
    cookie_banner: z.object({
      text: z.string(),
      privacy_link: z.string(),
      accept: z.string(),
      refuse: z.string(),
    }),
  }),
});

export const collections = { blog, i18n };
