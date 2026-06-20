import Image from "next/image";
import Link from "next/link";
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

const bankLogos = [
  { src: "/images/logo-deutsche-bank.png", alt: "Deutsche Bank", width: 265, height: 240 },
  { src: "/images/logo-commerzbank.png", alt: "Commerzbank", width: 302, height: 85 },
  { src: "/images/logo-hypovereinsbank.png", alt: "HypoVereinsbank", width: 268, height: 76 },
  { src: "/images/logo-santander.png", alt: "Santander", width: 281, height: 86 },
];

export function RealEstateLoanArticle() {
  return (
    <article className="bg-white text-black">
      {/* Hero */}
      <section className="grid min-h-[480px] lg:grid-cols-[51%_49%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Vay tín dụng mua bất động sản
            </h1>
            <p className="mt-6 text-sm leading-relaxed sm:text-base">
              Đối với nhiều người, mua bất động sản là một trong những quyết định quan trọng nhất trong cuộc đời. Chúng tôi luôn sát cánh cùng bạn với kinh nghiệm sâu rộng của mình. Với ImmoSmart – dịch vụ tài chính bất động sản tại Đức.
            </p>
            <Link
              href="/dat-lich"
              className="mt-8 inline-flex items-center justify-center bg-brand-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn
            </Link>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">
              Chương trình Vay tín dụng mua bất động sản ở Đức
            </h2>
            <div className="mt-6 text-sm leading-relaxed sm:text-base">
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
        <div className="grid gap-10 lg:grid-cols-[58%_42%]">
          <div className="text-sm leading-relaxed sm:text-base">
            <p className="text-base text-text-muted">Lợi thế của bạn</p>
            <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
              Những sản phẩm của những đối tác hàng đầu
            </h2>

            <h3 className="mt-8 font-bold">
              Xây dựng, mua, đáo nợ hoặc nâng cấp, hiện đại hóa bất động sản:
            </h3>
            <p className="mt-3">
              Với các giải pháp đa dạng do các đối tác lâu năm của chúng tôi cung cấp, bạn có thể chọn sản phẩm phù hợp nhất cho kế hoạch xây dựng của mình.
            </p>

            <h3 className="mt-6 font-bold">Lợi ích dành cho bạn:</h3>
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
          <div className="flex flex-col justify-center gap-6">
            {bankLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
              />
            ))}
            <BadeniaLogoMark className="h-16 w-auto" />
          </div>
        </div>
      </section>
    </article>
  );
}
