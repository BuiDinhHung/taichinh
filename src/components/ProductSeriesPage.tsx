import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SubLink = { label: string; href: string };

type ProductCard = {
  title: string;
  href: string;
  image: string;
  alt: string;
  imageFit?: "cover" | "contain";
  subLinks?: SubLink[];
};

const intro = {
  headline:
    "Những sản phẩm và giải pháp độc quyền của các đối tác hàng đầu phù hợp với nhu cầu của bạn",
  body:
    "Trong danh mục sản phẩm đa dạng của chúng tôi, chúng tôi luôn sẵn sàng tư vấn để bạn lựa chọn những sản phẩm phù hợp nhất. Nhờ mối quan hệ hợp tác chặt chẽ với các đối tác, chúng tôi có thể mang đến cho bạn những sản phẩm chất lượng, độc đáo và đáp ứng được yêu cầu linh hoạt, tùy theo nhu cầu và hoàn cảnh riêng của bạn.",
};

const investCards: ProductCard[] = [
  {
    title: "Tiết kiệm vào Quỹ đầu tư",
    href: "/dau-tu-vao-quy-fonds-sparsplan",
    image: "/images/gallery-05.jpeg",
    alt: "Tiết kiệm vào quỹ đầu tư",
  },
  {
    title: "Đầu tư vào Vàng, Bạc",
    href: "/dau-tu-vao-vang-gold",
    image: "/images/pdf-field-retirement.jpeg",
    alt: "Đầu tư vàng bạc",
  },
  {
    title: "Tích lũy tài chính & Kế hoạch an toàn",
    href: "/tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice",
    image: "/images/article-02-tich-luy-fondspolice.jpeg",
    alt: "Tích lũy tài chính",
  },
  {
    title: "Kế hoạch tài chính cho con trẻ",
    href: "/ke-hoach-cho-tuong-lai-con-yeu",
    image: "/images/gallery-04.jpeg",
    alt: "Kế hoạch tài chính cho con trẻ",
  },
];

const insuranceCards: ProductCard[] = [
  {
    title: "Bảo hiểm Hưu trí",
    href: "/bao-hiem-huu-tri",
    image: "/images/pdf-field-house.jpeg",
    alt: "Bảo hiểm hưu trí",
    subLinks: [
      { label: "Bảo hiểm Riesterrente", href: "/bao-hiem-huu-tri-riester" },
      { label: "Bảo hiểm hưu trí cơ bản", href: "/bao-hiem-huu-tri-co-ban" },
      { label: "Bảo hiểm hưu trí doanh nghiệp", href: "/bao-hiem-huu-tri-doanh-nghiep" },
    ],
  },
  {
    title: "Bảo hiểm Tài sản",
    href: "/bao-hiem-tai-san-tong-hop",
    image: "/images/gallery-02.jpeg",
    alt: "Bảo hiểm tài sản",
    imageFit: "contain",
    subLinks: [
      { label: "Bảo hiểm tài sản", href: "/bao-hiem-tai-san-tong-hop" },
      { label: "Bảo hiểm trách nhiệm", href: "/bao-hiem-tai-san-tong-hop" },
      { label: "Bảo hiểm pháp lý", href: "/bao-hiem-tai-san-tong-hop" },
      { label: "Bảo hiểm nhà đất", href: "/bao-hiem-tai-san-tong-hop" },
      { label: "Bảo hiểm kính", href: "/bao-hiem-tai-san-tong-hop" },
      { label: "Bảo hiểm Ô tô", href: "/bao-hiem-tai-san-tong-hop" },
    ],
  },
  {
    title: "Bảo hiểm Sức khỏe",
    href: "/bao-hiem-suc-khoe",
    image: "/images/gallery-03.jpeg",
    alt: "Bảo hiểm sức khỏe",
    subLinks: [
      { label: "Bảo hiểm y tế tư", href: "/bao-hiem-suc-khoe" },
      { label: "Bảo hiểm mất sức lao động", href: "/bao-hiem-suc-khoe" },
      { label: "Bảo hiểm tai nạn", href: "/bao-hiem-suc-khoe" },
    ],
  },
  {
    title: "Bảo hiểm Doanh nghiệp",
    href: "/bao-hiem-doanh-nghiep",
    image: "/images/gallery-06.jpeg",
    alt: "Bảo hiểm doanh nghiệp",
  },
];

const realEstateCards: ProductCard[] = [
  {
    title: "Tiết kiệm xây dựng",
    href: "/tiet-kiem-xay-dung",
    image: "/images/pdf-field-child.jpeg",
    alt: "Tiết kiệm xây dựng",
  },
  {
    title: "Vay tín dụng xây dựng",
    href: "/tin-dung-bat-dong-san",
    image: "/images/house-with-euros.jpeg",
    alt: "Vay tín dụng xây dựng",
  },
  {
    title: "Nhà lắp ghép (Tiền chế)",
    href: "/fingerhaus",
    image: "/images/prefab-house-fingerhaus.jpeg",
    alt: "Nhà lắp ghép FingerHaus",
  },
];

const energyCards: ProductCard[] = [
  {
    title: "Cung cấp nguồn Gas - Điện rẻ",
    href: "/nguon-dien-gas-re",
    image: "/images/gallery-09.jpeg",
    alt: "Cung cấp nguồn gas và điện rẻ",
  },
  {
    title: "Máy bơm nhiệt — nhà nước hỗ trợ đến 70%",
    href: "/he-thong-dien-mat-troi-solaranlage",
    image: "/images/gallery-07.jpeg",
    alt: "Máy bơm nhiệt",
  },
  {
    title: "Hệ thống điện mặt trời có hỗ trợ của nhà nước",
    href: "/dien-mat-troi-solaranlage",
    image: "/images/gallery-08.jpeg",
    alt: "Hệ thống điện mặt trời",
  },
];

function ProductGrid({
  cards,
  columns = 3,
}: {
  cards: ProductCard[];
  columns?: 3 | 4;
}) {
  const gridClass =
    columns === 4
      ? "mx-auto grid max-w-6xl grid-cols-2 items-start gap-x-6 gap-y-7 sm:grid-cols-4 lg:gap-x-10"
      : "mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-16";
  // Đồng bộ cỡ chữ tiêu đề cho cả layout 3 cột và 4 cột
  const titleClass = "text-sm sm:text-base lg:text-lg";

  return (
    <div className={gridClass}>
      {cards.map((card) =>
        card.subLinks ? (
          <div key={card.title} className="flex flex-col text-center">
            <Link
              href={card.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1280px) 240px, (min-width: 640px) 24vw, 46vw"
                  className={`object-top transition-transform duration-500 group-hover:scale-[1.03] ${
                    card.imageFit === "contain" ? "object-contain" : "object-cover"
                  }`}
                />
              </div>
              <h3
                className={`mt-3 px-1 font-bold leading-snug text-black transition-colors group-hover:text-brand-gold ${titleClass}`}
              >
                {card.title}
              </h3>
            </Link>
            <ul className="mt-2 flex flex-col gap-1.5">
              {card.subLinks.map((sub) => (
                <li key={sub.label}>
                  <Link
                    href={sub.href}
                    className="block w-full rounded bg-brand-gold px-2 py-2 text-center text-[12px] font-medium leading-snug text-white transition-colors hover:bg-brand-gold-dark"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Link
            key={card.title}
            href={card.href}
            className="group flex h-full flex-col text-center transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes={
                  columns === 4
                    ? "(min-width: 1280px) 240px, (min-width: 640px) 24vw, 46vw"
                    : "(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw"
                }
                className={`object-top transition-transform duration-500 group-hover:scale-[1.03] ${
                  card.imageFit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            </div>
            <h3
              className={`mt-3 flex min-h-10 items-start justify-center px-1 font-bold leading-snug text-black transition-colors group-hover:text-brand-gold ${titleClass}`}
            >
              {card.title}
            </h3>
          </Link>
        )
      )}
    </div>
  );
}

function SeriesIntro() {
  return (
    <header className="mx-auto max-w-5xl px-2 text-left sm:px-4 lg:px-0">
      <h1 className="text-2xl font-bold leading-[1.15] text-text-muted sm:text-3xl lg:text-[40px]">
        <span className="lg:block">
          Những sản phẩm và giải pháp độc quyền của các
        </span>{" "}
        <span className="lg:block">
          đối tác hàng đầu phù hợp với nhu cầu của bạn
        </span>
      </h1>
      <p className="mt-8 text-base leading-[1.25] text-black sm:text-xl lg:mt-16 lg:text-[24px] lg:leading-[1.35]">
        {intro.body}
      </p>
    </header>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-7 text-center text-2xl font-bold leading-tight text-brand-gold sm:text-3xl">
      {children}
    </h2>
  );
}

export function ProductSeriesPage({ seriesSlug }: { seriesSlug: string }) {
  const showAll = seriesSlug === "all";

  return (
    <article>
      {showAll && (
        <>
          {/* Hero image */}
          <div className="relative w-full" style={{ aspectRatio: "16/6" }}>
            <Image
              src="/images/hero-rooftop-v2.png"
              alt="Lĩnh vực tư vấn tài chính"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>

          {/* Intro text */}
          <section className="bg-brand-gold-tint py-10 lg:pb-[76px] lg:pt-[52px]">
            <div className="dvag-container">
              <SeriesIntro />
            </div>
          </section>
        </>
      )}

      {(showAll || seriesSlug === "invest") && (
        <section className="bg-white py-10 lg:py-14">
          <div className="dvag-container">
            <div>
              <SectionTitle>Đầu tư - Tiết kiệm</SectionTitle>
              <ProductGrid cards={investCards} columns={4} />
            </div>
          </div>
        </section>
      )}

      {(showAll || seriesSlug === "bauspar") && (
        <section className="bg-brand-gold-tint py-10 lg:py-14">
          <div className="dvag-container">
            <SectionTitle>Bất động sản</SectionTitle>
            <ProductGrid cards={realEstateCards} />
          </div>
        </section>
      )}

      {(showAll || seriesSlug === "energy") && (
        <section className="bg-[#edf2f7] py-10 lg:py-14">
          <div className="dvag-container">
            <SectionTitle>Năng lượng</SectionTitle>
            <ProductGrid cards={energyCards} />
          </div>
        </section>
      )}

      {(showAll || seriesSlug === "insurance") && (
        <section className="bg-white py-10 lg:py-14">
          <div className="dvag-container">
            <SectionTitle>Bảo Hiểm</SectionTitle>
            <ProductGrid cards={insuranceCards} columns={4} />
          </div>
        </section>
      )}
    </article>
  );
}
