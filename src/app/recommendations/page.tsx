import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type PartnerLogo =
  | "generali"
  | "dws"
  | "allianz"
  | "badenia"
  | "deutsche-bank"
  | "advocard"
  | "santander"
  | "commerzbank"
  | "geiger"
  | "bkk-linde"
  | "dv"
  | "hypovereinsbank"
  | "fingerhaus"
  | "planethome"
  | "falc"
  | "enpal";

type Partner = {
  name: string;
  logo: PartnerLogo;
  description: string;
  url: string;
  urlLabel: string;
};

const partners: Partner[] = [
  {
    name: "Generali",
    logo: "generali",
    description:
      "Generali tại Đức là tập đoàn bảo hiểm lớn thứ hai trên thị trường bảo hiểm Đức và là một phần của Tập đoàn Generali quốc tế, một yếu tố quan trọng trong ngành bảo hiểm toàn cầu.",
    url: "https://www.generali.de",
    urlLabel: "www.generali.de",
  },
  {
    name: "DWS",
    logo: "dws",
    description:
      "Die DWS Group (DWS) là một trong những nhà quản lý tài sản hàng đầu thế giới. Công ty có hơn 60 năm kinh nghiệm. Là nhà cung cấp các giải pháp đầu tư tích hợp, DWS mang đến cho khách hàng quyền tiếp cận với các năng lực đầu tư mạnh mẽ và các giải pháp tập trung vào các xu hướng tăng trưởng.",
    url: "https://www.dws.de",
    urlLabel: "www.dws.de",
  },
  {
    name: "Allianz Global",
    logo: "allianz",
    description:
      "Allianz Global Investors là một công ty quản lý đầu tư năng động, đa dạng hóa danh mục đầu tư. Với 24 địa điểm tại 18 quốc gia, công ty cung cấp năng lực đầu tư toàn cầu và chuyên môn nghiên cứu toàn diện.",
    url: "https://www.allianzgi.com",
    urlLabel: "www.allianzgi.com",
  },
  {
    name: "Deutsche Bausparkasse Badenia",
    logo: "badenia",
    description:
      "Hiệp hội xây dựng Đức Badenia là một trong những hiệp hội xây dựng tư nhân lớn nhất ở Đức. Với hơn 80 năm kinh nghiệm, công ty chuyên về xây dựng chương trình tiết kiệm và tài chính.",
    url: "https://www.badenia.de",
    urlLabel: "www.badenia.de",
  },
  {
    name: "Deutsche Bank",
    logo: "deutsche-bank",
    description:
      "Là ngân hàng hàng đầu của Đức, Deutsche Bank cung cấp dịch vụ tài chính cho khách hàng cá nhân, doanh nghiệp và các nhà đầu tư tổ chức. Kể từ năm 2001, Deutsche Vermögensberatung đã hợp tác thành công với Deutsche Bank.",
    url: "https://www.deutsche-bank.de",
    urlLabel: "www.deutsche-bank.de",
  },
  {
    name: "ADVOCARD",
    logo: "advocard",
    description:
      "Là một trong những nhà cung cấp bảo hiểm bảo vệ pháp lý hàng đầu, ADVOCARD cung cấp các sản phẩm bảo vệ pháp lý hiện đại, các thành phần linh hoạt và dịch vụ khách hàng đáng tin cậy.",
    url: "https://www.advocard.de",
    urlLabel: "www.advocard.de",
  },
  {
    name: "Santander",
    logo: "santander",
    description:
      "Banco Santander là một ngân hàng phục vụ khách hàng cá nhân và doanh nghiệp có trụ sở chính tại Tây Ban Nha và hiện diện ở mười thị trường chủ chốt. Tại Đức, Ngân hàng Tiêu dùng Santander nằm trong top 5 ngân hàng tư nhân hàng đầu.",
    url: "https://www.santander.de",
    urlLabel: "www.santander.de",
  },
  {
    name: "Commerzbank",
    logo: "commerzbank",
    description:
      "Là một ngân hàng thương mại hàng đầu hoạt động quốc tế, có mặt tại hơn 50 quốc gia. Ngân hàng cung cấp cho khách hàng một danh mục dịch vụ toàn diện về ngân hàng và thị trường vốn.",
    url: "https://www.commerzbank.de",
    urlLabel: "www.commerzbank.de",
  },
  {
    name: "Geiger Edelmetalle",
    logo: "geiger",
    description:
      "Geiger Edelmetalle là một công ty gia đình có trụ sở tại Leipzig, Đức, chuyên về giao dịch các sản phẩm cao cấp từ vàng, bạc và các kim loại quý khác. Công ty này hoạt động tại hơn 30 quốc gia trên toàn cầu. Geiger Edelmetalle cam kết theo đuổi một chiến lược lâu dài, với mục tiêu duy trì sự ổn định và phát triển bền vững trong kinh doanh.",
    url: "https://www.geiger-edelmetalle.de",
    urlLabel: "www.geiger-exklusive-edelmetalle.de",
  },
  {
    name: "BKK Linde",
    logo: "bkk-linde",
    description:
      "BKK Linde, được thành lập vào năm 1952 như một bảo hiểm y tế hợp pháp cho nhân viên của công ty công nghệ quốc tế Linde AG hiện nay, từ năm 2007 đã mở cửa cho tất cả những ai muốn tham gia bảo hiểm y tế chất lượng cao. BKK Linde là biểu tượng của sức khỏe và phòng ngừa, bảo vệ và an toàn.",
    url: "https://www.bkk-linde.de",
    urlLabel: "www.bkk-linde.de",
  },
  {
    name: "Deutsche Verrechnungsstelle (DV)",
    logo: "dv",
    description:
      "Deutsche Verrechnungsstelle (DV) chuyên cung cấp dịch vụ quản lý hóa đơn chuyên nghiệp cho các doanh nghiệp nhỏ và vừa, với các sản phẩm và dịch vụ giúp đảm bảo tính thanh khoản cho các doanh nghiệp vừa và nhỏ.",
    url: "https://www.dv-gmbh.de",
    urlLabel: "www.dv-gmbh.de",
  },
  {
    name: "HypoVereinsbank",
    logo: "hypovereinsbank",
    description:
      "HypoVereinsbank là một phần của UniCredit, một trong những tập đoàn ngân hàng lớn nhất Châu Âu. Ngân hàng này phụ trách toàn bộ hoạt động tại Đức cho UniCredit và đồng thời là trung tâm chuyên môn cho lĩnh vực ngân hàng đầu tư quốc tế.",
    url: "https://www.hypovereinsbank.de",
    urlLabel: "www.hypovereinsbank.de",
  },
  {
    name: "FingerHaus",
    logo: "fingerhaus",
    description:
      "Công ty FingerHaus GmbH có gần 200 năm kinh nghiệm trong ngành chế biến gỗ và 70 năm trong việc xây dựng nhà theo phương pháp xây dựng nhà tiền chế. Điều này đảm bảo chất lượng xây dựng cao nhất: Bởi vì mục tiêu của công ty gia đình là luôn cập nhật và áp dụng những tiến bộ mới nhất và tốt nhất trong tất cả các lĩnh vực.",
    url: "https://www.fingerhaus.de",
    urlLabel: "www.fingerhaus.de",
  },
  {
    name: "PlanetHome",
    logo: "planethome",
    description:
      "PlanetHome là một trong những nhà cung cấp dịch vụ bất động sản hàng đầu, PlanetHome hoạt động trên toàn nước Đức với dịch vụ tư vấn cá nhân hóa và chuyên môn chuyên nghiệp. Để kết nối người bán và người mua một cách hiệu quả, công ty kết hợp công nghệ hiện đại nhất với năng lực am hiểu thị trường địa phương của khoảng 450 chuyên gia bất động sản làm việc toàn thời gian.",
    url: "https://www.planethome.de",
    urlLabel: "www.planethome.de",
  },
  {
    name: "FALC- Immobilien",
    logo: "falc",
    description:
      "FALC-Immobilien được thành lập vào năm 2009 và hiện là một trong những công ty bất động sản lớn nhất tại Đức. Hơn 350 chuyên viên độc lập trực tiếp và đầy năng lực hướng dẫn khách hàng trong suốt quá trình mua bán.",
    url: "https://www.falcimmo.de",
    urlLabel: "www.falcimmo.de",
  },
  {
    name: "Enpal",
    logo: "enpal",
    description:
      "Giải pháp này mang đến một gói dịch vụ trọn gói đầy hấp dẫn, bao gồm công nghệ chất lượng cao, quy trình lập kế hoạch chuyên nghiệp và khâu lắp đặt bởi đội ngũ chuyên gia. Nhờ khả năng kết nối thông minh giữa tất cả các thành phần thông qua nền tảng Enpal.One, khách hàng của chúng tôi có thể cắt giảm mức tiêu thụ điện lưới lên tới 85%. Hơn nữa, thông qua việc trực tiếp tiếp thị lượng điện dư thừa, khách hàng sẽ nhận được khoản thanh toán từ Enpal lên tới 2.000 Euro. Sự kết hợp giữa khả năng kết nối thông minh, hoạt động tiếp thị trực tiếp và những lợi ích thiết thực mang lại này là điều hoàn toàn độc đáo trên thị trường hiện nay.",
    url: "https://www.enpal.de",
    urlLabel: "www.enpal.de",
  },
];

export const metadata: Metadata = {
  title: "Đối tác của chúng tôi - taichinh.de",
  description: "Danh sách các đối tác tài chính, bảo hiểm, ngân hàng, bất động sản và năng lượng của chúng tôi.",
};

const partnerLogoImages: Record<PartnerLogo, string> = {
  generali: "/images/logo-generali.png",
  dws: "/images/logo-dws.png",
  allianz: "/images/logo-allianz-global-investors.png",
  badenia: "/images/logo-badenia.png",
  "deutsche-bank": "/images/logo-deutsche-bank.png",
  advocard: "/images/logo-advocard.png",
  santander: "/images/logo-santander.png",
  commerzbank: "/images/logo-commerzbank.png",
  geiger: "/images/logo-geiger.png",
  "bkk-linde": "/images/logo-bkk-linde.png",
  dv: "/images/logo-dv.png",
  hypovereinsbank: "/images/logo-hypovereinsbank.png",
  fingerhaus: "/images/logo-fingerhaus.png",
  planethome: "/images/logo-planethome.png",
  falc: "/images/logo-falc.png",
  enpal: "/images/logo-enpal.png",
};

function PartnerLogoMark({ logo, name }: { logo: PartnerLogo; name: string }) {
  return (
    <Image
      src={partnerLogoImages[logo]}
      alt={`${name} logo`}
      width={260}
      height={120}
      sizes="260px"
      className="max-h-24 w-auto bg-transparent object-contain"
    />
  );
}
export default function RecommendationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e8f0f9]" style={{ paddingTop: "var(--header-height)" }}>
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1180px] px-5">
            <h1 className="sr-only">Đối tác của chúng tôi</h1>

            <div className="space-y-16">
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="grid items-center gap-6 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)]"
                >
                  <div className="flex min-h-24 items-center justify-center md:justify-start">
                    <PartnerLogoMark logo={partner.logo} name={partner.name} />
                  </div>
                  <div className="max-w-[820px] text-black">
                    <h2 className="text-base font-bold leading-tight">{partner.name}</h2>
                    <p className="text-base leading-snug">
                      {partner.description}{" "}
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#2c6f82] underline underline-offset-2"
                      >
                        {partner.urlLabel}
                      </a>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
