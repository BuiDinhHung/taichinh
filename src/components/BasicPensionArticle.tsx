import { DirectionSignIcon, DocumentCheckIcon, PiggyBankIcon } from "./MarketingAssets";

const coreBenefits = [
  {
    icon: DocumentCheckIcon,
    title: "Đảm bảo kế hoạch",
    text: "Bạn sẽ nhận được lương hưu hàng tháng suốt đời từ khi bắt đầu nghỉ hưu.",
  },
  {
    icon: PiggyBankIcon,
    title: "Điều kiện hấp dẫn",
    text: "Các khoản đóng góp có thể được khấu trừ một trăm phần trăm vào thuế.",
  },
  {
    icon: DirectionSignIcon,
    title: "Linh hoạt cao",
    text: "Có thể thực hiện các khoản đóng góp định kỳ hoặc một lần, cũng như các khoản đóng góp bổ sung.",
  },
];

export function BasicPensionArticle() {
  return (
    <article className="bg-[#e8f0f9] text-black">
      <section className="px-[10%] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Bảo hiểm hưu trí cơ bản- Basisrente-Rürup Rente
          </h1>

          <ul className="mx-auto mt-16 max-w-6xl list-disc space-y-9 pl-6 text-2xl font-bold leading-snug lg:text-3xl">
            <li>Chủ động tài chính cho nghỉ hưu - được miễn vào thuế thu nhập 100%</li>
            <li>Những ai chưa đủ thời gian đóng bảo hiểm hưu trí để xin cư trú vô thời hạn hay vào quốc tịch Đức thì nên tranh thủ cơ hội này</li>
          </ul>

          <h2 className="mt-24 text-center text-3xl font-bold leading-tight lg:text-4xl">
            Đây là những ưu điểm của lương hưu cơ bản của bạn
          </h2>

          <div className="mt-12 grid gap-12 text-center lg:grid-cols-3">
            {coreBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title}>
                  <Icon className="mx-auto h-32 w-32 text-brand-gold" />
                  <h3 className="mt-8 text-3xl font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-10 max-w-xs text-2xl leading-snug">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-[10%] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold leading-tight lg:text-5xl">
            Những điều cần biết về hưu trí cơ bản
          </h2>

          <div className="mt-16 space-y-14 text-2xl leading-snug lg:text-3xl">
            <section>
              <h3 className="text-3xl font-bold">Lương hưu cơ bản là gì?</h3>
              <ul className="mt-10 list-disc space-y-2 pl-8">
                <li>Lương hưu cơ bản, còn gọi là Rürup-Rente, cung cấp một khoản lương hưu hàng tháng đảm bảo suốt đời. Nó được nhà nước hỗ trợ và khuyến khích.</li>
                <li>Lợi ích của bạn: Bạn miễn thuế các khoản đóng góp, và mức hỗ trợ của nhà nước sẽ tăng hàng năm</li>
                <li>Lương hưu sau này sẽ bị đánh thuế theo mức thuế cá nhân, thường là thấp. Sau khi bắt đầu nhận lương hưu, bạn cũng có thể chọn quỹ hưu trí cho tiền tích lũy của mình, nơi bạn có thể được hưởng lãi suất từ các cơ hội sinh lời trên thị trường chứng khoán.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-bold">Tiền đóng bảo hiểm hưu trí được miễn thuế:</h3>
              <ul className="mt-10 list-disc space-y-2 pl-8">
                <li>Kể từ năm 2023, bạn có thể khấu trừ 100% các khoản đóng góp.</li>
                <li>Mức tối đa của tất cả các khoản đóng góp vào bảo hiểm hưu trí có thể khấu trừ thuế trong năm 2025 là 29.344 € mỗi năm đối với người độc thân, và 58.688 € mỗi năm đối với các cặp vợ chồng hoặc bạn đời đã đăng ký thuế chung.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-bold">Ai được hưởng quyền lợi này:</h3>
              <ul className="mt-10 list-disc space-y-2 pl-8">
                <li>Bảo hiểm hưu trí cơ bản phù hợp với hầu hết những ai có thu nhập chịu thuế - dù là người tự kinh doanh, nghề tự do, nhân viên hay công chức.</li>
                <li>Những ai chưa đủ thời gian đóng bảo hiểm hưu trí để xin cư trú vô thời hạn hay vào quốc tịch Đức thì nên tranh thủ cơ hội này</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}
