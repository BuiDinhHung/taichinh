import { finanzcoachingSection } from "@/lib/content";

export function FinanzcoachingSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="dvag-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-text-strong sm:text-3xl lg:whitespace-nowrap">
            Tư vấn tài chính chuyên nghiệp. Giá trị bền vững cho tương lai
          </h2>

          <div className="mt-8 space-y-5">
            {finanzcoachingSection.bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-text-strong sm:text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
