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
      className="mx-auto h-auto w-full max-w-4xl object-contain"
    />
  );

  return (
    <div className="w-full">
      <div className="mx-auto h-24 max-w-3xl bg-red-700 [clip-path:polygon(50%_0,100%_62%,100%_100%,50%_38%,0_100%,0_62%)]" />
      <div className="text-center">
        <p className="-mt-10 text-3xl">ImmoStart</p>
        <h3 className="mt-10 text-3xl font-bold">Trương trình tiết kiệm xây dựng</h3>
      </div>

      <div className="relative mt-8 grid overflow-hidden border border-neutral-500 text-center text-2xl font-bold sm:grid-cols-2">
        <div className="bg-neutral-200 p-10">
          <p>ClassicFinanz</p>
        </div>
        <div className="bg-neutral-500 p-10 text-white">
          <p>Niedriger Zins</p>
        </div>

        <div className="border-t-2 border-white bg-neutral-200 p-8 text-left">
          <p>60 % Vốn vay</p>
          <p className="mt-8 text-xl leading-snug">
            từ 100.000 € với 1,75 %<br />
            từ&nbsp;&nbsp; 50.100 € với 1,95 %<br />
            từ&nbsp;&nbsp; 25.000 € với 2,35 %
          </p>
        </div>
        <div className="border-t-2 border-white bg-neutral-500 p-8 text-left text-white">
          <p className="mt-8">50 % Vốn vay</p>
          <p className="mt-2 text-xl">từ 25.000 &nbsp;&nbsp; với&nbsp; 0,95 %</p>
        </div>

        <div className="border-t-2 border-white bg-neutral-200 p-8">
          <p>40 % Vốn tự có</p>
        </div>
        <div className="border-t-2 border-white bg-neutral-500 p-8 text-white">
          <p>50 % Vốn tự có</p>
        </div>

        <div className="absolute left-1/2 top-[42%] hidden -translate-x-1/2 -translate-y-1/2 bg-red-700 px-8 py-3 text-2xl font-normal text-white [clip-path:polygon(0_50%,18%_0,18%_28%,82%_28%,82%_0,100%_50%,82%_100%,82%_72%,18%_72%,18%_100%)] sm:block">
          Chuyển đổi
        </div>
      </div>
    </div>
  );
}

function InterestComparisonChart() {
  return (
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
  );
}

export function BuildingSavingsArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[560px] lg:grid-cols-[54%_46%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-4xl">
            <p className="text-3xl leading-tight">Tích lũy Vốn và Đảm bảo Khoản vay Xây dựng</p>
            <h1 className="mt-16 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Tiết kiệm xây dựng:<br />Nền tảng của Việc sở hữu Nhà
            </h1>
            <p className="mt-14 max-w-3xl text-2xl leading-snug">
              Hãy đặt nền móng ngay từ bây giờ cho một giải pháp tài chính ổn định, linh hoạt và an toàn thông qua hợp đồng tiết kiệm xây dựng. Nhờ hình thức tiết kiệm này, bạn có thể chuẩn bị một cách có hệ thống và có chủ đích cho kế hoạch tài chính ngôi nhà của mình, tận dụng các khoản trợ cấp từ chính phủ, đồng thời đảm bảo quyền được hưởng một khoản vay xây dựng với lãi suất ưu đãi.
            </p>
            <Link
              href="/dat-lich"
              className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-3 text-xl font-semibold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn
            </Link>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-[560px]">
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

      <section className="px-[10%] py-16">
        <h2 className="text-center text-4xl font-bold">Tiết kiệm xây dựng ở điều kiện tốt nhất</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-12 text-center lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title}>
                <Icon className="mx-auto h-28 w-28 text-brand-gold" />
                <h3 className="mt-4 text-3xl font-bold">{benefit.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-2xl leading-snug">{benefit.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-24 max-w-6xl">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight">
            ImmoStart - một sản phẩm hoàn hảo để chuẩn bị cho việc xây dựng, mua hoặc tái cấp vốn (đáo nợ) cho bất động sản nhà ở
          </h2>

          <div className="mt-12 text-2xl leading-snug">
            <h3 className="text-3xl font-bold">Tất cả các lợi thế trong một sản phẩm</h3>
            <ul className="mt-8 list-disc space-y-1 pl-6">
              <li>Tích lũy vốn chủ sở hữu có mục tiêu</li>
              <li>Đảm bảo tính linh hoạt và thanh khoản tài chính</li>
              <li>Phân bổ nhanh chóng - chỉ cần tiết kiệm được 40%</li>
              <li>Lãi suất cố định ưu đãi</li>
              <li>Tư vấn tài chính giúp bạn lên kế hoạch dài hạn chắc chắn</li>
            </ul>
          </div>

          <div className="mt-12 text-2xl leading-snug">
            <h3 className="text-3xl font-bold">Lợi ích hấp dẫn</h3>
            <ul className="mt-8 list-disc space-y-1 pl-6">
              <li>Với tư cách là khách hàng của Deutsche Vermögensberatung, bạn sẽ nhận được ưu đãi lãi suất 0,25% cho khoản tài trợ trước và tài trợ tạm thời</li>
              <li>Tỷ lệ tiết kiệm sản phẩm tối ưu là 5% mỗi năm.</li>
              <li>Một số tiền tiết kiệm xây dựng, thời gian phân bổ phụ thuộc vào biến thể thuế quan</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid items-center gap-12 px-[10%] py-16 lg:grid-cols-[40%_60%]">
        <div className="mx-auto max-w-lg text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-tight">Hãy tận dụng cơ hội tốt này!</h2>
          <p className="mt-14 text-3xl font-bold leading-tight text-[#0071bc]">
            Chốt một hợp đồng tiết kiệm xây dựng<br />để khi vay được lãi suất ưu đãi từ <span className="text-red-600">0,95%</span>
          </p>
          <p className="mt-24 text-2xl text-neutral-500">Ein Produkt der Badenia</p>
          <p className="mt-10 text-xl text-neutral-500">
            Deutsche Bausparkasse Badenia AG<br />Badeniaplatz 1, 76189 Karlsruhe
          </p>
          <BadeniaLogoMark className="mx-auto mt-8 max-w-sm lg:mx-0" />
        </div>
        <ImmoStartDiagram />
      </section>

      <InterestComparisonChart />
    </article>
  );
}
