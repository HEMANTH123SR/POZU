"use client";
import React, { useState, useEffect } from "react";
import { apercuRegular, cutAlong } from "@/app/fonts/font";
import { X } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { PiEqualsBold } from "react-icons/pi";

export const SmallHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/find-pets", label: "Find Pet" },
    { href: "/store", label: "Store" },
    { href: "/services", label: "Services" },
    { href: "/food", label: "Food" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300 shadow-md ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${apercuRegular.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2.5 md:py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <img
                className="h-12 rotate-90 w-auto "
                src="/logo-1.png"
                alt="Pozu"
              />
              <span
                className={` text-[1.9rem] font-bold text-blue-900 ${cutAlong.className}`}
                style={{
                  lineHeight: 1,
                }}
              >
                POZU
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-10 w-auto text-blue-900" aria-hidden="true" />
              ) : (
                <PiEqualsBold className="h-10 w-auto text-blue-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-12 rotate-90 w-auto "
                    src="/logo-1.png"
                    alt="Pozu"
                  />
                  <span
                    className={` text-[1.9rem] font-bold text-blue-900 ${cutAlong.className}`}
                    style={{
                      lineHeight: 1,
                    }}
                  >
                    POZU
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X
                      className="h-8 w-auto text-blue-900"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-semibold text-gray-900">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Cart
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-950"
                >
                  List Your Pet
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="text-blue-900 font-semibold hover:text-blue-950">
                        Sign in
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
