import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { EmbeddedScrollbarMode } from "@/components/EmbeddedScrollbarMode";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "taichinh.de – Tư vấn chuyên nghiệp tài chính của bạn",
  description:
    "Trang taichinh.de cung cấp thông tin chính xác và cập nhật về Đầu tư – Tiết kiệm, Bảo hiểm, Quỹ xây dựng, Ngân hàng và Năng lượng dành cho cộng đồng người Việt tại Đức.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#d0d0d0] text-foreground font-sans">
        <div className="relative mx-auto flex min-h-full w-full max-w-[1440px] flex-col bg-background shadow-[0_0_48px_rgba(0,0,0,0.10)]">
          <EmbeddedScrollbarMode />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
