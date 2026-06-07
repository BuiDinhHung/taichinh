import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSeriesPage } from "@/components/ProductSeriesPage";

export const metadata: Metadata = {
  title: "Sản phẩm của chúng tôi - taichinh.de",
  description:
    "Tổng hợp các sản phẩm đầu tư, tiết kiệm, bất động sản, năng lượng và bảo hiểm của taichinh.de.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        <ProductSeriesPage seriesSlug="all" />
      </main>
      <Footer />
    </>
  );
}
