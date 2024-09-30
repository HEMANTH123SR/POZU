// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Github,
//   Dribbble,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
// import { cutAlong } from "@/app/fonts/font";

// export const FooterSection = () => {
//   return (
//     <footer className="bg-white border-t-4  border-y-8 border-blue-900">
//       <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div>
//             <div className="flex justify-center sm:justify-start">
//               {/* <img className="h-11 w-auto" src="/c.png" alt="Pozu Logo" /> */}
//               <div className="flex space-x-1 justify-center items-center">
//                 <img className="h-11 w-auto" src="/c.png" alt="Pozu Logo" />
//                 <h1 className={`${cutAlong.className} text-5xl text-blue-900`}>
//                   POZU
//                 </h1>
//               </div>
//             </div>

//             <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
//               {` Find a new pet, shop for food, and get the best pet goods and services, all in one spot. We're here to help you find your next companion and ensure they get the care they need.`}
//             </p>

//             <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
//               <li>
//                 <a
//                   href="#"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-blue-900 transition hover:text-blue-900/75"
//                 >
//                   <span className="sr-only">Facebook</span>
//                   <Facebook size={24} />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-blue-900 transition hover:text-blue-900/75"
//                 >
//                   <span className="sr-only">Instagram</span>
//                   <Instagram size={24} />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-blue-900 transition hover:text-blue-900/75"
//                 >
//                   <span className="sr-only">Twitter</span>
//                   <Twitter size={24} />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-blue-900 transition hover:text-blue-900/75"
//                 >
//                   <span className="sr-only">GitHub</span>
//                   <Github size={24} />
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-blue-900 transition hover:text-blue-900/75"
//                 >
//                   <span className="sr-only">Dribbble</span>
//                   <Dribbble size={24} />
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
//             <div className="text-center sm:text-left">
//               <p className="text-lg font-medium text-gray-900">About Pozu</p>

//               <ul className="mt-8 space-y-4 text-sm">
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Our Story
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Meet the Team
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Pet Care Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Careers
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="text-center sm:text-left">
//               <p className="text-lg font-medium text-gray-900">Our Services</p>

//               <ul className="mt-8 space-y-4 text-sm">
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Pet Acquisition
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Pet Food Shop
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Pet Supplies
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Vet Services
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="text-center sm:text-left">
//               <p className="text-lg font-medium text-gray-900">Helpful Links</p>

//               <ul className="mt-8 space-y-4 text-sm">
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     FAQs
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-700 transition hover:text-gray-700/75"
//                     href="#"
//                   >
//                     Support
//                   </a>
//                 </li>
//                 <li className="flex justify-start">
//                   <a
//                     className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
//                     href="#"
//                   >
//                     <span className="text-gray-700 transition group-hover:text-gray-700/75">
//                       Live Chat
//                     </span>

//                     <span className="relative flex size-2">
//                       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-800 opacity-75"></span>
//                       <span className="relative inline-flex size-2 rounded-full bg-blue-900"></span>
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="text-center sm:text-left">
//               <p className="text-lg font-medium text-gray-900">Contact Us</p>

//               <ul className="mt-8 space-y-4 text-sm">
//                 <li>
//                   <a
//                     className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
//                     href="mailto:info@pozu.com"
//                   >
//                     <Mail size={20} />
//                     <span className="flex-1 text-gray-700">info@pozu.com</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
//                     href="tel:+1234567890"
//                   >
//                     <Phone size={20} />
//                     <span className="flex-1 text-gray-700">
//                       +1 (234) 567-890
//                     </span>
//                   </a>
//                 </li>
//                 <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
//                   <MapPin size={20} />
//                   <address className="-mt-0.5 flex-1 not-italic text-gray-700">
//                     123 Pet Street, Pawsome City, PC 12345
//                   </address>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-gray-100 pt-6">
//           <div className="text-center sm:flex sm:justify-between sm:text-left">
//             <p className="text-sm text-gray-500">
//               <span className="block sm:inline">All rights reserved.</span>

//               <a
//                 className="inline-block text-blue-900 underline transition hover:text-teal-600/75"
//                 href="#"
//               >
//                 Terms & Conditions
//               </a>

//               <span>&middot;</span>

//               <a
//                 className="inline-block text-blue-900 underline transition hover:text-blue-900/75"
//                 href="#"
//               >
//                 Privacy Policy
//               </a>
//             </p>

//             <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
//               &copy; 2024 Pozu
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 md:py-20 border-y-2  lg:border-y-4 border-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Pozu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-story" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pet-adoption" className="hover:underline">
                  Pet Adoption
                </Link>
              </li>
              <li>
                <Link href="/pet-food-shop" className="hover:underline">
                  Pet Food Shop
                </Link>
              </li>
              <li>
                <Link href="/vet-services" className="hover:underline">
                  Vet Services
                </Link>
              </li>
              <li>
                <Link href="/pet-supplies" className="hover:underline">
                  Pet Supplies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Pet Street, Pawsome City, PC 12345</p>
            <p>Phone: +1 (234) 567-890</p>
            <p>Email: info@pozu.com</p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-gray-300">
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-gray-300"
              >
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-300">
                <Twitter size={20} />
              </Link>
              <Link href="https://youtube.com" className="hover:text-gray-300">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2024 Pozu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
