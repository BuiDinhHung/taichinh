import Image from "next/image";

const partners = [
  {
    name: "Generali",
    logo: "/images/image_new/logo-generali.jpeg",
    description:
      "Generali tại Đức là tập đoàn bảo hiểm lớn, có mạng lưới quốc tế và nhiều giải pháp bảo hiểm cá nhân, gia đình.",
    url: "https://www.generali.de",
  },
  {
    name: "DWS",
    logo: "/images/image_new/logo-dws.jpeg",
    description:
      "DWS Group là một trong những nhà quản lý tài sản hàng đầu thế giới, cung cấp các giải pháp đầu tư chuyên nghiệp.",
    url: "https://www.dws.de",
  },
  {
    name: "Allianz Global Investors",
    logo: "/images/image_new/logo-allianz-global-investors.jpeg",
    description:
      "Allianz Global Investors quản lý đầu tư toàn cầu, hỗ trợ khách hàng xây dựng danh mục đầu tư dài hạn.",
    url: "https://www.allianzgi.com",
  },
  {
    name: "Deutsche Bausparkasse Badenia",
    logo: "/images/image_new/logo-badenia.jpeg",
    description:
      "Badenia là đối tác trong lĩnh vực tiết kiệm xây dựng và tài chính nhà ở tại Đức.",
    url: "https://www.badenia.de",
  },
  {
    name: "Deutsche Bank",
    logo: "/images/image_new/logo-deutsche-bank.jpeg",
    description:
      "Deutsche Bank cung cấp dịch vụ tài chính cho khách hàng cá nhân, doanh nghiệp và khách hàng đầu tư.",
    url: "https://www.deutsche-bank.de",
  },
  {
    name: "ADVOCARD",
    logo: "/images/image_new/logo-advocard.jpeg",
    description:
      "ADVOCARD cung cấp các sản phẩm bảo vệ pháp lý hiện đại cho cá nhân và gia đình.",
    url: "https://www.advocard.de",
  },
  {
    name: "Santander",
    logo: "/images/image_new/logo-santander.jpeg",
    description:
      "Santander hỗ trợ các giải pháp ngân hàng và tài chính cho khách hàng cá nhân, doanh nghiệp.",
    url: "https://www.santander.de",
  },
  {
    name: "Commerzbank",
    logo: "/images/image_new/logo-commerzbank.jpeg",
    description:
      "Commerzbank là ngân hàng thương mại lớn tại Đức với nhiều dịch vụ tài chính và đầu tư.",
    url: "https://www.commerzbank.de",
  },
  {
    name: "Geiger Edelmetalle",
    logo: "/images/image_new/logo-geiger.jpeg",
    description:
      "Geiger Edelmetalle chuyên về các sản phẩm kim loại quý, vàng bạc và giải pháp tích lũy tài sản.",
    url: "https://www.geiger-edelmetalle.de",
  },
  {
    name: "BKK Linde",
    logo: "/images/image_new/logo-bkk-linde.jpeg",
    description:
      "BKK Linde là quỹ bảo hiểm y tế hỗ trợ chăm sóc sức khỏe, phòng ngừa và tư vấn y tế tại Đức.",
    url: "https://www.bkk-linde.de",
  },
  {
    name: "DV Deutsche Verrechnungsstelle",
    logo: "/images/image_new/logo-dv.jpeg",
    description:
      "DV cung cấp dịch vụ quản lý hóa đơn và thanh toán chuyên nghiệp cho doanh nghiệp vừa và nhỏ.",
    url: "https://www.dv-mittelstand.de",
  },
  {
    name: "HypoVereinsbank",
    logo: "/images/image_new/logo-hypovereinsbank.jpeg",
    description:
      "HypoVereinsbank là một phần của UniCredit, cung cấp dịch vụ ngân hàng và tài chính tại Đức.",
    url: "https://www.hypovereinsbank.de",
  },
  {
    name: "FingerHaus",
    logo: "/images/image_new/logo-fingerhaus.jpeg",
    description:
      "FingerHaus có kinh nghiệm lâu năm trong thiết kế và xây dựng nhà ở chất lượng cao tại Đức.",
    url: "https://www.fingerhaus.de",
  },
  {
    name: "PlanetHome",
    logo: "/images/image_new/logo-planethome.jpeg",
    description:
      "PlanetHome hoạt động trong lĩnh vực bất động sản, hỗ trợ môi giới, mua bán và tư vấn nhà ở.",
    url: "https://www.planethome.de",
  },
  {
    name: "FALC Immobilien",
    logo: "/images/image_new/logo-falc.jpeg",
    description:
      "FALC Immobilien là đối tác môi giới bất động sản, đồng hành cùng khách hàng trong quá trình mua bán nhà.",
    url: "https://www.falcimmo.de",
  },
  {
    name: "Enpal",
    logo: "/images/image_new/logo-enpal.jpeg",
    description:
      "Enpal cung cấp giải pháp năng lượng mặt trời, lưu trữ và sạc điện cho nhà ở hiện đại.",
    url: "https://www.enpal.de",
  },
];

export function HomePartnersSection() {
  return (
    <section className="border-t border-[#2f2f2f]/15 bg-[#e8f0f9]">
      <details className="group">
        <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
          <div className="grid min-h-[420px] bg-white md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24">
              <h2 className="text-[1.55rem] font-bold text-[#181818] md:text-[1.85rem]">
                Đối tác của chúng tôi
              </h2>
              <p className="mt-7 max-w-[390px] text-[0.98rem] leading-7 text-[#242424]">
                Đối tác của chúng tôi là những công ty hàng đầu trong ngành tài
                chính.
              </p>
              <p className="mt-5 max-w-[390px] text-[0.98rem] leading-7 text-[#242424]">
                Vì vậy, bạn có thể yên tâm rằng mọi thứ bạn xây dựng với sự hỗ
                trợ của chúng tôi sẽ bền vững.
              </p>
              <span className="mt-10 inline-flex w-fit items-center justify-center rounded-sm border border-[#c7ad16] px-7 py-3 text-sm font-semibold text-[#b99d08] transition hover:bg-[#c7ad16] hover:text-white">
                <span className="group-open:hidden">Xem tiếp</span>
                <span className="hidden group-open:inline">Thu gọn</span>
              </span>
            </div>
            <div className="relative min-h-[280px] md:min-h-full">
              <Image
                src="/images/article-03-tu-van-chuyen-nghiep.jpeg"
                alt="Đối tác tài chính"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </summary>

        <div className="mx-auto max-w-6xl px-[10%] py-12 md:py-16">
          <div className="grid gap-x-12 gap-y-10">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="grid items-center gap-5 md:grid-cols-[180px_1fr]"
              >
                <div className="relative h-20 w-full max-w-[180px]">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                  />
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-[#1f1f1f]">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-[0.9rem] leading-6 text-[#333]">
                    {partner.description}{" "}
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#1d5f8f] underline underline-offset-2"
                    >
                      {partner.url.replace("https://", "")}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}
