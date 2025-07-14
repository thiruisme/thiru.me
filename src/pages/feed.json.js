import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');
  
  const sortedPosts = posts.sort((a, b) => {
    return b.data.datetime.getTime() - a.data.datetime.getTime();
  });
  
  const feed = {
    version: "https://jsonfeed.org/version/1",
    title: "Thiru's Internet Corner",
    home_page_url: "https://thiru.me",
    feed_url: "https://thiru.me/feed.json",
    description: "Designer, filmmaker, and explorer of ideas.",
    author: {
      name: "Thiru N",
      url: "https://thiru.me",
    },
    items: sortedPosts.map((post) => ({
      id: `https://thiru.me/blog/${post.slug}/`,
      url: `https://thiru.me/blog/${post.slug}/`,
      title: post.data.title,
      content_text: post.data.excerpt,
      date_published: post.data.datetime.toISOString(),
      tags: post.data.tags || [],
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}