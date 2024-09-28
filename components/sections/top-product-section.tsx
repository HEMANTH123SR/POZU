import React from "react";
import Link from "next/link";
import { panchoSemibold, apercuBold } from "@/app/fonts/font";
import {
  topSellingPetFoodProducts,
  topSellingPetProducts,
} from "../../lib/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Product {
  productName: string;
  productImage: string;
  // Add other properties as needed
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="shrink-0 bg-white flex flex-col justify-between items-center w-64 h-96 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <img
      className="w-full h-48 object-contain mb-4"
      src={product.productImage}
      alt={product.productName}
    />
    <span className="font-semibold text-blue-900 text-center line-clamp-2">
      {product.productName}
    </span>
    <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
      View Product
    </button>
  </div>
);

interface ProductSectionProps {
  title: string;
  linkText: string;
  linkHref: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  linkText,
  linkHref,
  products,
}) => (
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-baseline mb-6">
      <h4
        className={`${apercuBold.className} text-xl sm:text-2xl font-semibold text-blue-900`}
      >
        {title}
      </h4>
      <Link
        href={linkHref}
        className="text-blue-900 font-semibold hover:underline"
      >
        {linkText}
      </Link>
    </div>
    <ScrollArea className="w-full whitespace-nowrap pb-4">
      <div className="flex space-x-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
);

export const TopSellingProduct: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl text-blue-900 ${panchoSemibold.className}`}
        >
          Best Selling Pet Products
        </h2>
      </div>
      <div className="my-16 border-t border-gray-200"></div>
      <ProductSection
        title="Top Selling Pet Food"
        linkText="Go to pet food section"
        linkHref="/food"
        products={topSellingPetFoodProducts}
      />

      <div className="my-16 border-t border-gray-200"></div>

      <ProductSection
        title="Best Selling Pet Accessories"
        linkText="Go to pet store"
        linkHref="/store"
        products={topSellingPetProducts}
      />
    </section>
  );
};
