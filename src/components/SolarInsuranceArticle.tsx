import { SolarPanelIcon } from "./MarketingAssets";

const protectedParts = [
  "Mô-đun điện mặt trời",
  "Khung giá mô-đun",
  "Bộ biến tần",
  "Công nghệ điều khiển và điều chỉnh",
  "Đồng hồ đo sản lượng và đồng hồ đo lượng điện đầu vào",
  "Thiết bị bảo vệ chống quá điện áp",
  "Dây cáp điện một chiều và xoay chiều",
  "Hệ thống pin (ắc quy) - có thể lựa chọn thêm",
];

const houseInsuranceRisks = [
  "Hỏa hoạn",
  "Nước từ đường ống",
  "Bão/ Mưa đá",
  "Thiên tai như áp lực tuyết (bao gồm cả tuyết lở trên mái), lũ lụt và động đất",
];

const solarInsuranceRisks = [
  "Lỗi vận hành",
  "Chập điện, quá áp",
  "Phá hoại (vandalismus)",
  "Trộm cắp",
  "Động vật cắn (ví dụ: chuột)",
  "Mất thu nhập do sản lượng điện giảm (tiền từ bán điện lên lưới)",
];

export function SolarInsuranceArticle() {
  return (
    <article className="bg-white text-black">
      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_180px]">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm điện tử cho hệ thống điện mặt trời
            </h1>
            <SolarPanelIcon className="mx-auto h-36 w-36 text-brand-gold lg:h-44 lg:w-44" />
          </div>

          <div className="mt-10 max-w-5xl text-2xl leading-snug">
            <p>
              Mặt trời của bạn được bảo vệ khỏi nhiều mối nguy hiểm (ví dụ: hỏa hoạn, mưa đá). Với Photovoltaik PLUS, bạn có thể mở rộng sự bảo vệ này bằng bảo hiểm toàn diện và bảo hiểm mất thu nhập.
            </p>

            <h2 className="mt-20 text-4xl leading-tight">
              Thông qua Photovoltaik PLUS, các thành phần sau được bảo vệ:
            </h2>
            <ul className="mt-12 list-disc pl-6">
              {protectedParts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl text-2xl leading-snug">
          <h2 className="text-3xl font-bold leading-tight">
            Trường hợp thiệt hại đối với hệ thống điện mặt trời (Photovoltaik):<br />
            Những rủi ro nào thường được bảo hiểm nhà ở hoặc bảo hiểm điện mặt trời chi trả?
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <section>
              <h3 className="text-3xl font-bold">Bảo hiểm nhà ở:</h3>
              <ul className="mt-2 list-disc pl-6">
                {houseInsuranceRisks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-bold">Bảo hiểm hệ thống điện mặt trời:</h3>
              <ul className="mt-2 list-disc pl-6">
                {solarInsuranceRisks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}
