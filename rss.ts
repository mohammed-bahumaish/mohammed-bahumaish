import { Feed } from 'feed';
import { siteConfig } from "@/config/site.config";
import { blogs } from "#site/content";
import fs from "fs";

export default async function generateRssFeed() {
  const site_url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : siteConfig.siteUrl;

  const feedOptions = {
    title: `Blogs | ${siteConfig.name}`,
    description: "Hey! I'm Mohammed Bahumaish, a software engineer and open-source enthusiast. This is my personal blog where I share insights, experiences, and thoughts on web development, open-source contributions, and software engineering best practices. I focus on technologies like TypeScript, React, Next.js, and Node.js, but I also explore other interesting tech topics. Join me in my journey of continuous learning and innovation!",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Mohammed Bahumaish`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`
    }
  };

  const feed = new Feed(feedOptions);

  blogs.map(blog => {
    feed.addItem({
      title: blog.title,
      description: blog.description,
      link: `${site_url}/blogs/${blog.slugAsParams}`,
      guid: blog.slugAsParams,
      date: new Date(blog.date),
    });
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}

generateRssFeed().catch(err => console.log(err));