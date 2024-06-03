import { getCollection } from "astro:content";

let cachedMetaUrl: URL;

function getMetaUrl(title: string, pubDate: Date) {
  const formattedDAte = pubDate
    .toLocaleString("en-US", {
      dateStyle: "medium",
    })
    .replace(/,/g, "");

  if (cachedMetaUrl) {
    cachedMetaUrl.searchParams.set(
      "vars",
      `title:${title},date:${formattedDAte}`,
    );
    return cachedMetaUrl.href;
  }

  cachedMetaUrl = new URL(
    "https://og.wyte.space/api/v1/images/trulyao/preview",
  );
  cachedMetaUrl.searchParams.append("variant", "blog");
  cachedMetaUrl.searchParams.append("style", "blog");
  cachedMetaUrl.searchParams.append("size", "medium");
  cachedMetaUrl.searchParams.append(
    "vars",
    `title:${title},date:${formattedDAte}`,
  );

  return cachedMetaUrl.href;
}

export async function GET(context: { site: string }) {
  const site = context.site;
  const blog = await getCollection("blog", ({ data }) => data.draft !== true);

  const posts = blog.map((post) => ({
    id: post.id,
    title: post.data.title,
    url: `${site}posts/${post.slug}`,
    tags: post.data.tags,
    summary: post.data.description,
    content_text: post.body,
    image: getMetaUrl(post.data.title, post.data.date),
    date_published: post.data.date,
  }));

  const jsonFeed = {
    version: "https://jsonfeed.org/version/1",
    title: "Ayodeji's Blog",
    home_page_url: site,
    feed_url: `${site}feed.json`,
    author: {
      name: "Ayodeji Osasona",
      url: "https://trulyao.dev",
    },
    items: posts,
  };

  return new Response(JSON.stringify(jsonFeed));
}
