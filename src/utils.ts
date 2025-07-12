// const posts = Object.values(import.meta.glob<Record<string, any>>('../pages/posts/*.mdx'))

export const getAllCategories = async (posts: (() => Promise<Record<string, any>>)[]) => {
  const rowCategories = await Promise.all(posts.map(async (item) => {
    const post = await item();
    return post.frontmatter.category;
  }));
  const flattenedCategories = rowCategories.reduce((acc, category) => {
    if (Array.isArray(category)) {
      return [...acc, ...category];
    }
    return [...acc, category];
  }, []);
  return Array.from(new Set(flattenedCategories.sort()))
};
export const getMostRecentPostDate = async (posts: (() => Promise<Record<string, any>>)[]) => {
  const postDates = await Promise.all(posts.map(async (item) => {
    const post = await item();
    return post.frontmatter.pubDate;
  }));
  return postDates.sort((a, b) => new Date(b).valueOf() - new Date(a).valueOf())[0]
    .replaceAll('-', '')
};