import { getCollection } from 'astro:content';
import type { Post } from "./types";

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
    const slug = entry.slug.split('/').pop() ?? '';

    return {
      params: { slug },
      props: { lang: entry.data.lang },
    };
  });
}

export async function useTranslations(locale: string | undefined) {
  const translations = await getCollection('i18n');
  const dictionary = translations.find((t) => t.id === locale);

  if (!dictionary) {
    throw new Error(`Translation not found for locale: ${locale}`);
  }

  // Restituisce una funzione 't' che puoi usare per ottenere le stringhe
  return function t(key: string): string {
    // Naviga l'oggetto JSON usando la chiave, es. "header.nav.home"
    const keys = key.split('.');
    let result: any = dictionary.data;
    for (const k of keys) {
      result = result[k];
      if (result === undefined) {
        // Se una chiave non viene trovata, ritorna la chiave stessa per un facile debug
        return key;
      }
    }
    return result;
  };
}

