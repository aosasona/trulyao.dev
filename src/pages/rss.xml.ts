import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blogPosts = await getCollection("blog");
  const posts = blogPosts.map((post) => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    link: `/posts/${post.slug}`,
  })
  );

  return rss({
    title: "Ayodeji's Blog",
    description: "A blog about anything and everything I find interesting.",
    site: context.site,
    items: posts
  })
}
