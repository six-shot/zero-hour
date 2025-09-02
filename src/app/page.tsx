import Image from "next/image";
import HeroSection from "./components/hero-section";
import Feauture1 from "./components/feauture-1";
import Feauture2 from "./components/feauture-2";
import Feauture3 from "./components/feauture-3";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Feauture1/>
      <Feauture2/>
      <Feauture3/>
   
    </div>
  );
}
