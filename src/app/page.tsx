import Hero from "@/components/HomeContainer/Hero";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>this is footer</p>
      </footer>
    </div>
  );
}
