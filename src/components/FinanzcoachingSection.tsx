import { finanzcoachingSection } from "@/lib/content";

export function FinanzcoachingSection() {
  return (
    <section className="bg-brand-gold-tint py-12 lg:py-16">
      <div className="dvag-container">
        <div>
          <h2 className="text-center text-xl font-bold leading-tight text-text-strong sm:text-2xl">
            Tư vấn tài chính chuyên nghiệp. Giá trị bền vững cho tương lai
          </h2>

          <div className="mt-8 columns-1 gap-10 space-y-5 lg:columns-2">
            {finanzcoachingSection.bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="break-inside-avoid text-sm leading-relaxed text-text-strong sm:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
