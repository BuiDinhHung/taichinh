import Image from "next/image";
import type { ReactNode } from "react";

const advantages = [
  "Phê duyệt khoản vay nhanh chóng, đáp ứng kịp thời nhu cầu đầu tư và kinh doanh.",
  "Gia tăng khả năng thanh toán và tạo thêm nguồn lực tài chính cho doanh nghiệp.",
  "Chi phí lãi vay có thể được khấu trừ thuế theo quy định hiện hành.",
  "Dễ dàng lập kế hoạch tài chính nhờ lịch thanh toán cố định và minh bạch.",
];

const loanInformation = [
  "Không yêu cầu thế chấp bằng bất động sản hoặc tài sản bảo đảm.",
  "Mức vay từ **1.000 EUR** đến **750.000 EUR**.",
  "Thời hạn vay lên đến **120 tháng**.",
  "Điều kiện và lãi suất được xây dựng phù hợp với từng hồ sơ doanh nghiệp.",
  "Có thể đáp ứng các nhu cầu tài trợ đặc biệt theo yêu cầu.",
];

const minimumRequirements = [
  "Đã hoạt động ít nhất 3 năm.",
  "Có trụ sở chính tại Đức.",
  "Thuộc một trong các loại hình doanh nghiệp được chấp nhận như: GmbH, GmbH & Co. KG, AG, UG, GbR, OHG, KG, e.K., doanh nghiệp tư nhân (Einzelunternehmen) hoặc người hành nghề tự do (Freiberufler).",
];

const requiredDocuments = [
  "Báo cáo tài chính của 2 năm gần nhất, không quá 2 năm, có chữ ký của chủ doanh nghiệp và cố vấn thuế (Steuerberater).",
  "Báo cáo BWA và SuSa của năm tài chính hoàn chỉnh gần nhất.",
  "Báo cáo BWA và SuSa hiện tại, được lập trong vòng 3 tháng gần nhất.",
  "Sao kê tài khoản ngân hàng của 90 ngày gần nhất.",
  "Thư trình bày mục đích vay vốn (Absichtserklärung).",
  "Bản tự khai thông tin (Selbstauskunft) đối với công ty hợp danh.",
  "Thông tin tài khoản ngân hàng doanh nghiệp.",
  "Mã số thuế của doanh nghiệp.",
  "Mã số thuế cá nhân (Steuer-ID).",
  "Giấy đồng ý cho phép kiểm tra thông tin tín dụng SCHUFA.",
  "Chứng minh nhân dân hoặc hộ chiếu kèm giấy phép cư trú còn hiệu lực.",
];

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{renderInline(item)}</li>
      ))}
    </ul>
  );
}

function TextSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`px-[10%] py-8 sm:py-10 ${className}`}>
      <div className="mx-auto max-w-7xl text-xl leading-snug">{children}</div>
    </section>
  );
}

export function BusinessLoanArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[47%_53%]">
        <div className="flex items-center bg-[#f7f5ed] px-[10%] py-12">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Vay vốn dành cho doanh nghiệp
            </h1>
            <p className="mt-10 max-w-lg text-base leading-relaxed sm:text-lg">
              Chúng tôi hỗ trợ Quý doanh nghiệp mở rộng nguồn lực tài chính,
              gia tăng sự chủ động và tự do trong mọi quyết định kinh doanh.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/vaycondoanhnghiepdautrang.png"
            alt="Giải pháp vay vốn dành cho doanh nghiệp"
            fill
            priority
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <TextSection>
        <h2 className="text-3xl font-bold">Giải pháp tối ưu hóa dòng tiền dành cho doanh nghiệp vừa và nhỏ</h2>
        <p className="mt-6">
          Văn phòng tư vấn Tài chính Vũ Thế Bảo mang đến giải pháp tư vấn tài
          chính toàn diện dành cho doanh nghiệp vừa và nhỏ, giúp bạn tiếp cận
          nguồn vốn nhanh chóng và hiệu quả. Với mạng lưới đối tác tài chính
          uy tín, quy trình đăng ký đơn giản cùng thời gian phản hồi nhanh,
          chúng tôi giúp doanh nghiệp tiết kiệm thời gian và tối ưu hóa nguồn
          lực trong quá trình tìm kiếm giải pháp tài chính.
        </p>
        <p className="mt-5">
          Ngoài các khoản vay phục vụ nhu cầu bổ sung vốn lưu động hoặc đầu
          tư, doanh nghiệp còn có thể lựa chọn các hình thức tài trợ tài sản
          như cho thuê tài chính (<strong>Leasing</strong>) hoặc thuê mua (
          <strong>Mua trả góp</strong>). Chúng tôi luôn đồng hành để mang đến
          giải pháp tài chính phù hợp với từng giai đoạn phát triển của doanh
          nghiệp.
        </p>
      </TextSection>

      <TextSection className="pb-12 sm:pb-16">
          <h2 className="text-3xl font-bold">Vay vốn dành cho doanh nghiệp</h2>
          <p className="mt-6">
            <strong>Chương trình DV FinanzierungPlus</strong> cung cấp các giải
            pháp vay vốn được thiết kế linh hoạt theo nhu cầu thực tế của doanh
            nghiệp. Dù bạn cần tái cấp vốn (đáo nợ), bổ sung vốn lưu động hay
            đầu tư mở rộng hoạt động kinh doanh, chúng tôi luôn là đối tác đáng
            tin cậy trong việc nâng cao khả năng thanh toán và hỗ trợ phát triển
            bền vững.
          </p>
          <p className="mt-5">
            Vay vốn là lựa chọn tối ưu khi doanh nghiệp muốn bảo toàn nguồn vốn
            tự có để phục vụ hoạt động kinh doanh. Trong quá trình xét duyệt,
            bạn chỉ cần cung cấp các hồ sơ cần thiết (chẳng hạn báo cáo tài
            chính năm) dưới hình thức điện tử. Sau thời gian thẩm định ngắn, bạn
            sẽ nhận được phương án tài chính được xây dựng riêng, phù hợp với
            nhu cầu và năng lực tài chính của doanh nghiệp.
          </p>
          <p className="mt-1">
            Với khoản thanh toán hàng tháng cố định bao gồm cả gốc và lãi, doanh
            nghiệp có thể chủ động lập kế hoạch tài chính và kiểm soát dòng tiền
            trong suốt thời hạn vay.
          </p>

          <h3 className="mt-6 text-2xl font-bold leading-tight">Ưu điểm nổi bật</h3>
          <BulletList items={advantages} />

          <h3 className="mt-6 text-2xl font-bold leading-tight">Thông tin khoản vay</h3>
          <BulletList items={loanInformation} />

          <h3 className="mt-6 text-2xl font-bold leading-tight">Điều kiện tối thiểu</h3>
          <p className="mt-4">Doanh nghiệp của bạn cần đáp ứng các điều kiện sau:</p>
          <BulletList items={minimumRequirements} />

          <h3 className="mt-6 text-2xl font-bold leading-tight">Hồ sơ cần thiết</h3>
          <p className="mt-4">Để hoàn tất hồ sơ vay vốn, cần các giấy tờ sau:</p>
          <BulletList items={requiredDocuments} />
      </TextSection>
    </article>
  );
}
