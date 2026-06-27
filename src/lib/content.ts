import type {
  AdvantageColumn,
  Article,
  CTA,
  FooterColumn,
  FooterLink,
  NavItem,
  RatingMock,
  TeaserCard,
} from "@/types/content";
import { articleAsFeedItem, type FeedItem } from "@/lib/feed";

export const siteName = "taichinh.de";

export const headerNav: NavItem[] = [
  {
    label: "Về chúng tôi",
    href: "/page/gioi-thieu",
    items: [
      { label: "Đối tác", href: "/recommendations" },
      { label: "Lĩnh vực tư vấn", href: "/archive" },
    ],
  },
  {
    label: "Đầu tư - Tiết kiệm",
    href: "/series/invest",
    items: [
      { label: "Tiết kiệm vào Quỹ đầu tư", href: "/dau-tu-vao-quy-fonds-sparsplan" },
      { label: "Đầu tư vào Vàng, Bạc", href: "/dau-tu-vao-vang-gold" },
      { label: "Kế hoạch tài chính cho con trẻ", href: "/ke-hoach-cho-tuong-lai-con-yeu" },
      { label: "Tích lũy tài chính - Kế hoạch an toàn", href: "/tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice" },
    ],
  },
  {
    label: "Bảo hiểm",
    href: "/series/insurance",
    items: [
      { label: "Bảo hiểm hưu trí Riester", href: "/bao-hiem-huu-tri-riester" },
      { label: "Bảo hiểm hưu trí Basisrente", href: "/bao-hiem-huu-tri-co-ban" },
      { label: "Bảo hiểm doanh nghiệp", href: "/bao-hiem-doanh-nghiep" },
      { label: "Bảo hiểm mất sức lao động", href: "/bao-hiem-mat-suc-lao-dong" },
      { label: "Bảo hiểm Y tế", href: "/bao-hiem-y-te" },
    ],
  },
  {
    label: "Bất động sản",
    href: "/series/bauspar",
    items: [
      { label: "Bauspar - Tiết kiệm xây nhà", href: "/tiet-kiem-xay-dung" },
      { label: "Nhà ở tiền chế FingerHaus", href: "/fingerhaus" },
      { label: "Tín dụng bất động sản", href: "/tin-dung-bat-dong-san" },
    ],
  },
  {
    label: "Năng lượng",
    href: "/series/energy",
    items: [
      { label: "Máy bơm nhiệt & năng lượng mặt trời", href: "/he-thong-dien-mat-troi-solaranlage" },
      { label: "Nguồn điện, gas rẻ", href: "/nguon-dien-gas-re" },
    ],
  },
  {
    label: "Liên hệ",
    href: "/dat-lich",
    items: [
      { label: "Đặt lịch tư vấn", href: "/dat-lich" },
      { label: "Liên hệ & Imprint", href: "/page/contact" },
      { label: "Impressum", href: "/page/impressum" },
    ],
  },
];

export const headerCTAs: { primary: CTA; secondary: CTA } = {
  primary: { label: "Đặt lịch tư vấn", href: "/dat-lich" },
  secondary: { label: "Liên hệ", href: "/dat-lich" },
};

export const heroSlides = [
  {
    eyebrow: "",
    headline: "Tư vấn tài chính đa diện của bạn",
    cta: { label: "Đặt lịch tư vấn", href: "/dat-lich" } as CTA,
    image: {
      src: "/images/article-03-tu-van-chuyen-nghiep.png",
      alt: "Tư vấn tài chính đa diện",
    },
    imagePosition: "center center",
  },
  {
    eyebrow: "",
    headline: "Hãy để Tiền của bạn sinh lời",
    cta: { label: "Đặt lịch tư vấn", href: "/san-pham" } as CTA,
    image: {
      src: "/images/hero-rooftop-v2.png",
      alt: "Hãy để Tiền của bạn sinh lời",
    },
    imagePosition: "center center",
  },
  {
    eyebrow: "",
    headline: "Giá trị bền vững cho tương lai",
    cta: { label: "Về chúng tôi", href: "/page/gioi-thieu" } as CTA,
    image: {
      src: "/images/hero-ve-chung-toi.png",
      alt: "Về chúng tôi - taichinh.de",
    },
    imagePosition: "center center",
  },
];

export const heroContent = heroSlides[0];

export const finanzcoachingSection = {
  eyebrow: "",
  headline: "Tư vấn tài chính chuyên nghiệp. Giá trị bền vững cho tương lai",
  bodyParagraphs: [
    "Văn phòng Tư vấn Tài chính Vũ Thế Bảo trực thuộc Deutsche Vermögensberatung (DVAG) — tập đoàn tư vấn tài chính uy tín hàng đầu tại Đức với hơn 50 năm kinh nghiệm và gần 20.000 chuyên viên tư vấn trên toàn quốc.",
    "Chúng tôi cung cấp giải pháp toàn diện trong các lĩnh vực: Đầu tư - Tiết kiệm, Bảo hiểm, Bất động sản, lập kế hoạch hưu trí và hoạch định tài chính dài hạn cho cộng đồng người Việt tại Đức.",
    "Với quy trình tư vấn cá nhân hóa, minh bạch và định hướng dài hạn, chúng tôi đồng hành cùng khách hàng xây dựng nền tảng tài chính ổn định và bền vững cho mỗi giai đoạn của cuộc sống.",
  ],
  primaryCta: { label: "Đặt lịch tư vấn miễn phí", href: "/dat-lich" } as CTA,
  secondaryCta: { label: "Tìm hiểu dịch vụ", href: "/archive" } as CTA,
  ratingsBadgeAlt: "Đánh giá khách hàng 5 sao",
};

export const advantages: AdvantageColumn[] = [
  {
    icon: "wuensche",
    headline: "Những mong muốn và mục tiêu của bạn",
    body:
      "Tất cả đều xoay quanh chính bạn! Chuyên gia tư vấn tài chính sẽ dành thời gian tìm hiểu kỹ lưỡng tình hình của bạn, cũng như thấu hiểu những điều bạn mong muốn đạt được.",
  },
  {
    icon: "ganzheitlich",
    headline: "Tư vấn tài chính Toàn diện",
    body:
      "Đối với chúng tôi, bảo vệ tài chính, lập kế hoạch hưu trí và tích lũy tài sản là những yếu tố luôn song hành cùng nhau. Chúng tôi sẽ cùng bạn xây dựng một chiến lược toàn diện nhằm kiến tạo sự thành công về tài chính cho chính bạn.",
  },
  {
    icon: "gemeinsam",
    headline: "Cùng nhau kiến tạo thành công",
    body:
      "Chuyên gia tư vấn tài chính sẽ đồng hành cùng bạn trong mọi quyết định quan trọng, cung cấp những lời khuyên chuyên sâu phù hợp với từng giai đoạn của cuộc sống, đồng thời hỗ trợ bạn hiện thực hóa các mục tiêu tiết kiệm, đầu tư và hưu trí một cách vững chắc.",
  },
];

export const teaserCards: TeaserCard[] = [
  {
    label: "",
    headline: "Vì tương lai con em chúng ta",
    cta: { label: "Xem tiếp", href: "/ke-hoach-cho-tuong-lai-con-yeu" },
    image: {
      src: "/images/gallery-04.jpeg",
      alt: "Vì tương lai con em chúng ta",
    },
  },
  {
    label: "",
    headline: "Đầu tư vàng, bạc - Một ý tưởng sáng giá",
    cta: { label: "Xem tiếp", href: "/dau-tu-vao-vang-gold" },
    image: {
      src: "/images/pdf-field-retirement.jpeg",
      alt: "Đầu tư vàng bạc",
    },
  },
  {
    label: "",
    headline: "Đặt nền móng cho Ngôi nhà mơ ước của bạn",
    cta: { label: "Xem tiếp", href: "/tiet-kiem-xay-dung" },
    image: {
      src: "/images/pdf-field-child.jpeg",
      alt: "Đặt nền móng cho ngôi nhà mơ ước",
    },
  },
  {
    label: "",
    headline: "Tài chính chủ động - An nhiên tuổi già",
    cta: { label: "Xem tiếp", href: "/bao-hiem-huu-tri-riester" },
    image: {
      src: "/images/pdf-field-house.jpeg",
      alt: "Tài chính chủ động an nhiên tuổi già",
    },
  },
];

export const ratingMocks: RatingMock[] = [
  {
    name: "Mr. Tuan",
    location: "Berlin",
    stars: 5,
    date: "3 ngày trước",
    body:
      "Mình được tư vấn rất kỹ về Bauspar và Riester-Rente. Lần đầu tiên hiểu rõ mình đang đóng vào đâu và sẽ nhận được gì. Cảm ơn rất nhiều!",
  },
  {
    name: "Mrs. Huong",
    location: "München",
    stars: 5,
    date: "1 tuần trước",
    body:
      "Tư vấn bằng tiếng Việt nên hai vợ chồng đều hiểu rõ mọi thứ. Kế hoạch tài chính cho con cũng đã được lên rất chi tiết.",
  },
  {
    name: "Mr. Minh",
    location: "Frankfurt am Main",
    stars: 5,
    date: "2 tuần trước",
    body:
      "Rất chuyên nghiệp và minh bạch. Không bị ép mua sản phẩm, mọi quyết định đều dựa trên nhu cầu thực tế của gia đình.",
  },
  {
    name: "Mrs. Yen & Mr. Daniel",
    location: "Köln",
    stars: 5,
    date: "3 tuần trước",
    body:
      "Cả hệ thống hưu trí, bảo hiểm và quỹ xây dựng đều được giải thích rõ ràng. Cảm thấy yên tâm hơn rất nhiều về tương lai.",
  },
  {
    name: "Mr. Binh",
    location: "Hamburg",
    stars: 4,
    date: "1 tháng trước",
    body:
      "Buổi tư vấn rất dễ hiểu, sau buổi nói chuyện vẫn hỗ trợ qua tin nhắn khi mình có câu hỏi thêm. Rất đáng tin cậy.",
  },
];

export const kloppContent = {
  eyebrow: "",
  headline: "Tư vấn tài chính đa diện",
  body:
    "Bao Vu The - Vermögensberater. Büro für Deutsche Vermögensberatung, Proskauer Str. 13, 10247 Berlin. Tel.: +49 30-4268859. Mobil/WhatsApp: 0176-10178768. Mail: bao.vu-the.3625100@dvag.de.",
  cta: { label: "Đặt lịch hẹn tư vấn", href: "/dat-lich" } as CTA,
  image: {
    desktop: "/images/pdf-team-office.jpeg",
    mobile: "/images/pdf-team-office.jpeg",
    alt: "Tư vấn tài chính đa diện",
  },
};

export const articles: Article[] = [
  {
    slug: "cai-cach-che-do-huu-tri-tu-nhan-riester",
    title: "Cải cách chế độ hưu trí tư nhân Riester",
    date: "May 8, 2026",
    excerpt:
      "Chính phủ Liên bang Đức thông qua chương trình cải cách Hưu trí Riester. Từ năm 2027, tài khoản tiết kiệm hưu trí được nhà nước hỗ trợ sẽ thay thế lương hưu Riester.",
    image: "/images/pdf-news-riester.jpeg",
  },
  {
    slug: "ke-hoach-cho-tuong-lai-con-yeu",
    title: "Kế hoạch Tài chính cho tương lai con trẻ",
    date: "May 5, 2025",
    image: "/images/gallery-04.jpeg",
  },
  {
    slug: "tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice",
    title: "Tích lũy Tài chính & Kế hoạch an toàn",
    date: "May 4, 2025",
    image: "/images/article-02-tich-luy-fondspolice.jpeg",
  },
  {
    slug: "tiet-kiem-xay-dung",
    title: "Tiết kiệm xây dựng",
    date: "Mar 31, 2025",
    image: "/images/pdf-field-child.jpeg",
  },
  {
    slug: "dau-tu-vao-quy-fonds-sparsplan",
    title: "Tiết kiệm vào Quỹ đầu tư - Fonds Sparsplan",
    date: "Mar 31, 2025",
    image: "/images/gallery-05.jpeg",
  },
  {
    slug: "bao-hiem-huu-tri-doanh-nghiep",
    title: "Bảo hiểm hưu trí doanh nghiệp",
    date: "Mar 30, 2025",
    image: "/images/article-06-huu-tri-doanh-nghiep.jpeg",
  },
  {
    slug: "bao-hiem-huu-tri-riester",
    title: "Bảo hiểm hưu trí Riester - Rente",
    date: "Mar 30, 2025",
    image: "/images/pdf-field-house.jpeg",
  },
  {
    slug: "bao-hiem-doanh-nghiep",
    title: "Bảo hiểm doanh nghiệp",
    date: "Mar 30, 2025",
    image: "/images/gallery-06.jpeg",
  },
  {
    slug: "dau-tu-vao-vang-gold",
    title: "Đầu tư vàng - Goldsparplan",
    date: "Mar 30, 2025",
    image: "/images/pdf-field-retirement.jpeg",
  },
  {
    slug: "tin-dung-bat-dong-san",
    title: "Vay tín dụng xây dựng",
    date: "Mar 30, 2025",
    image: "/images/house-with-euros.jpeg",
  },
  {
    slug: "bao-hiem-huu-tri-co-ban",
    title: "Bảo hiểm hưu trí cơ bản - Basisrente",
    date: "Mar 30, 2025",
    image: "/images/article-11-basisrente.jpeg",
  },
  {
    slug: "he-thong-dien-mat-troi-solaranlage",
    title: "Máy bơm nhiệt & Năng lượng mặt trời",
    date: "Mar 28, 2025",
    image: "/images/gallery-07.jpeg",
  },
  {
    slug: "dien-mat-troi-solaranlage",
    title: "Hệ thống điện mặt trời có hỗ trợ của nhà nước",
    date: "Mar 28, 2025",
    image: "/images/gallery-08.jpeg",
  },
  {
    slug: "tin-dung-ca-nhan",
    title: "Tín dụng cá nhân - Privatkredit",
    date: "Mar 27, 2025",
    image: "/images/4.png",
  },
  {
    slug: "bao-hiem-y-te",
    title: "Bảo hiểm Y tế",
    date: "Mar 26, 2025",
    image: "/images/gallery-03.jpeg",
  },
  {
    slug: "fingerhaus",
    title: "Nhà lắp ghép (Tiền chế)",
    date: "Mar 24, 2025",
    image: "/images/prefab-house-fingerhaus.jpeg",
  },
  {
    slug: "bao-hiem-phap-ly",
    title: "Bảo hiểm pháp lý",
    date: "Mar 24, 2025",
    image: "/images/gallery-05.jpeg",
  },
  {
    slug: "bao-hiem-cho-he-thong-dien-mat-troi",
    title: "Bảo hiểm cho hệ thống điện mặt trời",
    date: "Mar 23, 2025",
    image: "/images/gallery-08.jpeg",
  },
  {
    slug: "bao-hiem-trach-nhiem-ca-nhan",
    title: "Bảo hiểm trách nhiệm cá nhân",
    date: "Mar 23, 2025",
    image: "/images/gallery-07.jpeg",
  },
  {
    slug: "bao-hiem-tai-san",
    title: "Bảo hiểm tài sản",
    date: "Mar 23, 2025",
    image: "/images/insurance-property-temple.jpg",
  },
  {
    slug: "bao-hiem-nha-dat",
    title: "Bảo hiểm nhà đất",
    date: "Mar 23, 2025",
    image: "/images/article-10-tin-dung-bat-dong-san.jpeg",
  },
  {
    slug: "bao-hiem-kinh",
    title: "Bảo hiểm kính",
    date: "Mar 21, 2025",
    image: "/images/2.jpeg",
  },
  {
    slug: "bao-hiem-tai-nan",
    title: "Bảo hiểm tai nạn",
    date: "Mar 21, 2025",
    image: "/images/3.png",
  },
  {
    slug: "bao-hiem-mat-suc-lao-dong",
    title: "Bảo hiểm mất sức lao động",
    date: "Mar 20, 2025",
    excerpt:
      "Bảo vệ giá trị sức lao động của bạn trước rủi ro bệnh tật hoặc tai nạn khiến thu nhập bị gián đoạn.",
    image: "/images/gallery-06.jpeg",
  },
  {
    slug: "nguon-dien-gas-re",
    title: "Nguồn Điện, Gas rẻ",
    date: "Feb 22, 2025",
    image: "/images/gallery-09.jpeg",
  },
];

/* -------- Map slug → category for article slider on homepage --------
 * Categories mirror the 3 top-level sections in the header navigation:
 * "Đầu tư – Tiết kiệm", "Bảo hiểm", "Quỹ xây dựng".
 */
const SLUG_TO_CATEGORY: Record<string, string> = {
  "cai-cach-che-do-huu-tri-tu-nhan-riester": "Bảo hiểm",
  "ke-hoach-cho-tuong-lai-con-yeu": "Đầu tư – Tiết kiệm",
  "tich-luy-tai-chinh-and-bao-hiem-ho-tro-fondspolice": "Đầu tư – Tiết kiệm",
  "dau-tu-vao-quy-fonds-sparsplan": "Đầu tư – Tiết kiệm",
  "dau-tu-vao-vang-gold": "Đầu tư – Tiết kiệm",
  "he-thong-dien-mat-troi-solaranlage": "Đầu tư – Tiết kiệm",
  "nguon-dien-gas-re": "Đầu tư – Tiết kiệm",
  "tin-dung-bat-dong-san": "Quỹ xây dựng",
  "tin-dung-ca-nhan": "Quỹ xây dựng",
  "tiet-kiem-xay-dung": "Quỹ xây dựng",
  fingerhaus: "Quỹ xây dựng",
  "bao-hiem-huu-tri-doanh-nghiep": "Bảo hiểm",
  "bao-hiem-huu-tri-riester": "Bảo hiểm",
  "bao-hiem-doanh-nghiep": "Bảo hiểm",
  "bao-hiem-huu-tri-co-ban": "Bảo hiểm",
  "bao-hiem-y-te": "Bảo hiểm",
  "bao-hiem-phap-ly": "Bảo hiểm",
  "bao-hiem-cho-he-thong-dien-mat-troi": "Bảo hiểm",
  "bao-hiem-trach-nhiem-ca-nhan": "Bảo hiểm",
  "bao-hiem-tai-san": "Bảo hiểm",
  "bao-hiem-nha-dat": "Bảo hiểm",
  "bao-hiem-kinh": "Bảo hiểm",
  "bao-hiem-tai-nan": "Bảo hiểm",
  "bao-hiem-mat-suc-lao-dong": "Bảo hiểm",
};

const FALLBACK_LEAD =
  "Tư vấn chuyên nghiệp dành cho cộng đồng người Việt tại Đức — đầu tư, tiết kiệm, bảo hiểm và quỹ xây dựng.";

// Top articles for the homepage news section, following the PDF mockup.
export const articleSliderItems: FeedItem[] = [
  {
    slug: "cai-cach-che-do-huu-tri-tu-nhan-riester",
    href: "/cai-cach-che-do-huu-tri-tu-nhan-riester",
    title: "Cải cách chế độ hưu trí tư nhân Riester",
    date: "May 8, 2026",
    image: "/images/pdf-news-riester.jpeg",
    excerpt:
      "Chính phủ Liên bang Đức thông qua chương trình cải cách Hưu trí Riester. Từ năm 2027, tài khoản tiết kiệm hưu trí được nhà nước hỗ trợ sẽ thay thế lương hưu Riester và mang đến các sản phẩm hưu trí linh hoạt hơn.",
    category: "Tin mới",
  },
  ...articles.slice(1, 5).map((a) =>
    articleAsFeedItem(
      { ...a, excerpt: a.excerpt ?? FALLBACK_LEAD },
      SLUG_TO_CATEGORY[a.slug],
    ),
  ),
];

// All articles as FeedItem (used by archive merge with drafts)
export const allArticleFeedItems: FeedItem[] = articles.map((a) =>
  articleAsFeedItem(a, SLUG_TO_CATEGORY[a.slug]),
);

export const author = {
  name: "taichinh.de",
  postCount: 23,
  bio:
    "Tư vấn tài chính chuyên nghiệp dành cho cộng đồng người Việt tại Đức – Đầu tư, Tiết kiệm, Bảo hiểm, Quỹ xây dựng, Ngân hàng và Năng lượng.",
  avatar: "/images/logo-light.png",
};

/* DVAG-style 4-column footer */
export const footerColumns: FooterColumn[] = [
  {
    title: "Về chúng tôi",
    links: [
      { label: "Đối tác", href: "/recommendations" },
      { label: "Lĩnh vực tư vấn", href: "/san-pham" },
    ],
  },
  {
    title: "Tư vấn",
    links: [
      { label: "Đầu tư - Tiết kiệm", href: "/series/invest" },
      { label: "Bảo hiểm", href: "/series/insurance" },
      { label: "Bất động sản", href: "/series/bauspar" },
      { label: "Năng lượng", href: "/series/energy" },
    ],
  },
  {
    title: "Liên hệ",
    links: [
      { label: "Đặt lịch tư vấn", href: "/dat-lich" },
      { label: "Impressum", href: "/page/impressum" },
    ],
  },
];

// Flat list for compact footer (kept for backwards compat with old Footer component)
export const footerLinks: FooterLink[] = [
  { label: "Tất cả bài viết", href: "/archive" },
  { label: "Về chúng tôi", href: "/page/gioi-thieu" },
  { label: "Liên hệ", href: "/page/contact" },
  { label: "Impressum", href: "/page/impressum" },
  { label: "Chính sách bảo mật", href: "https://hashnode.com/privacy-policy" },
  { label: "Điều khoản", href: "https://hashnode.com/terms" },
];

export const legalLinks: CTA[] = [
  { label: "Chính sách bảo mật", href: "https://hashnode.com/privacy-policy" },
  { label: "Impressum", href: "/page/impressum" },
  { label: "Điều khoản", href: "https://hashnode.com/terms" },
];

export const copyright = "Copyright © 2026 Hoangcaster";
export const copyrightLine = copyright;
