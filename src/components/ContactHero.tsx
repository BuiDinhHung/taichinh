import Image from "next/image";
import Link from "next/link";

const qrUrl =
  "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Fbit.ly%2Fvuthebao";

export function ContactHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-black text-white lg:min-h-[760px]">
      <Image
        src="/images/article-03-tu-van-chuyen-nghiep.jpeg"
        alt="Văn phòng tư vấn tài chính Bao Vu The"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/32 to-black/5" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="dvag-container relative flex min-h-[720px] items-center py-12 lg:min-h-[760px]">
        <div className="w-full max-w-[430px] text-white">
          <div className="flex items-center gap-4 text-brand-gold">
            <Image
              src="/images/logo-dark.png"
              alt="taichinh.de"
              width={92}
              height={92}
              className="h-16 w-auto"
            />
            <p className="text-xl font-bold leading-tight">
              Büro für Deutsche
              <br />
              Vermögensberatung
            </p>
          </div>

          <div className="mt-8 space-y-8 text-xl leading-snug">
            <div>
              <h1 className="text-2xl font-bold">Bao Vu The</h1>
              <p className="mt-1 text-lg">Vermögensberater</p>
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
              <Link href="mailto:vuthe@hotmail.de" className="underline underline-offset-4">
                vuthe@hotmail.de
              </Link>
              <br />
              Webseite:{" "}
              <Link href="https://www.taichinh.de" className="underline underline-offset-4">
                www.taichinh.de
              </Link>
            </p>

            <div>
              <p>
                Links & QR Online:
                <br />
                <Link href="https://bit.ly/vuthebao" className="underline underline-offset-4">
                  https://bit.ly/vuthebao
                </Link>
              </p>
              <img
                src={qrUrl}
                alt="QR Online"
                width={88}
                height={88}
                className="mt-4 h-[88px] w-[88px] bg-white p-1"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[7%] top-[31%] hidden rotate-[-8deg] bg-white/88 px-8 py-4 text-2xl font-black text-brand-blue-deep shadow-lg lg:block">
          Hotline: 0176-10178768
        </div>
      </div>
    </section>
  );
}
