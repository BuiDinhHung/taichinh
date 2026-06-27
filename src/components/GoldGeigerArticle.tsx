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
  "Mặt trước được dập nổi với hình ảnh Cổng Brandenburg và bề mặt \"pearl finish\" độc đáo, tạo hiệu ứng ánh sáng đặc biệt.",
  "Viền thỏi có khía đặc biệt, thường chỉ thấy ở đồng xu, giúp chống làm giả hiệu quả.",
  "Mặt sau có họa tiết bản đồ nước Đức, được tạo hình nổi với độ chi tiết cao.",
  "Số sê-ri riêng biệt, được in rõ ràng trên mỗi thỏi vàng.",
  "Lớp phủ UV đặc biệt, hiển thị trọng lượng và số sê-ri – chỉ thấy được dưới ánh sáng đen (tia cực tím).",
  "Hộp bảo vệ an toàn, giữ gìn giá trị và bảo vệ thỏi vàng khỏi hư hại vật lý.",
  "Giấy chứng nhận xác thực, đi kèm mỗi sản phẩm để đảm bảo nguồn gốc và chất lượng.",
];

export function GoldGeigerArticle() {
  return (
    <article className="bg-white text-black">
      {/* Hero */}
      <section className="grid min-h-[520px] lg:grid-cols-[52%_48%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Kế hoạch Tiết kiệm Vàng Geiger: Một ý tưởng tuyệt vời cho tương lai.
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-snug sm:text-2xl">
              Chỉ với mức khởi điểm từ 25 Euro, bạn cũng có thể trở thành chủ sở hữu của vàng thật. Với Kế hoạch Tiết kiệm Vàng Geiger, bạn sẽ sở hữu vàng vật chất nguyên chất ngay từ đồng Euro đầu tiên.
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

      {/* Benefits header */}
      <section className="px-[10%] pb-6 pt-14 text-center">
        <p className="text-lg leading-tight text-black">Lợi ích của bạn</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight">Tại sao nên đầu tư vào vàng?</h2>
      </section>

      {/* 3 benefit columns */}
      <section className="px-[10%] pb-14 pt-8">
        <div className="mx-auto grid max-w-5xl gap-12 text-center lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center">
                <Icon className="mx-auto h-36 w-36 text-brand-gold" />
                <h3 className="mt-5 text-3xl font-bold">{benefit.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-2xl leading-snug">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Purchase options */}
      <section className="px-[10%] pb-14">
        <div className="mx-auto max-w-5xl space-y-8 text-sm leading-relaxed text-text-default sm:text-base">
          <div>
            <h2 className="text-base font-bold uppercase tracking-wide text-black sm:text-lg">
              Hình thức mua trực tiếp
            </h2>
            <p className="mt-3">
              • Đầu tư trực tiếp và chính xác vào bất kỳ số lượng nào trong số những thỏi vàng cao cấp 50 gram &ldquo;Cộng hòa Liên bang Đức&rdquo; của chúng tôi.
            </p>
            <p className="mt-1">
              • Không có thời gian chờ đợi khi giao hàng.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold uppercase tracking-wide text-black sm:text-lg">
              Mua hàng tháng dưới hình thức tiết kiệm
            </h2>
            <p className="mt-3">
              • Mua định kỳ hàng Tháng, Quý hoặc Năm từ 25 EUR hoặc mua một lần từ 250 EUR trở lên.
            </p>
            <p className="mt-1">
              • Vàng thỏi cao cấp 50 gram &ldquo;Cộng hòa Liên bang Đức&rdquo; độc quyền của hãng Geiger Metall GmbH.
            </p>
          </div>
        </div>
      </section>

      {/* Quality / Security section */}
      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[44%_1fr]">
          <div className="relative mx-auto aspect-[1.05] w-full max-w-xl lg:translate-y-4 lg:scale-[1.08]">
            <Image
              src="/images/geiger-gold-security.png"
              alt="Chất lượng và bảo mật thỏi vàng Geiger"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">
              Chất lượng hàng đầu – An tâm tuyệt đối
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-default sm:text-base">
              Các đặc điểm bảo mật đặc biệt đã được phát triển nhằm bảo vệ thỏi vàng tối đa khỏi nguy cơ bị làm giả. Mỗi chi tiết đều được thiết kế cẩn trọng để đảm bảo tính xác thực và độ tin cậy cao nhất:
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-text-default sm:text-base">
              {securityPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rotate-45 border-2 border-black bg-[#0076bd]" />
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
