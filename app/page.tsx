import { HeroSectin } from "@/components/sections/hero-section";
import { DogSliderComponent } from "@/components/sections/dog-slider";
import { TopSellingProduct } from "@/components/sections/top-product-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FaqSection } from "@/components/sections/faq-section";
export default function Home() {
  return (
    <div className="h-full flex flex-col overflow-x-hidden">
      <HeroSectin />
      <FeatureSection />
      <DogSliderComponent />
      <TopSellingProduct />
      <FaqSection />
    </div>
  );
}
