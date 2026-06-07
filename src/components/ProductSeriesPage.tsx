import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ProductCard = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

const intro = {
  headline:
    "Những sản phẩm và giải pháp độc quyền của các đối tác hàng đầu phù hợp với nhu cầu của bạn",
  body:
    "Trong danh mục sản phẩm đa dạng của chúng tôi, chúng tôi luôn sẵn sàng tư vấn để bạn lựa chọn những sản phẩm phù hợp nhất. Nhờ mối quan hệ hợp tác chặt chẽ với các đối tác, chúng tôi có thể mang đến cho bạn những sản phẩm chất lượng, độc đáo và đáp ứng linh hoạt theo nhu cầu, hoàn cảnh riêng của bạn.",
};

const investCards: ProductCard[] = [
  {
    title: "Tiết kiệm vào\nQuỹ đầu tư",
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
    title: "Tích lũy tài chính-\nKế hoạch an toàn",
    href: "/tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice",
    image: "/images/article-02-tich-luy-fondspolice.jpeg",
    alt: "Tích lũy tài chính",
  },
  {
    title: "Kế hoạch tài chính\ncho con trẻ",
    href: "/ke-hoach-cho-tuong-lai-con-yeu",
    image: "/images/gallery-04.jpeg",
    alt: "Kế hoạch tài chính cho con trẻ",
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
    image: "/images/article-10-tin-dung-bat-dong-san.jpeg",
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
    title: "Cung cấp nguồn\nGas - Điện rẻ",
    href: "/nguon-dien-gas-re",
    image: "/images/gallery-09.jpeg",
    alt: "Cung cấp nguồn gas và điện rẻ",
  },
  {
    title: "Máy bơm nhiệt nhà\nnước hỗ trợ đến 70%",
    href: "/he-thong-dien-mat-troi-solaranlage",
    image: "/images/gallery-07.jpeg",
    alt: "Máy bơm nhiệt",
  },
  {
    title: "Hệ thống điện mặt trời\ncó hỗ trợ của nhà nước",
    href: "/he-thong-dien-mat-troi-solaranlage",
    image: "/images/gallery-08.jpeg",
    alt: "Hệ thống điện mặt trời",
  },
];

const insuranceCards: ProductCard[] = [
  {
    title: "Bảo hiểm hưu trí",
    href: "/bao-hiem-huu-tri",
    image: "/images/pdf-field-house.jpeg",
    alt: "Bảo hiểm hưu trí",
  },
  {
    title: "Bảo hiểm tài sản",
    href: "/bao-hiem-tai-san-tong-hop",
    image: "/images/insurance-property-temple.jpg",
    alt: "Bảo hiểm tài sản",
  },
  {
    title: "Bảo hiểm sức khỏe",
    href: "/bao-hiem-suc-khoe",
    image: "/images/gallery-03.jpeg",
    alt: "Bảo hiểm sức khỏe",
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
      ? "mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:gap-x-10"
      : "mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-16";
  const titleClass =
    columns === 4
      ? "text-[13px] sm:text-sm"
      : "text-sm sm:text-base lg:text-lg";

  return (
    <div className={gridClass}>
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex h-full flex-col text-center transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-gold-tint">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes={
                columns === 4
                  ? "(min-width: 1280px) 240px, (min-width: 640px) 24vw, 46vw"
                  : "(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw"
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <h3
            className={`mt-3 flex min-h-10 items-start justify-center whitespace-pre-line px-1 font-bold leading-snug text-black transition-colors group-hover:text-brand-gold ${titleClass}`}
          >
            {card.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

function SeriesIntro() {
  return (
    <header className="mx-auto max-w-5xl text-left">
      <h1 className="text-xl font-bold leading-tight text-text-muted sm:text-2xl lg:text-3xl">
        {intro.headline}
      </h1>
      <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black sm:text-base">
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
    <article className="bg-white py-8 lg:py-10">
      <div className="dvag-container">
        {(showAll || seriesSlug === "invest") && (
          <>
            <SeriesIntro />
            <section className="mt-10 pb-8">
              <SectionTitle>Đầu tư - Tiết kiệm</SectionTitle>
              <ProductGrid cards={investCards} columns={4} />
            </section>
          </>
        )}

        {(showAll || seriesSlug === "bauspar") && (
          <section className="py-8">
            <SectionTitle>Bất động sản</SectionTitle>
            <ProductGrid cards={realEstateCards} />
          </section>
        )}

        {(showAll || seriesSlug === "energy") && (
          <section className="py-8">
            <SectionTitle>Năng lượng</SectionTitle>
            <ProductGrid cards={energyCards} />
          </section>
        )}

        {(showAll || seriesSlug === "insurance") && (
          <section className="py-8">
            <SectionTitle>Bảo hiểm</SectionTitle>
            <ProductGrid cards={insuranceCards} />
          </section>
        )}
      </div>
    </article>
  );
}
