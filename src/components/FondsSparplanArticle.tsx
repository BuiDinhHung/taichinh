import Image from "next/image";
import Link from "next/link";
import { AllianzLogoMark, DwsLogoMark, FlexibleChoiceIcon, GrowthChartIcon, PiggyBankIcon } from "./MarketingAssets";

function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-24">
      <DwsLogoMark />
      <AllianzLogoMark />
    </div>
  );
}

function CostAverageDiagram() {
  return (
    <section className="mt-16">
      <Image
        src="/images/image_new/fonds-monthly-shares-chart.jpeg"
        alt="Hiệu ứng Cost-Average"
        width={720}
        height={407}
        className="mx-auto h-auto w-full max-w-6xl object-contain"
      />
    </section>
  );

  return (
    <section className="mt-16">
      <h2 className="text-center text-3xl font-normal text-black">Lợi ích của đầu tư dài hạn</h2>
      <h3 className="mx-auto mt-10 max-w-3xl text-center text-3xl font-bold leading-tight text-black">
        Hiệu ứng Cost-Average - tận dụng lợi ích từ việc tiết kiệm đều đặn
      </h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="relative h-64 w-full max-w-sm">
            <div className="absolute left-0 top-0 flex gap-3 opacity-45">
              {["JANUAR", "FEBRUAR", "MÄRZ", "APRIL", "MAI"].map((month, idx) => (
                <div key={month} className="text-center text-xs text-[#aaa]" style={{ marginTop: `${idx % 2 === 0 ? 12 : 30}px` }}>
                  <p>{month}</p>
                  <div className="mt-1 flex h-9 w-16 items-center justify-center bg-[#ddd] text-brand-gold">
                    €
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-20 -translate-x-1/2">
              <div className="flex h-32 w-24 items-center justify-center bg-brand-gold text-2xl font-bold text-white">
                FONDS
              </div>
              <div className="mx-auto h-0 w-0 border-l-[28px] border-r-[28px] border-t-[36px] border-l-transparent border-r-transparent border-t-[#ffdf3a]" />
            </div>
          </div>
          <div className="relative h-56 w-full max-w-sm border-b-2 border-[#bfbfbf] border-l-2 border-[#bfbfbf]">
            <svg viewBox="0 0 360 200" className="absolute inset-0 h-full w-full">
              <polyline points="20,80 60,95 100,120 140,140 180,110 220,70 260,95 310,50 340,40" fill="none" stroke="#999" strokeWidth="4" />
              {[45, 90, 135, 180, 225].map((x, idx) => (
                <g key={x}>
                  <line x1={x} y1="20" x2={x} y2="170" stroke="#c8aa22" strokeWidth="3" />
                  <text x={x - 18} y="16" fill="#aaa" fontSize="14">100 €</text>
                  <circle cx={x} cy={[82, 110, 140, 110, 70][idx]} r="7" fill="#c8aa22" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-[-70px] left-0 right-0 flex justify-between text-center text-brand-gold">
              {[4, 8, 10, 6, 2, 30].map((value) => (
                <div key={value}>
                  <div className="mx-auto flex h-11 w-8 items-center justify-center bg-brand-gold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-20 text-center text-xl font-bold text-brand-gold">Monatlich gekaufte Anteile&nbsp;&nbsp;&nbsp;&nbsp; Gesamt</p>
        </div>

        <div className="space-y-36 text-2xl leading-snug text-black">
          <p>
            <strong>1.</strong>Là nhà đầu tư, bạn đầu tư một khoản tiền cố định mỗi tháng và mua cổ phần từ một quỹ đầu tư.
          </p>
          <p>
            <strong>2.</strong>Tùy vào diễn biến giá, bạn sẽ nhận được nhiều hoặc ít cổ phần quỹ cho số tiền cố định của mình trong một tháng.
          </p>
        </div>

        <div className="space-y-14 text-2xl leading-snug text-black">
          <div className="grid grid-cols-2 gap-8 text-center text-brand-gold">
            <div>
              <div className="mx-auto flex h-16 w-12 items-center justify-center bg-brand-gold text-2xl text-white">10</div>
              <p className="mt-3 font-bold">Mehr Anteile</p>
            </div>
            <div>
              <div className="mx-auto flex h-16 w-12 items-center justify-center bg-brand-gold text-2xl text-white">4</div>
              <p className="mt-3 font-bold">Weniger Anteile</p>
            </div>
          </div>
          <p>
            <strong>3.</strong> Nhờ vậy, bạn có thể đạt được giá mua trung bình thấp hơn đáng kể so với cổ phần quỹ của mình - một hiệu ứng có thể càng mạnh mẽ hơn theo thời gian.
          </p>
          <div className="grid grid-cols-2 gap-8 text-center text-brand-gold">
            <div>
              <div className="mx-auto flex h-16 w-12 items-center justify-center bg-brand-gold text-2xl text-white">20</div>
              <p className="mt-3 font-bold">Einmaliger<br />Kauf</p>
            </div>
            <div>
              <div className="mx-auto flex h-16 w-12 items-center justify-center bg-brand-gold text-2xl text-white">30</div>
              <p className="mt-3 font-bold">Fonds-<br />Sparplan</p>
            </div>
          </div>
          <p>
            <strong>4.</strong> Bằng cách sử dụng hiệu ứng Trung bình Chi phí (Cost-Average), bạn có thể mua được nhiều cổ phần hơn cho số tiền đầu tư của mình theo thời gian.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FondsSparplanArticle() {
  return (
    <article className="bg-white">
      <section className="grid min-h-[520px] lg:grid-cols-[44%_56%]">
        <div className="flex items-center bg-[#e8f0f9] px-8 py-12">
          <div className="max-w-[560px] text-black">
            <h1 className="text-5xl font-bold leading-tight">
              Đầu tư vào Quỹ -<br />Fonds Sparsplan
            </h1>
            <p className="mt-6 text-3xl leading-snug">
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

      <section className="px-[10%] py-16 text-center">
        <h2 className="text-4xl font-bold text-[#0876c7]">Thế giới mới của đầu tư tài chính</h2>
        <p className="mx-auto mt-6 max-w-3xl text-3xl leading-snug text-black">
          Chúng tôi sẽ giúp bạn tận dụng tối đa<br />các cơ hội từ thị trường tài chính.
        </p>
        <p className="mt-10 text-3xl font-bold text-black">Hãy để thời gian là vàng của bạn</p>
      </section>

      <section className="px-[10%] py-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="text-center">
            <GrowthChartIcon className="mx-auto h-40 w-40 text-brand-gold" />
            <h3 className="text-3xl font-bold text-black">Tiết kiệm định kỳ</h3>
            <p className="mx-auto mt-8 max-w-xs text-left text-2xl leading-snug text-black">
              Với việc tiết kiệm đều đặn và có kế hoạch, bạn sẽ tạo dựng được quỹ dự phòng cho các mục tiêu và mong muốn tài chính của mình. Hãy đầu tư vào các quỹ hàng đầu bằng cách tận dụng hiệu ứng trung bình chi phí.
            </p>
          </div>
          <div className="text-center">
            <PiggyBankIcon className="mx-auto h-40 w-48 text-brand-gold" />
            <h3 className="text-3xl font-bold text-black">Mức tiết kiệm tối thiểu thấp</h3>
            <p className="mx-auto mt-8 max-w-xs text-left text-2xl leading-snug text-black">
              Chỉ từ 25 Euro mỗi tháng, bạn có thể hiện thực hóa kế hoạch tiết kiệm của mình.
            </p>
          </div>
          <div className="text-center">
            <FlexibleChoiceIcon className="mx-auto h-40 w-48 text-brand-gold" />
            <h3 className="text-3xl font-bold text-black">Linh hoạt cao</h3>
            <ul className="mx-auto mt-8 max-w-md list-disc text-left text-2xl leading-snug text-black">
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
                className="inline-flex min-h-20 w-full max-w-lg items-center justify-center bg-brand-gold px-6 text-center text-2xl leading-snug text-white transition-colors hover:bg-brand-gold-dark"
              >
                Tìm hiểu: Quỹ đầu tư (Fonds) là gì?<br />Sự khác biệt giữa ETF và Fonds
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
