export default function ListYourPetLayour({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen  w-full flex justify-center items-center  px-4">
      {children}
    </main>
  );
}
