"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panchoSemibold } from "@/app/fonts/font";
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
          href={"/pet-store"}
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
    </header>
  );
};
