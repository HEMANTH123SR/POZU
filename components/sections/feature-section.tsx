"use client";

import React from "react";
import { cutAlong, panchoSemibold } from "@/app/fonts/font";
const features = [
  {
    number: "01",
    title: "Find Your Perfect Pet",
    description:
      "Whether you're looking for a loyal companion or a playful friend, Pozu helps you connect with pet owners and breeders across the country. Easily search for the pet that matches your lifestyle and preferences.",
    points: [
      {
        title: "How it Works",
        content:
          "Browse available pets by type, breed, or location and get in touch with verified sellers.",
      },
      {
        title: "Why Pozu?",
        content:
          "Our platform ensures a safe and easy process for pet adoption or purchase.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Cute dog looking for a new home",
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
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Professional pet grooming service",
  },
  {
    number: "03",
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
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    alt: "Various pet products and accessories",
  },
  {
    number: "04",
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
    image:
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    alt: "High-quality pet food selection",
  },
];

//bg-[#01AED8] text-blue-900

export const FeatureSection = () => {
  return (
    <div className="text-white bg-blue-900 min-h-screen border-y-4 border-white">
      <div className="  mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col h-[400px] overflow-hidden ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 space-y-4 ">
              <div className={`text-4xl font-bold ${cutAlong.className}`}>
                {feature.number}
              </div>
              <h2 className={`text-3xl font-bold ${panchoSemibold.className}`}>
                {feature.title}
              </h2>
              <p className={`text-lg `}>{feature.description}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// pet services

// https://img.freepik.com/free-photo/veterinarian-check-ing-puppy-s-health_23-2148728396.jpg?t=st=1727236223~exp=1727239823~hmac=319005a0d82c629a0af51d798a36c318b6714b47dd2a39c53ebb885814c84468&w=900
