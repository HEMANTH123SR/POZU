export default function ListYourPetLayour({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen xl:h-[130vh] w-full flex justify-center items-center py-8 px-4">
      {children}
    </main>
  );
}
