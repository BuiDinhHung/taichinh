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

export function HeroSlider({
  slides,
  autoPlayInterval = 6000,
}: HeroSliderProps) {
  const slideDuration = Math.max(3500, autoPlayInterval);
  const totalDuration = slideDuration * Math.max(1, slides.length);

  return (
    <section
      className="hero-css-slider relative isolate w-full overflow-hidden bg-black"
      style={
        {
          "--hero-slide-count": slides.length,
          "--hero-slide-duration": `${slideDuration}ms`,
          "--hero-total-duration": `${totalDuration}ms`,
        } as React.CSSProperties
      }
    >
      <style>
        {`
          @keyframes heroSlideFade {
            0%, 27% { opacity: 1; z-index: 2; }
            33%, 94% { opacity: 0; z-index: 1; }
            100% { opacity: 1; z-index: 2; }
          }

          .hero-css-slider .hero-css-slide {
            opacity: 0;
            animation-name: heroSlideFade;
            animation-duration: var(--hero-total-duration);
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .hero-css-slider .hero-css-slide:first-child {
            opacity: 1;
          }
        `}
      </style>

      <div className="relative h-[clamp(430px,58vw,760px)] w-full">
        {slides.map((slide, index) => (
          <article
            key={`${slide.image.src}-${index}`}
            className="hero-css-slide absolute inset-0"
            style={{
              animationDelay: `${index * slideDuration}ms`,
            }}
          >
            <Image
              src={slide.image.src}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="scale-110 object-cover opacity-55 blur-md"
              style={{ objectPosition: slide.imagePosition ?? "center center" }}
            />
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="z-[1] object-contain"
              style={{ objectPosition: slide.imagePosition ?? "center center" }}
            />

            <div className="absolute inset-x-4 bottom-5 z-10 sm:inset-x-auto sm:bottom-[7%] sm:left-0">
              <div className="relative w-full bg-brand-gold/85 px-5 py-5 text-white shadow-[0_12px_36px_rgba(0,0,0,0.16)] backdrop-blur-[1px] sm:w-[min(36vw,390px)] sm:min-w-[270px] sm:px-7 sm:py-6 sm:[clip-path:polygon(0_0,100%_0,100%_82%,0_100%)] lg:w-[min(31vw,420px)]">
                <div className="flex flex-col items-start gap-3 sm:gap-4">
                  {slide.eyebrow && (
                    <p className="text-[0.7rem] font-bold uppercase text-white/95">
                      {slide.eyebrow}
                    </p>
                  )}
                  <h1 className="max-w-[16ch] text-[1.55rem] font-normal leading-[1.18] text-white sm:max-w-[13ch] sm:text-[1.75rem] lg:text-[2.15rem]">
                    {slide.headline}
                  </h1>
                  <Link
                    href={slide.cta.href}
                    className="inline-flex min-h-10 items-center justify-center bg-brand-gold-dark px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-gold-darker"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}

        {slides.length > 1 && (
          <div className="absolute bottom-4 right-4 z-10 flex items-center justify-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md">
            {slides.map((_, index) => (
              <span
                key={index}
                className="block h-2 w-2 rounded-full bg-brand-gold/55"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
