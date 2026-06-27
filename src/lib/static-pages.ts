import type { Block } from "@/types/content";

export type StaticPage = {
  slug: string;
  title: string;
  blocks: Block[];
};

export const staticPages: Record<string, StaticPage> = {
  contact: {
    slug: "contact",
    title: "Liên hệ",
    blocks: [
      {
        type: "p",
        text: "Xin vui lòng để lại thông tin liên hệ, chúng tôi sẽ hồi đáp trong thời gian sớm nhất.",
      },
      { type: "p", text: "Chân thành cảm ơn." },
      { type: "h2", text: "Văn phòng tư vấn" },
      { type: "p", text: "**Bao Vu The** - Vermögensberater" },
      { type: "p", text: "**Địa chỉ:** Proskauer Str. 13, 10247 Berlin, Deutschland" },
      { type: "p", text: "**Điện thoại:** +49 30 4268859" },
      { type: "p", text: "**Di động / WhatsApp / Zalo / Viber:** 0176-10178768" },
      { type: "p", text: "**Email:** bao.vu-the.3625100@dvag.de" },
      {
        type: "callout",
        text: "Bạn cần tư vấn? Hãy để lại thông tin liên hệ, chúng tôi sẽ hồi đáp trong thời gian sớm nhất.",
      },
    ],
  },

  "gioi-thieu": {
    slug: "gioi-thieu",
    title: "Về chúng tôi",
    blocks: [
      { type: "img", src: "/images/hero-ve-chung-toi.png" },
      {
        type: "h2",
        text: "Tư vấn tài chính chuyên nghiệp. Giá trị bền vững cho tương lai",
      },
      {
        type: "p",
        text: "Một nền tảng tài chính vững mạnh là tiền đề quan trọng giúp mỗi cá nhân chủ động xây dựng tương lai ổn định và bền vững.",
      },
      {
        type: "p",
        text: "Văn phòng Tư vấn Tài chính Vũ Thế Bảo trực thuộc Deutsche Vermögensberatung (DVAG) - là tập đoàn tư vấn tài chính uy tín hàng đầu tại Đức.",
      },
      {
        type: "p",
        text: "Với hơn 50 năm kinh nghiệm hoạt động cùng đội ngũ gần 20.000 chuyên viên tư vấn trên toàn quốc, DVAG hiện đang đồng hành cùng khoảng 8 triệu khách hàng tại Đức trong việc hoạch định và bảo vệ tương lai tài chính của họ.",
      },
      {
        type: "p",
        text: "Chúng tôi cung cấp các giải pháp tư vấn tài chính toàn diện và chuyên sâu trong các lĩnh vực: Đầu tư - Tiết kiệm, Bảo hiểm, Bất động sản, lập kế hoạch hưu trí và hoạch định tài chính dài hạn.",
      },
      {
        type: "p",
        text: "Thông qua quy trình tư vấn cá nhân hóa, minh bạch và định hướng dài hạn, chúng tôi hỗ trợ khách hàng đưa ra những quyết định tài chính phù hợp, hiệu quả và bền vững theo từng giai đoạn của cuộc sống.",
      },
      {
        type: "p",
        text: "Với tinh thần trách nhiệm, tính chuyên nghiệp và cam kết đồng hành lâu dài, chúng tôi hướng tới mục tiêu xây dựng những giá trị tài chính ổn định và bền vững cho mỗi khách hàng và gia đình của họ.",
      },
      { type: "img", src: "/images/pdf-team-office.jpeg" },
      { type: "h2", text: "Tư vấn tài chính đa diện" },
      { type: "h3", text: "Bao Vu The" },
      { type: "p", text: "Vermögensberater" },
      { type: "p", text: "**Büro für Deutsche Vermögensberatung**" },
      { type: "p", text: "**Địa chỉ:** Proskauer Str. 13, 10247 Berlin" },
      { type: "p", text: "**Tel.:** +49 30-4268859" },
      { type: "p", text: "**Mobil / WhatsApp:** 0176-10178768" },
      { type: "p", text: "**Mail:** bao.vu-the.3625100@dvag.de" },
      { type: "p", text: "**Webseite:** www.taichinh.de" },
      { type: "p", text: "**Links & QR Online:** https://bit.ly/vuthebao" },
      { type: "h2", text: "Chúng tôi là" },
      {
        type: "ul",
        items: [
          "**Bảo Vũ Thế** - Tel.: +49 176-10178768 - Mail: vuthe@hotmail.de",
          "**Tina Ngo** - Tel.: +49 174-6322994 - Mail: tinalinngo@gmail.com",
          "**Kevin Hütter** - Tel.: +49 176-32019935 - Mail: kevin.huetter97@gmail.com",
          "**Ronald A. Meiners** - Tel.: +49 176-70008024 - Mail: ronald.meiners@dvag.de",
        ],
      },
      {
        type: "callout",
        text: "Đặt lịch hẹn tư vấn miễn phí để cùng chúng tôi xây dựng kế hoạch phù hợp với mục tiêu tài chính của bạn.",
      },
      { type: "h2", text: "ServiceRating: xuất sắc!" },
      {
        type: "p",
        text: "Hơn 115.000 khách hàng đã đánh giá cao chất lượng tư vấn của đội ngũ Vermögensberater/-innen. Sự tin tưởng này là động lực để chúng tôi tiếp tục phục vụ tận tâm và chuyên nghiệp hơn mỗi ngày.",
      },
      { type: "h2", text: "Đối tác của chúng tôi" },
      {
        type: "p",
        text: "Để mang đến giải pháp toàn diện, chúng tôi hợp tác cùng các đối tác uy tín trong các lĩnh vực bảo hiểm, đầu tư, ngân hàng, bất động sản và năng lượng.",
      },
    ],
  },

  impressum: {
    slug: "impressum",
    title: "Impressum",
    blocks: [
      { type: "h2", text: "Büro für Deutsche Vermögensberatung" },
      { type: "p", text: "**Bao Vu The**" },
      { type: "p", text: "Proskauer Str. 13, 10247 Berlin, Deutschland" },
      { type: "p", text: "**Tel.:** +49 30 4268859" },
      { type: "p", text: "**Fax:** +49 30 48622869" },
      { type: "p", text: "**Mobil:** 0176-10178768 / WhatsApp, Zalo" },
      { type: "p", text: "**Mail:** bao.vu-the.3625100@dvag.de" },
      { type: "p", text: "**Web:** https://taichinh.de" },
      { type: "h2", text: "Bankverbindung" },
      { type: "p", text: "**IBAN:** DE77 3002 0900 1112 5640 51" },
      { type: "p", text: "**Steuernummer:** 14/574/01166" },
      {
        type: "p",
        text: "Im Versicherungsbereich als gebundener Vermittler gemäß § 34d Abs. 7 GewO auf Provisionsbasis ausschließlich vermittelnd und beratend tätig für die Generali Deutschland Lebensversicherung, Generali Deutschland Versicherung, Generali Deutschland Krankenversicherung, Generali Pensionskasse, ADVOCARD Rechtsschutzversicherung.",
      },
      {
        type: "p",
        text: "Darüber hinaus können in Einzelfällen geldwerte Vorteile in Form von Sachleistungen anfallen (z.B. Schulungen sowie Einladungen für die Teilnahme an kulturellen und gesellschaftlichen Veranstaltungen, Informationsmaterial, Aufmerksamkeiten).",
      },
      { type: "h2", text: "Schlichtungsstellen" },
      {
        type: "ul",
        items: [
          "Verein Versicherungsombudsmann e.V., Postfach 080632, 10006 Berlin",
          "Ombudsmann Private Kranken- und Pflegeversicherung, Postfach 060222, 10052 Berlin",
        ],
      },
      {
        type: "p",
        text: "Im Investmentbereich als Finanzanlagenvermittler gemäß § 34f Abs. 1 Nr. 1 GewO nicht unabhängig vermittelnd tätig für: DWS Investment GmbH, DWS Investment S.A., Generali Investments Deutschland, Allianz Global Investors, Allianz Global Investors Luxembourg, SEB-Investment, DWS Grundbesitz GmbH.",
      },
      {
        type: "p",
        text: "**Erlaubnis- und Aufsichtsbehörde gemäß § 34f GewO:** Ba Friedrichshain-Kreuzberg v.Berlin, Petersburger Str. 86-90, 10247 Berlin",
      },
      {
        type: "p",
        text: "**Erlaubnis- und Aufsichtsbehörde gemäß § 34c GewO:** Bezirksamt Friedrichshain-Kreuzberg, Petersburger Str. 86-90, 10247 Berlin",
      },
      { type: "h2", text: "Gemeinsame Registerstelle für § 34d GewO und § 34f GewO" },
      {
        type: "p",
        text: "**Deutsche Industrie- und Handelskammer (DIHK)**",
      },
      {
        type: "p",
        text: "Breite Straße 29, 10178 Berlin, Telefon 0180 600585-0 (20 Cent/Anruf)",
      },
      {
        type: "p",
        text: "**Registernummer nach § 34d GewO:** D-NVAH-439L4-81",
      },
      {
        type: "p",
        text: "**Registernummer nach § 34f GewO:** D-F-107-H4GB-47",
      },
      { type: "h2", text: "Rechtliche Hinweise" },
      {
        type: "p",
        text: "Der Inhalt und die Struktur der Webseiten des Büros für Deutsche Vermögensberatung sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial, ist nur mit vorheriger Zustimmung des Büros für Deutsche Vermögensberatung zulässig.",
      },
      {
        type: "p",
        text: "Information gemäß § 36 Abs. 1 Verbraucherstreitbeilegungsgesetz (VSBG): Das Büro für Deutsche Vermögensberatung nimmt nicht an Schlichtungsverfahren gemäß VSBG teil und ist hierzu auch nicht verpflichtet.",
      },
    ],
  },
};
