// const posts = Object.values(import.meta.glob<Record<string, any>>('../pages/posts/*.mdx'))

import { getCollection, getEntry, type CollectionEntry, type RenderResult } from "astro:content";
import type { Post } from "./types";
import type { AstroComponentFactory } from "astro/runtime/server/render/astro/factory.js";

export const getAllCategories = async (posts: Post[]) => {
  const rowCategories = posts.map(post => post.data.category);
  const flattenedCategories = rowCategories.reduce((acc, category) => {
    if (Array.isArray(category)) {
      return [...acc, ...category];
    }
    return [...acc, category];
  }, []);
  return Array.from(new Set(flattenedCategories.sort()))
};
export const getMostRecentPostDate = async (posts: Post[]) => {
  const postDates = posts.map(post => post.data.pubDate);
  return postDates.sort((a, b) => new Date(b).valueOf() - new Date(a).valueOf())[0]
    ?.replaceAll('-', '')
};

export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');

  return blogEntries.map(entry => {
    // 2. Estrai lo slug "puro", senza prefisso di lingua
    const slug = entry.slug.split('/').pop() ?? '';

    // 3. Passa la lingua del post come `prop`
    return {
      params: { slug }, // Lo slug per l'URL è sempre "puro"
      props: { lang: entry.data.lang }, // Passiamo la lingua specifica di questo post
    };
  });
}

