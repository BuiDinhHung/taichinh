function DamageCycleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M96 28a48 48 0 0 1 4 57" />
      <path d="M95 18v17h17" />
      <path d="M24 92a48 48 0 0 1-4-57" />
      <path d="M25 102V85H8" />
      <path d="M52 28 68 40 58 53l20 13-16 24 8-21-22-13 9-13-15-10z" />
      <path d="M43 83h39" />
      <path d="M47 84c3 8 20 10 31 1" />
    </svg>
  );
}

const mainCoverage = [
  "Thiệt hại tài sản thuê tại các tòa nhà và phòng thuê tư nhân",
  "Thiệt hại tài sản thuê từ các thiết bị máy tính bảng và laptop cho mục đích học tập",
  "Thiệt hại tài sản của đồng nghiệp",
  "Mất mát yêu cầu: Bảo vệ nạn nhân trong trường hợp thiệt hại tài sản có chủ ý",
  "Mất chìa khóa của người khác, cả chìa khóa cá nhân và công việc, bao gồm những chìa khóa liên quan đến các công việc tình nguyện được bảo hiểm",
  "Thiệt hại liên quan đến hành động giúp đỡ người khác",
  "Thiệt hại từ việc vận hành hệ thống điện mặt trời hoặc nhiệt mặt trời",
  "Thiệt hại do rò rỉ dầu từ các bể dầu sưởi ấm tại các ngôi nhà riêng hoặc nhà hai gia đình được bảo hiểm trong nước",
];

const otherCoverage = [
  "Căn hộ sở hữu cho thuê trong nước",
  "Thiệt hại và mất mát tài sản thuê mượn của người khác lên đến 100.000 Euro (trong trường hợp mất mát: 300 Euro tự chịu)",
  "Bảo hiểm cho Pedelecs (xe đạp điện) lên đến 250 Watt",
  "Bảo hiểm thiệt hại do trẻ em, cháu hoặc các cá nhân không đủ năng lực chịu trách nhiệm pháp lý gây ra (bao gồm sự khoan dung trong trường hợp không có vi phạm nghĩa vụ giám sát)",
  "Thiệt hại trong quá trình xếp dỡ hàng hóa (tự chịu: 100 Euro)",
  "Bảo hiểm SFR-Retter bao gồm tự chịu trong bảo hiểm vỏ xe khi mượn xe ô tô",
  "Cam kết bảo hiểm tốt nhất trong 5 năm (chỉ có trong chính sách bảo vệ tài sản)",
];

export function PersonalLiabilityArticle() {
  return (
    <article className="bg-[#e8f0f9] text-black">
      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_180px]">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl lg:pl-20 lg:text-left">
              Bảo hiểm trách nhiệm cá nhân<br />Privathaftpflichtversicherung
            </h1>
            <DamageCycleIcon className="mx-auto h-36 w-36 text-brand-gold lg:h-44 lg:w-44" />
          </div>

          <h2 className="mt-12 text-center text-3xl font-bold leading-tight lg:text-4xl">
            Các thành phần của chính sách bảo hiểm tài sản.
          </h2>

          <div className="mx-auto mt-16 max-w-6xl text-2xl leading-snug">
            <h3 className="text-3xl font-bold">Bảo vệ nếu bạn gây thiệt hại cho người khác</h3>
            <p className="mt-10">
              Tai nạn có thể xảy ra nhanh chóng, có thể dẫn đến hậu quả nghiêm trọng: Khi gây thiệt hại cho người khác, bạn phải bồi thường thiệt hại đó.
            </p>
            <p>
              Do đó, bảo hiểm trách nhiệm là điều không thể thiếu trong mỗi gia đình. Với bảo hiểm trách nhiệm cá nhân của Generali, bạn được bảo vệ khỏi rủi ro phải trả các khoản bồi thường lớn.
            </p>
            <p>
              Bên cạnh đó, bạn cũng được bảo vệ khỏi những yêu cầu không hợp lý từ các vụ việc thiệt hại.
            </p>

            <h3 className="mt-10 text-3xl font-bold">Được bảo hiểm lên đến 50 triệu Euro:</h3>
            <ul className="mt-8 list-disc space-y-1 pl-6">
              {mainCoverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl text-2xl leading-snug">
          <h2 className="text-3xl font-bold">Các mục bảo hiểm khác:</h2>
          <ul className="mt-8 list-disc space-y-1 pl-6">
            {otherCoverage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
