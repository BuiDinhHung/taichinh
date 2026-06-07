import Image from "next/image";
import Link from "next/link";
import { teaserCards } from "@/lib/content";

export function TeaserSlider() {
  return (
    <section className="bg-white py-10 sm:py-12">
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

          <Image
            src="/images/bewertungen-stars.svg"
            alt="4,89 von 5 Sternen aus über 115.000 Kundenbewertungen"
            width={400}
            height={200}
            className="h-auto w-full max-w-[300px] border border-divider bg-white"
          />
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-lg font-bold uppercase tracking-wide text-brand-gold sm:text-xl">
            Những lĩnh vực tài chính đáng quan tâm
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {teaserCards.map((card) => (
            <Link key={card.headline} href={card.cta.href} className="group block overflow-hidden rounded-md border border-black/10 bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-0.5">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-gold-tint">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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
