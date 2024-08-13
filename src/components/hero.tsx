import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <p className="my-6 max-w-2xl">{portfolioConfig.joke}</p>
      <Socials />
      <div className="mt-16 space-y-2 rounded-lg border-l-4 py-2 pl-4 max-w-2xl text-muted-foreground">
        <p>
          <span className="font-semibold text-primary/90">Frontend:</span>{" "}
          React.js, Next.js, TypeScript, JavaScript, HTML, CSS, SCSS, Tailwind CSS, Framer Motion
        </p>
        <p>
          <span className="font-semibold text-primary/90">Backend:</span>{" "}
          Node.js, Express.js, GraphQL, tRPC, REST APIs, Prisma ORM, PostgreSQL, MongoDB
        </p>
        <p>
          <span className="font-semibold text-primary/90">Testing:</span>{" "}
          Jest, Playwright (E2E)
        </p>
        <p>
          <span className="font-semibold text-primary/90">DevOps:</span>{" "}
          Docker, Docker Compose, GitHub Actions, AWS
        </p>
        <p>
          <span className="font-semibold text-primary/90">APIs:</span>{" "}
          OpenAI API, Stripe API, Payment Gateway Integrations
        </p>
      </div>
    </>
  );
}
