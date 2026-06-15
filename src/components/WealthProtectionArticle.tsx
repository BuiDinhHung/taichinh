import Image from "next/image";
import Link from "next/link";
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
            <p className="mt-10 text-xl leading-snug sm:text-2xl">
              Với sản phẩm bảo hiểm linh hoạt này, quý khách có thể xây dựng khối tài sản dài hạn cho mình. Kết hợp cùng một gói giải pháp toàn diện - bao gồm quyền lợi bảo vệ trước rủi ro mất khả năng lao động và quyền lợi cho người thụ hưởng, tùy chọn chăm sóc dài hạn (hoặc niên kim chăm sóc dài hạn), cùng sự bảo vệ trước các bệnh hiểm nghèo - Generali Deutschland Lebensversicherung mang đến sự che chở và bảo vệ cho quý khách ở mọi giai đoạn của cuộc đời.
            </p>
            <Link
              href="/dat-lich"
              className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-3 text-xl font-semibold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn
            </Link>
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
        <h2 className="mx-auto mt-10 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl">
          Lập kế hoạch Tích lũy và Bảo vệ tài chính trong cùng một khái niệm
        </h2>
      </section>

      <section className="px-[10%] pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center">
                <Icon className="mx-auto h-32 w-32 text-brand-gold sm:h-40 sm:w-40" />
                <h3 className="mt-8 text-2xl font-bold leading-tight sm:text-3xl">{pillar.title}</h3>
                <p className="mx-auto mt-8 max-w-sm text-2xl leading-snug">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-[10%] pb-24">
        <div className="mx-auto max-w-5xl space-y-10 text-2xl leading-snug">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Tiết kiệm dài hạn với lãi suất cao, linh hoạt, an toàn và có giá trị thế chấp để vay tiền mua bất động sản
            </h2>
            <ul className="mt-8 list-disc space-y-1 pl-6">
              <li>Đầu tư toàn bộ hoặc một phần tiền đóng vào quỹ đầu tư (Fonds)</li>
              <li>Được phép chọn 10 trong 50 Quỹ (Fonds) và có thể thay đổi Quỹ</li>
              <li>Thay đổi mức đóng hàng tháng, hoặc đóng thêm bất kỳ</li>
              <li>Cho tạm ứng đến 8 lần trong thời gian hợp đồng</li>
              <li>Lấy tiền ra bất cứ lúc nào</li>
              <li>Có thể lấy bằng vàng</li>
              <li>Có thể lấy hàng tháng dưới dạng lương hưu, một lần hoặc kết hợp cả hai</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Kết hợp linh hoạt với các giải pháp tối ưu để đảm bảo quyền lợi không bị ảnh hưởng khi rủi ro xảy ra trong đời sống như:
            </h2>
            <ul className="mt-8 list-disc space-y-1 pl-6">
              <li>Mất sức lao động</li>
              <li>Mắc bệnh hiểm nghèo</li>
              <li>Tình trạng cần chăm sóc</li>
              <li>Trường hợp rủi ro</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
