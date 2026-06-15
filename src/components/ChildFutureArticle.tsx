import Image from "next/image";
import Link from "next/link";

export function ChildFutureArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[55%_45%]">
        <div className="flex items-center justify-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="max-w-4xl">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl">
              Kế hoạch cho tương lai của tôi
            </h1>

            <div className="mt-20 text-2xl leading-snug">
              <h2 className="text-3xl font-bold">Bạn đã chuẩn bị tài chính cho tương lai của con chưa?</h2>
              <ul className="mt-10 list-disc space-y-2 pl-6">
                <li><strong>16 tuổi</strong> - con bạn cần <strong>4.000 €</strong> để <strong>học lái xe?</strong></li>
                <li><strong>18 tuổi</strong> - con bạn cần <strong>10.000 €</strong> để <strong>du học</strong> hoặc nâng cao kiến thức tại Mỹ hay Anh?</li>
                <li><strong>20 tuổi</strong> - con bạn cần <strong>12.000 €</strong> để <strong>bắt đầu sống tự lập</strong> với căn hộ riêng?</li>
                <li><strong>25 tuổi</strong> - con bạn cần <strong>15.000 €</strong> để <strong>mua ô tô</strong> và xây dựng cuộc sống riêng?</li>
              </ul>
            </div>
            <Link
              href="/dat-lich"
              className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-3 text-xl font-semibold text-white transition-colors hover:bg-brand-gold-dark"
            >
              Đặt lịch tư vấn
            </Link>
          </div>
        </div>

        <div className="relative min-h-[340px] lg:min-h-[520px]">
          <Image
            src="/images/gallery-04.jpeg"
            alt="Kế hoạch tài chính cho tương lai của con trẻ"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </section>

      <section className="px-[10%] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl text-2xl leading-snug">
          <h2 className="text-center text-4xl font-bold leading-tight">Giải pháp tiết kiệm linh hoạt cho trẻ em</h2>

          <div className="mt-10 space-y-8">
            <p>
              Điều quan trọng nhất đối với cha mẹ là con cái của mình. Với <strong><em>“Kế hoạch tương lai của tôi”</em></strong>, bạn có thể bắt đầu sớm việc tích lũy cho con - hiện nay còn có thể thông qua đầu tư vào vàng.
            </p>
            <p>
              Đồng thời, bạn cũng bảo vệ cho con trước những hệ quả của bệnh tật hoặc tai nạn, trong trường hợp xấu nhất có thể dẫn đến nhu cầu chăm sóc dài hạn, không thể đi học, thậm chí suy giảm khả năng lao động hoặc mất khả năng làm việc.
            </p>
            <p>
              <strong>Đặc biệt:</strong> Giá trị tích lũy trong hợp đồng còn có thể được dùng làm tài sản thế chấp để vay tiền ngân hàng khi cần thiết.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-[10%] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight sm:text-5xl">
            Chỉ với một kế hoạch tài chính thông minh - mọi ước mơ đều trong tầm tay.
          </h2>

          <div className="relative mt-14 min-h-[520px]">
            <div className="max-w-4xl text-2xl leading-snug">
              <h3 className="text-3xl font-bold">Tiết kiệm chỉ từ 25,00 € mỗi tháng - từ tiền trợ cấp trẻ em (Kindergeld)</h3>

              <div className="mt-12">
                <h3 className="text-3xl font-bold">Linh hoạt và hiệu quả - kế hoạch đầu tư cho con bạn:</h3>
                <ul className="mt-4 list-disc space-y-1 pl-6">
                  <li>Đầu tư toàn bộ hoặc một phần số tiền đóng vào các quỹ đầu tư (Fonds) lãi suất từ 6% trở lên</li>
                  <li>Lựa chọn tới 10 trong số 50 quỹ, có thể thay đổi quỹ bất kỳ lúc nào</li>
                  <li>Điều chỉnh số tiền đóng hàng tháng hoặc đóng thêm bất kỳ lúc nào</li>
                  <li>Tạm ứng lên đến 8 lần trong thời gian hợp đồng có hiệu lực</li>
                  <li>Rút tiền bất cứ lúc nào, theo nhu cầu</li>
                  <li>Có thể quy đổi thành vàng</li>
                  <li>Nhận tiền dưới dạng lương hưu hàng tháng, một lần, hoặc kết hợp cả hai</li>
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="text-3xl font-bold">Tăng cường bảo vệ tài chính với các lựa chọn kết hợp:</h3>
                <ul className="mt-4 list-disc space-y-1 pl-6">
                  <li>Bảo hiểm mất sức lao động</li>
                  <li>Bảo hiểm tai nạn</li>
                  <li>Bảo hiểm rủi ro</li>
                </ul>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[42%] max-w-[620px] lg:block">
              <Image
                src="/images/child-toy-train.jpeg"
                alt=""
                width={720}
                height={520}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
