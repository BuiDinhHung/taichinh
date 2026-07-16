"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { allArticleFeedItems } from "@/lib/content";
import { useDbArticleFeedItems } from "@/lib/use-db-article-feed-items";
import type { FeedItem } from "@/lib/feed";

const categoryOrder = [
  "Tin mới",
  "Đầu tư - Tiết kiệm",
  "Bất động sản",
  "Năng lượng",
  "Bảo hiểm",
  "Khác",
];

const categoryBySlug: Record<string, string> = {
  "cai-cach-che-do-huu-tri-tu-nhan-riester": "Tin mới",
  "ke-hoach-cho-tuong-lai-con-yeu": "Đầu tư - Tiết kiệm",
  "tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice": "Đầu tư - Tiết kiệm",
  "quan-ly-chuyen-nghiep-cho-tai-chinh-cua-ban": "Đầu tư - Tiết kiệm",
  "dau-tu-vao-quy-fonds-sparsplan": "Đầu tư - Tiết kiệm",
  "dau-tu-vao-vang-gold": "Đầu tư - Tiết kiệm",
  "tiet-kiem-xay-dung": "Bất động sản",
  "tin-dung-bat-dong-san": "Bất động sản",
  "tin-dung-ca-nhan": "Bất động sản",
  "vay-von-doanh-nghiep": "Bất động sản",
  fingerhaus: "Bất động sản",
  "he-thong-dien-mat-troi-solaranlage": "Năng lượng",
  "nguon-dien-gas-re": "Năng lượng",
};

function dateOrder(date: string): number {
  const time = Date.parse(date);
  return Number.isNaN(time) ? 0 : time;
}

function productCategory(item: FeedItem): string {
  if (categoryBySlug[item.slug]) return categoryBySlug[item.slug];
  if (item.slug.startsWith("bao-hiem-")) return "Bảo hiểm";
  return item.category || "Khác";
}

export function ArchiveList() {
  const dbItems = useDbArticleFeedItems();

  const groups = useMemo(() => {
    const all: FeedItem[] = [...dbItems, ...allArticleFeedItems].sort(
      (a, b) => dateOrder(b.date) - dateOrder(a.date),
    );
    const map = new Map<string, FeedItem[]>();

    for (const item of all) {
      const category = productCategory(item);
      const list = map.get(category);
      if (list) list.push(item);
      else map.set(category, [item]);
    }

    return [...map.entries()].sort(([a], [b]) => {
      const aIndex = categoryOrder.indexOf(a);
      const bIndex = categoryOrder.indexOf(b);
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });
  }, [dbItems]);

  const totalCount = dbItems.length + allArticleFeedItems.length;

  return (
    <>
      <p className="mt-3 text-sm text-text-muted">
        {totalCount} bài viết, blog và tin mới đang được phân chia theo từng nhóm sản phẩm.
      </p>

      <div className="mt-9 space-y-10">
        {groups.map(([category, list]) => (
          <section key={category}>
            <h2 className="text-base font-bold uppercase tracking-wide text-brand-gold">
              {category}
            </h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {list.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full items-center gap-4 rounded-sm border border-border-default bg-white p-4 transition-colors hover:bg-brand-gold-tint/40 dark:bg-card dark:hover:bg-accent/50"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-sm bg-muted sm:h-24 sm:w-32">
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
                          sizes="96px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold leading-snug text-text-strong transition-colors group-hover:text-brand-gold-darker dark:text-foreground dark:group-hover:text-primary sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-text-muted">{item.date}</p>
                    </div>
                    <span className="ml-auto shrink-0 text-sm text-text-muted transition-colors group-hover:text-brand-gold-darker dark:group-hover:text-primary">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
