import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface Post {
  id: string;
  slug: string;
  body?: string;
  collection: "blog";
  data: InferEntrySchema<"blog">;
  rendered?: RenderedContent;
  filePath?: string;
}
