import Image from "next/image";
import Link from "next/link";

export function AboutContactSection() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="dvag-container grid gap-6 sm:gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="max-w-[420px] text-brand-blue-deep lg:max-w-none">
          <Image
            src="/images/logo-dark.png"
            alt="taichinh.de"
            width={300}
            height={78}
            className="h-auto w-[150px] max-w-full sm:w-[190px]"
          />
          <p className="mt-2.5 text-sm font-bold leading-tight text-brand-gold sm:mt-3 sm:text-base">
            Büro für Deutsche
            <br />
            Vermögensberatung
          </p>

          <div className="mt-5 space-y-3 text-[0.86rem] leading-relaxed sm:mt-7 sm:space-y-4 sm:text-sm sm:leading-snug">
            <div>
              <h2 className="text-[0.95rem] font-bold sm:text-base">Bao Vu The</h2>
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

            <div className="flex flex-col gap-3 min-[380px]:flex-row min-[380px]:items-start">
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
                className="h-auto w-20 shrink-0"
              />
            </div>
          </div>
        </aside>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-gold-tint sm:aspect-[16/9]">
          <Image
            src="/images/pdf-team-office.jpeg"
            alt="Đội ngũ tư vấn tài chính đa diện"
            fill
            sizes="(min-width: 1440px) 984px, (min-width: 1024px) calc(100vw - 440px), 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
