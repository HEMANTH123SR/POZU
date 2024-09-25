import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { panchoSemibold } from "@/app/fonts/font";

interface TopSellingInterface {
  productName: string;
  productImage: string;
}

interface TopSellingInterface {
  productName: string;
  productImage: string;
}

const topSellingPetFoodProducts: TopSellingInterface[] = [
  {
    productName: "Nutribyte – BuddyByte Adult",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/Buddybyte-1-640x640.jpg", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – Genesis (Adult)",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-adult-maintenance-2_1-1-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte Chickbyte Adult",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/chickbyte-adult-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte Chickbyte Puppy",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-mothers-miracle-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – BuddyByte Senior",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/Advanced-Alternatives-3D-Render-Flat-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – Genesis Puppy",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-kitten-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte SnackByte for Large Dogs",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-senior-dog-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – Chickbyte Senior",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-large-giant_1-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – Genesis Senior",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-small-medium-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte SnackByte Puppy",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-small-bite-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – BuddyByte Adult",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/Buddybyte-1-640x640.jpg", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – Genesis (Adult)",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-adult-maintenance-2_1-1-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte Chickbyte Adult",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/chickbyte-adult-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte Chickbyte Puppy",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-mothers-miracle-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – BuddyByte Senior",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/Advanced-Alternatives-3D-Render-Flat-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – BuddyByte Adult",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/Buddybyte-1-640x640.jpg", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – Genesis (Adult)",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-adult-maintenance-2_1-1-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte Chickbyte Adult",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/chickbyte-adult-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte Chickbyte Puppy",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/bag-mothers-miracle-640x640.png", // Replace with actual image URL
  },
  {
    productName: "Nutribyte – BuddyByte Senior",
    productImage:
      "https://petpharma.co.za/wp-content/uploads/2024/08/Advanced-Alternatives-3D-Render-Flat-640x640.png", // Replace with actual image URL
  },
];

const topSellingPetProducts: TopSellingInterface[] = [
  {
    productName: "KONG Classic Dog Toy",
    productImage:
      "https://example.com/kong-classic-dog-toy.jpg", // Replace with actual image URL
  },
  {
    productName: "Chuckit! Ultra Ball Dog Toy",
    productImage:
      "https://example.com/chuckit-ultra-ball.jpg", // Replace with actual image URL
  },
  {
    productName: "FURminator Deshedding Tool",
    productImage:
      "https://example.com/furminator-deshedding-tool.jpg", // Replace with actual image URL
  },
  {
    productName: "PetSafe Gentle Leader Headcollar",
    productImage:
      "https://example.com/petsafe-gentle-leader.jpg", // Replace with actual image URL
  },
  {
    productName: "Outward Hound Hide-A-Squirrel Puzzle Toy",
    productImage:
      "https://example.com/outward-hound-hide-a-squirrel.jpg", // Replace with actual image URL
  },
  {
    productName: "Bissell Pet Hair Eraser Handheld Vacuum",
    productImage:
      "https://example.com/bissell-pet-hair-eraser.jpg", // Replace with actual image URL
  },
  {
    productName: "PetSafe Drinkwell Water Fountain",
    productImage:
      "https://example.com/petsafe-drinkwell-fountain.jpg", // Replace with actual image URL
  },
  {
    productName: "Ruffwear Front Range Dog Harness",
    productImage:
      "https://example.com/ruffwear-front-range-harness.jpg", // Replace with actual image URL
  },
  {
    productName: "Nail Grinder for Dogs",
    productImage:
      "https://example.com/nail-grinder-for-dogs.jpg", // Replace with actual image URL
  },
  {
    productName: "iFetch Interactive Ball Launcher",
    productImage:
      "https://example.com/ifetch-interactive-ball-launcher.jpg", // Replace with actual image URL
  },
];


export function TopSellingProduct() {
  return (
    <section className="w-screen h-auto flex flex-col space-y-14">
      <div className="w-screen h-auto flex flex-col space-y-6 justify-center items-center py-28">
        <div className="w-[90vw] flex justify-start ">
          <h4 className={`${panchoSemibold.className} text-lg text-blue-900 `}>
            Best Selling Pet Products Related To Food
          </h4>
        </div>
        <ScrollArea className="w-[90vw] whitespace-nowrap  ">
          <div className="flex w-max space-x-8 ">
            {topSellingPetFoodProducts.map((product, index) => (
              <div
                key={index}
                className="shrink-0 flex flex-col justify-center items-center space-y-3 w-72 h-auto p-4 py-8 border rounded-xl"
              >
                <img
                  className="w-full h-auto "
                  src={product.productImage}
                  alt={product.productName}
                />
                <span className="font-semibold text-blue-900">
                  {product.productName}
                </span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
