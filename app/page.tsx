import { panchoSemibold } from "@/app/fonts/font";
import { DogSliderComponent } from "@/components/sections/dog-slider";
import { TopSellingProduct } from "@/components/sections/top-product-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FaqSection } from "@/components/sections/faq-section";
export default function Home() {
  return (
    <div className="h-full flex flex-col overflow-x-hidden">
      <div className="relative  h-[90vh] sm:h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero-video-one.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="relative z-10 w-screen pt-20 flex flex-col justify-center items-center space-y-3 md:space-y-6 text-white h-full bg-black bg-opacity-50">
          <h1
            className={`text-3xl  sm:text-5xl md:text-[3rem] lg:text-6xl  xl:text-7xl px-8  md:px-16 lg:px-24 ${panchoSemibold.className} text-center`}
            style={{
              lineHeight: 1,
            }}
          >
            Find Pets, Food, Goods, and Services in One Place
          </h1>
          <p className="font-semibold text-lg text-center hidden md:block md:px-28  lg:px-64">
            {`Adopt a new pet, shop for food, and get the best pet goods and services, all in one spot. From finding your next companion to ensuring they get the care they need, we're here to help.`}
          </p>
          <p className="font-semibold px-5 sm:px-10 md:hidden text-center">
            {`Adopt, shop, and care for your pets—all in one place. Find your next companion and everything they need with ease.`}
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
