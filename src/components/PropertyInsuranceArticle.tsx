import Image from "next/image";
import { SofaIcon } from "./MarketingAssets";

const houseBenefits = [
  "Các quyền lợi vô hạn cho thiệt hại do hỏa hoạn, trộm cắp, nước dẫn, bão/hail cũng như các mối nguy hiểm thiên nhiên khác (ví dụ: lũ lụt, ngập lụt, động đất)",
  "Chấp nhận các khoản thanh toán từ bảo hiểm trước đó (chỉ có trong hợp đồng bảo hiểm tài sản)",
  "Bảo đảm hiệu suất tốt nhất trong 5 năm (chỉ có trong hợp đồng bảo hiểm tài sản)",
  "Bỏ qua việc giảm bồi thường đối với các thiệt hại do sơ suất nghiêm trọng gây ra",
  "Thư bảo vệ nhà và căn hộ bao gồm hỗ trợ CNTT và trung tâm khẩn cấp Smart Home (miễn phí trong hợp đồng bảo hiểm tài sản) và thư bảo vệ tài khoản và tài chính (có thể lựa chọn thêm)",
  "Bảo vệ chống trộm xe đạp: bảo hiểm cho tất cả các xe đạp và xe đạp điện nhỏ (Pedelecs không yêu cầu bảo hiểm) trong hộ gia đình, không giới hạn thời gian và không có giới hạn về số tiền",
];

const leisureItems = [
  "Chụp ảnh và quay phim",
  "Nhạc cụ",
  "Cưỡi ngựa",
  "Lặn",
  "Câu cá",
  "Golf",
  "Súng săn và súng thể thao",
];

export function PropertyInsuranceHero() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[500px] lg:grid-cols-[49%_51%]">
        <div className="flex items-center bg-[#f7f4e8] px-[10%] py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm tài sản
            </h1>
            <h2 className="mt-12 text-center text-3xl font-bold leading-tight lg:text-4xl">
              Giải pháp bảo vệ toàn diện tối ưu
            </h2>
            <p className="mt-20 text-2xl leading-snug">
              Gói bảo hiểm bảo toàn tài sản (gọi tắt là VSP) của đối tác Generali mang đến giải pháp bảo vệ toàn diện vượt trội cho việc bảo vệ tài sản cá nhân. Các quyền lợi được phối hợp hoàn hảo với nhau. Tùy theo sự kết hợp, bạn có thể nhận được mức giảm giá hấp dẫn.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[500px]">
          <Image
            src="/images/gallery-02.jpeg"
            alt="Bảo hiểm tài sản"
            fill
            priority
            sizes="(min-width: 1024px) 51vw, 100vw"
            className="scale-[1.08] object-contain object-center"
          />
        </div>
      </section>
    </article>
  );
}

export function PropertyInsuranceBody() {
  return (
    <article className="bg-white text-black">
      <section className="bg-neutral-100 px-[10%] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_180px]">
            <h2 className="text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-left">
              Bảo hiểm tài sản - Hausratversicherung
            </h2>
            <SofaIcon className="mx-auto h-36 w-36 text-brand-gold lg:h-44 lg:w-44" />
          </div>

          <div className="mt-6 max-w-6xl text-2xl leading-snug">
            <h3 className="text-3xl font-bold">Bảo vệ vô hạn cho tài sản của bạn</h3>
            <p className="mt-4">
              Điều gì sẽ xảy ra nếu bạn mất tất cả vì một vụ hỏa hoạn hoặc trộm cắp? Bảo hiểm tài sản gia đình của Generali sẽ bảo vệ bạn khỏi những mối nguy hiểm như vậy và những nguy cơ khác – và điều này được thực hiện với mức bảo vệ vô hạn, thường xuyên.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6">
              {houseBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-[10%] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl text-2xl leading-snug">
          <h2 className="text-3xl font-bold">
            Các quyền lợi mới Freizeit Plus, Fahrrad Plus và Hausrat Optimal XXL trong VSP:
          </h2>
          <p className="mt-4">
            Với hai thành phần mới Freizeit Plus và Fahrrad Plus, bạn có thể mở rộng bảo vệ tài sản gia đình trong VSP cho xe đạp và thiết bị giải trí của mình, bao gồm nhiều mối nguy hiểm khác. Điều này mang lại cho bạn sự bảo vệ bảo hiểm gần như toàn diện với rất ít ngoại lệ.
          </p>

          <div className="mt-6 grid gap-x-10 gap-y-4 lg:grid-cols-[180px_1fr]">
            <h3 className="text-3xl font-bold">Freizeit Plus:</h3>
            <div>
              <p>
                Với thành phần Freizeit Plus, bạn mở rộng bảo vệ tài sản gia đình cho các thiết bị giải trí, thể thao và sở thích của mình khỏi sự hư hỏng, thiệt hại và mất mát. Thành phần này bao gồm các thiết bị từ các lĩnh vực sau:
              </p>
              <ul className="mt-4 list-disc pl-6">
                {leisureItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="text-3xl font-bold">Fahrrad Plus:</h3>
            <p>
              Với thành phần Fahrrad Plus, bạn bảo hiểm cho tất cả các xe đạp trong hộ gia đình và các xe đạp điện nhỏ (Pedelecs không yêu cầu bảo hiểm) bổ sung chống lại sự hư hỏng, thiệt hại và mất mát do tác động bên ngoài, với mức bồi thường lên đến 500 € cho mỗi sự cố.
            </p>

            <h3 className="text-3xl font-bold">Hausrat Optimal XXL:</h3>
            <p>
              Thành phần Optimal XXL đi xa hơn một bước nữa và cung cấp bảo vệ vô hạn cho tất cả các vật dụng trong gia đình, không có các nguy hiểm được xác định, chỉ với một vài ngoại lệ. Các quyền lợi từ các thành phần Freizeit Plus và Fahrrad Plus đã được bao gồm trong thành phần Hausrat Optimal XXL với mức bảo vệ vô hạn.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export function PropertyInsuranceArticle() {
  return (
    <>
      <PropertyInsuranceHero />
      <PropertyInsuranceBody />
    </>
  );
}
