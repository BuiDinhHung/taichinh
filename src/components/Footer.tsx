import Link from "next/link";
import { copyright, footerColumns } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-surface-soft py-12 text-black">
      <div className="dvag-container grid grid-cols-1 gap-10 md:grid-cols-4">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-base font-bold">{col.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-brand-gold-darker">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-base font-bold">Mảng xã hội</h3>
          <p className="mt-5 text-sm">Facebook</p>
        </div>
      </div>
      <div className="dvag-container mt-10 border-t border-black/10 pt-6 text-xs text-text-muted">
        {copyright}
      </div>
    </footer>
  );
}
