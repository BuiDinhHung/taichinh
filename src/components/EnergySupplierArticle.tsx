import Image from "next/image";
import { DocumentCheckIcon, HandEuroIcon, StopwatchIcon } from "./MarketingAssets";

const benefits = [
  {
    icon: HandEuroIcon,
    title: "Điều kiện tốt nhất",
    body: "Chúng tôi giới thiệu các nguồn cung cấp với giá hợp lý, và thân thiện với người tiêu dùng từ các nhà cung cấp uy tín.",
  },
  {
    icon: StopwatchIcon,
    title: "Nhanh chóng và đơn giản",
    body: "Cùng với đối tác, chúng tôi giúp bạn thực hiện việc chuyển đổi nhanh chóng, đơn giản và đảm bảo không gián đoạn cung cấp điện và gas của bạn.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Đảm bảo kế hoạch",
    body: "Thời gian hợp đồng và bảo đảm giá cho 12 hoặc 24 tháng hoàn toàn theo nhu cầu của bạn.",
  },
];

export function EnergySupplierArticle() {
  return (
    <article className="bg-[#f7f4e8] text-black">
      <section className="grid lg:grid-cols-[52%_48%]">
        <div className="flex items-center px-[10%] py-14">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Nguồn năng lượng Điện, Gas rẻ
            </h1>
            <h2 className="mt-16 text-3xl font-bold leading-tight sm:text-4xl">
              Chuyển đổi nhà cung cấp để tiết kiệm
            </h2>
            <p className="mt-10 text-2xl leading-snug">
              Giảm chi phí năng lượng của bạn ngay hôm nay bằng cách đổi nhà cung cấp điện và gas, bạn có thể
              tiết kiệm được hàng trăm euro mỗi năm cho điện sinh hoạt gia đình và hàng ngàn euro cho doanh
              nghiệp.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/gallery-09.jpeg"
            alt="Nguồn năng lượng Điện, Gas rẻ"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="px-[10%] pb-16 pt-8 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="mx-auto max-w-sm">
                <Icon className="mx-auto h-36 w-36 text-brand-gold lg:h-44 lg:w-44" />
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-2xl leading-tight">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
