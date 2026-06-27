import { HouseCycleIcon } from "./MarketingAssets";

const homeCoverages = [
  "Quyền lợi vô hạn mà không cần tính toán phức tạp về số tiền bảo hiểm cho các ngôi nhà một và hai gia đình",
  "Bồi thường đầy đủ ngay cả trong trường hợp thiệt hại do sơ suất nghiêm trọng gây ra",
  "Bao gồm chi phí phát sinh từ các yêu cầu của cơ quan chức năng",
  "Chi phí dọn dẹp graffiti không giới hạn",
  "Gói bảo hiểm ống dẫn với các ống thoát nước trong và ngoài khuôn viên bảo hiểm (tùy chọn)",
  "Bảo hiểm cho các công trình phụ đến 50m²",
  "Chi phí xác định vị trí rò rỉ khi nghi ngờ có thiệt hại do nước dẫn (nếu được thống nhất với Generali)",
  "Chấp nhận các khoản thanh toán từ bảo hiểm trước đó (chỉ có trong hợp đồng bảo hiểm tài sản)",
  "Bảo đảm hiệu suất tốt nhất trong 5 năm (chỉ có trong hợp đồng bảo hiểm tài sản)",
];

export function HomeBuildingInsuranceArticle() {
  return (
    <article className="bg-brand-gold-tint text-black">
      <section className="px-[10%] py-4 sm:py-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_140px]">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm nhà đất –<br />Gebäude Grundstück Versicherung
            </h1>
            <HouseCycleIcon className="mx-auto h-24 w-24 text-brand-gold lg:h-28 lg:w-28" />
          </div>

          <div className="mt-6 max-w-6xl text-2xl leading-snug">
            <h2 className="text-3xl font-bold">Bảo vệ cho ngôi nhà của bạn</h2>
            <p className="mt-6">
              Nhiều người đầu tư tất cả thành quả của cả cuộc đời làm việc để thực hiện ước mơ sở hữu ngôi nhà riêng. Vì vậy, ngôi nhà thường là tài sản quý giá nhất. Một vụ hỏa hoạn có thể phá hủy hoàn toàn tài sản này. Đó là lý do bạn nên bảo vệ tài sản nhà ở của mình một cách vô hạn thông qua bảo hiểm nhà ở của Generali.
            </p>

            <ul className="mt-4 list-disc pl-6">
              {homeCoverages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
