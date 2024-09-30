import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testiomonial-section";
import { TopSellingProduct } from "@/components/sections/top-product-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FaqSection } from "@/components/sections/faq-section";
export default function Home() {
  return (
    <div className="h-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <TopSellingProduct />
      <FaqSection />
    </div>
  );
}
