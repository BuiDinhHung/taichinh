import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

export function GrowthChartAsset({ className = "h-40 w-40" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="60" cy="60" r="55" />
      <path d="M30 88V36M30 88h64" />
      <path d="M42 88V66h10v22M58 88V55h10v33M74 88V62h10v26" />
      <path d="M40 58l16-14 16 8 18-22" />
      <path d="M78 30h12v12" />
    </svg>
  );
}

export function PiggyBankAsset({ className = "h-40 w-48" }: IconProps) {
  return (
    <svg viewBox="0 0 140 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="72" cy="13" r="12" />
      <path d="M43 105h14v-11h43v11h14V84c10-6 15-16 15-29h-17c-8-16-24-26-46-26-27 0-48 15-48 38 0 14 9 25 25 31z" />
      <path d="M111 51l12-16v28" />
      <circle cx="109" cy="61" r="2" fill="currentColor" />
      <path d="M26 62c-9-4-13-10-10-17 3-6 11-3 8 3-2 4-8 3-9-2" />
      <path d="M57 35c11-4 24-4 36 0" />
    </svg>
  );
}

export function FlexibilityPersonAsset({ className = "h-40 w-48" }: IconProps) {
  return (
    <svg viewBox="0 0 140 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="70" cy="60" r="18" />
      <path d="M70 15v25M70 80v25M25 60h25M90 60h25M38 28l18 18M84 74l18 18M102 28 84 46M56 74 38 92" />
      <path d="M70 15l-8 8M70 15l8 8M70 105l-8-8M70 105l8-8M25 60l8-8M25 60l8 8M115 60l-8-8M115 60l-8 8" />
      <path d="M62 70h16M58 78h24M70 52v15" />
    </svg>
  );
}

export function UmbrellaAsset({ className = "h-32 w-32" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="4">
      <path d="M16 62a44 44 0 0 1 88 0c-10-11-21-11-31 0-9-11-18-11-27 0-10-11-20-11-30 0Z" />
      <path d="M60 18v82c0 10-16 10-16 0" />
    </svg>
  );
}

export function SignpostAsset({ className = "h-32 w-32" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
      <path d="M58 14h12v92H58z" />
      <path d="M16 30h66l24 18-24 18H16z" />
      <path d="M104 78H38L14 96l24 18h66z" />
    </svg>
  );
}

export function EuroHandAsset({ className = "h-32 w-32" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="58" cy="30" r="22" />
      <path d="M67 19c-18-7-35 17-8 22M49 29h25M48 37h25" />
      <path d="M16 78l25 15c12 7 25 9 38 3l27-13c5-2 7-8 3-12-3-3-8-4-13-2L74 78" />
      <path d="M15 78l12-13 29 13c8 4 18 4 23-2" />
    </svg>
  );
}

export function LockAsset({ className = "h-32 w-32" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
      <rect x="22" y="52" width="76" height="54" rx="4" />
      <path d="M36 52V36a24 24 0 0 1 48 0v16" />
      <circle cx="60" cy="77" r="10" />
      <path d="M60 87v10" />
    </svg>
  );
}

export function DocumentCheckAsset({ className = "h-32 w-32" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 14h48l18 18v72H28z" />
      <path d="M76 14v20h18M42 44h32M42 58h32M42 72h22" />
      <circle cx="82" cy="88" r="19" />
      <path d="M73 88l7 7 13-15" />
    </svg>
  );
}

export function HouseAsset({ className = "h-32 w-32" }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} text-brand-gold`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
      <path d="M18 102h84V48L60 18 18 48z" />
      <path d="M46 102V70h28v32M30 60h20v20H30z" />
    </svg>
  );
}

export function DwsLogoAsset({ className = "text-6xl" }: IconProps) {
  return <div className={`${className} font-bold tracking-tight text-[#9a9a9a]`}>DWS</div>;
}

export function AllianzLogoAsset({ className = "" }: IconProps) {
  return (
    <div className={`${className} text-[#003f96]`}>
      <div className="text-5xl font-bold leading-none">Allianz ◯</div>
      <div className="mt-2 text-3xl">Global Investors</div>
    </div>
  );
}

export function GeneraliLogoAsset({ className = "" }: IconProps) {
  return (
    <div className={`${className} text-center font-serif font-bold leading-none text-[#d71920]`}>
      <div className="text-6xl">♌</div>
      <div className="text-5xl">GENERALI</div>
    </div>
  );
}

export const savedFinancialAssets: Record<string, ReactNode> = {
  growthChart: <GrowthChartAsset />,
  piggyBank: <PiggyBankAsset />,
  flexibilityPerson: <FlexibilityPersonAsset />,
  umbrella: <UmbrellaAsset />,
  signpost: <SignpostAsset />,
  euroHand: <EuroHandAsset />,
  lock: <LockAsset />,
  documentCheck: <DocumentCheckAsset />,
  house: <HouseAsset />,
  dwsLogo: <DwsLogoAsset />,
  allianzLogo: <AllianzLogoAsset />,
  generaliLogo: <GeneraliLogoAsset />,
};
