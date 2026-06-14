"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteName } from "@/lib/content";
import { ChatIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";

const germanProductsUrl = "https://www.dvag.de/dvag/allfinanzberatung/produkte.html";
const mainNav = [
  { label: "Về chúng tôi", href: "/page/gioi-thieu" },
  { label: "Sản phẩm của chúng tôi", href: "/san-pham" },
  { label: "Liên hệ", href: "/dat-lich" },
  { label: "Tin mới", href: "/archive" },
];

function LanguageFlags({ compact = false }: { compact?: boolean }) {
  const flagClass = compact ? "h-6 w-8 text-base" : "h-6 w-8 text-base";

  return (
    <div className="flex shrink-0 items-center gap-2" aria-label="Ngôn ngữ">
      <Link
        href="/"
        aria-label="Tiếng Việt"
        className={`${flagClass} inline-flex items-center justify-center overflow-hidden rounded-[2px] border border-black/15 bg-[#da251d] shadow-sm`}
      >
        <span className="text-[#ffeb00]" aria-hidden="true">★</span>
      </Link>
      <a
        href={germanProductsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Deutsch"
        className={`${flagClass} inline-grid overflow-hidden rounded-[2px] border border-black/15 shadow-sm`}
      >
        <span className="bg-black" />
        <span className="bg-[#dd0000]" />
        <span className="bg-[#ffce00]" />
      </a>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-brand-gold-tint-2 bg-brand-gold-tint"
        style={{ height: "var(--header-height)" }}
      >
        <div className="dvag-container flex h-full items-center justify-between gap-2 sm:gap-4">
          <Link href="/" aria-label={`${siteName} - Trang chủ`} className="min-w-0 shrink">
            <Image
              src="/images/logo-light.png"
              alt={siteName}
              width={230}
              height={54}
              className="h-8 w-auto max-w-[176px] sm:h-9 sm:max-w-[220px] lg:h-10 lg:max-w-none xl:h-11"
              priority
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-7">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-semibold leading-none text-black transition-colors hover:text-brand-gold-darker xl:text-[15px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/dat-lich"
            className="hidden shrink-0 items-center gap-2 bg-brand-gold px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark lg:flex"
          >
            <ChatIcon className="h-4 w-4" />
            Đặt lịch tư vấn
          </Link>

          <div className="hidden lg:block">
            <LanguageFlags />
          </div>

          <form
            action="/search"
            className="hidden h-10 w-36 shrink-0 items-center border border-black/25 bg-white text-black xl:flex 2xl:w-56"
            role="search"
          >
            <label htmlFor="site-search" className="sr-only">
              Tìm kiếm
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Tìm kiếm"
              className="h-full min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-black/45"
            />
            <button
              type="submit"
              aria-label="Tìm kiếm"
              className="flex h-full w-9 shrink-0 items-center justify-center text-black transition-colors hover:text-brand-gold-darker"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <LanguageFlags compact />
            <button
              type="button"
              aria-label="Mở menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded border border-black/20 bg-white/80 text-black shadow-sm"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-brand-gold-tint text-black lg:hidden">
          <div className="dvag-container flex h-[var(--header-height)] items-center justify-between gap-2 border-b border-brand-gold-tint-2">
            <div className="flex min-w-0 items-center gap-2">
              <Image
                src="/images/logo-light.png"
                alt={siteName}
                width={200}
                height={48}
                className="h-8 w-auto max-w-[176px] sm:h-9 sm:max-w-[220px]"
                priority
              />
              <LanguageFlags compact />
            </div>
            <button
              type="button"
              aria-label="Đóng menu"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded border border-black/20 bg-white/80"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <form action="/search" className="dvag-container mt-4 flex h-11 items-center border border-black/20 bg-white" role="search">
            <label htmlFor="mobile-site-search" className="sr-only">
              Tìm kiếm
            </label>
            <input
              id="mobile-site-search"
              name="q"
              type="search"
              placeholder="Tìm kiếm"
              className="h-full min-w-0 flex-1 bg-transparent px-3 text-base outline-none"
            />
            <button type="submit" aria-label="Tìm kiếm" className="flex h-full w-11 items-center justify-center">
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>

          <nav className="dvag-container flex flex-col gap-1 py-5">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-black/10 py-4 text-lg font-bold sm:text-xl"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
