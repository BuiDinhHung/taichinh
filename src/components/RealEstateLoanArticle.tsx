import Image from "next/image";
import { BadeniaLogoMark } from "./MarketingAssets";

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

function ImmoSmartSeal() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border-[26px] border-[#b49a45] bg-white text-center shadow-sm">
      <div className="absolute inset-[-26px] rounded-full border-b-[12px] border-l-[12px] border-b-red-700 border-l-[#ffd200]" />
      <div className="text-[#0a4b72]">
        <div className="mx-auto mb-4 h-16 w-20 bg-[#0a4b72] [clip-path:polygon(50%_0,100%_36%,100%_100%,0_100%,0_36%)]" />
        <div className="font-serif text-5xl text-black">Immo</div>
        <div className="font-serif text-4xl italic">Smart</div>
      </div>
      <p className="absolute top-5 w-full text-center text-[13px] font-bold uppercase tracking-[0.28em] text-white">
        Immobilienfinanzierung
      </p>
      <p className="absolute right-2 top-24 rotate-90 text-xs font-bold uppercase tracking-[0.18em] text-white">
        für Deutschland
      </p>
    </div>
  );
}

function BankLogos() {
  return (
    <div className="mx-auto grid max-w-xl gap-12 text-center">
      <div className="flex items-center justify-center gap-6 text-[#0c5da8]">
        <span className="text-4xl font-bold">Deutsche Bank</span>
        <span className="flex h-16 w-16 items-center justify-center border-[8px] border-[#0018a8]">
          <span className="h-10 w-2 rotate-45 bg-[#0018a8]" />
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 text-4xl font-bold text-black">
        COMMERZBANK
        <span className="h-10 w-10 rotate-45 bg-[#ffd200]" />
      </div>

      <BadeniaLogoMark className="scale-75" />

      <div className="text-3xl font-bold text-black">
        <span className="text-red-600">●</span> HypoVereinsbank
        <div className="mt-1 text-base font-normal text-neutral-500">Member of <span className="font-bold text-red-600">●</span> UniCredit</div>
      </div>

      <div className="text-5xl font-bold text-red-600">Santander</div>
    </div>
  );
}

export function RealEstateLoanArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[51%_49%]">
        <div className="flex items-center bg-[#e8f0f9] px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Vay tín dụng mua bất động sản
            </h1>
            <p className="mt-20 text-2xl leading-snug">
              Đối với nhiều người, mua bất động sản là một trong những quyết định quan trọng nhất trong cuộc đời. Chúng tôi luôn sát cánh cùng bạn với kinh nghiệm sâu rộng của mình. Với ImmoSmart - dịch vụ tài chính bất động sản tại Đức.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/article-10-tin-dung-bat-dong-san.jpeg"
            alt="Vay tín dụng mua bất động sản"
            fill
            priority
            sizes="(min-width: 1024px) 49vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-center text-4xl font-bold leading-tight lg:text-left">
              Trương trình Vay tín dụng mua bất động sản ở Đức
            </h2>
            <div className="mt-14 max-w-5xl text-2xl leading-snug">
              <p>
                Chúng tôi sẵn sàng hỗ trợ bạn thực hiện mục đích bất động sản của mình. Trước tiên cùng nhau xem xét những yếu tố quan trọng sau
              </p>
              <ul className="mt-12 list-disc space-y-1 pl-6">
                <li>Đánh giá nhu cầu tín dụng</li>
                <li>Khả năng tài chính</li>
                <li>Sự đảm bảo tài chính lâu dài</li>
                <li>Cơ hội tài trợ từ nhà nước</li>
              </ul>
              <p className="mt-12">
                Chúng tôi cùng bạn phân tích từng bước để giúp bạn hiện thực hóa mục tiêu và lựa trọn phương án vay tín dụng phù hợp với nhu cầu của mình.
              </p>

              <ol className="mt-12 space-y-2">
                {steps.map((step, index) => (
                  <li key={step.title} className="grid gap-x-2 sm:grid-cols-[2rem_1fr]">
                    <span className="font-bold">{index + 1}.</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex items-start justify-center pt-8 lg:pt-16">
            <ImmoSmartSeal />
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-4xl leading-tight">Lợi thế của bạn</p>
          <h2 className="mt-4 text-center text-5xl font-bold leading-tight">
            Những sản phẩm của những đối tác hàng đầu
          </h2>

          <div className="mt-24 grid gap-16 lg:grid-cols-[58%_42%]">
            <div className="text-2xl leading-snug">
              <h3 className="text-3xl font-bold">
                Xây dựng, mua, đáo nợ hoặc nâng cấp, hiện đại hóa bất động sản:
              </h3>
              <p className="mt-10">
                Với các giải pháp đa dạng do các đối tác lâu năm của chúng tôi cung cấp, bạn có thể chọn sản phẩm phù hợp nhất cho kế hoạch xây dựng của mình.
              </p>

              <h3 className="mt-12 text-3xl font-bold">Lợi ích dành cho bạn:</h3>
              <div className="mt-10 space-y-10">
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

            <BankLogos />
          </div>
        </div>
      </section>
    </article>
  );
}
