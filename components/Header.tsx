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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
        stroke="#0a0a0a"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onHomeTop = isHome && !scrolled && !menuOpen;
  const solidHeader = !onHomeTop;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass = (active: boolean, mobile = false) => {
    if (mobile) {
      return active
        ? "text-nor-black"
        : "text-nor-muted hover:text-nor-black";
    }

    return active
      ? "text-nor-black underline decoration-nor-yellow decoration-2 underline-offset-4"
      : "text-nor-muted hover:text-nor-black";
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solidHeader
            ? "border-b border-nor-black/8 bg-nor-white/95 shadow-sm backdrop-blur-md"
            : "bg-nor-cream/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-24 md:px-12 lg:px-16">
          <Link
            href="/"
            aria-label="NoR home"
            className="relative z-50 transition-opacity hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            <Logo height={28} />
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-12">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors md:text-[0.9375rem] ${linkClass(active)}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-md transition-colors md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-nor-cream transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex h-full flex-col justify-center px-8 pt-16">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-4 font-serif text-4xl font-light tracking-tight transition-colors ${linkClass(active, true)}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 border-t border-nor-black/10 pt-8">
            <Link
              href="/"
              className="text-sm tracking-wide text-nor-muted transition-colors hover:text-nor-black"
              onClick={() => setMenuOpen(false)}
            >
              Back to home
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
