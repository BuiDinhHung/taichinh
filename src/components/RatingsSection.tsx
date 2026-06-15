"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { StarIcon, CloseIcon } from "@/components/icons";
import type { RatingMock } from "@/types/content";

function NavBtn({ dir, btnRef }: { dir: "prev" | "next"; btnRef: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      ref={btnRef}
      aria-label={dir === "prev" ? "Trước" : "Tiếp"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-default bg-white text-text-muted shadow-sm transition hover:border-brand-gold hover:text-brand-gold disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        {dir === "prev"
          ? <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </button>
  );
}

function RatingsSlider({ ratings, title }: { ratings: RatingMock[]; title: string }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      {/* Title + arrows on same row */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-text-strong sm:text-3xl">{title}</h2>
        <div className="flex shrink-0 gap-2">
          <NavBtn dir="prev" btnRef={prevRef} />
          <NavBtn dir="next" btnRef={nextRef} />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={32}
        slidesPerView="auto"
        grabCursor
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={1200}
        onBeforeInit={(swiper: SwiperType) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        scrollbar={{ el: ".ratings-scrollbar", draggable: true, hide: false }}
      >
        {ratings.map((rating, i) => (
          <SwiperSlide key={`${rating.name}-${i}`} style={{ width: "300px" }}>
            <article className="flex h-full flex-col gap-4 rounded-xl border border-border-default bg-white p-5">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className={`h-4 w-4 ${j < rating.stars ? "text-brand-gold" : "text-border-default"}`} />
                ))}
              </div>
              {/* Body */}
              <p className="flex-1 text-sm leading-relaxed text-text-default">
                &ldquo;{rating.body}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 border-t border-divider pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold-tint text-sm font-bold text-brand-gold-darker">
                  {rating.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-text-strong">{rating.name}</p>
                  <p className="text-xs text-text-muted">{rating.location} · {rating.date}</p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scrollbar */}
      <div className="ratings-scrollbar mt-5 h-1.5 w-full overflow-hidden rounded-full bg-border-default" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function RatingsSectionClient({ ratings }: { ratings: RatingMock[] }) {
  return (
    <section id="danh-gia-khach-hang" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="dvag-container">
        <RatingsSlider ratings={ratings} title="Khách hàng nói gì về chúng tôi" />

        {/* CTA */}
        <div className="mt-10 text-center">
          <input id="review-modal-toggle" type="checkbox" className="peer sr-only" aria-hidden="true" />
          <label
            htmlFor="review-modal-toggle"
            className="inline-flex cursor-pointer items-center gap-2 rounded-sm border border-brand-gold px-6 py-2.5 text-sm font-bold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint"
          >
            Để lại đánh giá của bạn
          </label>
          <p className="mt-3 text-xs text-text-muted">
            Lưu ý về các đánh giá khách hàng xem tại{" "}
            <Link href="/page/impressum" className="underline hover:text-brand-gold-darker">đây</Link>.
          </p>

          {/* Review modal */}
          <div className="fixed inset-0 z-[10000] hidden items-center justify-center bg-black/55 px-4 py-8 text-left peer-checked:flex">
            <label htmlFor="review-modal-toggle" className="absolute inset-0 cursor-pointer" aria-label="Đóng" />
            <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 text-black shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold">Viết đánh giá</h3>
                <label htmlFor="review-modal-toggle" aria-label="Đóng" className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/15 hover:bg-black/5">
                  <CloseIcon className="h-5 w-5" />
                </label>
              </div>
              <form action="/api/reviews" method="post" className="mt-5 space-y-4">
                <div>
                  <label htmlFor="rating-name" className="block text-xs font-bold uppercase tracking-wider text-text-muted">Họ tên</label>
                  <input id="rating-name" name="name" className="mt-1 h-10 w-full rounded border border-black/20 px-3 text-sm outline-none focus:border-brand-gold" placeholder="Tên của bạn" />
                </div>
                <div>
                  <label htmlFor="rating-location" className="block text-xs font-bold uppercase tracking-wider text-text-muted">Thành phố</label>
                  <input id="rating-location" name="location" className="mt-1 h-10 w-full rounded border border-black/20 px-3 text-sm outline-none focus:border-brand-gold" placeholder="Berlin, München..." />
                </div>
                <div>
                  <label htmlFor="rating-stars" className="block text-xs font-bold uppercase tracking-wider text-text-muted">Số sao</label>
                  <select id="rating-stars" name="stars" defaultValue="5" className="mt-1 h-10 w-full rounded border border-black/20 px-3 text-sm outline-none focus:border-brand-gold">
                    <option value="5">5 sao</option>
                    <option value="4">4 sao</option>
                    <option value="3">3 sao</option>
                    <option value="2">2 sao</option>
                    <option value="1">1 sao</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rating-body" className="block text-xs font-bold uppercase tracking-wider text-text-muted">Nội dung</label>
                  <textarea id="rating-body" name="body" required rows={4} className="mt-1 w-full resize-none rounded border border-black/20 px-3 py-2 text-sm outline-none focus:border-brand-gold" placeholder="Chia sẻ trải nghiệm của bạn..." />
                </div>
                <button type="submit" className="w-full rounded bg-brand-gold py-2.5 text-sm font-bold text-white transition hover:bg-brand-gold-dark">
                  Gửi đánh giá
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
