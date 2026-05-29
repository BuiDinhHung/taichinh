import Image from "next/image";
import Link from "next/link";
import { teaserCards } from "@/lib/content";

export function TeaserSlider() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="dvag-container">
        <div className="mx-auto mb-12 flex max-w-[420px] flex-col items-center gap-7">
          <div className="flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:flex-row">
            <Link
              href="/dat-lich"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-brand-gold px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn miễn phí
            </Link>
            <Link
              href="/quan-ly-chuyen-nghiep-cho-tai-chinh-cua-ban"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-brand-gold px-5 py-2.5 text-sm font-bold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint"
            >
              Tìm hiểu dịch vụ
            </Link>
          </div>

          <Image
            src="/images/bewertungen-stars.svg"
            alt="4,89 von 5 Sternen aus über 115.000 Kundenbewertungen"
            width={400}
            height={200}
            className="h-auto w-full max-w-[340px] border border-divider bg-white"
          />
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold uppercase tracking-wide text-brand-gold sm:text-2xl">
            NHỮNG LĨNH VỰC TÀI CHÍNH ĐÁNG QUAN TÂM
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {teaserCards.map((card) => (
            <Link key={card.headline} href={card.cta.href} className="group block text-center">
              <div className="relative aspect-[1.22/1] w-full overflow-hidden bg-brand-gold-tint">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mx-auto mt-5 max-w-[15rem] text-xl font-medium leading-tight text-text-strong group-hover:text-brand-gold-darker sm:text-2xl">
                {card.headline}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
