import Image from "next/image";

const reasons = [
  "Tiết kiệm đến 70% chi phí sưởi ấm và điện dùng hằng tháng",
  "Bán lại điện dư thừa 7,81 Cent/kWh, không mất thuế",
  "Không còn phụ thuộc vào giá khí đốt & dầu",
  "Hỗ trợ tài chính lên đến 70% từ chính phủ Đức",
  "Tăng giá trị bất động sản",
  "Giảm khí thải CO₂ - Bảo vệ môi trường",
];

const enpalReasons = [
  "Công ty hàng đầu tại Đức (Testsieger 2024)",
  "Hệ thống trọn gói: Tư vấn, lắp đặt, đăng ký và bảo trì",
  "Miễn phí đầu tư ban đầu - trả góp linh hoạt",
  "Công nghệ Đức, vận hành từ xa, bảo hành dài hạn",
];

const specialOffers = [
  "Được giảm giá 10 % khi đăng ký qua văn phòng",
  "Hỗ trợ hoàn tất thủ tục xin trợ cấp nhà nước",
  "Đặt lịch hẹn tư vấn miễn phí",
];

function EnpalAwards() {
  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-sm rounded-xl border-4 border-[#0b67ad] bg-white p-5 text-[#0b67ad] shadow-sm">
        <div className="grid grid-cols-[56px_1fr] gap-4">
          <div className="flex items-center justify-center bg-[#0b67ad] px-2 text-sm font-bold text-white [writing-mode:vertical-rl]">
            ID. 40059357
          </div>
          <div>
            <div className="text-4xl font-black tracking-tight">VDE</div>
            <div className="text-2xl font-bold leading-tight">zertifizierte Bauausführung</div>
            <ul className="mt-3 space-y-1 text-xl font-semibold">
              <li>✓ Elektrische Sicherheit und Energieertrag</li>
              <li>✓ Installationsqualität</li>
              <li>✓ Planungskonformität</li>
            </ul>
            <div className="mt-3 text-2xl font-bold">Standardisiertes PV-Kraftwerk</div>
          </div>
        </div>
        <div className="mt-3 text-center text-2xl">VDEinfo.com</div>
      </div>

      <div className="bg-[#0d2f4f] p-5 text-white">
        <div className="mb-4 text-2xl font-bold">Auszeichnungen</div>
        <div className="grid grid-cols-5 gap-3">
          {["TÜV", "CHIP", "WELT", "&", "ntv"].map((item) => (
            <div key={item} className="flex h-16 items-center justify-center bg-white text-xl font-black text-[#0d2f4f]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RenewableEnergyArticle() {
  return (
    <article className="bg-[#e8f0f9] text-black">
      <section className="grid lg:grid-cols-[46%_54%]">
        <div className="flex items-center px-[10%] py-14">
          <div className="mx-auto max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Đầu tư thông minh vào Máy bơm nhiệt & Năng lượng mặt trời
            </h1>
          </div>
        </div>
        <div className="relative min-h-[252px] lg:min-h-[423px]">
          <Image
            src="/images/gallery-07.jpeg"
            alt="Máy bơm nhiệt"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-[48%_52%]">
        <div className="relative min-h-[252px] lg:min-h-[423px]">
          <Image
            src="/images/gallery-08.jpeg"
            alt="Năng lượng mặt trời cho nhà ở"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center px-[10%] py-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Những lý do bạn không nên bỏ lỡ:</h2>
            <ul className="mt-12 list-disc space-y-6 pl-6 text-2xl leading-tight">
              {reasons.map((item) => (
                <li key={item}>
                  {item.includes("70%") ? (
                    <>
                      Tiết kiệm đến <span className="font-bold">70% chi phí</span> sưởi ấm và điện dùng hằng
                      tháng
                    </>
                  ) : item.includes("7,81") ? (
                    <>
                      Bán lại điện dư thừa <span className="font-bold">7,81 Cent/kWh, không mất thuế</span>
                    </>
                  ) : item.includes("Hỗ trợ") ? (
                    <>
                      <span className="font-bold">Hỗ trợ tài chính lên đến 70%</span> từ chính phủ Đức
                    </>
                  ) : item.includes("CO₂") ? (
                    <>
                      Giảm khí thải CO₂ - <span className="font-bold">Bảo vệ môi trường</span>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[10%] py-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_520px]">
          <div className="text-2xl leading-snug">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Tại sao chọn Enpal:</h2>
            <ul className="mt-10 list-disc space-y-5 pl-6">
              {enpalReasons.map((item) => (
                <li key={item}>
                  {item.includes(":") ? (
                    <>
                      <span className="font-bold">{item.split(":")[0]}:</span>
                      {item.slice(item.indexOf(":") + 1)}
                    </>
                  ) : item.includes("hàng đầu") ? (
                    <>
                      Công ty <span className="font-bold">hàng đầu tại Đức</span> (Testsieger 2024)
                    </>
                  ) : item.includes("trả góp") ? (
                    <>
                      Miễn phí đầu tư ban đầu - <span className="font-bold">trả góp linh hoạt</span>
                    </>
                  ) : item.includes("Công nghệ") ? (
                    <>
                      <span className="font-bold">Công nghệ Đức</span>, vận hành từ xa, bảo hành dài hạn
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>

            <h2 className="mt-24 text-4xl font-bold leading-tight sm:text-5xl">Ưu đãi đặc biệt của văn phòng chúng tôi:</h2>
            <ul className="mt-10 list-disc space-y-5 pl-6">
              {specialOffers.map((item) => (
                <li key={item}>
                  {item.includes("10") ? (
                    <>
                      <span className="font-bold">Được giảm giá 10 %</span> khi đăng ký qua văn phòng
                    </>
                  ) : item.includes("thủ tục") ? (
                    <>
                      Hỗ trợ hoàn tất <span className="font-bold">thủ tục xin trợ cấp</span> nhà nước
                    </>
                  ) : (
                    <>
                      Đặt lịch hẹn <span className="font-bold">tư vấn miễn phí</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <EnpalAwards />
        </div>
      </section>
    </article>
  );
}
