import Navbar from "app/components/Navbar";
import { siteMetadata } from "app/data/siteMetadata";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { BgGradient } from "./components/BgGradient";
import { Footer } from "./components/Footer";
import "./globals.css";
import { cx } from "./lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full Stack Engineer",
    "Open Source",
    "Prisma Editor",
  ],
  authors: [{ name: "Mohammed Bahumaish" }],
  creator: "Mohammed Bahumaish",
  publisher: "Mohammed Bahumaish",
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: "website",
    siteName: siteMetadata.title,
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    images: [
      {
        url: "/mohammed-bahumaish.webp", // Your default OG image
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
    site: siteMetadata.twitterHandle,
    images: ["/mohammed-bahumaish.webp"],
  },
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-bg-primary ${GeistMono.variable} ${GeistSans.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans md:max-w-7xl lg:mx-auto lg:flex-row">
        <main
          className={cx(
            "relative flex flex-1 flex-col overflow-hidden border-x border-border-primary/50",
          )}
        >
          <Navbar />
          <div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
            <div className="hidden w-full border-r border-border-primary opacity-75 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
            <div className="relative col-span-1 px-3 lg:px-0">
              <BgGradient />
              {children}
            </div>
            <div className="hidden w-full border-l border-border-primary opacity-75 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
