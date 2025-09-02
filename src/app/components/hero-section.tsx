import Image from "next/image";
import React from "react";
import { HeroHeader } from "./hero-header";
import {
  ArrowRight,
  BorderLeft,
  BorderRight,
  ButtonBone,
  ButtonBorder,
} from "./ui/icons";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="h-screen">
      <div className=" relative overflow-hidden h-full mt-6 ">
        <HeroHeader />
        <div
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: "url(/mask.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        <div className="h-full flex flex-col items-center relative z-10 mt-[151px]">
          <div className="px-2.5 h-[37px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
            <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>Web2</span>
              <ArrowRight />
              <span>Web3 Transformation</span>
            </div>
          </div>

          <Image src="/zero.svg" alt="hero" width={520} height={228} />
          <p className="mt-[17px] text-[28px] text-white font-[family-name:var(--font-vt323)] uppercase text-center leading-[28px]">
            Helping systems strategically tokenize, dedicated <br /> to growing
            Web-3 roots into your IP
          </p>
          <div className="mt-[54px] flex gap-[45px] items-center justify-center">
            <Button>Contact</Button>
            <Button>Past Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
