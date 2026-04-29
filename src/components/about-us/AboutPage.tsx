import AboutUs from "./AboutUs";
import Footer from "../Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}