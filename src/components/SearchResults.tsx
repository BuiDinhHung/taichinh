"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { allArticleFeedItems } from "@/lib/content";
import { staticPages } from "@/lib/static-pages";
import { useDbArticleFeedItems } from "@/lib/use-db-article-feed-items";
import type { FeedItem } from "@/lib/feed";

type SearchItem = FeedItem & {
  searchText: string;
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function blockText(page: (typeof staticPages)[string]) {
  return page.blocks
    .map((block) => {
      if ("text" in block) return block.text;
      if ("items" in block) return block.items.join(" ");
      return block.alt ?? "";
    })
    .join(" ");
}

function rank(item: SearchItem, query: string) {
  const haystack = normalizeText(item.searchText);
  const needle = normalizeText(query.trim());
  if (!needle) return 0;
  if (normalizeText(item.title).includes(needle)) return 3;
  if (haystack.includes(needle)) return 2;
  return needle
    .split(/\s+/)
    .filter((part) => part.length > 1 && haystack.includes(part)).length;
}

export function SearchResults() {
  const params = useSearchParams();
  const q = params.get("q")?.trim() ?? "";
  const dbItems = useDbArticleFeedItems();

  const results = useMemo(() => {
    const pageItems: SearchItem[] = Object.values(staticPages).map((page) => ({
      slug: page.slug,
      href: `/page/${page.slug}`,
      title: page.title,
      date: "Trang",
      image: "/images/logo-light.png",
      excerpt: blockText(page).replace(/\*\*/g, "").slice(0, 220),
      category: "Trang",
      searchText: `${page.title} ${blockText(page)}`,
    }));

    const articleItems: SearchItem[] = [...dbItems, ...allArticleFeedItems].map((item) => ({
      ...item,
      searchText: `${item.title} ${item.category} ${item.excerpt ?? ""}`,
    }));

    return [...articleItems, ...pageItems]
      .map((item) => ({ item, score: rank(item, q) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [dbItems, q]);

  return (
    <div className="mt-8">
      <p className="text-base text-text-muted">
        {q ? `${results.length} kết quả cho "${q}"` : "Nhập từ khóa để tìm bài viết hoặc trang nội dung."}
      </p>

      {q && results.length === 0 && (
        <div className="mt-8 rounded-lg border border-border-default bg-white p-6 text-text-default">
          Không tìm thấy kết quả phù hợp. Bạn có thể thử các từ khóa như “bảo hiểm”, “vàng”, “hưu trí”, “Bauspar” hoặc “liên hệ”.
        </div>
      )}

      <ul className="mt-8 divide-y divide-border-default border-y border-border-default">
        {results.map((item) => (
          <li key={`${item.category}-${item.href}`}>
            <Link
              href={item.href}
              className="group flex gap-4 py-5 transition-colors hover:bg-brand-gold-tint/40"
            >
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md bg-brand-gold-tint">
                {item.unoptimizedImage ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${item.image.replace(/"/g, "%22")}")` }}
                    role="img"
                    aria-label={item.title}
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="112px"
                    className={item.category === "Trang" ? "object-contain p-2" : "object-cover"}
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-bold leading-snug text-text-strong transition-colors group-hover:text-brand-gold-darker">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  <span className="mr-2 rounded bg-brand-gold-tint-2 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold-deepest">
                    {item.category}
                  </span>
                  {item.date}
                </p>
                {item.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-default">
                    {item.excerpt}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
