import type { Metadata } from "next/types";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Blogs | ${siteConfig.name}`,
  description:
    "Blogs | bahumai.sh | Hey! I'm Mohammed Bahumaish, a software engineer and open-source enthusiast. This is my personal blog where I share insights, experiences, and thoughts on web development, open-source contributions, and software engineering best practices. I focus on technologies like TypeScript, React, Next.js, and Node.js, but I also explore other interesting tech topics. Join me in my journey of continuous learning and innovation!",
  keywords: siteConfig.keywords,

  // Open Graph metadata
  openGraph: {
    title: `Blogs | ${siteConfig.name}`,
    description:
      "Blogs | bahumai.sh | Hey! I'm Mohammed Bahumaish, a software engineer and open-source enthusiast. This is my personal blog where I share insights, experiences, and thoughts on web development, open-source contributions, and software engineering best practices. I focus on technologies like TypeScript, React, Next.js, and Node.js, but I also explore other interesting tech topics. Join me in my journey of continuous learning and innovation!",
    url: `${siteConfig.siteUrl}/blogs`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/blog-og.png`,
        width: 1800,
        height: 1000,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Blogs | ${siteConfig.name}`,
    description:
      "Blogs | bahumai.sh | Hey! I'm Mohammed Bahumaish, a software engineer and open-source enthusiast. This is my personal blog where I share insights, experiences, and thoughts on web development, open-source contributions, and software engineering best practices. I focus on technologies like TypeScript, React, Next.js, and Node.js, but I also explore other interesting tech topics. Join me in my journey of continuous learning and innovation!",
    images: {
      url: `${siteConfig.siteUrl}/blog-og.png`,
      width: 1800,
      height: 1000,
      alt: `Blogs | ${siteConfig.name}`,
    },
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <section>{children}</section>
    </main>
  );
}
