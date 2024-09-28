import { panchoSemibold } from "@/app/fonts/font";

export const HeroSectin = () => {
  return (
    <section className="relative  h-[90vh] sm:h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video-two.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="relative z-10 w-screen pt-20 flex flex-col justify-center items-center space-y-3 md:space-y-6 text-white h-full bg-black bg-opacity-50">
        <h1
          className={`text-4xl text-center  sm:text-5xl md:text-[3rem] lg:text-6xl  xl:text-7xl px-1  md:px-16 lg:px-24 ${panchoSemibold.className} `}
        >
          Pets, Food, Goods, & Services – All in One Place
        </h1>
        <p className="font-semibold text-lg text-center hidden md:block md:px-28  lg:px-64">
          {`Adopt a new pet, shop for food, and get the best pet goods and services, all in one spot. From finding your next companion to ensuring they get the care they need, we're here to help.`}
        </p>
        <p className="text-sm px-5 sm:px-10 md:hidden text-center">
          {`Find pets, shop essentials, and get care—all in one place. Your next companion is just a click away.`}
        </p>
        <div className="w-full flex justify-center items-center">
          <button
            className={`bg-blue-900 border-2 border-white text-white text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-3 ${panchoSemibold.className}`}
          >
            Get Your Pet Today
          </button>
        </div>
      </div>
    </section>
  );
};
