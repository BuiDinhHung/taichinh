import { DocumentCheckIcon, GeneraliLogoMark, HandEuroIcon, PiggyBankIcon, StopwatchIcon } from "./MarketingAssets";

const employeeBenefits = [
  {
    icon: DocumentCheckIcon,
    title: "Bảo đảm đóng góp",
    text: "Tùy thuộc vào gói bảo hiểm bạn chọn, 80% hoặc 60% các khoản đóng góp của bạn sẽ được đảm bảo cho lương hưu của bạn vào thời điểm nhận lương hưu đã thỏa thuận.",
  },
  {
    icon: PiggyBankIcon,
    title: "Lương hưu bổ sung",
    text: "Bạn sẽ nhận lương hưu suốt đời hoặc có thể chọn nhận một khoản thanh toán một lần.",
  },
  {
    icon: HandEuroIcon,
    title: "Hỗ trợ từ nhà nước",
    text: "Các khoản đóng góp vào bảo hiểm trực tiếp của bạn sẽ được miễn thuế và đóng góp xã hội lên đến một mức nhất định.",
  },
];

const companyBenefits = [
  {
    icon: DocumentCheckIcon,
    title: "Đáp ứng yêu cầu pháp lý",
    text: "Bạn cung cấp một hình thức bảo hiểm hưu trí doanh nghiệp.",
  },
  {
    icon: HandEuroIcon,
    title: "Động lực bền vững",
    text: "Các khoản tiết kiệm chi phí phụ trợ lương có thể được cấp dưới dạng khoản đóng góp bổ sung mà không phát sinh chi phí.",
  },
  {
    icon: StopwatchIcon,
    title: "Ít công việc quản lý",
    text: "Không ảnh hưởng khi phá sản, không có nghĩa vụ điều chỉnh lương hưu hiện tại.",
  },
];

function BenefitSeal() {
  return (
    <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-[#0077a9] text-center text-2xl leading-tight text-white shadow-[inset_0_0_0_5px_#0077a9,inset_0_0_0_8px_#d8edf7]">
      Vorteile für<br />Arbeitnehmer und<br />Arbeitgeber
    </div>
  );
}

export function CorporatePensionArticle() {
  return (
    <article className="bg-neutral-100 text-black">
      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="whitespace-nowrap text-center font-bold leading-tight text-[clamp(0.85rem,2.4vw,2.5rem)]">
            Bảo hiểm hưu trí doanh nghiệp- Betriebliche Altenvorsorgen (bAV)
          </h1>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_280px]">
            <div className="min-w-0">
              <div className="text-center">
                <p className="text-3xl font-bold">Chiến lược cộng hưởng:</p>
                <h2 className="mt-5 text-3xl font-bold leading-tight">
                  Tiết kiệm thuế với Bảo hiểm trực tiếp (bAV)
                </h2>
              </div>

              <div className="mt-8 text-2xl leading-snug">
                <h3 className="font-bold">Bảo hiểm trực tiếp là gì?</h3>
                <p className="mt-4">
                  Đây là công thức tối ưu cho bảo hiểm hưu trí doanh nghiệp, kết hợp hoàn hảo giữa sự hỗ trợ của nhà nước, sự an toàn và lợi nhuận.
                </p>

                <h3 className="mt-5 font-bold">Các khoản hỗ trợ bạn có thể nhận được</h3>
                <p className="mt-4">
                  Là người lao động, hay bạn là doanh nghiệp từ tháng 1 năm 2026 tiền đóng vào bảo hiểm trực tiếp cho mỗi người lao động bạn sẽ tiết kiệm được các mức như sau:
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-6">
                  <li>Mỗi tháng 338,00 € hoặc mỗi năm được 4.056,00 € miễn đóng góp vào bảo hiểm xã hội</li>
                  <li>và tối đa mỗi tháng 676,00 € hoặc mỗi năm là 8.112,00€ được miễn vào thuế thu nhập và được tính vào chi phí kinh doanh theo Mục 3 số 63 của luật thuế thu nhập (EStG)</li>
                </ul>

              </div>
            </div>

            <aside className="grid content-start justify-center gap-20 pt-2">
              <BenefitSeal />
              <div className="w-64 max-w-full">
                <GeneraliLogoMark className="!h-auto !w-full" />
              </div>
            </aside>
          </div>

          <p className="mt-8 whitespace-nowrap text-3xl font-bold italic">
            Đối với một GmbH và giám đốc điều hành cũng được hưởng quyền lợi về thuế này
          </p>
        </div>
      </section>

      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold">Lợi ích cho bạn là người lao động</h2>
          <div className="mt-6 grid gap-12 text-center lg:grid-cols-3">
            {employeeBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title}>
                  <Icon className="mx-auto h-32 w-32 text-brand-gold" />
                  <h3 className="mt-4 text-3xl font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-4 max-w-sm text-2xl leading-snug">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          <ul className="mx-auto mt-6 max-w-6xl list-disc space-y-1 pl-6 text-2xl leading-snug">
            <li><strong>Nâng cao mức sống</strong> thông qua việc xây dựng một khoản lương hưu bổ sung.</li>
            <li><strong>Hỗ trợ từ nhà nước</strong> thông qua việc tiết kiệm thuế và đóng góp bảo hiểm xã hội.</li>
            <li><strong>Tận hưởng khoản đóng góp bắt buộc của người sử dụng lao động</strong> lên tới 15% của khoản đóng góp chuyển đổi lương.</li>
            <li><strong>Thanh trượt linh hoạt</strong> để phân chia các khoản đóng góp và số dư - theo hướng an toàn hoặc lợi nhuận.</li>
            <li><strong>Ngay cả khi thị trường không thuận lợi:</strong> tùy theo gói bảo hiểm bạn chọn, 80% hoặc 60% các khoản đóng góp của bạn sẽ được bảo đảm vào thời điểm nhận lương hưu đã thỏa thuận.</li>
            <li><strong>Có thể mang theo hoặc tiếp tục hợp đồng cá nhân</strong> khi thay đổi công ty.</li>
            <li><strong>Không tính số dư hợp đồng vào trợ cấp công dân.</strong></li>
            <li>
              <strong>Lợi ích bổ sung có thể có:</strong>
              <ul className="mt-1 list-disc pl-8">
                <li><strong>Phụ cấp khách hàng bAV 10%.</strong></li>
                <li><strong>Tận hưởng lợi ích cao hơn</strong> khi kết hợp bảo vệ sức lao động và bảo hiểm hưu trí doanh nghiệp.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold">Lợi ích cho doanh nghiệp</h2>
          <div className="mt-6 grid gap-12 text-center lg:grid-cols-3">
            {companyBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title}>
                  <Icon className="mx-auto h-32 w-32 text-brand-gold" />
                  <h3 className="mt-4 text-3xl font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-4 max-w-sm text-2xl leading-snug">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          <ul className="mx-auto mt-8 max-w-5xl list-disc space-y-1 pl-6 text-2xl font-bold leading-snug">
            <li>Bảo hiểm hưu trí doanh nghiệp thay vì tăng lương</li>
            <li>Bảo hiểm trực tiếp thay vì tiết kiệm xây dựng nhà</li>
            <li>Chuẩn bị cho gia đình của chính bạn</li>
            <li>Bảo hiểm hưu trí cho các đồng sở hữu</li>
            <li>Lợi ích cho bạn với tư cách là nhà tuyển dụng</li>
            <li>Lợi ích cho nhân viên của bạn</li>
            <li>Các lợi ích bổ sung nếu bao gồm bảo hiểm mất khả năng lao động</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
