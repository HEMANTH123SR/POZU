import * as React from "react";
import Link from "next/link";
import { panchoSemibold,apercuBold,  } from "@/app/fonts/font";

import {
  topSellingPetFoodProducts,
  topSellingPetProducts,
} from "../../lib/constants";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function TopSellingProduct() {
  return (
    <section className="w-screen h-auto bg-blue-900 flex flex-col justify-center items-center space-y-20 py-20">
      <h4
        className={`text-6xl text-white underline w-[90vw] ${panchoSemibold.className} `}
      >
        Best Selling Pet Products
      </h4>

      {/* pet food */}
      <div className="w-screen h-auto flex flex-col space-y-6 justify-center items-center">
        <div className="w-[90vw] flex flex-col space-y-2 justify-start ">
          <h4
            className={`${apercuBold.className} text-2xl font-semibold text-white `}
          >
            Best Selling Pet Products On Food Cateogory
          </h4>
          <Link href={"/food"} className="text-white font-semibold underline">
            go to pet section
          </Link>
        </div>
        <ScrollArea className="w-[90vw] whitespace-nowrap  ">
          <div className="flex w-max space-x-8 ">
            {topSellingPetFoodProducts.map((product, index) => (
              <div
                key={index}
                className="shrink-0 bg-white flex flex-col justify-center items-center space-y-3 w-72 min-h-96 h-auto p-4 py-8 border rounded-sm"
              >
                <img
                  className="w-full h-auto "
                  src={product.productImage}
                  alt={product.productName}
                />
                <span className="font-semibold text-blue-900 px-4 text-wrap">
                  {product.productName}
                </span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* pet store */}
      <div className="w-screen h-auto flex flex-col space-y-6 justify-center items-center ">
        <div className="w-[90vw] flex flex-col justify-start ">
          <h4
            className={`${apercuBold.className} text-2xl font-semibold  text-white `}
          >
            Best Selling Pet Products Related To Food
          </h4>
          <Link href={"/store"} className="text-white  font-semibold underline">
            go to pet store
          </Link>
        </div>
        <ScrollArea className="w-[90vw] whitespace-nowrap  ">
          <div className="flex w-max space-x-8 ">
            {topSellingPetProducts.map((product, index) => (
              <div
                key={index}
                className="shrink-0 bg-white flex flex-col justify-center items-center space-y-3 w-72 min-h-96 h-auto p-4 py-8 border rounded-sm"
              >
                <img
                  className="w-full h-auto "
                  src={product.productImage}
                  alt={product.productName}
                />
                <span className="font-semibold text-blue-900 px-4 text-wrap">
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
