import Link from "next/link";
import { CONTACT } from "@/lib/booking";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function QuickContact() {
  const items = [
    {
      label: "Gọi điện",
      lines: [CONTACT.phoneDisplay],
      href: CONTACT.phoneHref,
      Icon: PhoneIcon,
    },
    {
      label: "WhatsApp / Zalo · Di động",
      lines: [CONTACT.mobileDisplay, "0176-10178768"],
      href: `https://wa.me/${CONTACT.mobileWhatsApp}`,
      Icon: WhatsAppIcon,
    },
    {
      label: "Email",
      lines: [CONTACT.email],
      href: `mailto:${CONTACT.email}`,
      Icon: MailIcon,
      nowrap: true,
    },
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-5">
      {items.map(({ label, lines, href, Icon, nowrap }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex min-h-20 items-center gap-3 rounded-lg border border-border-default bg-white p-4 transition-colors hover:border-brand-gold hover:bg-brand-gold-tint dark:bg-card dark:hover:bg-accent"
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold-tint text-brand-gold-darker group-hover:bg-brand-gold group-hover:text-white transition-colors dark:bg-accent dark:text-primary dark:group-hover:bg-primary dark:group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-bold uppercase tracking-wider text-text-muted">
              {label}
            </span>
            {lines.map((line) => (
              <span
                key={line}
                className={`block text-sm font-bold text-text-strong dark:text-foreground ${
                  nowrap ? "whitespace-nowrap" : "break-words"
                }`}
              >
                {line}
              </span>
            ))}
          </span>
        </Link>
      ))}
    </div>
  );
}
