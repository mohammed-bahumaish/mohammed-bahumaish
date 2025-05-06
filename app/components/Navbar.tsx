"use client";

import Link from "next/link";
import { SocialPill } from "./SocialPill";

const Navbar: React.FC = () => {
  return (
    <header role="banner">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

function DesktopNav() {
  return (
    <nav
      aria-label="Desktop navigation"
      className="hidden h-16 w-full items-center justify-between border-b border-border-primary/50 px-4 md:flex"
    >
      <div>
        <Link href="/" aria-label="Home">
          <span className="text-xl font-medium text-text-primary">
            Mohammed Bahumaish
          </span>
        </Link>
      </div>
      <div className="flex-1"></div>
      <SocialPill />
    </nav>
  );
}

function MobileNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="flex h-16 items-center justify-between gap-2.5 border-b border-border-primary/50 px-3 md:hidden"
    >
      <Link href="/" aria-label="Home">
        <span className="text-lg font-medium text-text-primary">
          Mohammed Bahumaish
        </span>
      </Link>

      <SocialPill />
    </nav>
  );
}

export default Navbar;
