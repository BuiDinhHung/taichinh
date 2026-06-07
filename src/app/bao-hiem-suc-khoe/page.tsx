import type { Metadata } from "next";
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
        <WorkAbilityInsuranceArticle />
        <AccidentInsuranceArticle />
      </main>
      <Footer />
    </>
  );
}
