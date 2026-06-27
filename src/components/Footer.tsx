import Link from "next/link";
import Image from "next/image";
import { copyright, footerColumns } from "@/lib/content";
import { CONTACT } from "@/lib/booking";
import { FacebookIcon, PhoneIcon, WhatsAppIcon, MailIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-[#f5f2eb] text-[#333]">
      <div className="dvag-container py-8 sm:py-12 lg:py-16">
        {/* Mobile: stacked brand + 2-col nav. Desktop: single flex row (lg:contents). */}
        <div className="lg:mx-auto lg:flex lg:max-w-5xl lg:justify-between lg:gap-8">
          {/* Brand + contact column */}
          <div className="lg:max-w-[280px]">
            <Image
              src="/images/logo-dark.png"
              alt="taichinh.de"
              width={200}
              height={48}
              className="h-auto w-[140px]"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#555]">
              Tư vấn tài chính chuyên nghiệp cho
              <br />
              cộng đồng người Việt tại Đức.
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#666]">
              <Link
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-[#111]"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-brand-gold">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                +49 30-4268859
              </Link>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-brand-gold">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span className="flex flex-wrap items-center gap-x-2">
                  <Link
                    href={`https://wa.me/${CONTACT.mobileWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#111]"
                  >
                    0176-10178768
                  </Link>
                  <span className="text-[#bbb]">/</span>
                  <Link
                    href={`https://wa.me/${CONTACT.landlineWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#111]"
                  >
                    030-4268859
                  </Link>
                </span>
              </div>
              <Link
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 transition-colors hover:text-[#111]"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-brand-gold">
                  <MailIcon className="h-4 w-4" />
                </span>
                <span className="break-all">{CONTACT.email}</span>
              </Link>
              <Link
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[#111]"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-brand-gold">
                  <FacebookIcon className="h-4 w-4" />
                </span>
                Taichinh.de
              </Link>
            </div>
          </div>

          {/* Nav columns — 2-col grid on mobile, dissolves into flex row on desktop */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-black/10 pt-8 sm:grid-cols-3 lg:mt-0 lg:gap-8 lg:border-0 lg:pt-0 lg:contents">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold-darker">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 lg:mt-5">
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
        </div>
      </div>
    </footer>
  );
}
