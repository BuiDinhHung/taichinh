import Image from "next/image";
import Link from "next/link";

export function AboutContactSection() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="dvag-container grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="text-brand-blue-deep">
          <Image
            src="/images/logo-dark.png"
            alt="taichinh.de"
            width={300}
            height={78}
            className="h-auto w-[220px] max-w-full"
          />
          <p className="mt-3 text-lg font-bold leading-tight text-brand-gold">
            Büro für Deutsche
            <br />
            Vermögensberatung
          </p>

          <div className="mt-8 space-y-5 text-[17px] leading-snug">
            <div>
              <h2 className="text-2xl font-bold">Bao Vu The</h2>
              <p className="mt-1">Vermögensberater</p>
            </div>

            <p>
              Proskauer Str. 13
              <br />
              10247 Berlin
            </p>

            <p>
              Tel.: +49 30-4268859
              <br />
              Mobil: 0176-10178768
              <br />
              WhatsApp: 0176-10178768
            </p>

            <p>
              Mail: bao.vu-the.3625100@dvag.de
              <br />
              Webseite: www.taichinh.de
            </p>

            <div className="flex items-start gap-4">
              <div className="min-w-0">
                <p>Links & QR Online:</p>
                <Link href="https://bit.ly/vuthebao" className="break-words underline">
                  https://bit.ly/vuthebao
                </Link>
              </div>
              <Image
                src="/images/qr-vuthebao.png"
                alt="QR Online https://bit.ly/vuthebao"
                width={112}
                height={112}
                className="h-auto w-24 shrink-0"
              />
            </div>
          </div>

          <Link
            href="/dat-lich"
            className="mt-7 inline-flex min-h-12 items-center justify-center whitespace-nowrap bg-brand-gold px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
          >
            Đặt lịch hẹn tư vấn
          </Link>
        </aside>

        <div className="min-w-0">
          <h2 className="mb-5 text-center text-3xl font-bold text-brand-gold sm:text-4xl">
            Tư vấn tài chính đa diện
          </h2>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[820px] overflow-hidden bg-brand-gold-tint">
            <Image
              src="/images/pdf-team-office.jpeg"
              alt="Đội ngũ tư vấn tài chính đa diện"
              fill
              sizes="(min-width: 1280px) 1180px, (min-width: 1024px) calc(100vw - 430px), 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
