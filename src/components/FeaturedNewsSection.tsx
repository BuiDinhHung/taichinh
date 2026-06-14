import Image from "next/image";
import Link from "next/link";

export function FeaturedNewsSection() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center bg-[#e8f0f9] py-12" style={{ paddingLeft: 'clamp(1rem, 5vw, 5rem)', paddingRight: '2rem' }}>
          <div className="max-w-md">
            <p className="text-xl font-bold text-brand-gold">Tin mới</p>
            <h2 className="mt-8 text-2xl font-bold leading-tight text-text-muted sm:text-3xl">
              Cải cách chế độ hưu trí tư nhân Riester
            </h2>
          </div>
        </div>
        <div className="relative min-h-[260px] lg:min-h-[360px]">
          <Image
            src="/images/pdf-news-riester.jpeg"
            alt="Tin mới về cải cách hưu trí Riester"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="dvag-container py-10">
        <article className="mx-auto max-w-5xl text-black">
          <h3 className="text-lg font-bold leading-snug">
            Chính phủ Liên bang Đức thông qua chương trình cải cách Hưu trí Riester
          </h3>
          <p className="mt-5 text-sm leading-relaxed">
            Từ năm 2027, tài khoản tiết kiệm hưu trí được nhà nước hỗ trợ sẽ thay thế lương hưu Riester và mang đến các sản phẩm hưu trí linh hoạt hơn, sinh lời tốt hơn và tiết kiệm chi phí hơn.
          </p>
          <h4 className="mt-5 text-sm font-bold">Những điểm chính của cải cách</h4>
          <p className="mt-3 text-sm leading-relaxed">
            Chương trình lương hưu Riester hiện tại sẽ được thay thế từ năm 2027 bằng một mô hình tài khoản hưu trí mới. Mô hình này tập trung nhiều hơn vào đầu tư thị trường vốn như quỹ đầu tư và ETF, đồng thời cung cấp các cơ chế đảm bảo linh hoạt hơn.
          </p>
          <Link
            href="/cai-cach-che-do-huu-tri-tu-nhan-riester"
            className="mt-5 inline-flex text-sm font-bold text-brand-gold-darker underline underline-offset-4"
          >
            Đọc tiếp
          </Link>
        </article>
      </div>
    </section>
  );
}
