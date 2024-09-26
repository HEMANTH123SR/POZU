import { panchoSemibold } from "@/app/fonts/font";
import { DogSliderComponent } from "@/components/sections/dog-slider";
import { TopSellingProduct } from "@/components/sections/top-product-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FaqSection } from "@/components/sections/faq-section";
export default function Home() {
  return (
    <div className="h-full flex flex-col overflow-x-hidden">
      <div className="relative h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero-video-one.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="relative z-10 w-screen pt-20 flex flex-col justify-center items-center space-y-6 text-white h-full bg-black bg-opacity-50">
          <h1
            className={`text-7xl px-24 ${panchoSemibold.className} text-center`}
          >
            Find Pets, Food, Goods, and Services in One Place
          </h1>
          <p className="font-semibold text-lg text-center px-44">
            {`Adopt a new pet, shop for food, and get the best pet goods and services, all in one spot. From finding your next companion to ensuring they get the care they need, we're here to help.`}
          </p>
          <div className="w-full flex justify-center items-center">
            <button
              className={`bg-blue-900 border-2 border-white text-white text-lg px-7 py-3.5  ${panchoSemibold.className}`}
            >
              Get Your New Pet Today
            </button>
          </div>
        </div>
      </div>
      <FeatureSection />
      <DogSliderComponent />
      <TopSellingProduct />
      <FaqSection />
    </div>
  );
}
