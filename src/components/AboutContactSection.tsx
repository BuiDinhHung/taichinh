import Image from "next/image";
import Link from "next/link";

export function AboutContactSection() {
  return (
    <section className="bg-white">
      <div className="grid min-h-[420px] lg:grid-cols-[2fr_3fr]">
        <aside
          className="flex flex-col justify-center py-10 lg:py-14"
          style={{ paddingLeft: "clamp(1rem, 5vw, 5rem)", paddingRight: "clamp(1rem, 3vw, 3rem)" }}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/images/dvag-emblem.png"
              alt="DVAG Emblem"
              width={80}
              height={80}
              className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
            />
            <p className="text-base font-bold leading-snug text-brand-gold sm:text-lg">
              Büro für Deutsche
              <br />
              Vermögensberatung
            </p>
          </div>

          <div className="mt-8 space-y-4 text-[0.88rem] leading-relaxed text-brand-blue-deep sm:text-sm">
            <div>
              <h2 className="text-[0.95rem] font-bold text-brand-blue-deep sm:text-base">Bao Vu The</h2>
              <p>Vermögensberater</p>
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
              Mail:{" "}
              <a href="mailto:bao.vu-the.3625100@dvag.de" className="hover:underline">
                bao.vu-the.3625100@dvag.de
              </a>
              <br />
              Webseite:{" "}
              <a href="https://www.taichinh.de" className="hover:underline">
                www.taichinh.de
              </a>
            </p>

            <div className="flex flex-col gap-3 min-[380px]:flex-row min-[380px]:items-start">
              <div className="min-w-0">
                <p>Links &amp; QR Online:</p>
                <Link href="https://bit.ly/vuthebao" className="break-all underline hover:text-brand-gold-darker">
                  https://bit.ly/vuthebao
                </Link>
              </div>
              <Image
                src="/images/qr-vuthebao.png"
                alt="QR https://bit.ly/vuthebao"
                width={112}
                height={112}
                className="h-auto w-20 shrink-0"
              />
            </div>
          </div>
        </aside>

        <div className="relative min-h-[280px] lg:min-h-full">
          <Image
            src="/images/advisor-dvag-banner.jpeg"
            alt="Tư vấn viên Vũ Thế Bảo - Büro für Deutsche Vermögensberatung"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
