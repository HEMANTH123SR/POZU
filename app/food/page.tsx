import React from "react";

const PetFoodPage = () => {
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
                  {/* Pet Type Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Pet Type </span>
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
                        {["All", "Dogs", "Cats", "Birds", "Small Animals"].map(
                          (type) => (
                            <li key={type}>
                              <label className="inline-flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  className="size-5 rounded border-gray-300"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                  {type}
                                </span>
                              </label>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </details>

                  {/* Food Type Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Food Type </span>
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
                          "Dry Food",
                          "Wet Food",
                          "Raw Food",
                          "Grain-Free",
                          "Freeze-Dried",
                        ].map((foodType) => (
                          <li key={foodType}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {foodType}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  {/* Dietary Needs Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">
                        {" "}
                        Dietary Needs{" "}
                      </span>
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
                          "High-Protein",
                          "Grain-Free",
                          "Weight Management",
                          "Sensitive Stomach",
                          "Hypoallergenic",
                        ].map((diet) => (
                          <li key={diet}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {diet}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  {/* Packaging Size Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">
                        {" "}
                        Packaging Size{" "}
                      </span>
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
                          "Small (1-5 lbs)",
                          "Medium (6-15 lbs)",
                          "Large (16+ lbs)",
                        ].map((size) => (
                          <li key={size}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {size}
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
                          "Purina",
                          "Royal Canin",
                          "Blue Buffalo",
                          "Hill's Science Diet",
                          "Wellness",
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
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Purina Pro Plan Adult Dog Food",
                    category: "Dry Food",
                    price: "$39.99",
                    image: "/api/placeholder/400/320",
                  },
                  {
                    name: "Royal Canin Feline Health Nutrition",
                    category: "Wet Food",
                    price: "$29.99",
                    image: "/api/placeholder/400/320",
                  },
                  {
                    name: "Wellness CORE RawRev High-Protein",
                    category: "Raw Food",
                    price: "$49.99",
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

export default PetFoodPage;
