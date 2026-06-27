"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { StarIcon, CloseIcon } from "@/components/icons";
import type { RatingMock } from "@/types/content";

function RatingsSlider({ ratings }: { ratings: RatingMock[] }) {
  return (
    <div>
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
          Đánh giá khách hàng
        </p>
        <h2 className="mt-3 text-3xl font-bold text-text-strong sm:text-4xl">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-text-muted sm:text-base">
          Lắng nghe chia sẻ thật từ cộng đồng người Việt tại Đức trong hành trình tài chính của họ.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Scrollbar, A11y, Autoplay]}
        spaceBetween={64}
        slidesPerView="auto"
        grabCursor
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={1200}
        scrollbar={{ el: ".ratings-scrollbar", draggable: true, hide: false }}
      >
        {ratings.map((rating, i) => (
          <SwiperSlide key={`${rating.name}-${i}`} style={{ width: "300px" }}>
            <article className="flex h-full flex-col gap-4 rounded-xl border border-border-default bg-white p-5 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className={`h-5 w-5 ${j < rating.stars ? "text-brand-gold" : "text-border-default"}`} />
                ))}
              </div>
              {/* Body */}
              <p className="flex-1 text-sm leading-relaxed text-text-default">
                &ldquo;{rating.body}&rdquo;
              </p>
              {/* Author */}
              <div className="border-t border-divider pt-4">
                <p className="text-sm font-bold text-text-strong">{rating.name}</p>
                <p className="mt-0.5 text-xs text-text-muted">{rating.location} · {rating.date}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scrollbar */}
      <div className="ratings-scrollbar mt-6 h-1.5 w-full overflow-hidden rounded-full bg-border-default" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function RatingsSectionClient({ ratings }: { ratings: RatingMock[] }) {
  return (
    <section id="danh-gia-khach-hang" className="bg-[#f5f7fa] py-12 sm:py-16 lg:py-20">
      <div className="dvag-container">
        <RatingsSlider ratings={ratings} />

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
