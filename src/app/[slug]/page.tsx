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
import { ChevronLeftIcon } from "@/components/icons";
import { getDbArticleBySlug } from "@/lib/server/articles";
import { parseMarkdown } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
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
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
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

          <AuthorCard />
        </main>
        <Footer />
      </>
    );
  }

  const body = articleBodies[slug] ?? [];
  const idx = articles.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  if (slug === "dau-tu-vao-quy-fonds-sparsplan") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <FondsSparplanArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "dau-tu-vao-vang-gold") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <GoldGeigerArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <WealthProtectionArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ke-hoach-cho-tuong-lai-con-yeu") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <ChildFutureArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tiet-kiem-xay-dung") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <BuildingSavingsArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "fingerhaus") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <FingerHausArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tin-dung-bat-dong-san") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <RealEstateLoanArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tin-dung-ca-nhan") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <PersonalLoanArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-huu-tri-riester") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <RiesterPensionArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-huu-tri-co-ban") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <BasicPensionArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-huu-tri-doanh-nghiep") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <CorporatePensionArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-doanh-nghiep") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <BusinessInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "nguon-dien-gas-re") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <EnergySupplierArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "he-thong-dien-mat-troi-solaranlage") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <RenewableEnergyArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-tai-san") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <PropertyInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-trach-nhiem-ca-nhan") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <PersonalLiabilityArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-kinh") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <GlassInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-nha-dat") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <HomeBuildingInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-cho-he-thong-dien-mat-troi") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <SolarInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-phap-ly") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <LegalInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-y-te") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <HealthInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-tai-nan") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <AccidentInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "bao-hiem-mat-suc-lao-dong") {
    return (
      <>
        <Header />
        <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
          <WorkAbilityInsuranceArticle />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        <article className="py-10 lg:py-14">
          <div className="tc-container">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              Tất cả bài viết
            </Link>

            <header className="mt-6 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground">
                {article.title}
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">{article.date}</p>
            </header>

            <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-10 max-w-3xl">
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
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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

        <AuthorCard />
      </main>
      <Footer />
    </>
  );
}
