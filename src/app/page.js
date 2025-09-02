import Hero from "./sections/Hero";
import Companies from "./sections/Companies";
import Features from "./sections/Feature";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
}
