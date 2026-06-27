import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HealthInsuranceArticle } from "@/components/HealthInsuranceArticle";
import { WorkAbilityInsuranceArticle } from "@/components/WorkAbilityInsuranceArticle";
import { AccidentInsuranceArticle } from "@/components/AccidentInsuranceArticle";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe - taichinh.de",
  description: "Các giải pháp bảo hiểm y tế, mất sức lao động và tai nạn.",
};

export default function HealthInsuranceGroupPage() {
  return (
    <>
      <Header />
      <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
        <HealthInsuranceArticle />
        <AccidentInsuranceArticle />
        <WorkAbilityInsuranceArticle />
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
                    <Image src="/images/gallery-02.jpeg" alt="Bảo hiểm tài sản" fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" />
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
                <Link href="/bao-hiem-doanh-nghiep" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold">
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-gold-tint">
                    <Image src="/images/gallery-06.jpeg" alt="Bảo hiểm doanh nghiệp" fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 30vw, 92vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <h3 className="mt-3 px-1 text-sm font-bold leading-snug text-black transition-colors group-hover:text-brand-gold sm:text-base lg:text-lg">
                    Bảo hiểm Doanh nghiệp
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
