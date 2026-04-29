import HeroRetreat from "./HeroRetreat";
import Footer from "../Footer";

export default function Retreats() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroRetreat />
      </main>
      <Footer />
    </div>
  );
}