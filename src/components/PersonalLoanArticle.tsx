import Image from "next/image";
import { FlexibleChoiceIcon, HandEuroIcon, ProfileCircleIcon } from "./MarketingAssets";

const benefits = [
  {
    icon: HandEuroIcon,
    title: "Điều kiện hấp dẫn",
    text: "Dành cho những nhu cầu hiện tại và tối ưu hóa các khoản vay trả góp hoặc vay thấu chi hiện có.",
  },
  {
    icon: ProfileCircleIcon,
    title: "Kế hoạch phù hợp",
    text: "Lãi suất phù hợp cá nhân và thời gian vay linh hoạt từ 6 đến 120 tháng.",
  },
  {
    icon: FlexibleChoiceIcon,
    title: "Linh hoạt cao",
    text: "Khách hàng có thể trả nợ trước hạn bất cứ lúc nào.",
  },
];

function SmartEffectDiagram() {
  return (
    <Image
      src="/images/credit-consolidation-diagram.jpeg"
      alt="SmartEffekt tối ưu hóa khoản vay"
      width={790}
      height={446}
      className="mx-auto h-auto w-full max-w-2xl object-contain mix-blend-multiply"
    />
  );

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[720px]">
      <div className="absolute bottom-2 left-0 h-72 w-72 rounded-full bg-[conic-gradient(from_-70deg,#c7ad18_0_45deg,#5c5c5c_45deg_160deg,#7c7c7c_160deg_250deg,#9b9b9b_250deg_335deg,#c7ad18_335deg_360deg)] shadow-sm sm:h-80 sm:w-80">
        <div className="absolute right-4 top-16 w-24 text-center text-lg leading-tight text-white">wenig<br />finanzieller<br />Freiraum</div>
        <div className="absolute left-10 top-20 text-lg text-white">Kredit 1</div>
        <div className="absolute bottom-20 left-10 text-lg text-white">Kredit 2</div>
        <div className="absolute bottom-12 right-12 text-lg text-white">Dispo</div>
        <div className="absolute left-20 top-28 h-8 w-20 rounded-full bg-white/90" />
        <div className="absolute bottom-20 left-16 h-7 w-16 rounded bg-white/90" />
        <div className="absolute bottom-16 right-16 h-12 w-20 rotate-[-8deg] rounded bg-white/90" />
      </div>

      <div className="absolute bottom-36 left-[285px] hidden h-0 w-0 border-y-[18px] border-l-[48px] border-y-transparent border-l-neutral-700 sm:block" />

      <div className="absolute bottom-28 right-0 h-80 w-80 rounded-full bg-[conic-gradient(from_-60deg,#c7ad18_0_95deg,#333_95deg_360deg)] shadow-sm sm:h-[350px] sm:w-[350px]">
        <div className="absolute right-10 top-8 text-center text-2xl leading-tight text-white">
          Mehr<br />finanzieller<br />Freiraum
        </div>
        <div className="absolute bottom-32 left-20 text-center text-2xl leading-tight text-white">
          Ein<br />Gesamtkredit
        </div>
        <div className="absolute right-12 top-28 flex gap-2">
          <span className="h-8 w-8 rounded-full bg-white" />
          <span className="h-8 w-8 rounded-full bg-white" />
          <span className="h-8 w-8 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}

export function PersonalLoanArticle() {
  return (
    <article className="bg-[#e8f0f9] text-black">
      <section className="px-[10%] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-5xl font-bold leading-tight">Vay tín dụng cá nhân</h1>
          <p className="mx-auto mt-8 max-w-5xl text-2xl leading-snug">
            Cuộc sống luôn thay đổi, và đôi khi những thay đổi đó đòi hỏi chi phí. Xe không còn hoạt động tốt, bạn sắp phải chuyển nhà, con bạn cần một phòng riêng, hoặc bạn đang lên kế hoạch học thêm. Không phải lúc nào cũng có sẵn nguồn tài chính. Trong trường hợp này, <strong>Tín dụng cá nhân Smart</strong> là giải pháp dành cho bạn.
          </p>

          <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold">Lợi ích của bạn</h2>
            <p className="mt-6 text-3xl">Khoản vay phù hợp với đời sống của bạn.</p>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <Icon className="mx-auto h-36 w-36 text-brand-gold" />
                  <h3 className="mt-5 text-3xl font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-5 max-w-sm text-2xl leading-snug">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold leading-tight">Đáp ứng nhu cầu của bạn</h2>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[52%_48%]">
            <div className="text-2xl leading-snug">
              <h3 className="text-3xl font-bold">Tạo không gian tài chính cho những khoản chi cần thiết</h3>
              <p className="mt-5">
                Bạn mong muốn có không gian tài chính để thực hiện các khoản mua sắm cần thiết? Việc lập kế hoạch có trách nhiệm càng trở nên quan trọng. Khoản vay cá nhân Smart từ Deutsche Bank là một phần trong dịch vụ tư vấn tài chính toàn diện của chúng tôi. Để tăng thêm sự tin cậy, bạn có thể lựa chọn gói bảo hiểm bổ sung nhằm bảo vệ thu nhập và gia đình.
              </p>

              <h3 className="mt-8 text-3xl font-bold">Tối ưu hóa các khoản vay trả góp của bạn</h3>
              <p className="mt-5">
                Hơn 30% người Đức có một hoặc nhiều khoản vay trả góp. Bạn có thuộc nhóm đó không? Nếu có, đây là thời điểm thích hợp để kiểm tra các hợp đồng hiện tại của bạn.
              </p>
              <p className="mt-4">
                Nhiều khoản vay trả góp và vay thấu chi có thể được hợp nhất thành một hợp đồng mới với điều kiện tốt hơn. Điều này không chỉ giúp bạn dễ dàng quản lý tài chính mà còn cải thiện khả năng tín dụng của bạn. Những khoản lãi suất mà bạn tiết kiệm được sẽ mang lại tự do tài chính và tạo cơ hội cho việc xây dựng tài sản. Hãy tận dụng <strong>#SmartEffekt</strong> ngay hôm nay.
              </p>
            </div>

            <SmartEffectDiagram />
          </div>
        </div>
      </section>
    </article>
  );
}
