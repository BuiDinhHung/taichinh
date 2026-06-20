import Image from "next/image";
import Link from "next/link";
import { kloppContent } from "@/lib/content";

export function KloppSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="dvag-container grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-14">
        <div className="min-w-0 text-brand-blue-deep">
          <div className="mb-7 flex flex-col items-start gap-3">
            <Image
              src="/images/logo-dark.png"
              alt="taichinh.de"
              width={300}
              height={78}
              className="h-auto w-[280px] max-w-full sm:w-[320px]"
            />
            <p className="text-2xl font-bold leading-tight text-brand-gold sm:text-3xl">
              Büro für Deutsche
              <br />
              Vermögensberatung
            </p>
          </div>
          <h2 className="text-3xl font-bold text-brand-blue-deep sm:text-4xl">Bao Vu The</h2>
          <p className="mt-1 text-lg sm:text-xl">Vermögensberater</p>
          <div className="mt-7 space-y-5 text-lg leading-snug">
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
            <p>
              Links & QR Online:
              <br />
              <Link href="https://bit.ly/vuthebao" className="underline">
                https://bit.ly/vuthebao
              </Link>
            </p>
          </div>
          <Link
            href={kloppContent.cta.href}
            className="mt-7 inline-flex bg-brand-gold px-5 py-3 text-sm font-bold text-white hover:bg-brand-gold-dark"
          >
            {kloppContent.cta.label}
          </Link>
        </div>

        <div className="min-w-0 justify-self-center lg:justify-self-stretch">
          <h2 className="mb-7 text-center text-3xl font-bold text-brand-gold sm:text-4xl">
            {kloppContent.headline}
          </h2>
          <div className="relative aspect-[16/9] w-full max-w-[1240px] overflow-hidden bg-brand-gold-tint xl:max-w-[1320px]">
            <Image
              src={kloppContent.image.desktop}
              alt={kloppContent.image.alt}
              fill
              sizes="(min-width: 1280px) 1320px, (min-width: 1024px) calc(100vw - 460px), 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
