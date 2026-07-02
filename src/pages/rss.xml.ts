import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { DATA } from "@/data";
import { CONFIG } from "@/data/config";

export const prerender = true;

export async function GET() {
  const posts = await getCollection("blog");
  const sorted = [...posts].sort(
    (a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime()
  );

  return rss({
    title: `${DATA.name}'s Blog`,
    description: DATA.description,
    site: CONFIG.site.url,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.summary,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${CONFIG.site.locale.split("_")[0]}</language>`,
  });
}
