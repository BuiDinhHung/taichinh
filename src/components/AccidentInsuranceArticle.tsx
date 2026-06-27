import Image from "next/image";

function AccidentIcon({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/icon-person.png"
      alt=""
      aria-hidden="true"
      width={160}
      height={160}
      className={`object-contain ${className}`}
    />
  );

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M96 28a48 48 0 0 1 4 57" />
      <path d="M95 18v17h17" />
      <path d="M24 92a48 48 0 0 1-4-57" />
      <path d="M25 102V85H8" />
      <circle cx="60" cy="28" r="10" />
      <path d="M45 52c0-10 6-15 15-15s15 5 15 15v38" />
      <path d="M45 54h30" />
      <path d="M60 54v22" />
      <path d="M60 76l18 8" />
      <path d="M75 56h12" />
    </svg>
  );
}

const accidentBenefits = [
  "Tiến triển tăng lên 1.000 % PLUS",
  "Bồi thường cố định cho đau đớn do gãy xương: 500 € (có thể tăng lên đến 2.000 €)",
  "Thêm 100.000 Euro cho trường hợp tàn tật toàn phần (trong UNFALL AKTIV)",
  "Thanh toán bồi thường tàn tật ngay sau khi chẩn đoán cho một số chấn thương tai nạn mà không cần xác nhận thiệt hại vĩnh viễn lên đến 10.000 € (UNFALL AKTIV)",
  "Quản lý phục hồi chủ động sau một tai nạn nghiêm trọng (ví dụ: trị liệu, giới thiệu chuyên gia, các khóa học về sức khỏe)",
  "Thêm 10 % vào bồi thường tàn tật cho các tai nạn với chấn thương đầu nghiêm trọng, nếu có đội mũ bảo hiểm",
  "Các quyền lợi bổ sung như bồi thường tử vong, tiền hỗ trợ ngày nằm viện hoặc trợ cấp tai nạn có thể được bao gồm.",
];

export function AccidentInsuranceArticle() {
  return (
    <article className="bg-[#f7f4e8] text-black">
      <section className="px-[10%] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_160px]">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm tai nạn- Unfallversicherung
            </h1>
            <AccidentIcon className="mx-auto h-28 w-28 text-brand-gold lg:h-32 lg:w-32" />
          </div>

          <div className="mt-8 max-w-7xl text-base leading-relaxed sm:text-lg">
            <h2 className="text-xl font-bold sm:text-2xl">Bảo vệ trước hậu quả tài chính của một tai nạn</h2>
            <p className="mt-6">
              Có hàng ngàn loại tai nạn và sự cố có thể xảy ra trong cuộc sống hàng ngày. Tại Đức, mỗi năm có gần chín triệu tai nạn xảy ra, phần lớn trong số đó xảy ra tại nhà hoặc trong thời gian giải trí. Bảo hiểm tai nạn của Generali sẽ bảo vệ bạn trước các hậu quả tài chính của một tai nạn:
            </p>

            <h3 className="mt-8 text-xl font-bold sm:text-2xl">Các quyền lợi bao gồm:</h3>
            <ul className="mt-5 list-disc space-y-1.5 pl-5">
              {accidentBenefits.map((item) => (
                <li key={item}>
                  {item.split(/(UNFALL AKTIV)/).map((part, i) =>
                    part === "UNFALL AKTIV" ? <strong key={i}>{part}</strong> : part,
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
