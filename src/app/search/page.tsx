import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = {
  title: "Tìm kiếm - taichinh.de",
  description: "Tìm kiếm bài viết và trang nội dung trên taichinh.de.",
};

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        <section className="bg-surface py-10 lg:py-14">
          <div className="dvag-container">
            <header className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
                Tìm kiếm
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-strong sm:text-4xl lg:text-5xl">
                Kết quả tìm kiếm
              </h1>
            </header>
            <Suspense fallback={<p className="mt-8 text-text-muted">Đang tìm kiếm...</p>}>
              <SearchResults />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
