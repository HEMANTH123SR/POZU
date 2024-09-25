// "use client";

// import React from "react";
// import { cutAlong, panchoSemibold } from "@/app/fonts/font";
// const features = [
//   {
//     number: "01",
//     title: "Shop Pet Products",
//     description:
//       "Pozu is more than just a marketplace for pets—it's also your one-stop shop for pet care essentials. From food and toys to accessories, we've curated the best products for your furry friends.",
//     points: [
//       {
//         title: "How it Works",
//         content:
//           "Browse through our wide range of pet products, read reviews, and make secure purchases.",
//       },
//       {
//         title: "Why Pozu?",
//         content:
//           "We offer high-quality products from trusted brands at competitive prices.",
//       },
//     ],
//     image: "/feature/01.mp4",
//     alt: "Various pet products and accessories",
//   },
//   {
//     number: "02",
//     title: "Book Trusted Pet Services",
//     description:
//       "From grooming to vet appointments, Pozu has got you covered. Find professional pet service providers in your area, read reviews, and book appointments seamlessly—all through our platform.",
//     points: [
//       {
//         title: "How it Works",
//         content:
//           "Search for the service you need, compare providers, and book with just a few clicks.",
//       },
//       {
//         title: "Why Pozu?",
//         content:
//           "We only list the top-rated service providers to guarantee your pet receives the best care.",
//       },
//     ],
//     image: "/feature/02.mp4",
//     alt: "Professional pet grooming service",
//   },
//   {
//     number: "03",
//     title: "Get Pet Food",
//     description:
//       "Looking for nutritious, high-quality pet food? Pozu offers a curated selection of pet food from top brands to keep your pets healthy and happy. Choose from a variety of options based on your pet's specific dietary needs.",
//     points: [
//       {
//         title: "How it Works",
//         content:
//           "Explore different pet food brands, filter by your pet's requirements (age, size, breed), and order online for delivery.",
//       },
//       {
//         title: "Why Pozu?",
//         content:
//           "We ensure that all food products meet safety standards, providing only the best nutrition for your pets.",
//       },
//     ],
//     image: "/feature/03.mp4",
//     alt: "High-quality pet food selection",
//   },
// ];

// export const FeatureSection = () => {
//   return (
//     <div className="text-white bg-blue-900 min-h-screen border-y-4 border-white">
//       <div className="  mx-auto">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`flex flex-col  h-[400px] overflow-hidden ${
//               index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//             } items-center`}
//           >
//             <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 space-y-4 ">
//               <div className={`text-4xl font-bold ${cutAlong.className}`}>
//                 {feature.number}
//               </div>
//               <h2 className={`text-3xl font-bold ${panchoSemibold.className}`}>
//                 {feature.title}
//               </h2>
//               <p className={`text-lg `}>{feature.description}</p>
//             </div>
//             <div className="w-full lg:w-1/2">
//               <img
//                 src={feature.image}
//                 alt={feature.alt}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useRef, useEffect } from "react";
import { cutAlong, panchoSemibold } from "@/app/fonts/font";

const features = [
  {
    number: "01",
    title: "Shop Pet Products",
    description:
      "Pozu is more than just a marketplace for pets—it's also your one-stop shop for pet care essentials. From food and toys to accessories, we've curated the best products for your furry friends.",
    points: [
      {
        title: "How it Works",
        content:
          "Browse through our wide range of pet products, read reviews, and make secure purchases.",
      },
      {
        title: "Why Pozu?",
        content:
          "We offer high-quality products from trusted brands at competitive prices.",
      },
    ],
    video: "/feature/01.mp4",
    alt: "Various pet products and accessories",
  },
  {
    number: "02",
    title: "Book Trusted Pet Services",
    description:
      "From grooming to vet appointments, Pozu has got you covered. Find professional pet service providers in your area, read reviews, and book appointments seamlessly—all through our platform.",
    points: [
      {
        title: "How it Works",
        content:
          "Search for the service you need, compare providers, and book with just a few clicks.",
      },
      {
        title: "Why Pozu?",
        content:
          "We only list the top-rated service providers to guarantee your pet receives the best care.",
      },
    ],
    video: "/feature/02.mp4",
    alt: "Professional pet grooming service",
  },
  {
    number: "03",
    title: "Get Pet Food",
    description:
      "Looking for nutritious, high-quality pet food? Pozu offers a curated selection of pet food from top brands to keep your pets healthy and happy. Choose from a variety of options based on your pet's specific dietary needs.",
    points: [
      {
        title: "How it Works",
        content:
          "Explore different pet food brands, filter by your pet's requirements (age, size, breed), and order online for delivery.",
      },
      {
        title: "Why Pozu?",
        content:
          "We ensure that all food products meet safety standards, providing only the best nutrition for your pets.",
      },
    ],
    video: "/feature/03.mp4",
    alt: "High-quality pet food selection",
  },
];

const FeatureVideo = ({ src, alt }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      aria-label={alt}
    />
  );
};

export const FeatureSection = () => {
  return (
    <div className="text-white bg-blue-900 min-h-screen border-y-4 border-white">
      <div className="mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col h-[400px] overflow-hidden ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 space-y-4">
              <div className={`text-4xl font-bold ${cutAlong.className}`}>
                {feature.number}
              </div>
              <h2 className={`text-3xl font-bold ${panchoSemibold.className}`}>
                {feature.title}
              </h2>
              <p className="text-lg">{feature.description}</p>
            </div>
            <div className="w-full lg:w-1/2 h-full">
              <FeatureVideo src={feature.video} alt={feature.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
