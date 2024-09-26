// import React from "react";

// const FindPetsPage = () => {
//   return (
//     <main className="w-full flex justify-start bg-white py-24">
//       <section className="w-full">
//         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//           <div className="mt-8 block lg:hidden ">
//             <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
//               <span className="text-sm font-medium"> Filters & Sorting </span>

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-4 rtl:rotate-180"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
//             <div className="hidden space-y-4 lg:block">
//               <div className="bg-white p-4 border">
//                 <h2 className="text-lg font-semibold mb-4">Filters</h2>
//                 <div className="space-y-4">
//                   <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
//                     <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
//                       <span className="text-sm font-medium"> Pet Type </span>
//                       <span className="transition group-open:-rotate-180">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                           />
//                         </svg>
//                       </span>
//                     </summary>

//                     <div className="border-t border-gray-200 bg-white">
//                       <ul className="space-y-1 p-4">
//                         {["Dogs", "Cats", "Birds", "Small Animals"].map(
//                           (type) => (
//                             <li key={type}>
//                               <label className="inline-flex items-center gap-2">
//                                 <input
//                                   type="checkbox"
//                                   className="size-5 rounded border-gray-300"
//                                 />
//                                 <span className="text-sm font-medium text-gray-700">
//                                   {type}
//                                 </span>
//                               </label>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   </details>

//                   <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
//                     <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
//                       <span className="text-sm font-medium"> Age </span>
//                       <span className="transition group-open:-rotate-180">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                           />
//                         </svg>
//                       </span>
//                     </summary>

//                     <div className="border-t border-gray-200 bg-white">
//                       <ul className="space-y-1 p-4">
//                         {["Baby", "Young", "Adult", "Senior"].map((age) => (
//                           <li key={age}>
//                             <label className="inline-flex items-center gap-2">
//                               <input
//                                 type="checkbox"
//                                 className="size-5 rounded border-gray-300"
//                               />
//                               <span className="text-sm font-medium text-gray-700">
//                                 {age}
//                               </span>
//                             </label>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </details>

//                   <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
//                     <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
//                       <span className="text-sm font-medium"> Size </span>
//                       <span className="transition group-open:-rotate-180">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                           />
//                         </svg>
//                       </span>
//                     </summary>

//                     <div className="border-t border-gray-200 bg-white">
//                       <ul className="space-y-1 p-4">
//                         {["Small", "Medium", "Large", "Extra Large"].map(
//                           (size) => (
//                             <li key={size}>
//                               <label className="inline-flex items-center gap-2">
//                                 <input
//                                   type="checkbox"
//                                   className="size-5 rounded border-gray-300"
//                                 />
//                                 <span className="text-sm font-medium text-gray-700">
//                                   {size}
//                                 </span>
//                               </label>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   </details>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3">
//               <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   {
//                     name: "Buddy",
//                     type: "Dog",
//                     age: "Young",
//                     image: "/api/placeholder/400/320",
//                   },
//                   {
//                     name: "Whiskers",
//                     type: "Cat",
//                     age: "Adult",
//                     image: "/api/placeholder/400/320",
//                   },
//                   {
//                     name: "Chirpy",
//                     type: "Bird",
//                     age: "Baby",
//                     image: "/api/placeholder/400/320",
//                   },
//                 ].map((pet) => (
//                   <li
//                     key={pet.name}
//                     className="bg-white  border overflow-hidden"
//                   >
//                     <a href="#" className="group block">
//                       <img
//                         src={pet.image}
//                         alt={pet.name}
//                         className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
//                       />

//                       <div className="p-4">
//                         <h3 className="text-lg font-semibold text-gray-900 group-hover:underline group-hover:underline-offset-4">
//                           {pet.name}
//                         </h3>

//                         <p className="mt-1.5 text-sm text-gray-700">
//                           {pet.type} • {pet.age}
//                         </p>
//                       </div>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default FindPetsPage;


import React from "react";

const FindPetsPage = () => {
  return (
    <main className="w-full flex justify-start bg-white py-24">
      <section className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mt-8 block lg:hidden ">
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
                        {["Dogs", "Cats", "Birds", "Small Animals"].map(
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

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Age </span>
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
                        {["Baby", "Young", "Adult", "Senior"].map((age) => (
                          <li key={age}>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="size-5 rounded border-gray-300"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {age}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Size </span>
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
                        {["Small", "Medium", "Large", "Extra Large"].map(
                          (size) => (
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
                          )
                        )}
                      </ul>
                    </div>
                  </details>

                  {/* New Pet Breed Filter */}
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Pet Breed </span>
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
                        {["Labrador", "German Shepherd", "Golden Retriever", "Siamese", "Persian", "Maine Coon", "Parakeet", "Cockatiel", "Hamster", "Guinea Pig"].map(
                          (breed) => (
                            <li key={breed}>
                              <label className="inline-flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  className="size-5 rounded border-gray-300"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                  {breed}
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
                    name: "Buddy",
                    type: "Dog",
                    age: "Young",
                    image: "/api/placeholder/400/320",
                  },
                  {
                    name: "Whiskers",
                    type: "Cat",
                    age: "Adult",
                    image: "/api/placeholder/400/320",
                  },
                  {
                    name: "Chirpy",
                    type: "Bird",
                    age: "Baby",
                    image: "/api/placeholder/400/320",
                  },
                ].map((pet) => (
                  <li
                    key={pet.name}
                    className="bg-white  border overflow-hidden"
                  >
                    <a href="#" className="group block">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          {pet.name}
                        </h3>

                        <p className="mt-1.5 text-sm text-gray-700">
                          {pet.type} • {pet.age}
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

export default FindPetsPage;
