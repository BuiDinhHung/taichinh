"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsEmbedded } from "@/lib/use-is-embedded";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from "@/components/icons";

export interface HeroSlide {
  eyebrow: string;
  headline: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export function HeroSlider({
  slides,
  autoPlayInterval = 6000,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isEmbedded = useIsEmbedded();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1) return;

    autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlayInterval, goToNext, slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#efe7c9]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={slide.image.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="scale-[0.96] object-contain object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/0" />
      </div>

      <div className="dvag-container pointer-events-none relative min-h-[430px] py-6 sm:min-h-[520px] lg:min-h-[600px]">
        <div className="flex min-h-[350px] items-end pb-0 sm:min-h-[440px] sm:pb-5 lg:min-h-[510px]">
          <div className="pointer-events-auto relative w-[78vw] max-w-[255px] bg-brand-gold/78 px-4 py-4 text-white sm:max-w-[360px] sm:px-7 sm:py-6 lg:max-w-[390px] lg:bg-brand-gold/82 lg:[clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {currentSlide.eyebrow && (
                <p className="text-xs font-bold uppercase tracking-wider text-white/95 sm:text-sm">
                  {currentSlide.eyebrow}
                </p>
              )}
              <h1 className="max-w-[12ch] text-[25px] font-bold leading-[1.08] text-white sm:text-3xl sm:leading-[1.12] lg:text-[34px]">
                {currentSlide.headline}
              </h1>
              <Link
                href={currentSlide.cta.href}
                className="inline-flex items-center gap-2 self-start bg-brand-gold-dark px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-gold-darker sm:text-sm"
              >
                {currentSlide.cta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-4 right-6 flex items-center justify-center gap-4 rounded-full bg-white/85 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md sm:bottom-5 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 lg:bottom-6 lg:left-8 lg:translate-x-0">
            {!isEmbedded && (
              <div className="hidden gap-3 lg:flex">
                <button
                  type="button"
                  aria-label="Slide trước"
                  onClick={goToPrevious}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Slide tiếp"
                  onClick={goToNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold text-brand-gold-darker transition-colors hover:bg-brand-gold-tint"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            )}

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Đi tới slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentIndex
                      ? "h-2.5 w-8 bg-brand-gold"
                      : "h-2.5 w-2.5 bg-brand-gold/40 hover:bg-brand-gold/60"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
