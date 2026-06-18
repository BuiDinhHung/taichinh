import Link from "next/link";
import Image from "next/image";
import { copyright, footerColumns } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#f5f2eb] text-[#333]">
      <div className="dvag-container py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand + contact column — left */}
          <div className="lg:max-w-[280px] lg:shrink-0">
            <Image
              src="/images/logo-dark.png"
              alt="taichinh.de"
              width={200}
              height={48}
              className="h-auto w-[160px]"
            />
            <p className="mt-5 text-sm leading-relaxed text-[#555]">
              Tư vấn tài chính chuyên nghiệp cho cộng đồng người Việt tại Đức.
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-[#666]">
              <p>Tel: +49 30-4268859</p>
              <p>WhatsApp: 0176-10178768</p>
              <p>bao.vu-the.3625100@dvag.de</p>
            </div>
          </div>

          {/* Nav columns — right */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-12">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold-darker">
                  {col.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#555] transition-colors hover:text-[#111]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="dvag-container flex flex-wrap items-center justify-center gap-6 py-5 text-xs text-[#999]">
          <p>{copyright}</p>
          <div className="flex gap-5">
            <Link href="/page/impressum" className="transition-colors hover:text-[#555]">
              Impressum
            </Link>
            <Link href="https://hashnode.com/privacy-policy" className="transition-colors hover:text-[#555]">
              Bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
