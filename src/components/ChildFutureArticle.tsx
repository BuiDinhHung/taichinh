import Image from "next/image";
import Link from "next/link";

export function ChildFutureArticle() {
  return (
    <article className="bg-white text-black">
      {/* Section 1: hero split */}
      <section className="grid min-h-[460px] lg:grid-cols-[55%_45%]">
        <div className="flex items-center justify-center bg-[#e8f0f9] px-[7%] py-12">
          <div className="w-full max-w-2xl">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl">
              Kế hoạch cho tương lai của tôi
            </h1>
            <div className="mt-5 text-base leading-relaxed sm:text-lg">
              <p className="text-lg font-bold sm:text-xl">Bạn đã chuẩn bị tài chính cho tương lai của con chưa?</p>
              <div className="mt-4 space-y-2">
                <p>• <strong>16 tuổi</strong> – con bạn cần <strong>4.000 €</strong> để <strong>học lái xe</strong>?</p>
                <p>• <strong>18 tuổi</strong> – con bạn cần <strong>10.000 €</strong> để <strong>du học</strong> hoặc nâng cao kiến thức tại Mỹ hay Anh?</p>
                <p>• <strong>20 tuổi</strong> – con bạn cần <strong>12.000 €</strong> để <strong>bắt đầu sống tự lập</strong> với căn hộ riêng?</p>
                <p>• <strong>25 tuổi</strong> – con bạn cần <strong>15.000 €</strong> để <strong>mua ô tô</strong> và xây dựng cuộc sống riêng?</p>
              </div>
              <div className="mt-4 flex justify-center">
                <Link
                  href="/dat-lich"
                  className="inline-flex items-center bg-brand-gold px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
                >
                  Đặt lịch tư vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[460px]">
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

      {/* Section 2: full-width text */}
      <section className="px-[10%] py-5 sm:py-6">
        <h2 className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Giải pháp tiết kiệm linh hoạt cho trẻ em
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
          <p>
            Điều quan trọng nhất đối với cha mẹ là con cái của mình. Với <strong><em>&ldquo;Kế hoạch tương lai của tôi&rdquo;</em></strong>, bạn có thể bắt đầu sớm việc tích lũy cho con – hiện nay còn có thể thông qua đầu tư vào vàng.
          </p>
          <p>
            Đồng thời, bạn cũng bảo vệ cho con trước những hệ quả của bệnh tật hoặc tai nạn, trong trường hợp xấu nhất có thể dẫn đến nhu cầu chăm sóc dài hạn, không thể đi học, thậm chí suy giảm khả năng lao động hoặc mất khả năng làm việc.
          </p>
          <p>
            <strong>Đặc biệt:</strong> Giá trị tích lũy trong hợp đồng còn có thể được dùng làm tài sản thế chấp để vay tiền ngân hàng khi cần thiết.
          </p>
        </div>
      </section>

      {/* Section 3: text left, image bottom-right */}
      <section className="px-[10%] pb-16 pt-10">
        <h2 className="text-center text-3xl font-bold leading-tight sm:text-4xl">
          Chỉ với một kế hoạch tài chính thông minh –<br />
          mọi ước mơ đều trong tầm tay.
        </h2>

        <div className="mt-4 grid items-end gap-6 lg:grid-cols-[52%_48%]">
          {/* Text left */}
          <div className="text-sm leading-relaxed sm:text-base">
            <p className="font-bold">
              Tiết kiệm chỉ từ 25,00 € mỗi tháng – từ tiền trợ cấp trẻ em (Kindergeld)
            </p>

            <div className="mt-5">
              <p className="font-bold">Linh hoạt và hiệu quả – kế hoạch đầu tư cho con bạn:</p>
              <div className="mt-2 space-y-1">
                <p>• Đầu tư toàn bộ hoặc một phần số tiền đóng vào các quỹ đầu tư (Fonds) lãi suất từ 6% trở lên</p>
                <p>• Lựa chọn tới 10 trong số 50 quỹ, có thể thay đổi quỹ bất kỳ lúc nào</p>
                <p>• Điều chỉnh số tiền đóng hàng tháng hoặc đóng thêm bất kỳ lúc nào</p>
                <p>• Tạm ứng lên đến 8 lần trong thời gian hợp đồng có hiệu lực</p>
                <p>• Rút tiền bất cứ lúc nào, theo nhu cầu</p>
                <p>• Có thể quy đổi thành vàng</p>
                <p>• Nhận tiền dưới dạng lương hưu hàng tháng, một lần, hoặc kết hợp cả hai</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-bold">Tăng cường bảo vệ tài chính với các lựa chọn kết hợp:</p>
              <div className="mt-2 space-y-1">
                <p>• Bảo hiểm mất sức lao động</p>
                <p>• Bảo hiểm tai nạn</p>
                <p>• Bảo hiểm rủi ro</p>
              </div>
            </div>
          </div>

          {/* Image right, aligned to bottom */}
          <div className="hidden lg:flex lg:items-end lg:justify-center lg:overflow-visible">
            <Image
              src="/images/child-toy-train.png"
              alt="Bé chơi đùa – kế hoạch tương lai cho con"
              width={560}
              height={480}
              className="h-auto w-[125%] max-w-none -translate-x-8 object-contain"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
