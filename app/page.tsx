import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ProvincesGrid from "@/components/sections/ProvincesGrid";
import HotelsSection from "@/components/sections/HotelsSection";
import WhyVisit from "@/components/sections/WhyVisit";
import HighlightsStrip from "@/components/sections/HighlightsStrip";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      
      <Hero />
      <StatsBar />
      <ProvincesGrid />
      <HotelsSection />
      <WhyVisit />
      <HighlightsStrip />
      <CTABanner />
    </>
  );
}