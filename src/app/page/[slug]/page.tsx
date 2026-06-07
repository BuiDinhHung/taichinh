import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleBody } from "@/components/ArticleBody";
import { ContactHero } from "@/components/ContactHero";
import { AboutContactSection } from "@/components/AboutContactSection";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { staticPages } from "@/lib/static-pages";

export function generateStaticParams() {
  return Object.keys(staticPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = staticPages[slug];
  if (!page) return {};
  return {
    title: `${page.title} – taichinh.de`,
  };
}

export default async function StaticPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = staticPages[slug];
  if (!page) notFound();
  const aboutContactStartIndex = page.blocks.findIndex(
    (block) => block.type === "img" && block.src === "/images/pdf-team-office.jpeg",
  );
  const aboutTeamStartIndex = page.blocks.findIndex(
    (block) => block.type === "h2" && block.text === "Chúng tôi là",
  );
  const blocks =
    slug === "gioi-thieu" && aboutContactStartIndex > -1
      ? page.blocks.slice(0, aboutContactStartIndex)
      : slug === "gioi-thieu" && aboutTeamStartIndex > -1
        ? page.blocks.slice(0, aboutTeamStartIndex)
      : page.blocks;
  const isAboutPage = slug === "gioi-thieu";

  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        {slug === "contact" ? (
          <ContactHero />
        ) : (
          <article className="py-10 lg:py-14">
            <div className="tc-container">
              <header className={isAboutPage ? "text-center" : "mx-auto max-w-4xl text-center"}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
                  {page.title}
                </h1>
              </header>
              <div className={isAboutPage ? "mt-8" : "mx-auto mt-8 max-w-4xl"}>
                <ArticleBody blocks={blocks} />
              </div>
            </div>
            {isAboutPage && (
              <div className="mt-14">
                <AboutContactSection />
                <TeamSection />
                <AwardsSection />
                <PartnersSection />
              </div>
            )}
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}
