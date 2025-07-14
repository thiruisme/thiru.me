import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  
  // Sort by datetime if available, fallback to date
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.data.datetime || a.data.date;
    const dateB = b.data.datetime || b.data.date;
    return dateB.getTime() - dateA.getTime();
  });
  
  return rss({
    title: "Thiru's Internet Corner",
    description: "Designer, filmmaker, and explorer of ideas. I tinker, tell stories, build things from scratch, and chase the eerie, the beautiful, and the deeply human.",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      // Use datetime if available, otherwise use date at midnight
      pubDate: post.data.datetime || post.data.date,
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      // Add guid for better RSS reader compatibility
      guid: {
        '@_isPermaLink': 'true',
        '#text': `${context.site}blog/${post.slug}/`
      }
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}