import { cutAlong } from "@/app/fonts/font";
export default function Test() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1
        className={` text-3xl text-teal-600 sm:text-purple-700 md:text-red-600 lg:text-black xl:text-blue-700 2xl:text-green-700 ${cutAlong.className} text-blue-900`}
      >
        POZU
      </h1>
    </div>
  );
}
