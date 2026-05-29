import Image from "next/image";
import { DirectionSignIcon, HandEuroIcon, UmbrellaIcon } from "./MarketingAssets";

const benefits = [
  {
    icon: UmbrellaIcon,
    title: "Sự an toàn",
    text:
      "Vàng giúp bảo toàn sức mua trong dài hạn. Mặc dù giá vàng cũng biến động, nhưng nó đã chứng minh được sự ổn định của mình qua nhiều thế kỷ qua.",
  },
  {
    icon: DirectionSignIcon,
    title: "Tính linh hoạt",
    text:
      "Bạn có tùy chọn mua vàng thông qua kế hoạch tiết kiệm bắt đầu từ €25, hoặc bằng khoản thanh toán một lần trị giá €250.",
  },
  {
    icon: HandEuroIcon,
    title: "Ưu đãi thuế",
    text:
      "Lợi nhuận từ việc giao dịch vàng vật chất được miễn thuế thu nhập sau thời gian nắm giữ 12 tháng.",
  },
];

const securityPoints = [
  "Mặt trước được dập nổi với hình ảnh Cổng Brandenburg và bề mặt “pearl finish” độc đáo, tạo hiệu ứng ánh sáng đặc biệt.",
  "Viền thỏi có khía đặc biệt, thường chỉ thấy ở đồng xu, giúp chống làm giả hiệu quả.",
  "Mặt sau có họa tiết bản đồ nước Đức, được tạo hình nổi với độ chi tiết cao.",
  "Số sê-ri riêng biệt, được in rõ ràng trên mỗi thỏi vàng.",
  "Lớp phủ UV đặc biệt, hiển thị trọng lượng và số sê-ri - chỉ thấy được dưới ánh sáng đen (tia cực tím).",
  "Hộp bảo vệ an toàn, giữ gìn giá trị và bảo vệ thỏi vàng khỏi hư hại vật lý.",
  "Giấy chứng nhận xác thực, đi kèm mỗi sản phẩm để đảm bảo nguồn gốc và chất lượng.",
];

export function GoldGeigerArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[52%_48%]">
        <div className="flex items-center bg-[#e8f0f9] px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Kế hoạch Tiết kiệm Vàng Geiger: Một ý tưởng tuyệt vời cho tương lai.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-snug sm:text-2xl">
              Chỉ với mức khởi điểm từ 25 Euro, bạn cũng có thể trở thành chủ sở hữu của vàng thật. Với Kế hoạch Tiết kiệm Vàng Geiger, bạn sẽ sở hữu vàng vật chất nguyên chất ngay từ đồng Euro đầu tiên. Bạn tích lũy để sở hữu một thỏi vàng 50 gram với chất lượng cao nhất. Bạn hoàn toàn tự quyết định các điều khoản và điều kiện áp dụng.
            </p>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-[520px]">
          <Image
            src="/images/pdf-field-retirement.jpeg"
            alt="Kế hoạch tiết kiệm vàng Geiger"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:py-20">
        <p className="text-3xl leading-tight">Lợi ích của bạn</p>
        <h2 className="mt-10 text-4xl font-bold leading-tight">Tại sao nên đầu tư vào vàng?</h2>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center">
                <Icon className="mx-auto h-32 w-32 text-brand-gold sm:h-40 sm:w-40" />
                <h3 className="mt-6 text-3xl font-bold">{benefit.title}</h3>
                <p className="mx-auto mt-2 max-w-sm text-2xl leading-snug">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl space-y-10 text-2xl leading-snug">
          <div>
            <h2 className="text-3xl font-bold uppercase">Hình thức mua trực tiếp</h2>
            <ul className="mt-8 list-disc space-y-2 pl-6">
              <li>Đầu tư trực tiếp và chính xác vào bất kỳ số lượng nào trong số những thỏi vàng cao cấp 50 gram "Cộng hòa Liên bang Đức" của chúng tôi.</li>
              <li>Không có thời gian chờ đợi khi giao hàng.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold uppercase">Mua hàng tháng dưới hình thức tiết kiệm</h2>
            <ul className="mt-8 list-disc space-y-2 pl-6">
              <li>Mua định kỳ hàng Tháng, Quý hoặc Năm từ 25 EUR hoặc mua một lần từ 250 EUR trở lên.</li>
              <li>Vàng thỏi cao cấp 50 gram "Cộng hòa Liên bang Đức" độc quyền của hãng Geiger Metall GmbH.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[44%_1fr]">
          <div className="relative mx-auto aspect-[1.05] w-full max-w-xl">
            <Image
              src="/images/geiger-gold-security.png"
              alt="Chất lượng và bảo mật thỏi vàng Geiger"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight">Chất lượng hàng đầu - An tâm tuyệt đối</h2>
            <p className="mt-8 text-2xl leading-snug">
              Các đặc điểm bảo mật đặc biệt đã được phát triển nhằm bảo vệ thỏi vàng tối đa khỏi nguy cơ bị làm giả. Mỗi chi tiết đều được thiết kế cẩn trọng để đảm bảo tính xác thực và độ tin cậy cao nhất:
            </p>
            <ul className="mt-10 space-y-3 text-2xl leading-snug">
              {securityPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 rotate-45 border-2 border-black bg-[#0076bd]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
