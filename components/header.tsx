// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { panchoSemibold, cutAlong, apercuRegular } from "@/app/fonts/font";
// import { BiSolidMessageDetail } from "react-icons/bi";
// import { PiShoppingCartSimpleFill } from "react-icons/pi";

// export const Header = () => {
//   const pathname = usePathname();
//   return (
//     <header
//       className="w-screen flex flex-col justify-center items-center"

//     >
//       <nav className="w-full flex justify-start items-center bg-[#D1D4D8]">
//         <Link
//           href={"/"}
//           className={`text-sm py-2.5 px-6  ${
//             pathname == "/"
//               ? "text-[#657687] bg-white "
//               : "text-[#8593A1] bg-[#D1D4D8]"
//           } ${panchoSemibold.className}`}
//         >
//           Find Pet
//         </Link>
//         <Link
//           href={"/store"}
//           className={`text-sm py-2.5 px-6  ${
//             pathname == "/store"
//               ? "text-[#657687] bg-white "
//               : "text-[#8593A1] bg-[#D1D4D8]"
//           } ${panchoSemibold.className}`}
//         >
//           Store
//         </Link>
//         <Link
//           href={"/services"}
//           className={`text-sm py-2.5 px-6  ${
//             pathname == "/services"
//               ? "text-[#657687] bg-white "
//               : "text-[#8593A1] bg-[#D1D4D8]"
//           } ${panchoSemibold.className}`}
//         >
//           Services
//         </Link>
//         <Link
//           href={"/food"}
//           className={`text-sm py-2.5 px-6  ${
//             pathname == "/food"
//               ? "text-[#657687] bg-white "
//               : "text-[#8593A1] bg-[#D1D4D8]"
//           } ${panchoSemibold.className}`}
//         >
//           Food
//         </Link>
//       </nav>
//       <div className="w-full flex justify-between items-center mt-0.5 px-12 h-16 border-b">
//         <h1 className={`${cutAlong.className} text-4xl text-blue-900`}>POZU</h1>
//         <div className="flex flex-row justify-center items-center space-x-10">
//           <button className="flex  justify-center items-center space-x-1 text-blue-900 ">
//             <span>Help</span>
//             <BiSolidMessageDetail className="text-2xl" />
//           </button>
//           <button className="flex  justify-center items-center space-x-1 text-blue-900 ">
//             <span>Cart</span>
//             <PiShoppingCartSimpleFill className="text-2xl" />
//           </button>

//           <Link href={"/sign-in"} className="text-blue-900">
//             Login
//           </Link>
//           <button
//             className={`bg-blue-900 text-white px-3 py-2 ${apercuRegular.className}`}
//           >
//             List Your Pet
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panchoSemibold, cutAlong, apercuRegular } from "@/app/fonts/font";
import { BiSolidMessageDetail } from "react-icons/bi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-[95%] flex flex-col justify-center items-center">
      <nav className="w-full flex justify-start items-center bg-[#D1D4D8] overflow-x-auto">
        {[
          { href: "/", label: "Find Pet" },
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
      <div className="w-full flex flex-wrap justify-between items-center mt-0.5 px-4 sm:px-6 lg:px-12 py-4 border-b">
        <h1 className={`${cutAlong.className} text-4xl text-blue-900`}>POZU</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 mt-4 sm:mt-0">
          <button className="flex justify-center items-center space-x-1 text-blue-900">
            <span>Help</span>
            <BiSolidMessageDetail className="text-2xl" />
          </button>
          <button className="flex justify-center items-center space-x-1 text-blue-900">
            <span>Cart</span>
            <PiShoppingCartSimpleFill className="text-2xl" />
          </button>
          <Link href="/sign-in" className="text-blue-900">
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
