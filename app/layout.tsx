import type { Metadata } from "next";
import { Header } from "@/components/sections/header-section";
import { FooterSection } from "@/components/sections/fotter-section";
import { apercuRegular } from "@/app/fonts/font";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${apercuRegular.className} flex flex-col  bg-white `}>
          <Header />
          {children}
          <FooterSection />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
