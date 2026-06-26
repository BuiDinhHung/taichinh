import Image from "next/image";
import Link from "next/link";
import { AllianzLogoMark, DwsLogoMark, FlexibleChoiceIcon, GrowthChartIcon, PiggyBankIcon } from "./MarketingAssets";

function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-24">
      <DwsLogoMark className="h-16 lg:h-24" />
      <AllianzLogoMark className="h-14 lg:h-20" />
    </div>
  );
}

function CostAverageDiagram() {
  return (
    <section className="mt-16">
      <h2 className="text-center text-3xl font-normal text-black">Lợi ích của đầu tư dài hạn</h2>
      <h3 className="mx-auto mt-10 max-w-3xl text-center text-3xl font-bold leading-tight text-black">
        Hiệu ứng Cost-Average – tận dụng lợi ích từ việc tiết kiệm đều đặn
      </h3>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {/* Hàng 1 */}
        <Image
          src="/images/fonds-monthly-to-fonds.jpeg"
          alt="Tiết kiệm hàng tháng vào quỹ"
          width={400}
          height={280}
          className="h-auto w-full object-contain"
        />
        <p className="self-center text-xl leading-snug text-black">
          <strong>1.</strong> Là nhà đầu tư, bạn đầu tư một khoản tiền cố định mỗi tháng và mua cổ phần từ một quỹ đầu tư.
        </p>
        <Image
          src="/images/fonds-cost-average.jpeg"
          alt="Hiệu ứng Cost-Average – nhiều và ít cổ phần"
          width={400}
          height={220}
          className="h-auto w-full object-contain"
        />
        <p className="self-center text-xl leading-snug text-black">
          <strong>3.</strong> Nhờ vậy, bạn có thể đạt được giá mua trung bình thấp hơn đáng kể so với cổ phần quỹ của mình – một hiệu ứng có thể càng mạnh mẽ hơn theo thời gian.
        </p>

        {/* Hàng 2 */}
        <Image
          src="/images/fonds-monthly-shares-chart.jpeg"
          alt="Biểu đồ cổ phần hàng tháng"
          width={400}
          height={280}
          className="h-auto w-full object-contain"
        />
        <p className="self-center text-xl leading-snug text-black">
          <strong>2.</strong> Tùy vào diễn biến giá, bạn sẽ nhận được nhiều hoặc ít cổ phần quỹ cho số tiền cố định của mình trong một tháng.
        </p>
        <Image
          src="/images/fonds-one-time-vs-savings.jpeg"
          alt="So sánh đầu tư một lần và tiết kiệm định kỳ"
          width={400}
          height={220}
          className="h-auto w-full object-contain"
        />
        <p className="self-center text-xl leading-snug text-black">
          <strong>4.</strong> Bằng cách sử dụng hiệu ứng Trung bình Chi phí (Cost-Average), bạn có thể mua được nhiều cổ phần hơn cho số tiền đầu tư của mình theo thời gian.
        </p>
      </div>
    </section>
  );
}

export function FondsSparplanArticle() {
  return (
    <article className="bg-white">
      <section className="grid min-h-[520px] lg:grid-cols-[44%_56%]">
        <div className="flex items-center bg-[#e8f0f9] px-8 py-12 lg:pl-20 lg:pr-10">
          <div className="max-w-[560px] text-black">
            <h1 className="text-5xl font-bold leading-tight lg:pl-12">
              Đầu tư vào Quỹ -<br />Fonds Sparsplan
            </h1>
            <p className="mt-6 text-3xl leading-snug lg:pl-12">
              Bổ sung thông minh cho<br />Danh mục đầu tư của bạn
            </p>
            <p className="mt-16 text-2xl leading-snug">
              Với các kế hoạch tiết kiệm, bạn hoàn toàn có thể kiến tạo một khối tài sản đáng kể - chỉ với số vốn khởi điểm vỏn vẹn €25 mỗi tháng. Hơn thế nữa, bạn luôn được hưởng sự linh hoạt tuyệt đối trong việc lựa chọn quỹ, mức đóng góp cũng như thời hạn đầu tư.
            </p>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Image
            src="/images/gallery-05.jpeg"
            alt="Đầu tư vào quỹ Fonds Sparsplan"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-[10%] pb-6 pt-16 text-center">
        <h2 className="text-4xl font-bold text-[#0876c7]">Thế giới mới của đầu tư tài chính</h2>
        <p className="mx-auto mt-6 max-w-3xl text-3xl leading-snug text-black">
          Chúng tôi sẽ giúp bạn tận dụng tối đa<br />các cơ hội từ thị trường tài chính.
        </p>
        <p className="mt-10 text-3xl font-bold text-black">Hãy để thời gian là vàng của bạn</p>
      </section>

      <section className="px-[10%] pb-12 pt-2">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="text-center">
            <GrowthChartIcon className="mx-auto mb-4 h-40 w-40 text-brand-gold" />
            <h3 className="text-3xl font-bold text-black">Tiết kiệm định kỳ</h3>
            <p className="mx-auto mt-4 max-w-xs text-left text-2xl leading-snug text-black">
              Với việc tiết kiệm đều đặn và có kế hoạch, bạn sẽ tạo dựng được quỹ dự phòng cho các mục tiêu và mong muốn tài chính của mình. Hãy đầu tư vào các quỹ hàng đầu bằng cách tận dụng hiệu ứng trung bình chi phí.
            </p>
          </div>
          <div className="text-center">
            <PiggyBankIcon className="mx-auto mb-4 h-40 w-48 text-brand-gold" />
            <h3 className="text-3xl font-bold text-black">Mức tiết kiệm tối thiểu thấp</h3>
            <p className="mx-auto mt-4 max-w-xs text-left text-2xl leading-snug text-black">
              Chỉ từ 25 Euro mỗi tháng, bạn có thể hiện thực hóa kế hoạch tiết kiệm của mình.
            </p>
          </div>
          <div className="text-center">
            <FlexibleChoiceIcon className="mx-auto mb-4 h-40 w-48 text-brand-gold" />
            <h3 className="text-3xl font-bold text-black">Linh hoạt cao</h3>
            <ul className="mx-auto mt-4 max-w-md list-disc text-left text-2xl leading-snug text-black">
              <li>Bạn có nhiều lựa chọn khác nhau để phù hợp với các mục tiêu cá nhân của mình</li>
              <li>Có thể thay đổi quỹ bất cứ lúc nào</li>
              <li>Chọn tần suất tiết kiệm phù hợp với bạn</li>
              <li>Tùy thuộc vào loại kế hoạch tiết kiệm, bạn có thể tăng, tạm dừng hoặc giảm số tiền tiết kiệm xuống mức tối thiểu</li>
              <li>Chọn kế hoạch tiết kiệm có hoặc không có thời gian hợp đồng cố định</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-[10%] py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[36%_1fr]">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-black">
              Các đối tác tài chính hàng<br />đầu bên các bạn:
            </h2>
            <ul className="mt-14 text-3xl leading-snug text-black">
              <li>• DWS Investment Deutschland</li>
              <li>• Allianz Global Investors</li>
            </ul>
          </div>
          <div className="space-y-12">
            <PartnerLogos />
            <div className="flex justify-center lg:justify-end">
              <Link
                href="/archive"
                className="inline-flex min-h-10 w-full max-w-xs items-center justify-center rounded bg-brand-gold px-4 py-2 text-center text-sm leading-snug text-white transition-colors hover:bg-brand-gold-dark"
              >
                Tìm hiểu: Quỹ đầu tư (Fonds) là gì? Sự khác biệt giữa ETF và Fonds
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="px-[10%] pb-16">
        <div className="mx-auto max-w-7xl">
          <CostAverageDiagram />
        </div>
      </div>
    </article>
  );
}
