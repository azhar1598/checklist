"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  const overDark = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overDark
          ? "bg-transparent"
          : "border-b border-nor-black/8 bg-nor-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12 lg:px-16">
        <Link
          href="/"
          aria-label="NoR home"
          className="transition-opacity hover:opacity-80"
        >
          <Logo onDark={overDark} height={28} />
        </Link>

        <nav className="flex items-center gap-6 md:gap-10 lg:gap-12">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors md:text-[0.9375rem] ${
                  overDark
                    ? active
                      ? "text-nor-yellow"
                      : "text-nor-white/80 hover:text-nor-white"
                    : active
                      ? "text-nor-black"
                      : "text-nor-muted hover:text-nor-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
