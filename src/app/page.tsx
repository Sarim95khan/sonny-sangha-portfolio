import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll">
      <Header />
      <section id="Hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
