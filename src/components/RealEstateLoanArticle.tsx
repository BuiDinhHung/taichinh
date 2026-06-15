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

function ImmoSmartSeal() {
  return (
    <Image
      src="/images/badge-immosmart.png"
      alt="ImmoSmart"
      width={339}
      height={339}
      className="mx-auto h-auto w-64 object-contain sm:w-72"
    />
  );
}

function BankLogos() {
  return (
    <div className="mx-auto grid max-w-xl gap-12 text-center">
      <Image src="/images/logo-deutsche-bank.png" alt="Deutsche Bank" width={265} height={240} className="mx-auto h-auto max-h-28 w-auto bg-transparent object-contain" />
      <Image src="/images/logo-commerzbank.png" alt="Commerzbank" width={302} height={85} className="mx-auto h-auto max-h-20 w-auto bg-transparent object-contain" />
      <BadeniaLogoMark className="mx-auto max-h-24" />
      <Image src="/images/logo-hypovereinsbank.png" alt="HypoVereinsbank" width={268} height={76} className="mx-auto h-auto max-h-20 w-auto bg-transparent object-contain" />
      <Image src="/images/logo-santander.png" alt="Santander" width={281} height={86} className="mx-auto h-auto max-h-20 w-auto bg-transparent object-contain" />
    </div>
  );
}
export function RealEstateLoanArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[51%_49%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Vay tín dụng mua bất động sản
            </h1>
            <p className="mt-20 text-2xl leading-snug">
              Đối với nhiều người, mua bất động sản là một trong những quyết định quan trọng nhất trong cuộc đời. Chúng tôi luôn sát cánh cùng bạn với kinh nghiệm sâu rộng của mình. Với ImmoSmart - dịch vụ tài chính bất động sản tại Đức.
            </p>
            <Link
              href="/dat-lich"
              className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-3 text-xl font-semibold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn
            </Link>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
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

      <section className="bg-neutral-100 px-[10%] py-16">
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

      <section className="bg-white px-[10%] py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Lãi suất ảnh hưởng thế nào đến khoản vay của bạn?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-2xl leading-snug text-black">
            Lãi suất thay đổi có thể khiến tổng chi phí vay tín dụng bất động sản tăng đáng kể. Hãy đặt lịch tư vấn sớm để chốt mức lãi suất tốt nhất!
          </p>
          <div className="mt-10">
            <Image
              src="/images/interest-rate-chart.jpeg"
              alt="Biểu đồ so sánh lãi suất vay tín dụng bất động sản"
              width={1100}
              height={620}
              className="mx-auto h-auto w-full max-w-4xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-[10%] py-16">
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
