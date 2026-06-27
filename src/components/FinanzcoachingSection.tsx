"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { finanzcoachingSection } from "@/lib/content";

function renderHeadline(headline: string, highlight?: string) {
  if (!highlight || !headline.includes(highlight)) {
    return headline;
  }
  const [before, after] = headline.split(highlight);
  return (
    <>
      {before.trimEnd()}
      <br />
      {highlight}
      {after}
    </>
  );
}

/** Đếm tăng dần khi phần tử lọt vào viewport. */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo cho cảm giác "bứt tốc rồi dừng êm"
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function StatCard({
  stat,
  active,
  index,
}: {
  stat: (typeof finanzcoachingSection.stats)[number];
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, active);
  const display = count.toLocaleString("de-DE");

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border-default/70 bg-white p-7 text-center transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-brand-gold/60 hover:shadow-[0_18px_40px_-18px_rgba(200,170,34,0.55)] ${
        active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      {/* Vệt sáng quét khi hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-gold-tint/60 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <div className="relative bg-gradient-to-br from-brand-gold to-brand-gold-dark bg-clip-text text-4xl font-bold leading-none text-transparent sm:text-5xl">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="relative mt-3 text-sm font-medium leading-snug text-text-muted">
        {stat.label}
      </div>
    </div>
  );
}

export function FinanzcoachingSection() {
  const {
    eyebrow,
    headline,
    headlineHighlight,
    lead,
    bodyParagraphs,
    stats,
    primaryCta,
    secondaryCta,
  } = finanzcoachingSection;

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = `transition-all duration-700 ease-out ${
    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-10 lg:py-12"
    >
      {/* Nền chấm bi mờ + vầng sáng vàng */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--brand-gold-tint-2)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-brand-gold-tint blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-gold-tint/70 blur-3xl"
      />

      <div className="dvag-container relative">
        {/* Bố cục bất đối xứng: trái giới thiệu — phải nội dung */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Cột trái */}
          <div>
            {eyebrow ? (
              <span
                style={delay(0)}
                className={`inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold-tint px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold-darker ${revealClass}`}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
                {eyebrow}
              </span>
            ) : null}

            <h2
              style={delay(80)}
              className={`mt-5 text-3xl font-bold leading-tight tracking-tight text-text-strong sm:text-4xl lg:text-[32px] xl:text-[36px] ${revealClass}`}
            >
              {renderHeadline(headline, headlineHighlight)}
            </h2>

            {lead ? (
              <p
                style={delay(160)}
                className={`mt-6 border-l-4 border-brand-gold pl-5 text-lg leading-relaxed text-text-default sm:text-xl ${revealClass}`}
              >
                {lead}
              </p>
            ) : null}

            {primaryCta || secondaryCta ? (
              <div
                style={delay(240)}
                className={`mt-8 flex flex-col gap-4 sm:flex-row ${revealClass}`}
              >
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-gold px-7 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-gold-dark hover:shadow-md"
                  >
                    {primaryCta.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex h-12 items-center justify-center rounded-md border border-brand-gold px-7 text-sm font-bold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Cột phải — từng đoạn hiện dần lệch nhịp */}
          <div className="space-y-5">
            {bodyParagraphs.map((paragraph, i) => (
              <p
                key={paragraph}
                style={delay(120 + i * 110)}
                className={`group flex gap-4 text-base leading-relaxed text-text-default sm:text-[17px] ${revealClass}`}
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold/40 transition-colors duration-300 group-hover:bg-brand-gold"
                />
                <span>{paragraph}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Dải số liệu — count-up + reveal */}
        {stats?.length ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} active={visible} index={i} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
