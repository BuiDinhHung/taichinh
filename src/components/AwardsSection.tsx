import Image from "next/image";

const awards = [
  {
    title: "ServiceRating: Xuất sắc!",
    body:
      "Các chuyên gia độc lập từ ServiceRating hằng năm đánh giá và kiểm định chất lượng dịch vụ cũng như tư vấn của chúng tôi. Cơ sở cho kết quả xuất sắc là một cuộc khảo sát khách hàng mang tính đại diện, các buổi tư vấn thử nghiệm và quá trình phân tích toàn diện các dịch vụ của chúng tôi.",
    image: "/images/image_new/service-rating-excellent.jpeg",
    imageAlt: "ServiceRating Testurteil zum Kundenservice exzellent",
  },
  {
    title: "Chúng tôi thuộc nhóm “Những nhà vô địch khách hàng tại Đức”",
    body:
      "Danh hiệu Nhà vô địch khách hàng được trao cho những doanh nghiệp có mức độ hài lòng của khách hàng đặc biệt cao và mối quan hệ rất tốt với khách hàng. Với tỷ lệ khách hàng trung thành vượt mức trung bình cùng điểm số cao nhất ở các tiêu chí như chuyên môn, sự thân thiện, tư vấn và dịch vụ, chúng tôi một lần nữa được vinh danh trong cuộc thi trên toàn quốc.",
    image: "/images/image_new/badge-kundenchampions-2026.jpeg",
    imageAlt: "Deutschlands Kundenchampions 2026",
  },
];

export function AwardsSection() {
  return (
    <section className="bg-[#e9e9e9] py-12 lg:py-14">
      <div className="dvag-container">
        <div className="space-y-10">
          {awards.map((award) => (
            <article key={award.title} className="grid items-center gap-7 md:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  width={160}
                  height={160}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <div>
                <h2 className="text-base font-normal leading-tight text-black sm:text-lg">{award.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-black">{award.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
