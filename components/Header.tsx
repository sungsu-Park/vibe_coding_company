"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/process", label: "컨설팅 프로세스" },
] as const;

const CTA = { href: "/contact", label: "문의하기" };

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
            VC
          </span>
          <span className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">
            바이브 코딩 컨설팅
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                isActive(item.href) ? "text-brand" : "text-zinc-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={CTA.href}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            {CTA.label}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-zinc-700 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          </span>
          {isMenuOpen ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-zinc-200 bg-white px-4 pb-4 md:hidden"
        >
          <div className="flex flex-col gap-1 pt-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brand-soft text-brand"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={CTA.href}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-brand px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {CTA.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
