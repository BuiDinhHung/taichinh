import type { SVGProps } from "react";
import Image from "next/image";

type IconProps = SVGProps<SVGSVGElement>;

function BitmapIcon({
  src,
  className = "",
  size = 160,
}: {
  src: string;
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}

export function GrowthChartIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-growth.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <circle cx="60" cy="60" r="55" />
      <path d="M30 88V36M30 88h64" />
      <path d="M42 88V66h10v22M58 88V55h10v33M74 88V62h10v26" />
      <path d="M40 58l16-14 16 8 18-22" />
      <path d="M78 30h12v12" />
    </svg>
  );
}

export function PiggyBankIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-piggy.png" className={props.className} />;

  return (
    <svg viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <circle cx="72" cy="13" r="12" />
      <path d="M43 105h14V94h43v11h14V84c10-6 15-16 15-29h-17c-8-16-24-26-46-26-27 0-48 15-48 38 0 14 9 25 25 31z" />
      <path d="M111 51l12-16v28" />
      <circle cx="109" cy="61" r="2" fill="currentColor" />
      <path d="M26 62c-9-4-13-10-10-17 3-6 11-3 8 3-2 4-8 3-9-2" />
      <path d="M57 35c11-4 24-4 36 0" />
    </svg>
  );
}

export function FlexibleChoiceIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-advisor-arrows.png" className={props.className} />;

  return (
    <svg viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <circle cx="70" cy="60" r="18" />
      <path d="M70 15v25M70 80v25M25 60h25M90 60h25M38 28l18 18M84 74l18 18M102 28 84 46M56 74 38 92" />
      <path d="M70 15l-8 8M70 15l8 8M70 105l-8-8M70 105l8-8M25 60l8-8M25 60l8 8M115 60l-8-8M115 60l-8 8" />
      <path d="M62 70h16M58 78h24M70 52v15" />
    </svg>
  );
}

export function UmbrellaIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-umbrella.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <path d="M18 61c5-30 27-48 42-48s37 18 42 48" />
      <path d="M18 61c9-12 21-12 30 0 9-12 21-12 30 0 9-12 17-12 24 0" />
      <path d="M60 13v78c0 14-17 14-17 0" />
    </svg>
  );
}

export function DirectionSignIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-signpost.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" {...props}>
      <path d="M58 15v90" />
      <path d="M24 30h62l16 14-16 14H24z" />
      <path d="M96 68H34L18 82l16 14h62z" />
    </svg>
  );
}

export function HandEuroIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-euro-hand.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="58" cy="32" r="23" />
      <path d="M68 22c-13-5-25 1-25 11s13 16 25 9" />
      <path d="M40 31h24M40 39h23" />
      <path d="M16 76l24 12 20-9c8-4 14 7 6 12l-11 7" />
      <path d="M16 76l8-14 31 16 24-12c12-6 24 2 17 13L58 103 20 91" />
    </svg>
  );
}

export function GovernmentSupportIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-bank.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="60" cy="60" r="36" className="fill-[#f3efdc]" stroke="none" />
      <path d="M28 54h64" />
      <path d="M34 54v32M50 54v32M70 54v32M86 54v32" />
      <path d="M24 88h72" />
      <path d="M22 50 60 28l38 22" />
      <circle cx="42" cy="74" r="5" />
      <path d="M42 79v12" />
    </svg>
  );
}

export function EuroCycleIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-euro-growth.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="60" cy="60" r="36" className="fill-[#f3efdc]" stroke="none" />
      <circle cx="58" cy="54" r="20" />
      <path d="M66 43c-12-5-24 1-24 12s12 16 24 9" />
      <path d="M41 53h23M41 61h22" />
      <path d="M30 83c14 14 37 14 51 1" />
      <path d="m80 72 3 13 12-5" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-lock.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" {...props}>
      <rect x="24" y="52" width="72" height="54" rx="7" />
      <path d="M38 52V36c0-15 10-25 22-25s22 10 22 25v16" />
      <circle cx="60" cy="76" r="8" />
      <path d="M60 84v13" />
    </svg>
  );
}

export function ProfileCircleIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-advisor-circle.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" {...props}>
      <path d="M27 30a48 48 0 0 1 66 0M93 90a48 48 0 0 1-66 0" />
      <circle cx="60" cy="50" r="14" />
      <path d="M35 95c4-19 16-29 25-29s21 10 25 29" />
    </svg>
  );
}

export function DocumentCheckIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-document-check.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" {...props}>
      <path d="M28 14h43l21 21v69H28z" />
      <path d="M71 14v21h21" />
      <path d="M42 44h27M42 58h35M42 72h24" />
      <circle cx="82" cy="82" r="18" />
      <path d="M73 82l7 7 13-15" />
    </svg>
  );
}

export function StopwatchIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-stopwatch.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" {...props}>
      <path d="M49 14h22M60 14v12" />
      <path d="M38 28c-14 8-23 23-23 41 0 26 20 46 45 46s45-20 45-46c0-15-7-29-18-37" />
      <path d="M82 24l10 10" />
      <path d="M60 68l19-20" />
      <path d="M17 46H4M20 60H6M22 74H8" />
    </svg>
  );
}

export function CycleIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-flexibility.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M91 31a43 43 0 0 1 1 57l-12 12" />
      <path d="M81 101h20V81" />
      <path d="M29 89a43 43 0 0 1-1-57l12-12" />
      <path d="M39 19H19v20" />
    </svg>
  );
}

export function BrokenPlateIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-glass.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <CycleIcon />
      <path d="M45 33l16 14-9 10 18 12-10 18 21-28-16-10 9-16z" />
    </svg>
  );
}

export function SofaIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-chair.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <CycleIcon />
      <path d="M34 54V42c0-8 6-13 14-13h24c8 0 14 5 14 13v12" />
      <path d="M28 54c-8 0-12 5-12 13v20h88V67c0-8-4-13-12-13" />
      <path d="M30 87v12M90 87v12" />
    </svg>
  );
}

export function HouseLineIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-house.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 58l42-34 42 34" />
      <path d="M30 55v46h60V55" />
      <path d="M50 101V72h20v29" />
    </svg>
  );
}

export function HouseCycleIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-house.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <CycleIcon />
      <path d="M38 63l22-18 22 18" />
      <path d="M45 62v28h30V62" />
    </svg>
  );
}

export function SolarPanelIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-solar.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <CycleIcon />
      <circle cx="38" cy="40" r="10" />
      <path d="M38 18v8M38 54v8M16 40h8M52 40h8M23 25l6 6M53 25l-6 6" />
      <path d="M58 63l37 12-15 24-37-12z" />
      <path d="M53 78l36 11M65 65l-15 24M78 69l-15 24" />
    </svg>
  );
}

export function HealthCrossIcon(props: IconProps) {
  return <BitmapIcon src="/images/icon-health.png" className={props.className} />;

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" {...props}>
      <CycleIcon />
      <path d="M51 31h18v24h24v18H69v24H51V73H27V55h24z" />
    </svg>
  );
}

export function DwsLogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-dws.png"
      alt="DWS"
      width={218}
      height={107}
      className={`h-auto w-auto bg-transparent object-contain ${className}`}
    />
  );
}

export function AllianzLogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-allianz-global-investors.png"
      alt="Allianz Global Investors"
      width={229}
      height={101}
      className={`h-auto w-auto bg-transparent object-contain ${className}`}
    />
  );
}

export function BadeniaLogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-badenia.png"
      alt="Deutsche Bausparkasse Badenia"
      width={229}
      height={101}
      className={`h-auto w-auto bg-transparent object-contain ${className}`}
    />
  );
}

export function GeneraliLogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-generali.png"
      alt="Generali"
      width={113}
      height={87}
      className={`h-auto w-auto bg-transparent object-contain ${className}`}
    />
  );
}

export function FingerHausLogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-fingerhaus.png"
      alt="FingerHaus"
      width={237}
      height={115}
      className={`h-auto w-auto bg-transparent object-contain ${className}`}
    />
  );
}
