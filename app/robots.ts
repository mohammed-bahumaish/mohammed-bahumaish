import type { MetadataRoute } from "next";
import { siteMetadata } from "@/app/data/siteMetadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og/*"],
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  };
}
