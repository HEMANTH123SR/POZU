"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panchoSemibold, cutAlong, apercuRegular } from "@/app/fonts/font";
import { BiSolidMessageDetail } from "react-icons/bi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Cart } from "@/components/component/cart";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const LargeHeader = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById("large-header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <div>
      <header
        id="large-header"
        className="w-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 bg-white z-50"
      >
        {showNav && (
          <nav className="w-full flex justify-start items-center bg-[#D1D4D8] overflow-x-auto transition-all duration-300">
            {[
              { href: "/", label: "Home" },
              { href: "/find-pets", label: "Find Pet" },
              { href: "/store", label: "Store" },
              { href: "/services", label: "Services" },
              { href: "/food", label: "Food" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm py-2.5 px-6 whitespace-nowrap ${
                  pathname === link.href
                    ? "text-[#657687] bg-white"
                    : "text-[#8593A1] bg-[#D1D4D8]"
                } ${panchoSemibold.className}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
        <div className="w-full flex flex-wrap justify-between items-center mt-0.5 px-4 sm:px-6 lg:px-12 py-4 border-b">
          <Link
            href={"/"}
            className="flex space-x-1 justify-center items-center"
          >
            <img
              className="h-14 w-auto rotate-90"
              src="/logo-1.png"
              alt="Pozu Logo"
            />
            <h1
              className={`${cutAlong.className} text-4xl text-blue-900 pb-1 `}
            >
              POZU
            </h1>
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 mt-4 sm:mt-0 font-semibold">
            <button className="flex justify-center items-center space-x-1 text-blue-900 ">
              <span>Help</span>
              <BiSolidMessageDetail className="text-2xl" />
            </button>
            <button
              className="flex justify-center items-center  space-x-1 text-blue-900"
              onClick={() => setOpen(true)}
            >
              <span>Cart</span>
              <PiShoppingCartSimpleFill className="text-2xl" />
            </button>

            <div className="flex justify-center items-center text-blue-900">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <button
              className={`bg-blue-900 text-white px-3 py-2 ${apercuRegular.className}`}
            >
              List Your Pet
            </button>
          </div>
        </div>
      </header>
      <Cart open={open} setOpen={setOpen} />
      <div style={{ paddingTop: `${headerHeight}px` }}></div>
    </div>
  );
};
