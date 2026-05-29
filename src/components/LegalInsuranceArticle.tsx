const legalBenefits = [
  "Tư vấn pháp lý qua điện thoại và trực tuyến miễn phí",
  "Tư vấn pháp lý phòng ngừa và luật sư tốt nhất trong trường hợp cần bảo vệ pháp lý",
  "Số tiền bảo hiểm không giới hạn ở châu Âu và lên đến 1 triệu Euro trên toàn thế giới",
  "Bảo vệ chống lại việc lạm dụng danh tính trên internet",
  "Flightright - Thực thi quyền lợi hành khách",
  "Công cụ lập kế hoạch (ví dụ: di chúc, ủy quyền y tế) và công cụ lập di chúc",
  "Bảo hiểm cho doanh nghiệp nhỏ với doanh thu hằng năm lên đến 22.000 Euro (không bao gồm bảo vệ pháp lý hợp đồng)",
];

function AdvocardBadge() {
  return (
    <div className="mx-auto flex aspect-[1.55] w-full max-w-sm items-center justify-center rounded-[28px] bg-[#6fbe2b] p-6 text-center text-white shadow-sm">
      <div>
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#6fbe2b]">
          <div className="h-16 w-20 border-b-[6px] border-current">
            <div className="mx-auto h-16 w-1.5 bg-current" />
            <div className="mx-auto -mt-11 h-12 w-16 border-l-[5px] border-r-[5px] border-current [clip-path:polygon(50%_0,0_100%,100%_100%)]" />
          </div>
          <span className="absolute inset-x-[-32px] top-1/2 h-10 -translate-y-1/2 rounded-[50%] border-b-[8px] border-[#5e7383]" />
        </div>
        <p className="mt-7 text-2xl font-bold tracking-wide">ADVOCARD - 360° - PRIVAT</p>
      </div>
    </div>
  );
}

export function LegalInsuranceArticle() {
  return (
    <article className="bg-neutral-100 text-black">
      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Bảo hiểm pháp lý- Rechtsschutzversicherung
          </h1>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[58%_42%]">
            <div className="text-2xl leading-snug">
              <h2 className="text-3xl font-bold">Hỗ trợ pháp lý tối đa trên một thẻ</h2>
              <p className="mt-8">
                Các tranh chấp pháp lý có thể xảy ra ở bất kỳ đâu - dù là khi tham gia giao thông, trong công việc, với tư cách là người thuê/sở hữu, trong cuộc sống hàng ngày hoặc trên internet. ADVOCARD-360°-PRIVAT cung cấp sự bảo vệ toàn diện cho tất cả các lĩnh vực trong cuộc sống - cả offline lẫn online!
              </p>
            </div>
            <AdvocardBadge />
          </div>

          <ul className="mt-14 max-w-6xl list-disc pl-6 text-2xl leading-snug">
            {legalBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
