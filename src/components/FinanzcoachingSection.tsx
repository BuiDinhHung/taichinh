import { finanzcoachingSection } from "@/lib/content";

export function FinanzcoachingSection() {
  return (
    <section className="bg-brand-gold-tint py-14 lg:py-20">
      <div className="dvag-container">
        <div className="mx-auto max-w-5xl">
          {finanzcoachingSection.eyebrow && (
            <p className="text-center text-sm font-bold uppercase tracking-wider text-brand-gold">
              {finanzcoachingSection.eyebrow}
            </p>
          )}
          <h2 className="text-center text-3xl font-bold leading-[1.15] text-text-strong sm:text-4xl lg:text-[34px]">
            {finanzcoachingSection.headline}
          </h2>

          <div className="mt-8 space-y-5">
            {finanzcoachingSection.bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-text-strong">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
