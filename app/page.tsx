import Hero from "@/components/Hero";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen gap-16 p-8 sm:p-20">
      <main className="flex items-center w-full">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
