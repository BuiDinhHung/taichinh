import { ProfileCircleIcon } from "./MarketingAssets";

const disabilityTriggers = [
  "Không còn có thể làm công việc của mình do bệnh tật hoặc tai nạn",
  "Bị suy giảm khả năng lao động ít nhất 50%",
  "Trong thời gian tối thiểu sáu tháng",
];

const basicAbilitiesLeft = ["nhìn", "nói", "nghe", "đi lại", "ngồi", "đứng", "viết"];
const basicAbilitiesRight = ["cầm nắm", "sử dụng một bàn tay", "sử dụng một cánh tay", "quỳ/gập người", "nâng/mang vác", "leo cầu thang"];
const premiumAbilities = ["lái xe", "khả năng hành động tự chủ", "giữ thăng bằng", "năng lực trí tuệ"];

export function WorkAbilityInsuranceArticle() {
  return (
    <article className="bg-neutral-100 text-black">
      <section className="px-[10%] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_150px]">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm mất sức lao động-<br />Arbeitskraftabsicherung
            </h1>
            <ProfileCircleIcon className="mx-auto h-28 w-28 text-brand-gold lg:h-32 lg:w-32" />
          </div>

          <div className="mt-4 max-w-7xl text-2xl leading-snug">
            <h2 className="text-xl font-bold">Bảo vệ giá trị sức lao động của bạn</h2>
            <p className="mt-4">
              Nhiều người đi làm chỉ nhận ra quá muộn rằng khả năng lao động của mình thực sự quý giá đến mức nào. Nếu vì lý do sức khỏe mà không còn có thể tiếp tục công việc, bạn rất dễ rơi vào khủng hoảng tài chính. Gia đình, tiền thuê nhà hay các khoản trả góp mua nhà - điều gì sẽ xảy ra nếu nguồn thu nhập đột ngột mất đi? Khoảng cách từ thiếu hụt tài chính đến khó khăn sinh tồn thực sự không xa. Vì vậy, hãy bảo vệ giá trị sức lao động của bạn theo đúng nhu cầu cá nhân.
            </p>
            <p className="mt-4">
              Bảo hiểm mất khả năng lao động của Generali Deutschland Lebensversicherung mang đến nhiều quyền lợi như: đảm bảo điều chỉnh phạm vi bảo hiểm mà không cần kiểm tra sức khỏe lại, bảo vệ trước sự mất giá do lạm phát thông qua kế hoạch tăng động và/ hoặc điều chỉnh quyền lợi, cùng mức phí khởi điểm hấp dẫn dành cho người mới đi làm. Điều quan trọng dành cho công chức: bảo hiểm mất khả năng làm việc trong ngành công vụ đã luôn được tích hợp sẵn.
            </p>

            <h3 className="mt-6 text-xl font-bold">Bảo hiểm mất khả năng lao động</h3>
            <p className="mt-4">Bảo vệ thu nhập hàng tháng dưới hình thức trợ cấp hưu trí nếu bạn:</p>
            <ul className="mt-4 list-disc pl-6">
              {disabilityTriggers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-xl font-bold">Bù đắp mất thu nhập do bệnh tật</h3>
            <p className="mt-4">
              Nếu tham gia bảo hiểm y tế công, bạn có thể kết hợp bảo hiểm mất khả năng lao động với trợ cấp ngày nghỉ bệnh từ Generali Deutschland Krankenversicherung trong khuôn khổ kế hoạch tích lũy tài sản và an toàn tài chính.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[10%] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl text-2xl leading-snug">
          <h2 className="text-xl font-bold">Bảo hiểm năng lực cơ bản (gói cơ bản)</h2>
          <p className="mt-6">
            Bảo vệ thu nhập hàng tháng dưới hình thức trợ cấp nếu mất một trong các năng lực cơ bản sau:
          </p>
          <div className="mt-6 grid gap-10 sm:grid-cols-2">
            <ul className="list-disc pl-6">
              {basicAbilitiesLeft.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="list-disc pl-6">
              {basicAbilitiesRight.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="mt-8 text-xl font-bold">Bảo hiểm năng lực cơ bản (gói cao cấp)</h2>
          <p className="mt-4">Ngoài các quyền lợi của gói cơ bản, còn bảo hiểm thêm các năng lực:</p>
          <ul className="mt-4 list-disc pl-6">
            {premiumAbilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-xl font-bold">Bảo hiểm mất khả năng lao động (gói cao cấp)</h2>
          <p className="mt-4">
            Gói bảo hiểm này bảo vệ thu nhập của bạn nếu do bệnh tật hoặc tai nạn mà bạn không còn có thể thực hiện công việc ít nhất 50%, hoặc khi mất một trong 13 năng lực cơ bản được bảo hiểm (xem bảo hiểm năng lực cơ bản).
          </p>
        </div>
      </section>
    </article>
  );
}
