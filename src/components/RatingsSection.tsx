import Link from "next/link";
import { ratingMocks } from "@/lib/content";
import { getReviews } from "@/lib/server/reviews";
import { CloseIcon, StarIcon } from "@/components/icons";

export async function RatingsSection() {
  const customRatings = await getReviews();
  const ratings = [...customRatings, ...ratingMocks];

  return (
    <section
      id="danh-gia-khach-hang"
      className="bg-surface-soft py-10 sm:py-14 lg:py-20"
    >
      <div className="dvag-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
            Đánh giá khách hàng
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-text-strong dark:text-foreground sm:text-3xl">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-default dark:text-foreground/80 sm:text-base">
            Lắng nghe chia sẻ thật từ cộng đồng người Việt tại Đức trong hành
            trình tài chính của họ.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="dvag-snap-x -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 md:gap-6">
            {ratings.map((rating, index) => (
              <article
                key={`${rating.name}-${rating.date}-${index}`}
                className="flex shrink-0 basis-[86%] flex-col gap-3 rounded-sm bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] min-[420px]:basis-[78%] sm:basis-[58%] sm:p-6 md:basis-[40%] lg:basis-[28%] dark:bg-card"
              >
                <div className="flex items-center gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating.stars
                          ? "text-brand-gold"
                          : "text-border-default"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-text-default dark:text-foreground/85">
                  &quot;{rating.body}&quot;
                </p>
                <div className="mt-auto border-t border-divider pt-3">
                  <p className="text-sm font-bold text-text-strong dark:text-foreground">
                    {rating.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {rating.location} - {rating.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <input
            id="review-modal-toggle"
            type="checkbox"
            className="peer sr-only"
            aria-hidden="true"
          />
          <label
            htmlFor="review-modal-toggle"
            className="inline-flex cursor-pointer items-center justify-center rounded-sm border border-brand-gold px-5 py-2.5 text-sm font-bold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint dark:text-primary dark:hover:bg-accent"
          >
            Để lại đánh giá của bạn
          </label>
          <p className="mt-3 text-sm text-text-muted">
            Lưu ý về các đánh giá khách hàng xem tại{" "}
            <Link
              href="/page/impressum"
              className="underline hover:text-brand-gold-darker"
            >
              đây
            </Link>
            .
          </p>

          <div className="fixed inset-0 z-[10000] hidden items-center justify-center bg-black/55 px-4 py-8 text-left peer-checked:flex">
            <label
              htmlFor="review-modal-toggle"
              className="absolute inset-0 cursor-pointer"
              aria-label="Đóng popup đánh giá"
            />
            <div className="relative z-10 w-full max-w-lg bg-white p-6 text-black shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold">Viết đánh giá</h3>
                <label
                  htmlFor="review-modal-toggle"
                  aria-label="Đóng"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-black/15 text-black transition-colors hover:bg-black/5"
                >
                  <CloseIcon className="h-5 w-5" />
                </label>
              </div>

              <form action="/api/reviews" method="post" className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="rating-name"
                    className="block text-xs font-bold uppercase tracking-wider text-text-muted"
                  >
                    Họ tên
                  </label>
                  <input
                    id="rating-name"
                    name="name"
                    className="mt-1 h-10 w-full border border-black/20 px-3 text-sm outline-none focus:border-brand-gold"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="rating-location"
                    className="block text-xs font-bold uppercase tracking-wider text-text-muted"
                  >
                    Thành phố
                  </label>
                  <input
                    id="rating-location"
                    name="location"
                    className="mt-1 h-10 w-full border border-black/20 px-3 text-sm outline-none focus:border-brand-gold"
                    placeholder="Berlin, München..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="rating-stars"
                    className="block text-xs font-bold uppercase tracking-wider text-text-muted"
                  >
                    Số sao
                  </label>
                  <select
                    id="rating-stars"
                    name="stars"
                    defaultValue="5"
                    className="mt-1 h-10 w-full border border-black/20 px-3 text-sm outline-none focus:border-brand-gold"
                  >
                    <option value="5">5 sao</option>
                    <option value="4">4 sao</option>
                    <option value="3">3 sao</option>
                    <option value="2">2 sao</option>
                    <option value="1">1 sao</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="rating-body"
                    className="block text-xs font-bold uppercase tracking-wider text-text-muted"
                  >
                    Nội dung đánh giá
                  </label>
                  <textarea
                    id="rating-body"
                    name="body"
                    required
                    rows={4}
                    className="mt-1 w-full resize-none border border-black/20 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                    placeholder="Chia sẻ trải nghiệm của bạn..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-10 w-full items-center justify-center bg-brand-gold px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
                >
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
