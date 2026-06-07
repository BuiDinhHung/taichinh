import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyInsuranceArticle } from "@/components/PropertyInsuranceArticle";
import { PersonalLiabilityArticle } from "@/components/PersonalLiabilityArticle";
import { LegalInsuranceArticle } from "@/components/LegalInsuranceArticle";
import { HomeBuildingInsuranceArticle } from "@/components/HomeBuildingInsuranceArticle";
import { BusinessInsuranceArticle } from "@/components/BusinessInsuranceArticle";
import { GlassInsuranceArticle } from "@/components/GlassInsuranceArticle";
import { SolarInsuranceArticle } from "@/components/SolarInsuranceArticle";

export const metadata: Metadata = {
  title: "Bảo hiểm tài sản - taichinh.de",
  description: "Các giải pháp bảo hiểm tài sản, trách nhiệm, pháp lý, nhà đất, doanh nghiệp và kính.",
};

export default function PropertyInsuranceGroupPage() {
  return (
    <>
      <Header />
      <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
        <PropertyInsuranceArticle />
        <PersonalLiabilityArticle />
        <LegalInsuranceArticle />
        <HomeBuildingInsuranceArticle />
        <BusinessInsuranceArticle />
        <GlassInsuranceArticle />
        <SolarInsuranceArticle />
      </main>
      <Footer />
    </>
  );
}
