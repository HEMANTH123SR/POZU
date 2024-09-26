import React from "react";

const PetStorePage = () => {
  return (
    <main className="w-full flex justify-start bg-white py-24">
      <section className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div className="bg-white p-4 border">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  {/* Pet Category Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Category </span>
                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <ul className="space-y-1 p-4">
                        {[
                          "All",
                          "Accessories",
                          "Toys",
                          "Grooming",
                          "Beds",
                          "Habitat & Housing",
                        ].map((category) => (
                          <li key={category}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {category}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  {/* Price Range Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Price Range </span>
                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <ul className="space-y-1 p-4">
                        {[
                          "All",
                          "$0 - $50",
                          "$50 - $100",
                          "$100 - $200",
                          "$200+",
                        ].map((range) => (
                          <li key={range}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {range}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  {/* Brand Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Brand </span>
                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <ul className="space-y-1 p-4">
                        {[
                          "All",
                          "Petco",
                          "Petsmart",
                          "KONG",
                          "Frisco",
                          "FurHaven",
                        ].map((brand) => (
                          <li key={brand}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {brand}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  {/* Material Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Material </span>
                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <ul className="space-y-1 p-4">
                        {["All", "Plastic", "Fabric", "Wood", "Metal"].map(
                          (material) => (
                            <li key={material}>
                              <label className="inline-flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  className="size-5 rounded border-gray-300"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                  {material}
                                </span>
                              </label>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Buddy's Collar",
                    category: "Accessories",
                    price: "$20",
                    image: "/api/placeholder/400/320",
                  },
                  {
                    name: "Luxury Cat Bed",
                    category: "Beds",
                    price: "$60",
                    image: "/api/placeholder/400/320",
                  },
                  {
                    name: "Interactive Bird Toy",
                    category: "Toys",
                    price: "$25",
                    image: "/api/placeholder/400/320",
                  },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="bg-white border overflow-hidden"
                  >
                    <a href="#" className="group block">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          {item.name}
                        </h3>

                        <p className="mt-1.5 text-sm text-gray-700">
                          {item.category}
                        </p>
                        <p className="mt-1.5 text-lg font-semibold text-gray-900">
                          {item.price}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PetStorePage;
