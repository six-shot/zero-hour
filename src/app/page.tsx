import Image from "next/image";
import HeroSection from "./components/hero-section";
import Feauture1 from "./components/feauture-1";
import ProductPreview from "./components/auto-slider";
import Feauture2 from "./components/feauture-2";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Feauture1/>
      <Feauture2/>
   
    </div>
  );
}
