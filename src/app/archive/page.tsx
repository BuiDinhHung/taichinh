import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchiveList } from "@/components/ArchiveList";

export const metadata: Metadata = {
  title: "Tin mới - taichinh.de",
  description: "Tin mới, blog và các bài viết đáng đọc trên taichinh.de.",
};

export default function ArchivePage() {
  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        <section className="py-8 lg:py-10">
          <div className="dvag-container">
            <header className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Tin mới
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-text-strong dark:text-foreground sm:text-3xl">
                Tin mới và bài viết đáng đọc
              </h1>
            </header>
            <ArchiveList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
