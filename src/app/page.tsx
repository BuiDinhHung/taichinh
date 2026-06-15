import { Header } from "@/components/Header";
import { HeroTeaser } from "@/components/HeroTeaser";
import { FinanzcoachingSection } from "@/components/FinanzcoachingSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { TeaserSlider } from "@/components/TeaserSlider";
import { RatingsSection } from "@/components/RatingsSectionWrapper";
import { AboutContactSection } from "@/components/AboutContactSection";
import { FeaturedNewsSection } from "@/components/FeaturedNewsSection";
import { TeamSection } from "@/components/TeamSection";
import { AwardsSection } from "@/components/AwardsSection";
import { HomePartnersSection } from "@/components/HomePartnersSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        <HeroTeaser />
        <FinanzcoachingSection />
        <AdvantagesSection />
        <TeaserSlider />
        <FeaturedNewsSection />
        <AboutContactSection />
        <TeamSection />
        <RatingsSection />
        <AwardsSection />
        <HomePartnersSection />
      </main>
      <Footer />
    </>
  );
}
