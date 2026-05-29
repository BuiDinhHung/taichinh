import Image from "next/image";

const awards = [
  {
    title: "ServiceRating: xuất sắc!",
    body:
      "Các chuyên gia độc lập từ ServiceRating hằng năm đánh giá và kiểm định chất lượng dịch vụ cũng như tư vấn của chúng tôi. Cơ sở cho kết quả “xuất sắc” là một cuộc khảo sát khách hàng mang tính đại diện, các buổi tư vấn thử nghiệm và quá trình phân tích toàn diện các dịch vụ của chúng tôi.",
    image: "/images/badge-servicerating-excellent.jpeg",
    imageAlt: "ServiceRating Testurteil zum Kundenservice exzellent",
    cropped: false,
  },
  {
    title: "Chúng tôi thuộc nhóm “Những nhà vô địch khách hàng tại Đức”",
    body:
      "Danh hiệu “Nhà vô địch khách hàng” được trao cho những doanh nghiệp có mức độ hài lòng của khách hàng đặc biệt cao và mối quan hệ rất tốt với khách hàng. Với tỷ lệ “khách hàng trung thành” vượt mức trung bình cùng điểm số cao nhất ở các tiêu chí như chuyên môn, sự thân thiện, tư vấn và dịch vụ, chúng tôi một lần nữa được vinh danh trong cuộc thi trên toàn quốc.",
    image: "/images/badge-kundenchampions-2026.jpg",
    imageAlt: "Deutschlands Kundenchampions 2026",
    cropped: true,
  },
];

export function AwardsSection() {
  return (
    <section className="bg-[#e9e9e9] py-14 lg:py-16">
      <div className="dvag-container max-w-6xl">
        <div className="space-y-12">
          {awards.map((award) => (
            <article key={award.title} className="grid items-center gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
              <div className="flex justify-center md:justify-start">
                {award.cropped ? (
                  <div className="relative h-24 w-60 overflow-hidden bg-[#e9e9e9]">
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      fill
                      sizes="240px"
                      className="object-cover object-left-bottom"
                    />
                  </div>
                ) : (
                  <Image
                    src={award.image}
                    alt={award.imageAlt}
                    width={160}
                    height={160}
                    className="max-h-40 w-auto"
                  />
                )}
              </div>
              <div>
                <h2 className="text-xl font-normal leading-tight text-black sm:text-2xl">{award.title}</h2>
                <p className="mt-7 max-w-4xl text-base leading-snug text-black">{award.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
