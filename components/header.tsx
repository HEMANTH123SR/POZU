"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panchoSemibold, cutAlong, apercuRegular } from "@/app/fonts/font";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-screen flex flex-col justify-center items-center">
      <nav className="w-screen flex justify-start items-center bg-[#D1D4D8]">
        <Link
          href={"/"}
          className={`text-sm py-2.5 px-6  ${
            pathname == "/"
              ? "text-[#657687] bg-white "
              : "text-[#8593A1] bg-[#D1D4D8]"
          } ${panchoSemibold.className}`}
        >
          Find Pet
        </Link>
        <Link
          href={"/store"}
          className={`text-sm py-2.5 px-6  ${
            pathname == "/store"
              ? "text-[#657687] bg-white "
              : "text-[#8593A1] bg-[#D1D4D8]"
          } ${panchoSemibold.className}`}
        >
          Store
        </Link>
        <Link
          href={"/services"}
          className={`text-sm py-2.5 px-6  ${
            pathname == "/services"
              ? "text-[#657687] bg-white "
              : "text-[#8593A1] bg-[#D1D4D8]"
          } ${panchoSemibold.className}`}
        >
          Services
        </Link>
        <Link
          href={"/food"}
          className={`text-sm py-2.5 px-6  ${
            pathname == "/food"
              ? "text-[#657687] bg-white "
              : "text-[#8593A1] bg-[#D1D4D8]"
          } ${panchoSemibold.className}`}
        >
          Food
        </Link>
      </nav>
      <div className="w-screen flex justify-between items-center mt-0.5 px-12 h-16 border-b">
        <h1 className={`${cutAlong.className} text-4xl text-blue-900`}>POZU</h1>
        <div className="flex flex-row justify-center items-center space-x-10">
          <button className="flex  justify-center items-center space-x-1 text-blue-900 ">
            <span>Help</span>
            <BiSolidMessageDetail className="text-2xl" />
          </button>
          <button className="flex  justify-center items-center space-x-1 text-blue-900 ">
            <span>Cart</span>
            <PiShoppingCartSimpleFill className="text-2xl" />
          </button>

          <Link href={"/sign-in"} className="text-blue-900">
            Login
          </Link>
          <button
            className={`bg-blue-900 text-white px-3 py-2 ${apercuRegular.className}`}
          >
            List Your Pet
          </button>
        </div>
      </div>
    </header>
  );
};
