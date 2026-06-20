import Image from "next/image";
import Link from "next/link";
import { DocumentCheckIcon, HandEuroIcon, StopwatchIcon } from "./MarketingAssets";

const benefits = [
  {
    icon: HandEuroIcon,
    title: "Điều kiện tốt nhất",
    body: "Chúng tôi giới thiệu các nguồn cung cấp với giá hợp lý, và thân thiện với người tiêu dùng từ các nhà cung cấp uy tín.",
  },
  {
    icon: StopwatchIcon,
    title: "Nhanh chóng và đơn giản",
    body: "Cùng với đối tác, chúng tôi giúp bạn thực hiện việc chuyển đổi nhanh chóng, đơn giản và đảm bảo không gián đoạn cung cấp điện và gas của bạn.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Đảm bảo kế hoạch",
    body: "Thời gian hợp đồng và bảo đảm giá cho 12 hoặc 24 tháng hoàn toàn theo nhu cầu của bạn.",
  },
];

const reasons = [
  "Tiết kiệm đến 70% chi phí sưởi ấm và điện dùng hằng tháng",
  "Bán lại điện dư thừa 7,81 Cent/kWh, không mất thuế",
  "Không còn phụ thuộc vào giá khí đốt & dầu",
  "Hỗ trợ tài chính lên đến 70% từ chính phủ Đức",
  "Tăng giá trị bất động sản",
  "Giảm khí thải CO₂ – Bảo vệ môi trường",
];

const enpalReasons = [
  "Công ty hàng đầu tại Đức (Testsieger 2024)",
  "Hệ thống trọn gói: Tư vấn, lắp đặt, đăng ký và bảo trì",
  "Miễn phí đầu tư ban đầu – trả góp linh hoạt",
  "Công nghệ Đức, vận hành từ xa, bảo hành dài hạn",
];

export function EnergySupplierArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid lg:grid-cols-[54%_46%]">
        <div className="flex items-center bg-[#dff3d8] px-7 py-10 sm:px-12 lg:min-h-[405px] lg:px-[8%]">
          <div className="mx-auto max-w-[620px]">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Nguồn năng lượng Điện, Gas rẻ
            </h1>
            <h2 className="mt-10 text-center text-xl font-bold sm:text-2xl">
              Chuyển đổi nhà cung cấp để tiết kiệm
            </h2>
            <p className="mt-6 text-lg leading-snug">
              Giảm chi phí năng lượng của bạn ngay hôm nay bằng cách đổi nhà cung cấp điện và gas, bạn có thể
              tiết kiệm được hàng trăm euro mỗi năm cho điện sinh hoạt gia đình và hàng ngàn euro cho doanh
              nghiệp.
            </p>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[405px]">
          <Image
            src="/images/gallery-09.jpeg"
            alt="Nguồn năng lượng Điện, Gas rẻ"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 text-center md:grid-cols-3 md:gap-16">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="mx-auto max-w-[290px]">
                <Icon className="mx-auto !h-[105px] !w-[105px]" />
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 leading-snug">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid bg-[#dcebf8] lg:grid-cols-[64%_36%]">
        <div className="flex items-center px-7 py-10 sm:px-12 lg:px-[8%]">
          <div className="max-w-[700px]">
            <h2 className="text-3xl font-bold leading-tight">
              Đầu tư thông minh vào
              <br />
              Máy bơm nhiệt &amp; Năng lượng mặt trời
            </h2>
            <h3 className="mt-10 text-xl font-bold">Những lý do bạn không nên bỏ lỡ:</h3>
            <ul className="mt-5 list-disc pl-5 text-lg leading-snug">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid">
          <div className="relative aspect-[771/353]">
            <Image
              src="/images/gallery-07.jpeg"
              alt="Máy bơm nhiệt"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[771/400]">
            <Image
              src="/images/gallery-08.jpeg"
              alt="Năng lượng mặt trời"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-7 py-9 sm:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-xl font-bold">Tại sao chọn Enpal:</h2>
          <ul className="mt-4 list-disc pl-5 text-lg leading-snug">
            {enpalReasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/5 px-7 py-8 sm:px-12">
        <div className="mx-auto flex max-w-[720px] flex-wrap items-center justify-center gap-7">
          <div className="flex h-28 w-36 flex-col justify-center border-2 border-[#2879b9] bg-white px-3 text-[#176cac]">
            <strong className="text-xl">VDE</strong>
            <span className="text-xs font-bold leading-tight">zertifizierte Bauausführung</span>
            <span className="mt-1 text-[9px]">VDEinfo.com</span>
          </div>
          <div className="w-full max-w-[480px] bg-[#0d2f4f] p-4 text-white">
            <strong>Auszeichnungen</strong>
            <div className="mt-3 grid grid-cols-6 gap-2">
              {["TÜV", "CHIP", "WELT", "&", "TEST", "ntv"].map((award) => (
                <span
                  key={award}
                  className="flex min-h-12 items-center justify-center bg-white px-1 text-center text-xs font-bold text-[#0d2f4f]"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-7 py-12 sm:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-xl font-bold">Ưu đãi đặc biệt của văn phòng chúng tôi:</h2>
          <ul className="mt-5 list-disc pl-5 text-lg leading-snug">
            <li>
              Được giảm giá <strong>10 %</strong> khi đăng ký qua văn phòng
            </li>
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
                Büro für Deutsche
                <br />
                Vermögensberatung
              </p>
            </div>
            <Link
              href="/dat-lich"
              className="inline-flex min-h-14 items-center justify-center bg-brand-gold px-7 font-semibold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt hẹn tư vấn
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
