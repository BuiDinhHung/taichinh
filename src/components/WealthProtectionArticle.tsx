import Image from "next/image";
import { FlexibleChoiceIcon, HandEuroIcon, LockIcon } from "./MarketingAssets";

const pillars = [
  {
    icon: HandEuroIcon,
    title: "Tích lũy Tài sản",
    text:
      "Hãy lập kế hoạch cho kỳ hưu trí của bạn ngay từ sớm. Nhờ vào thanh trượt thông minh, bạn có thể chủ động tham gia xác định chiến lược đầu tư của mình.",
  },
  {
    icon: FlexibleChoiceIcon,
    title: "Bảo đảm khi mất Sức lao động",
    text:
      "Sức lao động là tài sản lớn nhất của bạn. Hãy đảm bảo rằng bạn được bảo vệ vững chắc và gìn giữ giá trị từ công sức lao động của mình.",
  },
  {
    icon: LockIcon,
    title: "Bảo vệ trước rủi ro",
    text:
      "Hỗ trợ tài chính trong trường hợp mắc bệnh hiểm nghèo, các lựa chọn chăm sóc dài hạn, cùng quyền lợi tử vong có thể tùy chọn theo nhu cầu cá nhân nhằm mang lại sự an tâm cho những người phụ thuộc còn lại.",
  },
];

export function WealthProtectionArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[53%_47%]">
        <div className="flex items-center justify-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl lg:text-center">
              Kế hoạch Tích lũy Tài sản<br />& Đảm bảo An toàn
            </h1>
            <p className="mt-5 text-xl leading-snug sm:text-2xl">
              Với sản phẩm bảo hiểm linh hoạt này, quý khách có thể xây dựng khối tài sản dài hạn cho mình. Kết hợp cùng một gói giải pháp toàn diện - bao gồm quyền lợi bảo vệ trước rủi ro mất khả năng lao động và quyền lợi cho người thụ hưởng, tùy chọn chăm sóc dài hạn (hoặc niên kim chăm sóc dài hạn), cùng sự bảo vệ trước các bệnh hiểm nghèo - Generali Deutschland Lebensversicherung mang đến sự che chở và bảo vệ cho quý khách ở mọi giai đoạn của cuộc đời.
            </p>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-[520px]">
          <Image
            src="/images/article-02-tich-luy-fondspolice.jpeg"
            alt="Gia đình trong kế hoạch tích lũy tài sản và bảo vệ tài chính"
            fill
            priority
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-[10%] py-16 text-center sm:py-20">
        <p className="text-3xl leading-tight">Một sự kết hợp khéo léo</p>
        <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl">
          Lập kế hoạch Tích lũy và Bảo vệ tài chính trong cùng một khái niệm
        </h2>
      </section>

      <section className="px-[10%] pb-16">
        <div className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <Icon className="h-36 w-36 text-brand-gold" />
                <h3 className="mt-5 text-3xl font-bold leading-tight">{pillar.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-2xl leading-snug">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-20 pt-4">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-3xl space-y-9 text-base leading-[1.3] lg:translate-x-20 lg:text-[20px]">
          <div>
            <h2 className="text-xl font-bold leading-[1.15] lg:text-[26px]">
              Tiết kiệm dài hạn với lãi suất cao, linh hoạt, an toàn và có giá trị thế chấp để vay tiền mua bất động sản
            </h2>
            <div className="mt-6 space-y-0">
              <p>• Đầu tư toàn bộ hoặc một phần tiền đóng vào quỹ đầu tư (Fonds)</p>
              <p>• Được phép chọn 10 trong 50 Quỹ (Fonds) và có thể thay đổi Quỹ</p>
              <p>• Thay đổi mức đóng hàng tháng, hoặc đóng thêm bất kỳ</p>
              <p>• Cho tạm ứng đến 8 lần trong thời gian hợp đồng</p>
              <p>• Lấy tiền ra bất cứ lúc nào</p>
              <p>• Có thể lấy bằng vàng</p>
              <p>• Có thể lấy hàng tháng dưới dạng lương hưu, một lần hoặc kết hợp cả hai</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold leading-[1.15] lg:text-[26px]">
              Kết hợp linh hoạt với các giải pháp tối ưu để đảm bảo quyền lợi không bị ảnh hưởng khi rủi ro xảy ra trong đời sống như:
            </h2>
            <div className="mt-6 space-y-0">
              <p>• Mất sức lao động</p>
              <p>• Mắc bệnh hiểm nghèo</p>
              <p>• Tình trạng cần chăm sóc</p>
              <p>• Trường hợp rủi ro</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
