import { BrokenPlateIcon } from "./MarketingAssets";

const glassBenefits = [
  "Thiệt hại vỡ màn hình smartphone (chỉ có trong hợp đồng bảo hiểm tài sản)",
  "Chấp nhận các khoản thanh toán từ bảo hiểm trước đó (chỉ có trong hợp đồng bảo hiểm tài sản)",
  "Bỏ qua việc giảm bồi thường đối với các thiệt hại do sơ suất nghiêm trọng gây ra",
  "Bao gồm các bề mặt bếp nấu ăn bằng kính gốm và các thiết bị điện tử của chúng, bể cá và bể nuôi động vật",
  "Bảo đảm hiệu suất tốt nhất trong 5 năm (chỉ có trong hợp đồng bảo hiểm tài sản)",
  "Nhà kính sử dụng cá nhân có diện tích lên đến 5 m² được bảo hiểm",
];

export function GlassInsuranceArticle() {
  return (
    <article className="bg-[#edf2f7] text-black">
      <section className="px-[10%] py-4 sm:py-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_140px]">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm kính - Glasbruch
            </h1>
            <BrokenPlateIcon className="mx-auto h-24 w-24 text-brand-gold lg:h-28 lg:w-28" />
          </div>

          <div className="mt-6 max-w-5xl text-2xl leading-snug">
            <h2 className="text-3xl font-bold">Vỡ kính – an tâm tuyệt đối</h2>
            <p className="mt-4">
              Bảo hiểm kính hộ gia đình là một sự bổ sung hợp lý cho bảo hiểm tài sản gia đình. Một chiếc điện thoại đắt tiền có thể dễ dàng rơi xuống và màn hình bị vỡ. Trong gia đình, một tấm kính có thể bị vỡ hoặc bếp nấu ăn bằng kính gốm bị hư hỏng. Việc thay thế (bao gồm cả việc lắp kính tạm thời và lắp đặt) có thể rất tốn kém. Bảo hiểm kính hộ gia đình của Generali giúp bảo vệ bạn khỏi rủi ro tài chính này.
            </p>

            <ul className="mt-6 list-disc space-y-1 pl-6">
              {glassBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
