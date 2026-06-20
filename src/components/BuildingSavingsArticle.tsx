import Image from "next/image";
import Link from "next/link";
import { BadeniaLogoMark, DocumentCheckIcon, HandEuroIcon, ProfileCircleIcon } from "./MarketingAssets";

const benefits = [
  {
    icon: HandEuroIcon,
    title: "Điều khoản hấp dẫn",
    text: "Khoản vay hợp lý, an toàn và không rủi ro",
  },
  {
    icon: ProfileCircleIcon,
    title: "Linh hoạt",
    text: "Có thể nạp thêm tiền bất cứ lúc nào",
  },
  {
    icon: DocumentCheckIcon,
    title: "Hỗ trợ tài chính",
    text: "Và có các khoản hỗ trợ từ nhà nước có sẵn",
  },
];

function ImmoStartDiagram() {
  return (
    <Image
      src="/images/bauspar-immostart-diagram.jpeg"
      alt="Sơ đồ ImmoStart Badenia"
      width={962}
      height={541}
      className="h-auto w-full object-contain"
    />
  );
}

export function BuildingSavingsArticle() {
  return (
    <article className="bg-white text-black">
      {/* Hero */}
      <section className="grid min-h-[480px] lg:grid-cols-[54%_46%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="w-full">
            <p className="text-base leading-tight sm:text-lg">Tích lũy Vốn và Đảm bảo Khoản vay Xây dựng</p>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Tiết kiệm xây dựng:<br />Nền tảng của Việc sở hữu Nhà
            </h1>
            <p className="mt-6 text-sm leading-relaxed sm:text-base">
              Hãy đặt nền móng ngay từ bây giờ cho một giải pháp tài chính ổn định, linh hoạt và an toàn thông qua hợp đồng tiết kiệm xây dựng. Nhờ hình thức tiết kiệm này, bạn có thể chuẩn bị một cách có hệ thống và có chủ đích cho kế hoạch tài chính ngôi nhà của mình, tận dụng các khoản trợ cấp từ chính phủ, đồng thời đảm bảo quyền được hưởng một khoản vay xây dựng với lãi suất ưu đãi.
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
            src="/images/pdf-field-child.jpeg"
            alt="Tiết kiệm xây dựng với nền móng tài chính"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Benefits + ImmoStart info — same px-[10%] container, no inner max-w */}
      <section className="px-[10%] py-12">
        <h2 className="text-center text-xl font-bold sm:text-2xl">Tiết kiệm xây dựng ở điều kiện tốt nhất</h2>

        <div className="mt-8 grid gap-8 text-center lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title}>
                <Icon className="mx-auto h-16 w-16 text-brand-gold" />
                <h3 className="mt-3 text-base font-bold sm:text-lg">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-relaxed sm:text-base">{benefit.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <h2 className="text-center text-lg font-bold leading-snug sm:text-xl">
            ImmoStart – một sản phẩm hoàn hảo để chuẩn bị cho việc xây dựng, mua hoặc tái cấp vốn (đáo nợ) cho bất động sản nhà ở
          </h2>

          <div className="mt-8 text-sm leading-relaxed sm:text-base">
            <h3 className="font-bold">Tất cả các lợi thế trong một sản phẩm</h3>
            <div className="mt-3 space-y-1">
              <p>• Tích lũy vốn chủ sở hữu có mục tiêu</p>
              <p>• Đảm bảo tính <strong>linh hoạt</strong> và thanh khoản tài chính</p>
              <p>• Phân bổ nhanh chóng – chỉ cần tiết kiệm được 40%</p>
              <p>• Lãi suất cố định ưu đãi</p>
              <p>• Tư vấn tài chính giúp bạn lên kế hoạch dài hạn chắc chắn</p>
            </div>
          </div>

          <div className="mt-8 text-sm leading-relaxed sm:text-base">
            <h3 className="font-bold">Lợi ích hấp dẫn</h3>
            <div className="mt-3 space-y-1">
              <p>• Với tư cách là khách hàng của Deutsche Vermögensberatung, bạn sẽ nhận được ưu đãi <strong>lãi suất 0,25%</strong> cho khoản tài trợ trước và tài trợ tạm thời</p>
              <p>• <strong>Tỷ lệ tiết kiệm</strong> sản phẩm tối ưu là <strong>5% mỗi năm</strong></p>
              <p>• Một số tiền tiết kiệm xây dựng, thời gian phân bổ phụ thuộc vào biến thể thuế quan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badenia / ImmoStart diagram — same px-[10%] */}
      <section className="px-[10%] py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Hãy tận dụng cơ hội tốt này!</h2>
          <p className="mt-5 text-xl font-bold leading-snug text-[#0071bc] sm:text-2xl">
            Chốt một hợp đồng tiết kiệm xây dựng<br />
            để khi vay được lãi suất ưu đãi từ <span className="text-red-600">0,95%</span>
          </p>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[48%_52%]">
          <div className="text-neutral-500">
            <p className="text-base font-bold sm:text-lg">Ein Produkt der Badenia</p>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">
              Deutsche Bausparkasse Badenia AG<br />Badeniaplatz 1, 76189 Karlsruhe
            </p>
            <div className="mt-10 w-[320px] max-w-full">
              <BadeniaLogoMark className="!w-full" />
            </div>
          </div>
          <ImmoStartDiagram />
        </div>
      </section>

      {/* Interest comparison chart — same px-[10%] */}
      <section className="px-[10%] py-12">
        <div className="text-center">
          <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl">
            Lãi suất ảnh hưởng thế nào đến khoản vay của bạn?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
            Lãi suất thay đổi có thể khiến tổng chi phí vay tín dụng bất động sản tăng đáng kể.<br />
            Hãy đặt lịch tư vấn sớm để chốt mức lãi suất tốt nhất!
          </p>
        </div>
        <div className="mt-8">
          <Image
            src="/images/interest-rate-chart.jpeg"
            alt="Biểu đồ so sánh lãi suất vay tín dụng bất động sản"
            width={1100}
            height={620}
            className="h-auto w-full object-contain"
          />
        </div>
      </section>
    </article>
  );
}
