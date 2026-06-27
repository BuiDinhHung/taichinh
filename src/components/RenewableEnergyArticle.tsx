import Image from "next/image";
import Link from "next/link";

const reasons = [
  "Tiết kiệm đến 70% chi phí sưởi ấm và điện dùng hằng tháng",
  "Bán lại điện dư thừa 7,81 Cent/kWh, không mất thuế",
  "Không còn phụ thuộc vào giá khí đốt & dầu",
  "Hỗ trợ tài chính lên đến 70% từ chính phủ Đức",
  "Tăng giá trị bất động sản",
  "Giảm khí thải CO₂ – Bảo vệ môi trường",
];

const enpalReasons = [
  "Công ty hàng đầu tại Đức ( Testsieger 2024)",
  "Hệ thống trọn gói: Tư vấn, lắp đặt, đăng ký và bảo trì",
  "Miễn phí đầu tư ban đầu – trả góp linh hoạt",
  "Công nghệ Đức, vận hành từ xa, bảo hành dài hạn",
];

export function RenewableEnergyArticle() {
  return (
    <article className="bg-white text-black">
      {/* Section 1: hero — title + list left, 2 stacked images right */}
      <section className="grid bg-[#dcebf8] lg:grid-cols-[64%_36%]">
        <div className="flex items-center px-7 py-10 sm:px-12 lg:px-[8%]">
          <div className="max-w-[700px]">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Đầu tư thông minh vào<br />Máy bơm nhiệt &amp; Năng lượng mặt trời
            </h1>
            <h2 className="mt-10 text-xl font-bold">Những lý do bạn không nên bỏ lỡ:</h2>
            <ul className="mt-5 list-disc pl-5 text-lg leading-snug">
              {reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="relative min-h-[220px]">
            <Image
              src="/images/gallery-07.jpeg"
              alt="Máy bơm nhiệt – Wärmepumpe"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative min-h-[220px]">
            <Image
              src="/images/gallery-08.jpeg"
              alt="Năng lượng mặt trời – Auf die Sonnenseite wechseln"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Tại sao chọn Enpal */}
      <section className="px-7 py-9 sm:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-xl font-bold">Tại sao chọn Enpal:</h2>
          <ul className="mt-4 list-disc pl-5 text-lg leading-snug">
            {enpalReasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: VDE + Auszeichnungen */}
      <section className="border-b border-black/5 px-7 py-8 sm:px-12">
        <div className="mx-auto flex max-w-[760px] flex-wrap items-center justify-center gap-7">
          <Image
            src="/images/vde-certificate.png"
            alt="Chứng nhận VDE – Standardisiertes PV-Kraftwerk"
            width={1439}
            height={1093}
            className="h-28 w-auto object-contain"
          />
          <Image
            src="/images/energy-awards.png"
            alt="Các giải thưởng – Auszeichnungen"
            width={1536}
            height={516}
            className="w-full max-w-[520px] object-contain"
          />
        </div>
      </section>

      {/* Section 4: Ưu đãi đặc biệt */}
      <section className="bg-[#f5f5f5] px-7 py-12 sm:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-xl font-bold">Ưu đãi đặc biệt của văn phòng chúng tôi:</h2>
          <ul className="mt-5 list-disc pl-5 text-lg leading-snug">
            <li>Được giảm giá <strong>10 %</strong> khi đăng ký qua văn phòng</li>
            <li>Hỗ trợ hoàn tất thủ tục xin trợ cấp nhà nước</li>
            <li>Đặt lịch hẹn tư vấn miễn phí</li>
          </ul>

          <div className="mt-10 flex flex-col items-center justify-between gap-7 sm:flex-row">
            <div className="flex items-center gap-5">
              <Image
                src="/images/dvag-emblem.png"
                alt=""
                width={96}
                height={96}
                className="h-20 w-20 object-contain"
              />
              <p className="text-2xl font-bold leading-tight text-brand-gold">
                Büro für Deutsche<br />Vermögensberatung
              </p>
            </div>
            <Link
              href="/dat-lich"
              className="rounded bg-brand-gold px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-gold/90"
            >
              Đặt hẹn tư vấn
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
