import Image from "next/image";
import Link from "next/link";
import { FlexibleChoiceIcon, HandEuroIcon, ProfileCircleIcon } from "./MarketingAssets";

const steps = [
  {
    title: "Kiểm tra nhanh",
    text: "Chỉ qua vài bước đơn giản, bạn sẽ có cái nhìn tổng quan về tình hình tài chính cá nhân của mình",
  },
  {
    title: "Phân tích bất động sản",
    text: "Chúng tôi sẽ thu thập đầy đủ thông tin cần thiết để xây dựng đề nghị tài chính cá nhân phù hợp.",
  },
  {
    title: "Lựa chọn",
    text: "Bạn sẽ chọn gói tài chính tối ưu cho mình từ các lựa chọn có sẵn.",
  },
  {
    title: "Bảo mật",
    text: "Chúng tôi cam kết cung cấp cho bạn và những người thân yêu những giải pháp bảo hiểm phù hợp.",
  },
  {
    title: "Bảo đảm lãi suất",
    text: "Chúng tôi sẽ giúp bạn đảm bảo mức lãi suất ổn định trong nhiều năm thông qua hình thức vay trả trước hoặc hợp đồng tiết kiệm.",
  },
];

const bankLogos = [
  { src: "/images/logo-deutsche-bank.png", alt: "Deutsche Bank", align: "self-start mt-3", bgSize: "contain", bgPos: "center center", height: "h-24" },
  { src: "/images/logo-commerzbank.png", alt: "Commerzbank", align: "self-end", bgSize: "contain", bgPos: "center center", height: "h-16" },
  { src: "/images/logo-badenia.png", alt: "Deutsche Bausparkasse Badenia", align: "self-start", bgSize: "contain", bgPos: "center center", height: "h-20" },
  { src: "/images/logo-hypovereinsbank.png", alt: "HypoVereinsbank", align: "self-end", bgSize: "contain", bgPos: "center center", height: "h-14" },
  { src: "/images/logo-santander.png", alt: "Santander", align: "self-start", bgSize: "contain", bgPos: "center center", height: "h-14" },
];

const personalLoanBenefits = [
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

export function RealEstateLoanArticle() {
  return (
    <article className="bg-white text-black">
      {/* Hero */}
      <section className="grid min-h-[480px] lg:grid-cols-[51%_49%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="w-full">
            <h1 className="text-[clamp(1.75rem,2.4vw,3.25rem)] font-bold leading-tight lg:whitespace-nowrap">
              Vay tín dụng mua bất động sản
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed sm:text-base">
              Đối với nhiều người, mua bất động sản là một trong những quyết định quan trọng nhất trong cuộc đời. Chúng tôi luôn sát cánh cùng bạn với kinh nghiệm sâu rộng của mình. Với ImmoSmart – dịch vụ tài chính bất động sản tại Đức.
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                href="/dat-lich"
                className="inline-flex items-center bg-brand-gold px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
              >
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-[480px]">
          <Image
            src="/images/house-with-euros.jpeg"
            alt="Vay tín dụng mua bất động sản"
            fill
            priority
            sizes="(min-width: 1024px) 49vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Steps + ImmoSmart seal */}
      <section className="bg-neutral-100 px-[10%] py-12">
        <h2 className="pl-[3%] text-4xl font-bold leading-tight sm:text-5xl lg:whitespace-nowrap">
          Chương trình Vay tín dụng mua bất động sản ở Đức
        </h2>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="text-sm leading-relaxed sm:text-base">
              <p>
                Chúng tôi sẵn sàng hỗ trợ bạn thực hiện mục đích bất động sản của mình. Trước tiên cùng nhau xem xét những yếu tố quan trọng sau:
              </p>
              <div className="mt-4 space-y-1">
                <p>• Đánh giá nhu cầu tín dụng</p>
                <p>• Khả năng tài chính</p>
                <p>• Sự đảm bảo tài chính lâu dài</p>
                <p>• Cơ hội tài trợ từ nhà nước</p>
              </div>
              <p className="mt-5">
                Chúng tôi cùng bạn phân tích từng bước để giúp bạn hiện thực hóa mục tiêu và lựa chọn phương án vay tín dụng phù hợp với nhu cầu của mình.
              </p>

              <ol className="mt-6 space-y-3">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-2">
                    <span className="font-bold shrink-0">{index + 1}.</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex items-start justify-center pt-4">
            <Image
              src="/images/badge-immosmart.png"
              alt="ImmoSmart"
              width={339}
              height={339}
              className="mx-auto h-auto w-48 object-contain sm:w-56"
            />
          </div>
        </div>
      </section>

      {/* Partner banks */}
      <section className="bg-neutral-100 px-[10%] py-12">
        <div className="text-center">
          <p className="text-base text-text-muted">Lợi thế của bạn</p>
          <h2 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl lg:whitespace-nowrap">
            Những sản phẩm của những đối tác hàng đầu
          </h2>
        </div>

        <div className="mt-5 grid gap-10 lg:grid-cols-[58%_42%]">
          <div className="text-sm leading-relaxed sm:text-base">
            <h3 className="whitespace-nowrap text-[0.25rem] font-bold sm:text-[0.375rem]">
              Xây dựng, mua, đáo nợ hoặc nâng cấp, hiện đại hóa bất động sản:
            </h3>
            <p className="mt-3">
              Với các giải pháp đa dạng do các đối tác lâu năm của chúng tôi cung cấp, bạn có thể chọn sản phẩm phù hợp nhất cho kế hoạch xây dựng của mình.
            </p>

            <h3 className="mt-6 text-[0.25rem] font-bold sm:text-[0.375rem]">Lợi ích dành cho bạn:</h3>
            <div className="mt-3 space-y-3">
              <p>
                <strong>• Mọi giải pháp từ một nguồn duy nhất:</strong> Chúng tôi luôn đồng hành cùng bạn, cung cấp các giải pháp tài chính khả thi từ các đối tác của mình, giúp bạn chọn lựa giải pháp phù hợp nhất.
              </p>
              <p>
                <strong>• Hợp tác với các đối tác cao cấp và độc quyền:</strong> Chúng tôi làm việc với các đối tác uy tín, luôn cam kết đảm bảo độ tin cậy cao và hiệu suất vượt trội.
              </p>
              <p>
                <strong>• Điều kiện độc quyền cho khách hàng:</strong> Nhờ vào mối quan hệ hợp tác lâu dài, chúng tôi có thể mang đến cho bạn các điều kiện đặc biệt và sản phẩm đạt giải thưởng từ các đối tác cao cấp.
              </p>
            </div>
          </div>

          {/* Bank logos */}
          <div className="mx-auto flex w-full max-w-[380px] flex-col justify-center gap-5">
            {bankLogos.map((logo) => (
              <div
                key={logo.alt}
                className={`${logo.height} w-[80%] ${logo.align}`}
                style={{
                  backgroundImage: `url(${logo.src})`,
                  backgroundSize: logo.bgSize,
                  backgroundPosition: logo.bgPos,
                  backgroundRepeat: "no-repeat",
                }}
                role="img"
                aria-label={logo.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Personal loan benefits */}
      <section className="bg-white px-[10%] pt-16 pb-8 sm:pt-24 sm:pb-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-5xl font-bold leading-tight">Vay tín dụng cá nhân</h2>
          <p className="mx-auto mt-8 max-w-5xl text-2xl leading-snug">
            Cuộc sống luôn thay đổi, và đôi khi những thay đổi đó đòi hỏi chi phí. Xe không còn hoạt động tốt, bạn sắp phải chuyển nhà, con bạn cần một phòng riêng, hoặc bạn đang lên kế hoạch học thêm. Không phải lúc nào cũng có sẵn nguồn tài chính. Trong trường hợp này, <strong>Tín dụng cá nhân Smart</strong> là giải pháp dành cho bạn.
          </p>

          <div className="mt-10 text-center">
            <h3 className="text-3xl font-bold">Lợi ích của bạn</h3>
            <p className="mt-6 text-3xl">Khoản vay phù hợp với đời sống của bạn.</p>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-3">
            {personalLoanBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <Icon className="mx-auto h-36 w-36 text-brand-gold" />
                  <h4 className="mt-5 text-3xl font-bold">{benefit.title}</h4>
                  <p className="mx-auto mt-5 max-w-sm text-2xl leading-snug">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet your needs */}
      <section className="bg-white px-[10%] pt-4 pb-16 sm:pt-6 sm:pb-20">
        <h2 className="text-center text-3xl font-bold leading-tight">Đáp ứng nhu cầu của bạn</h2>

        {/* Section 1 — full width */}
        <div className="mt-8 text-2xl leading-snug">
          <h3 className="text-3xl font-bold">
            Tạo không gian tài chính cho những khoản chi cần thiết
          </h3>
          <p className="mt-5">
            Bạn mong muốn có không gian tài chính để thực hiện các khoản mua sắm cần thiết? Việc lập kế hoạch có trách nhiệm càng trở nên quan trọng. Khoản vay cá nhân Smart từ Deutsche Bank là một phần trong dịch vụ tư vấn tài chính toàn diện của chúng tôi. Để tăng thêm sự tin cậy, bạn có thể lựa chọn gói bảo hiểm bổ sung nhằm bảo vệ thu nhập và gia đình.
          </p>
        </div>

        {/* Section 2 — text left, diagram right */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[52%_48%]">
          <div className="text-2xl leading-snug">
            <h3 className="text-3xl font-bold">
              Tối ưu hóa các khoản vay trả góp của bạn
            </h3>
            <p className="mt-5">
              Hơn 30% người Đức có một hoặc nhiều khoản vay trả góp. Bạn có thuộc nhóm đó không? Nếu có, đây là thời điểm thích hợp để kiểm tra các hợp đồng hiện tại của bạn.
            </p>
            <p className="mt-4">
              Nhiều khoản vay trả góp và vay thấu chi có thể được hợp nhất thành một hợp đồng mới với điều kiện tốt hơn. Điều này không chỉ giúp bạn dễ dàng quản lý tài chính mà còn cải thiện khả năng tín dụng của bạn. Những khoản lãi suất mà bạn tiết kiệm được sẽ mang lại tự do tài chính và tạo cơ hội cho việc xây dựng tài sản. Hãy tận dụng <strong>#SmartEffekt</strong> ngay hôm nay.
            </p>
          </div>

          <Image
            src="/images/credit-consolidation-diagram.jpeg"
            alt="Hợp nhất khoản vay - SmartEffekt"
            width={790}
            height={446}
            className="mx-auto h-auto w-full max-w-2xl object-contain mix-blend-multiply"
          />
        </div>
      </section>
    </article>
  );
}
