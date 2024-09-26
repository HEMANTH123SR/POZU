import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Dribbble,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { cutAlong } from "@/app/fonts/font";

export const FooterSection = () => {
  return (
    <footer className="bg-white border-t-4  border-y-8 border-blue-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              {/* <img className="h-11 w-auto" src="/c.png" alt="Pozu Logo" /> */}
              <div className="flex space-x-1 justify-center items-center">
                <img className="h-11 w-auto" src="/c.png" alt="Pozu Logo" />
                <h1 className={`${cutAlong.className} text-5xl text-blue-900`}>
                  POZU
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              {` Find a new pet, shop for food, and get the best pet goods and services, all in one spot. We're here to help you find your next companion and ensure they get the care they need.`}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-900 transition hover:text-blue-900/75"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-900 transition hover:text-blue-900/75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-900 transition hover:text-blue-900/75"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-900 transition hover:text-blue-900/75"
                >
                  <span className="sr-only">GitHub</span>
                  <Github size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-900 transition hover:text-blue-900/75"
                >
                  <span className="sr-only">Dribbble</span>
                  <Dribbble size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">About Pozu</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Pet Care Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Pet Acquisition
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Pet Food Shop
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Pet Supplies
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Vet Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Support
                  </a>
                </li>
                <li className="flex justify-start">
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-gray-700 transition group-hover:text-gray-700/75">
                      Live Chat
                    </span>

                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-800 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-blue-900"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:info@pozu.com"
                  >
                    <Mail size={20} />
                    <span className="flex-1 text-gray-700">info@pozu.com</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="tel:+1234567890"
                  >
                    <Phone size={20} />
                    <span className="flex-1 text-gray-700">
                      +1 (234) 567-890
                    </span>
                  </a>
                </li>
                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <MapPin size={20} />
                  <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                    123 Pet Street, Pawsome City, PC 12345
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-blue-900 underline transition hover:text-teal-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-blue-900 underline transition hover:text-blue-900/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Pozu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
