import Image from "next/image";
import { GeneraliLogoMark, HealthCrossIcon } from "./MarketingAssets";

const healthBenefits = [
  "Hoàn trả đến 90% chi phí sau khi bảo hiểm y tế công (GKV) đã chi trả trước đối với răng giả, mão răng, inlay và trám răng",
  "Hỗ trợ chi phí lên đến 200 euro cho các dịch vụ chăm sóc phòng ngừa nha khoa như vệ sinh răng chuyên nghiệp trong mỗi hai năm dương lịch liên tiếp",
  "Bảo hiểm y tế du lịch nước ngoài toàn cầu không áp dụng mức tự chi trả, với nhiều quyền lợi toàn diện như vận chuyển y tế hồi hương khi cần thiết",
];

export function HealthInsuranceArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[48%_52%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Bảo hiểm sức khỏe
            </h1>
            <ul className="compact-allow-grow mt-20 list-disc space-y-2 pl-6 leading-tight">
              <li>Bảo hiểm Y tế</li>
              <li>Bảo hiểm tai nạn</li>
              <li>Bảo hiểm mất sức lao động</li>
            </ul>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/gallery-03.jpeg"
            alt="Bảo hiểm sức khỏe"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_140px]">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm y tế tư - Privatkrankenversicherung
            </h2>
            <HealthCrossIcon className="mx-auto h-24 w-24 text-brand-gold lg:h-28 lg:w-28" />
          </div>

          <div className="mt-12 max-w-7xl text-2xl leading-snug">
            <h3 className="text-3xl font-bold">Bảo vệ sức khỏe của bạn tốt hơn</h3>
            <p className="mt-10">
              Các quyền lợi của bảo hiểm y tế công (GKV) bị giới hạn. Điều đó có thể đồng nghĩa với việc bạn phải tự chi trả một khoản chi phí khá lớn! Bảo hiểm bổ sung y tế của Generali Deutschland Krankenversicherung sẽ giúp bảo vệ bạn trước những chi phí này. Với “Mein Gesundheitsplan”, bạn có thể lấp đầy những thiếu hụt lớn về quyền lợi trong các lĩnh vực quan trọng như nha khoa, hỗ trợ thị lực và du lịch nước ngoài, qua đó bổ sung tối ưu cho gói bảo hiểm y tế công cơ bản của mình.
            </p>

            <ul className="mt-14 list-disc pl-6">
              {healthBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_360px]">
            <div className="text-center text-2xl text-neutral-500 lg:text-left lg:pl-[32%]">
              <p className="font-bold">Sản phẩm của Generali</p>
              <p className="mt-16">
                Generali Deutschland Krankenversicherung AG<br />
                Adenauerring 7, 81737 München
              </p>
            </div>
            <div className="w-[220px] max-w-full">
              <GeneraliLogoMark className="!w-full" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
