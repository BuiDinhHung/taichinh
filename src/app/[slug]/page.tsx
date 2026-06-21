import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { ArticleBody } from "@/components/ArticleBody";
import { BasicPensionArticle } from "@/components/BasicPensionArticle";
import { BuildingSavingsArticle } from "@/components/BuildingSavingsArticle";
import { BusinessInsuranceArticle } from "@/components/BusinessInsuranceArticle";
import { ChildFutureArticle } from "@/components/ChildFutureArticle";
import { CorporatePensionArticle } from "@/components/CorporatePensionArticle";
import { EnergySupplierArticle } from "@/components/EnergySupplierArticle";
import { FingerHausArticle } from "@/components/FingerHausArticle";
import { FondsSparplanArticle } from "@/components/FondsSparplanArticle";
import { GlassInsuranceArticle } from "@/components/GlassInsuranceArticle";
import { GoldGeigerArticle } from "@/components/GoldGeigerArticle";
import { HealthInsuranceArticle } from "@/components/HealthInsuranceArticle";
import { HomeBuildingInsuranceArticle } from "@/components/HomeBuildingInsuranceArticle";
import { LegalInsuranceArticle } from "@/components/LegalInsuranceArticle";
import { AccidentInsuranceArticle } from "@/components/AccidentInsuranceArticle";
import { PersonalLoanArticle } from "@/components/PersonalLoanArticle";
import { PersonalLiabilityArticle } from "@/components/PersonalLiabilityArticle";
import { PropertyInsuranceArticle } from "@/components/PropertyInsuranceArticle";
import { RealEstateLoanArticle } from "@/components/RealEstateLoanArticle";
import { RenewableEnergyArticle } from "@/components/RenewableEnergyArticle";
import { RiesterPensionArticle } from "@/components/RiesterPensionArticle";
import { SolarInsuranceArticle } from "@/components/SolarInsuranceArticle";
import { WealthProtectionArticle } from "@/components/WealthProtectionArticle";
import { WorkAbilityInsuranceArticle } from "@/components/WorkAbilityInsuranceArticle";
import { articles } from "@/lib/content";
import { articleBodies } from "@/lib/articles-content";
import { seriesList } from "@/lib/series";
import { ChevronLeftIcon } from "@/components/icons";
import { getDbArticleBySlug } from "@/lib/server/articles";
import { parseMarkdown } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

const customRelatedSlugs: Record<string, string[]> = {
  "tiet-kiem-xay-dung": ["tin-dung-bat-dong-san", "fingerhaus"],
  "fingerhaus": ["tiet-kiem-xay-dung", "tin-dung-bat-dong-san"],
  "tin-dung-bat-dong-san": ["tiet-kiem-xay-dung", "fingerhaus"],
  "tin-dung-ca-nhan": ["tiet-kiem-xay-dung", "fingerhaus"],
};

function getRelatedArticles(slug: string) {
  if (customRelatedSlugs[slug]) {
    return customRelatedSlugs[slug]
      .map((s) => articles.find((a) => a.slug === s))
      .filter((a): a is (typeof articles)[number] => Boolean(a));
  }

  const series = seriesList.find((item) => item.articleSlugs.includes(slug));
  const relatedSlugs = series
    ? series.articleSlugs.filter((item) => item !== slug)
    : [];

  const related = relatedSlugs
    .map((item) => articles.find((article) => article.slug === item))
    .filter((article): article is (typeof articles)[number] => Boolean(article))
    .slice(0, 4);

  if (related.length > 0) return related;
  return articles.filter((article) => article.slug !== slug).slice(0, 4);
}

function RelatedArticles({
  currentSlug,
  title = "Bài viết khác trong cùng thể loại",
  productStyle = false,
}: {
  currentSlug: string;
  title?: string;
  productStyle?: boolean;
}) {
  const related = getRelatedArticles(currentSlug);
  if (related.length === 0) return null;

  const displayedArticles = productStyle ? related.slice(0, 3) : related;

  if (productStyle) {
    const isTwo = displayedArticles.length === 2;
    return (
      <section className="bg-white py-12 lg:py-16">
        <div className="tc-container">
          <h2 className="text-center text-2xl font-bold text-brand-gold sm:text-3xl">
            {title}
          </h2>
          <div className={`mt-8 ${isTwo ? "flex flex-wrap justify-center gap-8" : "grid grid-cols-1 gap-8 sm:grid-cols-3"}`}>
            {displayedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className={`group block ${isTwo ? "w-full sm:w-[calc(33.333%-1rem)]" : ""}`}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-black transition-colors group-hover:text-brand-gold sm:text-base">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#edf2f7] py-12 lg:py-16">
      <div className="tc-container">
        <h2 className="text-xl font-bold tracking-tight text-text-strong sm:text-2xl">
          {title}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((article) => (
            <Link key={article.slug} href={`/${article.slug}`} className="group block">
              <article className="h-full overflow-hidden rounded-sm border border-black/10 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.10)]">
                <div className="relative aspect-[3/2] overflow-hidden bg-brand-gold-tint">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-snug text-text-strong transition-colors group-hover:text-brand-gold-darker">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-muted">{article.date}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    const dbArticle = await getDbArticleBySlug(slug).catch(() => null);
    if (!dbArticle) return {};
    const image = dbArticle.image?.trim();
    const description = dbArticle.content.replace(/[#>*\-]/g, "").trim().slice(0, 160);
    return {
      title: `${dbArticle.title} – taichinh.de`,
      description,
      openGraph: image
        ? {
            title: dbArticle.title,
            description,
            images: [{ url: image }],
          }
        : undefined,
    };
  }
  return {
    title: `${article.title} – taichinh.de`,
    description: article.excerpt ?? article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? article.title,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    const dbArticle = await getDbArticleBySlug(slug).catch(() => null);
    if (!dbArticle) notFound();

    const body = parseMarkdown(dbArticle.content);
    const coverImage = dbArticle.image?.trim();
    const date = new Date(dbArticle.updatedAt).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <article className="py-10 lg:py-14">
            <div className="tc-container">
              <Link
                href="/archive"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeftIcon className="h-4 w-4" />
                Tất cả bài viết
              </Link>

              <header className="mt-6 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  {dbArticle.category}
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground">
                  {dbArticle.title}
                </h1>
                <p className="mt-4 text-sm text-muted-foreground">{date}</p>
              </header>

              {coverImage ? (
                <div
                  className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cover bg-center bg-muted"
                  style={{ backgroundImage: `url("${coverImage.replace(/"/g, "%22")}")` }}
                  role="img"
                  aria-label={dbArticle.title}
                />
              ) : null}

              <div className="mt-10 max-w-3xl">
                {body.length > 0 ? (
                  <ArticleBody blocks={body} unoptimizedImages />
                ) : (
                  <p className="text-base text-muted-foreground">
                    Bài viết đang được cập nhật.
                  </p>
                )}
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </>
    );
  }

  const body = articleBodies[slug] ?? [];
  const idx = articles.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;
  const related = getRelatedArticles(slug).slice(0, 3);

  if (slug === "dau-tu-vao-quy-fonds-sparsplan") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <FondsSparplanArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "dau-tu-vao-vang-gold") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <GoldGeigerArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <WealthProtectionArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ke-hoach-cho-tuong-lai-con-yeu") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <ChildFutureArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tiet-kiem-xay-dung") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <BuildingSavingsArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "fingerhaus") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <FingerHausArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tin-dung-bat-dong-san") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <RealEstateLoanArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tin-dung-ca-nhan") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <PersonalLoanArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-huu-tri-riester") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <RiesterPensionArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-huu-tri-co-ban") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <BasicPensionArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-huu-tri-doanh-nghiep") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <CorporatePensionArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-doanh-nghiep") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <BusinessInsuranceArticle />
          <section className="bg-white py-12 lg:py-16">
            <div className="dvag-container">
              <h2 className="text-center text-2xl font-bold text-brand-gold sm:text-3xl">
                Những lĩnh vực có thể bạn quan tâm
              </h2>
              <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-16">
                <div className="flex flex-col text-center">
                  <Link href="/bao-hiem-huu-tri" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold">
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
                      <Image src="/images/pdf-field-house.jpeg" alt="Bảo hiểm hưu trí" fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <h3 className="mt-3 px-1 text-sm font-bold leading-snug text-black transition-colors group-hover:text-brand-gold sm:text-base lg:text-lg">
                      Bảo hiểm Hưu trí
                    </h3>
                  </Link>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {[
                      { label: "Bảo hiểm Riesterrente", href: "/bao-hiem-huu-tri-riester" },
                      { label: "Bảo hiểm hưu trí cơ bản", href: "/bao-hiem-huu-tri-co-ban" },
                      { label: "Bảo hiểm hưu trí doanh nghiệp", href: "/bao-hiem-huu-tri-doanh-nghiep" },
                    ].map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} className="block w-full rounded bg-brand-gold px-2 py-2 text-center text-[12px] font-medium leading-snug text-white transition-colors hover:bg-brand-gold-dark">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col text-center">
                  <Link href="/bao-hiem-tai-san-tong-hop" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold">
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
                      <Image src="/images/insurance-property-temple.jpg" alt="Bảo hiểm tài sản" fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <h3 className="mt-3 px-1 text-sm font-bold leading-snug text-black transition-colors group-hover:text-brand-gold sm:text-base lg:text-lg">
                      Bảo hiểm Tài sản
                    </h3>
                  </Link>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {["Bảo hiểm tài sản", "Bảo hiểm trách nhiệm", "Bảo hiểm pháp lý", "Bảo hiểm nhà đất", "Bảo hiểm kính", "Bảo hiểm Ô tô"].map((label) => (
                      <li key={label}>
                        <Link href="/bao-hiem-tai-san-tong-hop" className="block w-full rounded bg-brand-gold px-2 py-2 text-center text-[12px] font-medium leading-snug text-white transition-colors hover:bg-brand-gold-dark">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col text-center">
                  <Link href="/bao-hiem-suc-khoe" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold">
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
                      <Image src="/images/gallery-03.jpeg" alt="Bảo hiểm sức khỏe" fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <h3 className="mt-3 px-1 text-sm font-bold leading-snug text-black transition-colors group-hover:text-brand-gold sm:text-base lg:text-lg">
                      Bảo hiểm Sức khỏe
                    </h3>
                  </Link>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {["Bảo hiểm y tế tư", "Bảo hiểm mất sức lao động", "Bảo hiểm tai nạn"].map((label) => (
                      <li key={label}>
                        <Link href="/bao-hiem-suc-khoe" className="block w-full rounded bg-brand-gold px-2 py-2 text-center text-[12px] font-medium leading-snug text-white transition-colors hover:bg-brand-gold-dark">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "nguon-dien-gas-re") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <EnergySupplierArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "he-thong-dien-mat-troi-solaranlage" || slug === "dien-mat-troi-solaranlage") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <RenewableEnergyArticle />
          <RelatedArticles currentSlug={slug} productStyle title="Những lĩnh vực có thể bạn quan tâm" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-tai-san") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <PropertyInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-trach-nhiem-ca-nhan") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <PersonalLiabilityArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-kinh") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <GlassInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-nha-dat") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <HomeBuildingInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-cho-he-thong-dien-mat-troi") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <SolarInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-phap-ly") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <LegalInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-y-te") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <HealthInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-tai-nan") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <AccidentInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-mat-suc-lao-dong") {
    return (
      <>
        <Header />
        <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
          <WorkAbilityInsuranceArticle />
          <RelatedArticles currentSlug={slug} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
        <article className="py-10 lg:py-14">
          <div className="tc-container">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              Tất cả bài viết
            </Link>

            <header className="mt-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground">
                {article.title}
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">{article.date}</p>
            </header>

            <div className="mt-8 relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-10">
              {body.length > 0 ? (
                <ArticleBody blocks={body} />
              ) : (
                <p className="text-base text-muted-foreground">
                  Bài viết đang được cập nhật.
                </p>
              )}
            </div>

            {/* Prev / Next */}
            {(prev || next) && (
              <nav className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/${prev.slug}`}
                    className="group rounded-xl border border-border p-5 transition-colors hover:border-primary/50 hover:bg-accent"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      ← Bài trước
                    </p>
                    <p className="mt-2 text-base font-bold leading-snug group-hover:text-primary">
                      {prev.title}
                    </p>
                  </Link>
                ) : <span />}
                {next ? (
                  <Link
                    href={`/${next.slug}`}
                    className="group rounded-xl border border-border p-5 transition-colors hover:border-primary/50 hover:bg-accent sm:text-right"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Bài tiếp →
                    </p>
                    <p className="mt-2 text-base font-bold leading-snug group-hover:text-primary">
                      {next.title}
                    </p>
                  </Link>
                ) : <span />}
              </nav>
            )}

            {/* Related */}
            {related.length > 0 && (
              <section className="mx-auto mt-16 max-w-5xl border-t border-border pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-text-strong dark:text-foreground">Bài viết khác cùng chủ đề</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/${r.slug}`} className="group block">
                      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-muted">
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <h3 className="mt-3 text-base font-bold leading-snug group-hover:text-primary transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">{r.date}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
