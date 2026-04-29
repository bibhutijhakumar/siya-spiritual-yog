import Hero from "./Hero";
import AreasSupport from "./AreasSupport";
import ScientificApproach from "./ScientificApproach";
import HealingProcess from "./HealingProcess";
import CTASection from "./CTASection";
import Footer from "../Footer";

export default function Therapy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <AreasSupport />
        <ScientificApproach />
        <HealingProcess />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}