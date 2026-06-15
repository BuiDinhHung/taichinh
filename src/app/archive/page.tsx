import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lĩnh vực tư vấn - taichinh.de",
  description: "Khám phá các lĩnh vực tư vấn tài chính: Đầu tư, Bảo hiểm, Bất động sản, Năng lượng.",
};

type ServiceCard = { title: string; href: string; image: string };

type ServiceCategory = {
  tag: string;
  title: string;
  seriesHref: string;
  cards: ServiceCard[];
};

const latestNews = [
  {
    tag: "Tin mới",
    title: "Cải cách chế độ hưu trí tư nhân Riester",
    excerpt:
      "Chính phủ Liên bang Đức thông qua chương trình cải cách Hưu trí Riester. Từ năm 2027, tài khoản tiết kiệm hưu trí được nhà nước hỗ trợ sẽ thay thế lương hưu Riester.",
    href: "/cai-cach-che-do-huu-tri-tu-nhan-riester",
    image: "/images/pdf-news-riester.jpeg",
    date: "08.05.2026",
  },
];

const categories: ServiceCategory[] = [
  {
    tag: "Đầu tư & Tích lũy",
    title: "Đầu tư - Tiết kiệm",
    seriesHref: "/series/invest",
    cards: [
      { title: "Tiết kiệm vào Quỹ đầu tư", href: "/dau-tu-vao-quy-fonds-sparsplan", image: "/images/gallery-05.jpeg" },
      { title: "Đầu tư vào Vàng, Bạc", href: "/dau-tu-vao-vang-gold", image: "/images/pdf-field-retirement.jpeg" },
      { title: "Kế hoạch tài chính cho con trẻ", href: "/ke-hoach-cho-tuong-lai-con-yeu", image: "/images/gallery-04.jpeg" },
      { title: "Tích lũy tài chính & Kế hoạch an toàn", href: "/tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice", image: "/images/article-02-tich-luy-fondspolice.jpeg" },
    ],
  },
  {
    tag: "Bảo vệ tài chính",
    title: "Bảo hiểm",
    seriesHref: "/bao-hiem-suc-khoe",
    cards: [
      { title: "Bảo hiểm hưu trí", href: "/bao-hiem-huu-tri", image: "/images/pdf-field-house.jpeg" },
      { title: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe", image: "/images/gallery-03.jpeg" },
      { title: "Bảo hiểm tài sản tổng hợp", href: "/bao-hiem-tai-san-tong-hop", image: "/images/insurance-property-temple.jpg" },
      { title: "Bảo hiểm doanh nghiệp", href: "/bao-hiem-doanh-nghiep", image: "/images/gallery-06.jpeg" },
    ],
  },
  {
    tag: "Nhà & Bất động sản",
    title: "Bất động sản",
    seriesHref: "/series/bauspar",
    cards: [
      { title: "Tiết kiệm xây dựng - Bauspar", href: "/tiet-kiem-xay-dung", image: "/images/pdf-field-child.jpeg" },
      { title: "Vay tín dụng xây dựng & cá nhân", href: "/tin-dung-bat-dong-san", image: "/images/house-with-euros.jpeg" },
      { title: "Nhà lắp ghép - FingerHaus", href: "/fingerhaus", image: "/images/prefab-house-fingerhaus.jpeg" },
    ],
  },
  {
    tag: "Năng lượng xanh",
    title: "Năng lượng",
    seriesHref: "/series/energy",
    cards: [
      { title: "Điện mặt trời & Máy bơm nhiệt", href: "/he-thong-dien-mat-troi-solaranlage", image: "/images/gallery-07.jpeg" },
      { title: "Nguồn điện, gas giá rẻ", href: "/nguon-dien-gas-re", image: "/images/gallery-09.jpeg" },
    ],
  },
];

export default function ArchivePage() {
  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>

        {/* Page header */}
        <div className="border-b border-border-default bg-white px-[5%] py-10 lg:py-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">taichinh.de</p>
          <h1 className="mt-2 text-2xl font-bold text-text-strong sm:text-3xl lg:text-4xl">
            Lĩnh vực tư vấn & Tin mới
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-text-muted sm:text-base">
            Cập nhật tin tức tài chính và các lĩnh vực tư vấn toàn diện dành cho cộng đồng người Việt tại Đức.
          </p>
        </div>

        {/* Latest news */}
        <section className="bg-brand-gold-tint px-[5%] py-10 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-gold-darker">
              Tin mới nhất
            </h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {latestNews.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex gap-5 overflow-hidden rounded-xl border border-brand-gold/20 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
                >
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="192px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-brand-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {item.tag}
                    </span>
                    <p className="mt-2 text-base font-bold leading-snug text-text-strong group-hover:text-brand-gold-darker sm:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-muted">
                      {item.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-text-subtle">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service categories */}
        {categories.map((cat, i) => (
          <section
            key={cat.tag}
            className={`px-[5%] py-10 lg:py-14 ${i % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"}`}
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-brand-gold" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                    {cat.tag}
                  </p>
                  <h2 className="text-xl font-bold text-text-strong sm:text-2xl">{cat.title}</h2>
                </div>
              </div>

              <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${cat.cards.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {cat.cards.map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group overflow-hidden rounded-xl border border-border-default bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                      <p className="text-sm font-bold leading-snug text-text-strong group-hover:text-brand-gold-darker">
                        {card.title}
                      </p>
                      <span className="shrink-0 text-brand-gold transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="border-t border-border-default bg-white px-[5%] py-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Bắt đầu ngay</p>
          <h2 className="mt-2 text-2xl font-bold text-text-strong sm:text-3xl">
            Tư vấn miễn phí, không ràng buộc
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted sm:text-base">
            Đặt lịch để được tư vấn cá nhân hóa phù hợp với mục tiêu tài chính của bạn.
          </p>
          <Link
            href="/dat-lich"
            className="mt-6 inline-flex items-center gap-2 bg-brand-gold px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
          >
            Đặt lịch tư vấn →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
