import * as React from "react";
import Link from "next/link";
import { panchoSemibold } from "@/app/fonts/font";


import {
  topSellingPetFoodProducts,
  topSellingPetProducts,
} from "../../lib/constants";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function TopSellingProduct() {
  return (
    <section className="w-screen h-auto flex flex-col space-y-14">
      {/* pet food */}
      <div className="w-screen h-auto flex flex-col space-y-6 justify-center items-center py-28">
        <div className="w-[90vw] flex flex-col space-y-2 justify-start ">
          <h4 className={`${panchoSemibold.className} text-lg text-blue-900 `}>
            Best Selling Pet Products Related To Food
          </h4>
          <Link
            href={"/food"}
            className="text-blue-900 font-semibold underline"
          >
            go to pet section
          </Link>
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

      {/* pet store */}
      <div className="w-screen h-auto flex flex-col space-y-6 justify-center items-center py-28">
        <div className="w-[90vw] flex justify-start ">
          <h4 className={`${panchoSemibold.className} text-lg text-blue-900 `}>
            Best Selling Pet Products Related To Food
          </h4>
          <Link
            href={"/store"}
            className="text-blue-900 font-semibold underline"
          >
            go to pet store
          </Link>
        </div>
        <ScrollArea className="w-[90vw] whitespace-nowrap  ">
          <div className="flex w-max space-x-8 ">
            {topSellingPetProducts.map((product, index) => (
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
