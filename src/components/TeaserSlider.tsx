import Image from "next/image";
import Link from "next/link";
import { teaserCards } from "@/lib/content";

export function TeaserSlider() {
  return (
    <section className="bg-[#f5f7fa] py-10 sm:py-12">
      <div className="dvag-container">
        <div className="mx-auto mb-10 flex max-w-[520px] flex-col items-center gap-6">
          <div className="flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:flex-row">
            <Link
              href="/dat-lich"
              className="inline-flex min-h-9 items-center justify-center rounded-sm bg-brand-gold px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn miễn phí
            </Link>
            <Link
              href="/quan-ly-chuyen-nghiep-cho-tai-chinh-cua-ban"
              className="inline-flex min-h-9 items-center justify-center rounded-sm border border-brand-gold px-4 py-2 text-xs font-bold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint"
            >
              Tìm hiểu dịch vụ
            </Link>
          </div>

          <div className="flex items-center gap-3 rounded border border-divider bg-white px-4 py-3 shadow-sm">
            <div className="flex gap-0.5 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-text-strong">4,89 / 5 sao</p>
              <p className="text-xs leading-tight text-text-muted">từ hơn 40.000 đánh giá khách hàng</p>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-lg font-bold uppercase tracking-wide text-brand-gold sm:text-xl">
            Những lĩnh vực tài chính đáng quan tâm
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {teaserCards.map((card) => (
            <Link key={card.headline} href={card.cta.href} className="group block overflow-hidden rounded-md border border-black/10 bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-0.5">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mx-auto flex min-h-16 max-w-[15rem] items-center justify-center px-3 py-3 text-sm font-semibold leading-snug text-text-strong group-hover:text-brand-gold-darker sm:text-base">
                {card.headline}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
