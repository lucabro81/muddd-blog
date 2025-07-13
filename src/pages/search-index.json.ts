// src/pages/search-index.json.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export const GET: APIRoute = async ({ site }) => {
  // Recupera tutti i post dalla tua collection "blog"
  const allPosts = await getCollection('blog');

  const searchableData = allPosts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.slug,
    body: sanitizeHtml(post.body, { allowedTags: [], allowedAttributes: {} }).substring(0, 200) + '...',
  }));

  return new Response(JSON.stringify(searchableData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};