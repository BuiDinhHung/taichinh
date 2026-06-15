"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface HeroSlide {
  eyebrow: string;
  headline: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  imagePosition?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export function HeroSlider({ slides, autoPlayInterval = 6000 }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = setTimeout(goNext, autoPlayInterval);
    return () => clearTimeout(id);
  }, [current, goNext, autoPlayInterval]);

  if (slides.length === 0) return null;

  const n = slides.length;

  return (
    <section className="relative isolate w-full overflow-hidden bg-black">
      {/* Horizontal track — all slides side by side */}
      <div
        className="flex h-[clamp(380px,52vw,720px)] will-change-transform"
        style={{
          width: `${n * 100}%`,
          transform: `translateX(-${(current * 100) / n}%)`,
          transition: "transform 700ms cubic-bezier(0.45, 0, 0.15, 1)",
        }}
      >
        {slides.map((slide, index) => (
          <article
            key={`${slide.image.src}-${index}`}
            className="relative h-full shrink-0"
            style={{ width: `${100 / n}%` }}
          >
            {/* blurred ambient background */}
            <Image
              src={slide.image.src}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="scale-110 object-cover opacity-55 blur-md"
              style={{ objectPosition: slide.imagePosition ?? "center center" }}
            />
            {/* main photo */}
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="z-[1] object-cover"
              style={{ objectPosition: slide.imagePosition ?? "center center" }}
            />

            {/* text overlay */}
            <div className="absolute inset-x-4 bottom-5 z-10 sm:inset-x-auto sm:bottom-[7%] sm:left-0">
              <div className="relative w-full bg-brand-gold/88 px-5 py-5 text-white shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-[1px] sm:w-[min(36vw,390px)] sm:min-w-[270px] sm:px-7 sm:py-7 sm:[clip-path:polygon(0_0,100%_0,100%_82%,0_100%)] lg:w-[min(31vw,420px)]">
                <div className="flex flex-col items-start gap-3 sm:gap-4">
                  {slide.eyebrow && (
                    <p className="text-[0.68rem] font-bold uppercase tracking-wide text-white/90">
                      {slide.eyebrow}
                    </p>
                  )}
                  <h1 className="max-w-[16ch] text-[1.5rem] font-light leading-[1.2] text-white sm:max-w-[13ch] sm:text-[1.7rem] lg:text-[2.1rem]">
                    {slide.headline}
                  </h1>
                  <Link
                    href={slide.cta.href}
                    className="mt-1 inline-flex min-h-10 items-center justify-center bg-brand-gold-dark px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-gold-darker"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Chuyển sang slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                index === current
                  ? "bg-brand-gold scale-125"
                  : "bg-brand-gold/40 hover:bg-brand-gold/70"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
