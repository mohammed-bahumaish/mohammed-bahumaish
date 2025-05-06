import type { MetadataRoute } from "next";
import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { siteMetadata } from "@/app/data/siteMetadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = fetchAndSortBlogPosts();
  const blogUrls = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${siteMetadata.siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogUrls,
  ];
}
