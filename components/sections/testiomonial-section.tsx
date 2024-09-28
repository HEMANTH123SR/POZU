// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import { panchoSemibold } from "@/app/fonts/font";

// const slides = [
//   "/slider/one.png",
//   "/slider/two.png",
//   "/slider/three.png",
//   "/slider/four.png",
//   "/slider/five.png",
//   "/slider/one.png",
// ];

// export function DogSliderComponent() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
//     align: "start",
//     slidesToScroll: 1,
//   });
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);

//   const scrollPrev = useCallback(
//     () => emblaApi && emblaApi.scrollPrev(),
//     [emblaApi]
//   );
//   const scrollNext = useCallback(
//     () => emblaApi && emblaApi.scrollNext(),
//     [emblaApi]
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCurrentSlide(emblaApi.selectedScrollSnap());
//     setCanScrollPrev(emblaApi.canScrollPrev());
//     setCanScrollNext(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="bg-white py-24 flex flex-col border-y-4 border-blue-900">
//       <div className="flex flex-col space-y-4 pb-16 justify-center items-center">
//         <h3 className={`text-blue-900 text-4xl ${panchoSemibold.className} `}>
//           SOME NICE THINGS DOGS HAVE SAID ABOUT US
//         </h3>
//         <p className="w-1/2 text-center text-black text-lg">
//           {`There's no better feeling than when a dog likes you. And since 2012,
//           we've made over 6,000,000 dogs like us. See what the pups in our pack
//           are barking about.`}
//         </p>
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4">
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex -mx-4">
//             {slides.map((img, index) => (
//               <div
//                 className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
//                 key={index}
//               >
//                 <img
//                   className="w-full h-auto"
//                   src={img}
//                   alt={"pet slide images"}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-center items-center mt-8 space-x-4">
//           <button
//             onClick={scrollPrev}
//             disabled={!canScrollPrev}
//             className="p-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <span className="text-sm font-medium">
//             {currentSlide + 1} - {Math.min(currentSlide + 3, slides.length)} of{" "}
//             {slides.length}
//           </span>
//           <button
//             onClick={scrollNext}
//             disabled={!canScrollNext}
//             className="p-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { panchoSemibold } from "@/app/fonts/font";

const slides = [
  "/slider/one.png",
  "/slider/two.png",
  "/slider/three.png",
  "/slider/four.png",
  "/slider/five.png",
  "/slider/one.png",
];

export function DogSliderComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 flex flex-col border-y-4 border-blue-900">
      <div className="flex flex-col space-y-4 pb-8 sm:pb-12 md:pb-16 justify-center items-center px-4 sm:px-6 md:px-8">
        <h3
          className={`text-blue-900 text-2xl sm:text-3xl md:text-4xl ${panchoSemibold.className} text-center`}
        >
          SOME NICE THINGS DOGS HAVE SAID ABOUT US
        </h3>
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center text-black text-base sm:text-lg">
          {`There's no better feeling than when a dog likes you. And since 2012,
          we've made over 6,000,000 dogs like us. See what the pups in our pack
          are barking about.`}
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-2 sm:-mx-3 md:-mx-4">
            {slides.map((img, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 px-2 sm:px-3 md:px-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                key={index}
              >
                <img
                  className="w-full h-auto rounded-lg shadow-md"
                  src={img}
                  alt={`Dog testimonial slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <span className="text-sm font-medium">
            {currentSlide + 1} - {Math.min(currentSlide + 3, slides.length)} of{" "}
            {slides.length}
          </span>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
