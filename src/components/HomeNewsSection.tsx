import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";

export function HomeNewsSection() {
  const items = articles.slice(0, 2);

  return (
    <section className="bg-[#f7f8fa] px-[5%] py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-gold-darker">
          Tin mới nhất
        </h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {items.map((item, i) => (
            <Link
              key={item.slug}
              href="/archive"
              className="group flex gap-5 overflow-hidden rounded-xl border border-brand-gold/20 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
            >
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="192px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1">
                {i === 0 ? (
                  <span className="inline-block rounded-full bg-brand-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Tin mới
                  </span>
                ) : null}
                <p className="mt-2 text-base font-bold leading-snug text-text-strong group-hover:text-brand-gold-darker sm:text-lg">
                  {item.title}
                </p>
                {item.excerpt ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-muted">
                    {item.excerpt}
                  </p>
                ) : null}
                <p className="mt-3 text-xs text-text-subtle">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold-darker underline underline-offset-4 hover:text-brand-gold"
          >
            Xem tất cả bài viết →
          </Link>
        </div>
      </div>
    </section>
  );
}
