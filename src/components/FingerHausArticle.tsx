import Image from "next/image";
import { FingerHausLogoMark } from "./MarketingAssets";

const reasons = [
  {
    img: "/images/fingerhaus-chat-luong.png",
    title: "Chất lượng vượt trội",
    text:
      "Chất lượng tốt nhất luôn được lan truyền rộng rãi: 96% chủ đầu tư sẵn sàng giới thiệu FingerHaus mà không hề do dự.",
  },
  {
    img: "/images/fingerhaus-tiet-kiem-nang-luong.png",
    title: "Phương pháp xây dựng tiết kiệm năng lượng",
    text:
      "Vật liệu gỗ tự nhiên cùng kết cấu tường thông minh, kết hợp với công nghệ nhà ở và hệ thống sưởi hiện đại, tạo nên không gian sống trong lành và thoải mái, đồng thời bảo vệ môi trường cũng như giúp tiết kiệm chi phí.",
  },
  {
    img: "/images/fingerhaus-on-dinh-gia.png",
    title: "Ổn định giá cả & tính cá nhân hóa",
    text:
      "Chính sách đảm bảo giá trong 24 tháng mang lại sự an tâm tối đa về chi phí. Sự đa dạng của các mẫu nhà giúp đáp ứng mức độ cá nhân hóa cao nhất. Toàn bộ quá trình lên kế hoạch và thực hiện đều được cung cấp trọn gói từ một đơn vị duy nhất.",
  },
];

function AwardStack() {
  return (
    <div className="flex w-full flex-wrap items-end justify-center gap-8 lg:flex-nowrap lg:gap-14">
      <FingerHausLogoMark className="min-w-[280px]" />
      <Image
        src="/images/kunden-awards.jpeg"
        alt="Giáº£i thÆ°á»Ÿng FingerHaus"
        width={1267}
        height={404}
        className="h-auto w-full max-w-3xl object-contain"
      />
    </div>
  );

  return (
    <div className="flex w-full flex-wrap items-end justify-center gap-8 lg:flex-nowrap lg:gap-14">
      <FingerHausLogoMark className="min-w-[280px]" />

      <div className="flex h-72 w-48 flex-col items-center justify-center rounded-full border-4 border-sky-500 bg-white text-center text-sky-600 shadow-sm">
        <p className="text-lg font-bold">CrefoZert</p>
        <p className="text-sm">Creditreform<br />Bonitätszertifikat</p>
        <p className="mt-2 text-4xl font-bold">2024</p>
        <p className="mt-2 text-xs">Gültig bis:<br />8/2025</p>
      </div>

      <div className="relative flex h-72 w-72 items-end justify-center">
        {[0, 18, 36, 54].map((offset) => (
          <div
            key={offset}
            className="absolute bottom-4 h-48 w-28 border border-neutral-300 bg-white shadow"
            style={{ left: `${offset}px` }}
          >
            <div className="bg-neutral-400 px-2 py-1 text-center text-sm font-bold text-white">DEUTSCHLAND TEST</div>
            <div className="mt-5 text-center text-xl font-bold text-red-600">FINGER<br />HAUS</div>
          </div>
        ))}
        <div className="absolute bottom-0 right-6 h-56 w-36 border-2 border-neutral-400 bg-white shadow-xl">
          <div className="bg-neutral-500 px-2 py-2 text-center text-lg font-bold text-white">DEUTSCHLAND TEST</div>
          <div className="mt-4 text-center text-xl font-bold text-red-600">BESTE</div>
          <div className="text-center text-sm font-bold">FERTIGHAUSANBIETER</div>
          <div className="mt-2 text-center text-2xl font-bold text-orange-500">FINGER<br />HAUS</div>
          <div className="mt-2 bg-red-700 py-1 text-center text-xl font-bold text-white">MONEY</div>
        </div>
        <div className="absolute right-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4b000] text-center text-xs font-bold text-white">
          5<br />Jahre<br />in Folge
        </div>
      </div>

      <div className="flex h-72 w-40 flex-col overflow-hidden border-4 border-neutral-900 bg-white text-center shadow">
        <div className="bg-neutral-900 p-2 text-sm font-bold text-white">DEUTSCHES INSTITUT<br />FÜR SERVICE-QUALITÄT</div>
        <div className="flex flex-1 flex-col justify-center px-2">
          <p className="text-4xl font-bold">1.PLATZ</p>
          <p className="mt-2 text-xl font-bold text-red-700">Testsieger<br />Fertighaus-<br />anbieter</p>
        </div>
        <div className="bg-[#f6d85a] p-2 text-sm font-bold">www.disq.de</div>
        <div className="bg-red-700 py-2 text-2xl font-bold text-white">ntv</div>
      </div>
    </div>
  );
}

export function FingerHausArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[560px] lg:grid-cols-[63%_37%]">
        <div className="flex items-center justify-center bg-[#e8f0f9] px-[6%] py-12">
          <div className="max-w-4xl text-center">
            <p className="text-4xl leading-tight">Ngôi nhà mơ ước của bạn</p>
            <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl">
              FingerHaus - Nhà ở tiền chế<br />Mỗi ngôi nhà là một tác phẩm độc đáo
            </h1>
            <ul className="mx-auto mt-8 max-w-3xl list-disc space-y-8 text-left text-2xl leading-snug">
              <li>FingerHaus thiết kế và xây dựng nhà hoàn toàn theo ý tưởng riêng biệt và mong muốn của bạn</li>
              <li>FingerHaus đại diện cho chất lượng xuất sắc, các khái niệm nhà đa dạng và tất cả đều đến từ một mối duy nhất.</li>
            </ul>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-[560px]">
          <Image
            src="/images/prefab-house-fingerhaus.jpeg"
            alt="Nhà ở tiền chế FingerHaus"
            fill
            priority
            sizes="(min-width: 1024px) 49vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-neutral-100 px-[10%] py-10 text-center">
        <p className="text-4xl leading-tight">Những lý do tuyệt vời</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Để bạn chọn Công ty FingerHaus xây ngôi nhà theo yêu cầu của bạn
        </h2>
        <ul className="mx-auto mt-4 inline-block list-disc text-left text-2xl leading-snug">
          <li>Hiệu quả năng lượng và tính bền vững với hỗ trợ từ nhà nước</li>
          <li>Chất lượng &ldquo;Made in Germany&rdquo;</li>
        </ul>
      </section>

      <section className="bg-neutral-100 px-[10%] py-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div className="flex h-28 items-center justify-center">
                <Image
                  src={reason.img}
                  alt={reason.title}
                  width={200}
                  height={112}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-tight">{reason.title}</h3>
              <p className="mt-4 max-w-md text-2xl leading-snug">{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-7xl text-center">
          <h2 className="text-4xl font-bold leading-tight">Giải thưởng của FingerHaus GmbH</h2>
          <p className="mt-2 text-2xl">Đây là những giải thưởng Chất lượng, mà bạn có thể tin cậy.</p>
          <div className="mt-5">
            <AwardStack />
          </div>
        </div>
      </section>
    </article>
  );
}
