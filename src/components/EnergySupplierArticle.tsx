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
    <article className="bg-white text-black">
      <section className="grid lg:grid-cols-[54%_46%]">
        <div className="flex items-center bg-[#dff3d8] px-7 py-10 sm:px-12 lg:min-h-[405px] lg:px-[8%]">
          <div className="mx-auto max-w-[620px]">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl">
              Nguồn năng lượng Điện, Gas rẻ
            </h1>
            <h2 className="mt-5 text-center text-xl font-bold sm:text-2xl">
              Chuyển đổi nhà cung cấp để tiết kiệm
            </h2>
            <p className="mt-6 text-lg leading-snug">
              Giảm chi phí năng lượng của bạn ngay hôm nay bằng cách đổi nhà cung cấp điện và gas, bạn có thể
              tiết kiệm được hàng trăm euro mỗi năm cho điện sinh hoạt gia đình và hàng ngàn euro cho doanh
              nghiệp.
            </p>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[405px]">
          <Image
            src="/images/gallery-09.jpeg"
            alt="Nguồn năng lượng Điện, Gas rẻ"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 text-center md:grid-cols-3 md:gap-16">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="mx-auto max-w-[290px]">
                <Icon className="mx-auto !h-[105px] !w-[105px]" />
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 leading-snug">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

    </article>
  );
}
