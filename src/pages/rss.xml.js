import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: "Thiru's Internet Corner",
    description: "Designer, filmmaker, and explorer of ideas. I tinker, tell stories, build things from scratch, and chase the eerie, the beautiful, and the deeply human.",
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags || [],
      })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}