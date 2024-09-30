

import { panchoSemibold } from "@/app/fonts/font";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative h-[86vh]    m w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-one.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1
            className={`${panchoSemibold.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl  mb-4 sm:mb-6`}
          >
            Pets, Food, Goods, & Services – All in One Place
          </h1>
          <p className="text-lg md:text-xl mb-6 sm:mb-8 hidden md:block">
            {`Adopt a new t pet goods and services, all in one spot. From finding
            your next companion to ensuring they get the care they need, we're
            here to help.`}
          </p>

          <p className="text-sm sm:text-base mb-6 sm:mb-8 md:hidden">
            Find pets, shop essentials, and get care—all in one place. Your next
            companion is just a click away.
          </p>
          <Link
            href="/find-pets"
            className={`${panchoSemibold.className} bg-blue-900 border-2 border-white text-white text-base sm:text-lg px-6 py-3 inline-block hover:bg-blue-800 transition duration-300`}
          >
            Get Your Pet Today
          </Link>
        </div>
      </div>
    </section>
  );
};
