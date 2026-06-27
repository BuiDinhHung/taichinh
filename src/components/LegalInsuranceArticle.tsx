import Image from "next/image";

const legalBenefits = [
  "Tư vấn pháp lý qua điện thoại và trực tuyến miễn phí",
  "Tư vấn pháp lý phòng ngừa và luật sư tốt nhất trong trường hợp cần bảo vệ pháp lý",
  "Số tiền bảo hiểm không giới hạn ở châu Âu và lên đến 1 triệu Euro trên toàn thế giới",
  "Bảo vệ chống lại việc lạm dụng danh tính trên internet",
  "Flightright – Thực thi quyền lợi hành khách",
  "Công cụ lập kế hoạch (ví dụ: di chúc, ủy quyền y tế) và công cụ lập di chúc",
  "Bảo hiểm cho doanh nghiệp nhỏ với doanh thu hàng năm lên đến 22.000 Euro (không bao gồm bảo vệ pháp lý hợp đồng)",
];

function AdvocardBadge() {
  return (
    <Image
      src="/images/advocard-360-private.jpeg"
      alt="ADVOCARD 360 PRIVAT"
      width={1535}
      height={1024}
      className="mx-auto h-auto w-full max-w-sm object-contain"
    />
  );
}

export function LegalInsuranceArticle() {
  return (
    <article className="text-black">
      {/* Hero section - light blue */}
      <section className="bg-[#e8f0f9] px-[10%] py-4 sm:py-5">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Bảo hiểm pháp lý- Rechtsschutzversicherung
          </h1>

          <div className="mt-4 grid items-start gap-12 lg:grid-cols-[58%_42%]">
            <div className="text-2xl leading-snug">
              <h2 className="text-3xl font-bold">Hỗ trợ pháp lý tối đa trên một thẻ</h2>
              <p className="mt-4">
                Các tranh chấp pháp lý có thể xảy ra ở bất kỳ đâu – dù là khi tham gia giao thông, trong công việc, với tư cách là người thuê/sở hữu, trong cuộc sống hàng ngày hoặc trên internet. ADVOCARD-360°-PRIVAT cung cấp sự bảo vệ toàn diện cho tất cả các lĩnh vực trong cuộc sống – cả offline lẫn online!
              </p>
            </div>
            <AdvocardBadge />
          </div>

          <ul className="mt-2 max-w-6xl list-disc pl-6 text-2xl leading-snug space-y-3">
            {legalBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
