import Image from "next/image";

const travelTypes = [
  {
    title: "1. Bảo hiểm y tế khi đi nước ngoài",
    body: "Đây là loại bảo hiểm quan trọng đối với cả người tham gia bảo hiểm y tế công và bảo hiểm y tế tư. Ví dụ, bảo hiểm có thể chi trả chi phí vận chuyển người bệnh từ nước ngoài về nước. Đặc biệt nên mua khi đi du lịch ngoài Liên minh châu Âu (EU).",
  },
  {
    title: "2. Bảo hiểm hủy chuyến đi",
    body: "Loại bảo hiểm này hoàn trả chi phí hủy chuyến trong những trường hợp như mắc một số bệnh nhất định hoặc gặp tai nạn. Rất phù hợp nếu bạn đặt tour sớm hoặc có chuyến đi với chi phí cao.",
  },
  {
    title: "3. Bảo hiểm gián đoạn chuyến đi",
    body: "Bảo hiểm này có thể chi trả các chi phí phát sinh khi buộc phải kết thúc chuyến đi sớm, chẳng hạn như chi phí vé máy bay về nước. Đây là lựa chọn hợp lý nếu bạn muốn bảo vệ khoản chi phí lớn đã bỏ ra cho chuyến đi.",
  },
  {
    title: "4. Bảo hiểm hành lý",
    body: "Nếu hành lý bị thất lạc, bị đánh cắp hoặc hư hỏng, bảo hiểm sẽ bồi thường theo điều khoản hợp đồng. Loại bảo hiểm này đặc biệt hữu ích khi bạn mang theo nhiều đồ có giá trị.",
  },
];

const travelReasons = [
  "Với gói bảo hiểm phù hợp, du khách có thể yên tâm tận hưởng kỳ nghỉ hơn.",
  "Nỗi lo về những rủi ro tài chính do các sự cố bất ngờ sẽ được giảm xuống mức tối thiểu.",
];

export function TravelInsuranceArticle() {
  return (
    <article
      id="bao-hiem-du-lich"
      className="bg-white text-black scroll-mt-[calc(var(--header-height)+1rem)]"
    >
      {/* Hero section */}
      <section className="px-[10%] py-4 sm:py-5">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Bảo hiểm du lịch - Reiseversicherung
          </h1>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[60%_40%]">
            <div className="compact-allow-grow text-2xl italic leading-snug">
              <p>
                Ai cũng mong muốn có một kỳ nghỉ thư giãn và không gặp căng thẳng. Để điều đó trở thành hiện thực, việc mua bảo hiểm du lịch có thể là một lựa chọn rất hữu ích.
              </p>
              <p>
                Các quyền lợi không chỉ cho các chuyến du lịch trong nước Đức mà còn cho khắp châu Âu và trên toàn thế giới. Bảo hiểm du lịch giúp bảo vệ bạn trước những tổn thất tài chính do các sự cố bất ngờ xảy ra trước, trong và sau chuyến đi.
              </p>
              <p className="mt-5">
                Dưới đây là những loại bảo hiểm quan trọng mà mọi người nên cân nhắc trước mỗi chuyến đi.
              </p>
            </div>
            <Image
              src="/images/bao-hiem-du-lich-doc.png"
              alt="Bảo hiểm du lịch"
              width={900}
              height={1100}
              className="mx-auto h-auto w-auto max-h-[280px] object-contain sm:max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Four common types */}
      <section className="px-[10%] py-4 sm:py-5">
        <div className="mx-auto max-w-7xl text-2xl leading-snug">
          <h2 className="text-3xl font-bold">Bốn loại bảo hiểm du lịch phổ biến nhất</h2>
          <p className="mt-4">
            Nếu muốn tránh các khoản chi phí lớn ngoài dự kiến, bạn nên lưu ý bốn loại bảo hiểm sau:
          </p>

          <div className="mt-6 space-y-5">
            {travelTypes.map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why buy travel insurance */}
      <section className="px-[10%] py-4 sm:py-5">
        <div className="mx-auto max-w-7xl text-2xl leading-snug">
          <h2 className="text-3xl font-bold">Vì sao nên mua bảo hiểm du lịch?</h2>
          <p className="mt-4">
            Loại bảo hiểm và phạm vi bảo hiểm phù hợp luôn phụ thuộc vào hoàn cảnh và nhu cầu của từng người. Tuy nhiên, có nhiều lý do để cân nhắc mua bảo hiểm du lịch:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {travelReasons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
