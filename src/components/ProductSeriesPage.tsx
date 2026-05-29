import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ProductCard = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

type ProductButton = {
  label: string;
  href: string;
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
    image: "/images/article-06-huu-tri-doanh-nghiep.jpeg",
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

const pensionButtons: ProductButton[] = [
  { label: "Bảo hiểm Riesterrente", href: "/bao-hiem-huu-tri-riester" },
  { label: "Bảo hiểm hưu trí cơ bản", href: "/bao-hiem-huu-tri-co-ban" },
  { label: "Bảo hiểm hưu trí doanh nghiệp", href: "/bao-hiem-huu-tri-doanh-nghiep" },
];

const propertyButtons: ProductButton[] = [
  { label: "Bảo hiểm tài sản", href: "/bao-hiem-tai-san" },
  { label: "Bảo hiểm trách nhiệm", href: "/bao-hiem-trach-nhiem-ca-nhan" },
  { label: "Bảo hiểm pháp lý", href: "/bao-hiem-phap-ly" },
  { label: "Bảo hiểm nhà đất", href: "/bao-hiem-nha-dat" },
];

const businessButtons: ProductButton[] = [
  { label: "Bảo hiểm doanh nghiệp", href: "/bao-hiem-doanh-nghiep" },
  { label: "Bảo hiểm kính", href: "/bao-hiem-kinh" },
  { label: "Bảo hiểm ô tô", href: "/bao-hiem-trach-nhiem-ca-nhan" },
  { label: "Bảo hiểm du lịch", href: "/bao-hiem-y-te" },
];

const healthButtons: ProductButton[] = [
  { label: "Bảo hiểm y tế tư", href: "/bao-hiem-y-te" },
  { label: "Bảo hiểm y tế du lịch", href: "/bao-hiem-y-te" },
  { label: "Bảo hiểm mất sức lao động", href: "/bao-hiem-mat-suc-lao-dong" },
  { label: "Bảo hiểm tai nạn", href: "/bao-hiem-tai-nan" },
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
      ? "mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
      : "mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8";
  const titleClass =
    columns === 4
      ? "text-xl sm:text-2xl lg:text-[1.45rem]"
      : "text-xl sm:text-2xl lg:text-[1.65rem]";

  return (
    <div className={gridClass}>
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex h-full flex-col rounded-md border border-neutral-200 bg-white p-3 text-center shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-brand-gold-tint">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes={
                columns === 4
                  ? "(min-width: 1280px) 280px, (min-width: 640px) 45vw, 92vw"
                  : "(min-width: 1280px) 360px, (min-width: 640px) 45vw, 92vw"
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <h3
            className={`mt-4 flex min-h-[3.6rem] items-center justify-center whitespace-pre-line px-1 font-bold leading-tight text-black transition-colors group-hover:text-brand-gold ${titleClass}`}
          >
            {card.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

function InsuranceColumn({
  title,
  image,
  buttons,
}: {
  title: string;
  image: string;
  buttons: ProductButton[];
}) {
  return (
    <div className="flex h-full flex-col rounded-md border border-neutral-200 bg-white p-3 text-center shadow-sm">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-brand-gold-tint">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
        {title}
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {buttons.map((button) => (
          <Link
            key={button.label}
            href={button.href}
            className="flex min-h-12 items-center justify-center rounded-sm bg-brand-gold px-4 py-3 text-center text-base font-semibold leading-tight text-white transition-colors hover:bg-brand-gold-dark sm:text-lg"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SeriesIntro() {
  return (
    <header className="mx-auto max-w-5xl text-center lg:text-left">
      <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        {intro.headline}
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-black sm:text-xl lg:mt-10 lg:text-2xl">
        {intro.body}
      </p>
    </header>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-8 text-center text-3xl font-bold leading-tight text-brand-gold sm:mb-12 sm:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}

export function ProductSeriesPage({ seriesSlug }: { seriesSlug: string }) {
  return (
    <article className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        {seriesSlug === "invest" && (
          <>
            <SeriesIntro />
            <section className="mt-12 sm:mt-16 lg:mt-20">
              <SectionTitle>Đầu tư - Tiết kiệm</SectionTitle>
              <ProductGrid cards={investCards} columns={4} />
            </section>
          </>
        )}

        {seriesSlug === "bauspar" && (
          <section>
            <SectionTitle>Bất động sản</SectionTitle>
            <ProductGrid cards={realEstateCards} />
          </section>
        )}

        {seriesSlug === "energy" && (
          <section>
            <SectionTitle>Năng lượng</SectionTitle>
            <ProductGrid cards={energyCards} />
          </section>
        )}

        {seriesSlug === "insurance" && (
          <section>
            <SectionTitle>Bảo hiểm</SectionTitle>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <InsuranceColumn
                title="Bảo hiểm hưu trí"
                image="/images/pdf-field-house.jpeg"
                buttons={pensionButtons}
              />
              <InsuranceColumn
                title="Bảo hiểm tài sản"
                image="/images/insurance-property-temple.jpg"
                buttons={[...propertyButtons, ...businessButtons]}
              />
              <InsuranceColumn
                title="Bảo hiểm sức khỏe"
                image="/images/gallery-03.jpeg"
                buttons={healthButtons}
              />
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
