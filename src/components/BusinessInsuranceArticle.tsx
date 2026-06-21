import Image from "next/image";

const highlights = [
  "Bảo vệ toàn diện mạnh mẽ với các bảo hiểm quan trọng cho doanh nghiệp có doanh thu lên đến 1,5 triệu Euro trong một gói tổng hợp",
  "Tiết kiệm thời gian tối đa: Không cần hàng loạt cuộc tư vấn",
  "Hỗ trợ bạn và doanh nghiệp trong quá trình phát triển",
  "Bảo vệ đầy đủ ngay lập tức nhờ bảo hiểm chênh lệch",
  "Chấp nhận các khoản thanh toán từ bảo hiểm trước đó; bảo hiểm hiện tại của bạn có thể được mở rộng ngay lập tức một cách chính xác và mạnh mẽ",
  "Không cần tính toán phức tạp về số tiền bảo hiểm",
  "Có thể bảo hiểm cho nhiều địa điểm (ví dụ: chi nhánh)",
  "Bảo hiểm thiên tai và các nguy hiểm không xác định có thể chọn bổ",
  "Bảo hiểm dịch vụ mạng (Cyber-Service-Versicherung) có thể chọn thêm",
];

const benefitCatalog = [
  {
    title: "Bảo vệ toàn diện",
    body: "Bao gồm tất cả các loại bảo hiểm quan trọng cho doanh nghiệp, từ bảo hiểm tài sản, bảo hiểm trách nhiệm dân sự đến bảo hiểm gián đoạn kinh doanh.",
  },
  {
    title: "Bảo vệ tài sản và thiết bị",
    body: "Đảm bảo an toàn cho các tài sản vật chất, thiết bị và cơ sở hạ tầng của doanh nghiệp.",
  },
  {
    title: "Bảo vệ trách nhiệm pháp lý",
    body: "Bao gồm bảo hiểm trách nhiệm đối với các thiệt hại gây ra cho bên thứ ba trong quá trình hoạt động của doanh nghiệp.",
  },
  {
    title: "Bảo hiểm gián đoạn kinh doanh",
    body: "Đảm bảo rằng doanh nghiệp vẫn có thể duy trì hoạt động và không bị thiệt hại tài chính lớn nếu có sự cố xảy ra.",
  },
  {
    title: "Bảo vệ nhân sự",
    body: "Bảo hiểm cho nhân viên của doanh nghiệp trước các rủi ro liên quan đến công việc.",
  },
  {
    title: "Bảo hiểm thiên tai và nguy hiểm không xác định",
    body: "Cung cấp sự bảo vệ đối với các nguy hiểm không thể đoán trước, chẳng hạn như thiên tai hay sự kiện bất ngờ.",
  },
  {
    title: "Bảo vệ trong trường hợp lừa đảo hoặc tấn công mạng",
    body: "Bảo vệ doanh nghiệp khỏi các mối đe dọa trực tuyến và sự cố bảo mật.",
  },
  {
    title: "Tư vấn và hỗ trợ liên tục",
    body: "Dịch vụ tư vấn hỗ trợ trong suốt quá trình triển khai bảo hiểm và khi có sự cố xảy ra.",
  },
];

function TextSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-[10%] py-8 sm:py-10 ${className}`}>
      <div className="mx-auto max-w-7xl text-xl leading-snug">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-0.5 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function BusinessInsuranceArticle() {
  return (
    <article className="bg-white text-black">
      <section className="grid min-h-[520px] lg:grid-cols-[47%_53%]">
        <div className="flex items-center bg-[#e8f0f9] px-[10%] py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bảo hiểm doanh nghiệp
            </h1>
            <h2 className="mt-16 text-3xl font-bold leading-tight sm:text-4xl">
              Doanh nghiệp của bạn được bảo vệ toàn diện trong gói bảo hiểm tổng hợp.
            </h2>
            <p className="mt-12 text-2xl leading-snug">
              Khái niệm FirmenSAFE là một gói sản phẩm bảo hiểm mạnh mẽ dành cho các doanh nghiệp có doanh thu
              lên đến 1,5 triệu euro. Nhờ cách tiếp cận toàn diện, gói này cung cấp những giải pháp bảo vệ quan
              trọng nhất trong một sản phẩm duy nhất và đó là ở mức tiêu chuẩn hàng đầu trên thị trường.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/gallery-06.jpeg"
            alt="Bảo hiểm doanh nghiệp"
            fill
            priority
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <TextSection>
        <h2 className="text-4xl font-bold">Điểm nổi bật của khái niệm FirmenSAFE:</h2>
        <div className="mt-12">
          <BulletList items={highlights} />
        </div>
      </TextSection>

      <TextSection>
        <h2 className="text-4xl font-bold sm:text-5xl">Danh mục quyền lợi của khái niệm FirmenSAFE</h2>
        <ul className="mt-6 list-disc space-y-1 pl-6">
          {benefitCatalog.map((item) => (
            <li key={item.title} className="font-bold">{item.title}</li>
          ))}
        </ul>
        <p className="mt-4">
          Gói bảo hiểm FirmenSAFE giúp doanh nghiệp của bạn phát triển an toàn và bền vững, cung cấp bảo vệ
          toàn diện và linh hoạt.
        </p>
      </TextSection>

      <TextSection>
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold">a. Bảo hiểm trách nhiệm nghề nghiệp/kinh doanh</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Bảo vệ toàn diện 10 triệu Euro",
                  "Bao gồm bảo hiểm trách nhiệm cá nhân và chủ nuôi thú cưng",
                  "Bao gồm bảo hiểm trách nhiệm sản phẩm",
                  "Bao gồm bảo hiểm trách nhiệm môi trường",
                  "Bao gồm bảo hiểm thiệt hại môi trường",
                ]}
              />
            </div>
            <h3 className="mt-10 text-3xl font-bold">Trường hợp ví dụ: Tai nạn khi bốc dỡ hàng hóa</h3>
            <p className="mt-8">
              Một người lái xe nâng trong quá trình bốc dỡ hàng hóa lùi ra ngoài khuôn viên công ty và ra đường.
              Một chiếc xe buýt đang di chuyển phải tránh và va chạm với nhiều chiếc xe khác. Bên cạnh sự hoảng
              sợ, thiệt hại cũng rất lớn: Tổng chi phí cho thiệt hại tài sản và thiệt hại người lên đến khoảng
              2 triệu €. Generali đã hoàn trả toàn bộ chi phí này và xử lý các yêu cầu bồi thường của những
              người bị thiệt hại.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold">b. Bảo hiểm tài sản bao gồm thiệt hại do gián đoạn kinh doanh</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Mức bồi thường tối đa 1 triệu Euro",
                  "Bảo vệ toàn diện với tất cả các rủi ro, bao gồm bảo hiểm mở rộng cho bão, trộm cắp và vỡ kính, bảo hiểm kỹ thuật cũng như vận chuyển hàng hóa trong công việc",
                  "Thiệt hại do gián đoạn kinh doanh vì các nguyên nhân như hỏa hoạn, nước dẫn, bão/mưa đá, bảo vệ chống nhiễm trùng, hư hỏng hàng đông lạnh, thuốc, mất mát do xung đột nội bộ/vandalisme, đình công và bãi công, va chạm xe, và khói",
                  "Chấp nhận các khoản thanh toán từ bảo hiểm trước đó",
                ]}
              />
            </div>
            <h3 className="mt-10 text-3xl font-bold">Trường hợp ví dụ: Hỏng hóc đắt đỏ</h3>
            <p className="mt-3">
              Tại cửa hàng đồ gia dụng Seiler, một ấm đun nước bị hỏng gây ra cháy và gây thiệt hại trị giá
              32.000 € cho nội thất và hàng hóa. Ngoài ra, cửa hàng phải đóng cửa một tháng. Tuy nhiên, nhờ vào
              gói bảo hiểm FirmenSAFE, bà Seiler đã nhận được toàn bộ chi phí cho nội thất, hàng hóa và các chi
              phí phát sinh. Bà cũng nhận được khoản bồi thường cho các chi phí liên tục và lợi nhuận bị mất
              trong suốt thời gian ngừng hoạt động, với mức bồi thường tối đa lên đến 1 triệu Euro cho tổng
              thiệt hại.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold">c. Bảo hiểm vận chuyển hàng hóa trong công việc</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Không giới hạn số lượng xe trong doanh nghiệp",
                  "Bao gồm bảo hiểm công trường",
                  "Bảo hiểm từ nhà đến nhà",
                ]}
              />
            </div>
            <h3 className="mt-10 text-3xl font-bold">Trường hợp ví dụ: Tham quan hội chợ</h3>
            <p className="mt-8">
              Ông Stuber, người kinh doanh rượu vang cao cấp, muốn tham gia một hội chợ rượu vang. Trong xe vận
              chuyển của ông có các thùng rượu vang mà ông dự định bán tại hội chợ. Trong lúc dừng nghỉ ăn tại
              một trạm dừng trên cao tốc, xe của ông bị đột nhập và toàn bộ hàng hóa trong xe bị đánh cắp. Tổng
              giá trị hàng hóa là 4.500 €. Với gói bảo hiểm FirmenSAFE, ông Stuber được bảo vệ an toàn và nhận
              được toàn bộ bồi thường cho thiệt hại này.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold">d. Thiệt hại do hư hỏng hàng hóa lạnh, đông lạnh, thuốc</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Miễn giảm bồi thường đối với thiệt hại do sơ suất nghiêm trọng gây ra",
                  "Miễn giảm bảo hiểm thấp hơn giá trị thực tế",
                  "Bồi thường theo giá trị mới",
                  "Hư hỏng do mất điện bất ngờ của các mạng lưới công cộng",
                  "Hỏng hóc của các thiết bị làm lạnh cơ khí, rò rỉ chất làm lạnh",
                ]}
              />
            </div>
            <h3 className="mt-10 text-3xl font-bold">Các hàng hóa được bảo hiểm:</h3>
            <p className="mt-8">
              Tất cả các hàng hóa và nguyên liệu dự trữ điển hình cho doanh nghiệp, bao gồm cả các bán thành phẩm
              và nguyên liệu thô, được bảo vệ nếu chúng cần phải được làm lạnh hoặc đông lạnh.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold">e. Bảo hiểm kỹ thuật</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Bảo hiểm điện tử và máy móc bao gồm bảo hiểm mở rộng cho các máy móc di động, đã sẵn sàng để vận hành",
                  "Cập nhật quyền lợi",
                  "Bao gồm thiệt hại do gián đoạn kinh doanh",
                ]}
              />
            </div>
            <h3 className="mt-10 text-3xl font-bold">Trường hợp ví dụ: In ấn với hậu quả</h3>
            <p className="mt-8">
              Do sự cố trong hệ thống kiểm tra hai tờ giấy của máy in, thay vì chỉ một tờ giấy, nhiều tờ giấy đã
              bị cuốn vào máy. Điều này dẫn đến việc máy in dừng đột ngột. Một trục in và một trục chống in bị
              hỏng cơ học. Nhờ vào sự bảo vệ toàn diện của gói bảo hiểm FirmenSAFE, thiệt hại này đã được bồi
              thường lên đến 14.500 €. Trong thời gian sửa chữa, Generali đã chi trả thiệt hại do gián đoạn
              kinh doanh.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold">g. Bảo hiểm thiên tai / Nguy hiểm không xác định</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Bao gồm thiệt hại do gián đoạn kinh doanh",
                  "Có thể loại bỏ các mối nguy hiểm thiên tai / nguy hiểm không xác định theo yêu cầu",
                ]}
              />
            </div>
            <p className="mt-8">
              Bảo hiểm này bảo vệ doanh nghiệp của bạn khỏi những rủi ro không thể lường trước, bao gồm các
              thiên tai và các mối nguy hiểm không xác định, đồng thời đảm bảo rằng bạn không phải chịu thiệt hại
              tài chính trong trường hợp gián đoạn kinh doanh.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold">h. Bảo hiểm dịch vụ mạng (Cyber-Service-Versicherung)</h2>
            <div className="mt-10">
              <BulletList
                items={[
                  "Có thể chọn bảo hiểm dịch vụ mạng cho doanh nghiệp có tối đa 20 nhân viên",
                  "Dịch vụ hỗ trợ phòng ngừa: Cuộc gọi kiểm tra phòng ngừa qua điện thoại với thông tin về cách ngăn chặn các cuộc tấn công và khắc phục lỗ hổng bảo mật",
                  "Dịch vụ sau sự cố mạng: Phân tích điều tra mạng (Cyber-Forensics) qua dịch vụ hỗ trợ IT-Help-Desk",
                ]}
              />
            </div>
            <p className="mt-3">
              Bảo hiểm này giúp doanh nghiệp bảo vệ dữ liệu và hệ thống mạng của mình khỏi các cuộc tấn công
              mạng, đồng thời cung cấp hỗ trợ kịp thời nếu có sự cố xảy ra.
            </p>
          </section>
        </div>
      </TextSection>
    </article>
  );
}
