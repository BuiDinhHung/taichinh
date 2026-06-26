import Image from "next/image";
import { EuroCycleIcon, GovernmentSupportIcon } from "./MarketingAssets";

const riesterBenefits = [
  {
    icon: GovernmentSupportIcon,
    title: "Trợ cấp từ nhà nước",
    text: "Nhà nước hỗ trợ bạn thông qua các khoản trợ cấp và ưu đãi thuế. Chỉ với lương hưu Riester, bạn mới có thể nhận được mức hỗ trợ cao từ nhà nước với khoản đóng góp cá nhân thấp như vậy.",
  },
  {
    icon: EuroCycleIcon,
    title: "Lợi nhuận và sự an toàn",
    text: "Bạn có thể linh hoạt quyết định cách phân bổ khoản đóng góp của mình giữa mức độ an toàn và khả năng sinh lời theo nhu cầu cá nhân. Các khoản tiền bạn đã đóng cùng với trợ cấp từ nhà nước được đảm bảo giữ nguyên 100%. Với bảo hiểm bổ sung mất khả năng lao động, bạn còn có thể bảo vệ mục tiêu tiết kiệm của mình một cách toàn diện hơn.",
  },
];

const flexibilityBenefit = {
  title: "Tính linh hoạt cao",
  text: "Bạn có thể nhận tối đa 30% số vốn đã tích lũy dưới dạng thanh toán một lần khi bắt đầu nhận lương hưu. Ngoài ra, với chương trình \"Wohn-Riester\", bạn cũng có thể sử dụng khoản hỗ trợ này để tài trợ cho việc mua hoặc xây dựng nhà ở riêng của mình.",
};

export function RiesterPensionArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[48%_52%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Chủ động tài chính -<br />An nhiên tuổi già
            </h1>
            <p className="mt-16 text-2xl font-bold leading-snug">
              Các chương trình Hưu trí có hỗ trợ của nhà nước
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/pdf-field-house.jpeg"
            alt="Chủ động tài chính cho tuổi già"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-[10%] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold leading-tight sm:text-5xl">
            Bảo hiểm hưu trí Riester - Riesterrente
          </h2>
          <div className="mx-auto mt-16 max-w-5xl text-2xl leading-snug">
            <h3 className="text-3xl font-bold">An tâm nghỉ hưu - được nhà nước hỗ trợ</h3>
            <p className="mt-10">
              Lương hưu Riester: Vững tâm cho tương lai. Chỉ với lương hưu Riester, bạn mới có thể nhận được khoản hỗ trợ cao từ nhà nước với mức đóng góp cá nhân thấp như vậy. Hãy tận dụng cơ hội này - đầu tư cho tương lai của bạn!
            </p>
          </div>
        </div>
      </section>

      <section className="px-[10%] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-2xl font-bold">Nghĩ sớm cho tương lai</p>
          <h2 className="mt-10 text-center text-4xl font-bold leading-tight sm:text-5xl">
            Tại sao phải lo cho tương lai?
          </h2>
          <div className="mx-auto mt-10 max-w-7xl text-2xl leading-snug">
            <p>
              Rất đơn giản: vì lương hưu từ nhà nước thường không còn đủ để đảm bảo cuộc sống. Nhiều người vẫn còn nhiều năm nữa mới đến tuổi nghỉ hưu nhưng đã lo lắng về nguy cơ nghèo khó khi về già. Vì vậy, việc chuẩn bị tài chính từ sớm là vô cùng quan trọng.
            </p>
            <p>
              Chỉ với lương hưu Riester, bạn mới có thể nhận được khoản hỗ trợ cao từ nhà nước với mức đóng góp cá nhân thấp như vậy. Hãy tận dụng cơ hội này - đầu tư cho tương lai của chính bạn.
            </p>
            <p>
              Gói &ldquo;Riesterrente Strategie Plus&rdquo; của Generali Deutschland Lebensversicherung AG là giải pháp lương hưu tư nhân dành cho những ai muốn tự quyết định cách tiền của mình được đầu tư. Đồng thời, bạn còn được hưởng các khoản trợ cấp từ nhà nước và những ưu đãi thuế phù hợp với từng cá nhân.
            </p>
          </div>

          <h2 className="mt-20 text-center text-4xl font-bold leading-tight">
            Những lợi ích của lương hưu Riester dành cho bạn.
          </h2>
          <div className="mt-10 grid gap-12 text-center lg:grid-cols-3">
            {riesterBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title}>
                  <Icon className="mx-auto h-28 w-28 text-brand-gold" />
                  <h3 className="mt-8 text-2xl font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-8 max-w-sm text-xl leading-snug">{benefit.text}</p>
                </div>
              );
            })}
            <div>
              <Image
                src="/images/icon-flexibility.png"
                alt="Tính linh hoạt cao"
                width={240}
                height={240}
                className="mx-auto h-28 w-28 object-contain"
              />
              <h3 className="mt-8 text-2xl font-bold">{flexibilityBenefit.title}</h3>
              <p className="mx-auto mt-8 max-w-sm text-xl leading-snug">{flexibilityBenefit.text}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
