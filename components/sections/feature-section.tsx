
// import React from "react";
// import { cutAlong, panchoSemibold } from "@/app/fonts/font";

// interface Feature {
//   number: string;
//   title: string;
//   description: string;
//   video: string;
//   alt: string;
// }

// const features: Feature[] = [
//   {
//     number: "01",
//     title: "Shop Pet Products",
//     description:
//       "Curated pet care essentials from food and toys to accessories.",
//     video: "/feature/01.mp4",
//     alt: "Various pet products and accessories",
//   },
//   {
//     number: "02",
//     title: "Book Trusted Pet Services",
//     description: "Find and book professional pet services in your area.",
//     video: "/feature/02.mp4",
//     alt: "Professional pet grooming service",
//   },
//   {
//     number: "03",
//     title: "Get Pet Food",
//     description: "High-quality pet food from top brands for all dietary needs.",
//     video: "/feature/03.mp4",
//     alt: "High-quality pet food selection",
//   },
// ];

// interface FeatureVideoProps {
//   src: string;
//   alt: string;
// }

// const FeatureVideo: React.FC<FeatureVideoProps> = ({ src, alt }) => (
//   <video
//     src={src}
//     loop
//     muted
//     playsInline
//     autoPlay
//     className="w-full h-full object-cover"
//     aria-label={alt}
//   />
// );

// interface FeatureContentProps {
//   number: string;
//   title: string;
//   description: string;
// }

// const FeatureContent: React.FC<FeatureContentProps> = ({
//   number,
//   title,
//   description,
// }) => (
//   <div className="flex flex-col justify-center p-6 space-y-4">
//     <div className={`text-3xl sm:text-4xl font-bold ${cutAlong.className}`}>
//       {number}
//     </div>
//     <h2
//       className={`text-2xl sm:text-3xl font-bold ${panchoSemibold.className}`}
//     >
//       {title}
//     </h2>
//     <p className="text-base sm:text-lg">{description}</p>
//   </div>
// );

// interface FeatureItemProps {
//   feature: Feature;
//   index: number;
// }

// const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => (
//   <div
//     className={`flex flex-col lg:flex-row items-center ${
//       index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//     }`}
//   >
//     <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px]">
//       <FeatureVideo src={feature.video} alt={feature.alt} />
//     </div>
//     <div className="w-full lg:w-1/2">
//       <FeatureContent {...feature} />
//     </div>
//   </div>
// );

// export const FeatureSection: React.FC = () => (
//   <section className="text-white bg-blue-900 border-y-4 border-white">
//     <div className="max-w-7xl mx-auto">
//       {features.map((feature, index) => (
//         <FeatureItem key={index} feature={feature} index={index} />
//       ))}
//     </div>
//   </section>
// );

// export default FeatureSection;


import React from "react";
import { cutAlong, panchoSemibold } from "@/app/fonts/font";

interface Feature {
  number: string;
  title: string;
  description: string;
  video: string;
  alt: string;
}

const features: Feature[] = [
  {
    number: "01",
    title: "Shop Pet Products",
    description:
      "Curated pet care essentials from food and toys to accessories. Our carefully selected range ensures your furry friends have access to the best products on the market.",
    video: "/feature/01.mp4",
    alt: "Various pet products and accessories",
  },
  {
    number: "02",
    title: "Book Trusted Pet Services",
    description: "Find and book professional pet services in your area. From grooming to veterinary care, we connect you with reliable experts who will treat your pets like family.",
    video: "/feature/02.mp4",
    alt: "Professional pet grooming service",
  },
  {
    number: "03",
    title: "Get Pet Food",
    description: "High-quality pet food from top brands for all dietary needs. Whether your pet requires specialized nutrition or simply deserves the best, we've got options to keep them healthy and happy.",
    video: "/feature/03.mp4",
    alt: "High-quality pet food selection",
  },
];

interface FeatureVideoProps {
  src: string;
  alt: string;
}

const FeatureVideo: React.FC<FeatureVideoProps> = ({ src, alt }) => (
  <video
    src={src}
    loop
    muted
    playsInline
    autoPlay
    className="w-full h-full object-cover"
    aria-label={alt}
  />
);

interface FeatureContentProps {
  number: string;
  title: string;
  description: string;
}

const FeatureContent: React.FC<FeatureContentProps> = ({
  number,
  title,
  description,
}) => (
  <div className="flex flex-col justify-center p-6 lg:p-12 xl:p-16 space-y-4 xl:space-y-6">
    <div className={`text-3xl sm:text-4xl xl:text-5xl font-bold ${cutAlong.className}`}>
      {number}
    </div>
    <h2 className={`text-2xl sm:text-3xl xl:text-4xl font-bold ${panchoSemibold.className}`}>
      {title}
    </h2>
    <p className="text-base sm:text-lg xl:text-xl xl:leading-relaxed">{description}</p>
  </div>
);

interface FeatureItemProps {
  feature: Feature;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => (
  <div
    className={`flex flex-col lg:flex-row items-center ${
      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
    }`}
  >
    <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px] xl:h-[500px]">
      <FeatureVideo src={feature.video} alt={feature.alt} />
    </div>
    <div className="w-full lg:w-1/2">
      <FeatureContent {...feature} />
    </div>
  </div>
);

export const FeatureSection: React.FC = () => (
  <section className="text-white bg-blue-900 border-y-4 border-white">
    <div className="w-full xl:max-w-none">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} index={index} />
      ))}
    </div>
  </section>
);

export default FeatureSection;