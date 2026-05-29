import Image from "next/image";
import Link from "next/link";

export function PartnersSection() {
  return (
    <section className="bg-[#e7eff8]">
      <div className="grid min-h-[430px] bg-white lg:grid-cols-[43%_57%]">
        <div className="flex items-center">
          <div className="mx-auto w-full max-w-[420px] px-6 py-14 lg:py-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Đối tác của chúng tôi
            </h2>
            <div className="mt-14 space-y-6 text-xl leading-snug text-black">
              <p>
                Đối tác của chúng tôi là những công ty hàng đầu trong ngành tài chính.
              </p>
              <p>
                Vì vậy, bạn có thể yên tâm rằng mọi thứ bạn xây dựng với sự hỗ trợ của chúng tôi sẽ bền vững.
              </p>
            </div>
            <Link
              href="/recommendations"
              className="mt-16 inline-flex text-xl font-bold text-brand-gold transition-colors hover:text-brand-gold-dark"
            >
              Xem tiếp
            </Link>
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
    </section>
  );
}
