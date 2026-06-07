import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RiesterPensionArticle } from "@/components/RiesterPensionArticle";
import { BasicPensionArticle } from "@/components/BasicPensionArticle";
import { CorporatePensionArticle } from "@/components/CorporatePensionArticle";

export const metadata: Metadata = {
  title: "Bảo hiểm hưu trí - taichinh.de",
  description: "Các giải pháp bảo hiểm hưu trí Riester, Basisrente và hưu trí doanh nghiệp.",
};

export default function PensionInsurancePage() {
  return (
    <>
      <Header />
      <main className="flex-1 dvag-article-compact" style={{ paddingTop: "var(--header-height)" }}>
        <RiesterPensionArticle />
        <BasicPensionArticle />
        <CorporatePensionArticle />
      </main>
      <Footer />
    </>
  );
}
