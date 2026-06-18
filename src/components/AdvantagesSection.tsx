import Image from "next/image";
import { advantages } from "@/lib/content";
import type { AdvantageColumn } from "@/types/content";

const ICON_MAP: Record<AdvantageColumn["icon"], string> = {
  wuensche: "/images/icon-shield.png",
  ganzheitlich: "/images/icon-euro-support.png",
  gemeinsam: "/images/icon-handshake.png",
};

export function AdvantagesSection() {
  return (
    <section className="bg-brand-gold-tint py-12 lg:py-16">
      <div className="dvag-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
            Lợi ích của bạn
          </p>
          <h2 className="mt-4 text-[22px] font-bold leading-tight text-text-strong sm:text-[26px]">
            Giải pháp tài chính toàn diện
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {advantages.map((adv) => (
            <article key={adv.icon} className="text-center">
              <Image
                src={ICON_MAP[adv.icon]}
                alt=""
                aria-hidden="true"
                width={120}
                height={120}
                className="mx-auto h-16 w-16 object-contain"
              />
              <h3 className="mt-5 text-base font-bold leading-snug text-text-strong">
                {adv.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-default sm:text-[15px]">
                {adv.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
