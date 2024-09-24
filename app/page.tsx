import { panchoSemibold } from "@/app/fonts/font";
import { DogSliderComponent } from "@/components/dog-slider";
import { TopSellingProduct } from "@/components/best-selling-product";
export default function Home() {
  return (
    <div className="h-full  flex flex-col overflow-x-hidden ">
      <div className="h-[90vh] w-full  bg-[url('/hero-image4.png')] bg-cover bg-center bg-no-repeat bg-opacity-50 flex justify-start items-center">
        <div className="w-[40%] pl-16 flex flex-col justify-center items-center space-y-6 text-white">
          <h1 className={`text-6xl ${panchoSemibold.className} `}>
            Your One-Stop Platform for Pets
          </h1>
          <p className="font-semibold">
            Explore pets for sale, essential pet supplies, and expert services
            all in one place. Connecting you with everything your pet needs.
          </p>
          <div className="w-full flex justify-start">
            <button className="bg-blue-900 text-white text-xl px-7 py-3.5">
              Get Your New Pet Today
            </button>
          </div>
        </div>
      </div>
      <DogSliderComponent />
      <TopSellingProduct />
    </div>
  );
}
