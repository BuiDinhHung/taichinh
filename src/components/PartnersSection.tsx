import Image from "next/image";
import { partners } from "@/lib/partners";

export function PartnersSection() {
  return (
    <section className="bg-[#e7eff8]">
      <div className="grid min-h-[430px] bg-white lg:grid-cols-[43%_57%]">
        <div className="flex items-center">
          <div className="mx-auto w-full max-w-[420px] px-[10%] py-14 lg:py-16">
            <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl">
              Đối tác của chúng tôi
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-black sm:text-base">
              <p>
                Đối tác của chúng tôi là những công ty hàng đầu trong ngành tài chính.
              </p>
              <p>
                Vì vậy, bạn có thể yên tâm rằng mọi thứ bạn xây dựng với sự hỗ trợ của chúng tôi sẽ bền vững.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[430px]">
          <Image
            src="/images/partners-tablet.jpeg"
            alt="Tư vấn cùng các đối tác tài chính"
            fill
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="dvag-container py-12 md:py-16">
        <div className="grid gap-x-12 gap-y-10">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="grid items-center gap-5 md:grid-cols-[280px_1fr]"
            >
              <div className="relative h-28 w-full max-w-[280px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="280px"
                  className="bg-transparent object-contain object-left"
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
    </section>
  );
}
