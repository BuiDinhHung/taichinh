import Image from "next/image";
import Link from "next/link";

export function FeaturedNewsSection() {
  return (
    <section className="bg-white">
      {/* Split header: blue left + image right */}
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#e8f0f9] px-[clamp(1.5rem,6vw,5rem)] py-12 lg:py-16">
          <p className="text-xl font-bold text-brand-gold">Tin mới</p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-text-strong sm:text-4xl">
            Cải cách chế độ hưu trí tư nhân Riester
          </h2>
        </div>
        <div className="relative min-h-[240px] lg:min-h-[340px]">
          <Image
            src="/images/pdf-news-riester.jpeg"
            alt="Cải cách hưu trí Riester"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Full article content */}
      <div className="dvag-container py-10 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-base font-bold leading-snug text-text-strong sm:text-lg">
            Chính phủ Liên bang Đức thông qua chương trình cải cách Hưu trí Riester
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-text-default sm:text-base">
            Từ năm 2027, tài khoản tiết kiệm hưu trí được nhà nước hỗ trợ sẽ thay thế lương hưu Riester và mang đến các sản phẩm hưu trí linh hoạt hơn, sinh lời tốt hơn và tiết kiệm chi phí hơn.
          </p>

          <h4 className="mt-6 text-sm font-bold text-text-strong sm:text-base">
            Những điểm chính của cải cách
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-text-default sm:text-base">
            Chương trình lương hưu Riester hiện tại sẽ được thay thế từ năm 2027 bằng một mô hình tài khoản hưu trí mới. Mô hình này tập trung nhiều hơn vào đầu tư thị trường vốn như quỹ đầu tư và ETF, đồng thời cung cấp các cơ chế đảm bảo linh hoạt hơn.
            {" "}Mục tiêu là làm cho việc tích lũy hưu trí tư nhân trở nên hấp dẫn hơn, đặc biệt đối với người có thu nhập thấp và trung bình, các gia đình và người lao động tự do.
          </p>

          <p className="mt-5 text-sm leading-relaxed text-text-default sm:text-base">
            <strong>Trang web tham khảo:</strong>{" "}
            <a
              href="https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2026/260508-bundesrat-reform-private-altersvorsorge.html"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-brand-gold-darker underline underline-offset-2 hover:text-brand-gold"
            >
              https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2026/260508-bundesrat-reform-private-altersvorsorge.html
            </a>
          </p>

          <div className="mt-8">
            <Link
              href="/archive"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold-darker underline underline-offset-4 hover:text-brand-gold"
            >
              Xem tất cả bài viết →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
