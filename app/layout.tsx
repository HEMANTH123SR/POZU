import type { Metadata } from "next";
import { Header } from "@/components/sections/header-section";
import { apercuRegular } from "@/app/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pozu - Connecting Pet Lovers with Pets, Supplies, and Services",
  description:
    "Discover a platform dedicated to pets. Pozu connects you to a range of pets, pet products, and essential services, making it easier to care for your furry friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${apercuRegular.className} flex flex-col  bg-white `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
