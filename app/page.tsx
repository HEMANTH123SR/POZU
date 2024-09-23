import { cutAlong } from "@/app/fonts/font";
export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-[#01AED8]">
      <h1 className={`text-[22rem] text-blue-900 ${cutAlong.className}`}>P</h1>
    </main>
  );
}
