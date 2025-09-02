"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "./ui/icons";
import AutoScroll from "./auto-slider";
import { NavigationArrows } from "./NavigationArrows";
import { FlexibleAutoScrollRef } from "./FlexibleAutoScroll";
import one from "../../../public/1.svg";
import two from "../../../public/2.svg";
import three from "../../../public/3.svg";

// Card data
const featureCards = [
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "We work 24/7 to ensure your entry to market exceeds expectations, our in house systems work 24/7 to strategically place your IP in front of investors.",
    image: one,
  },
  {
    title: "BLOCKCHAIN ARCHITECTURE",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    image: two,
  },
  {
    title: "Launch  Protocol",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    image: three,
  },
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "We work 24/7 to ensure your entry to market exceeds expectations, our in house systems work 24/7 to strategically place your IP in front of investors.",
    image: one,
  },
  {
    title: "BLOCKCHAIN ARCHITECTURE",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    image: two,
  },
  {
    title: "Launch  Protocol",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    image: three,
  },
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "We work 24/7 to ensure your entry to market exceeds expectations, our in house systems work 24/7 to strategically place your IP in front of investors.",
    image: one,
  },
  {
    title: "BLOCKCHAIN ARCHITECTURE",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    image: two,
  },
  {
    title: "Launch  Protocol",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    image: three,
  },
];

export default function Feauture1() {
  const scrollRef = useRef<FlexibleAutoScrollRef>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const handleNavigationChange = (canGoPrev: boolean, canGoNxt: boolean) => {
    setCanGoPrevious(canGoPrev);
    setCanGoNext(canGoNxt);
  };

  const handlePrevious = () => {
    scrollRef.current?.scrollToPrevious();
  };

  const handleNext = () => {
    scrollRef.current?.scrollToNext();
  };

  return (
    <div className="pt-[181px] w-full relative">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex flex-col items-start">
          <h4 className="text-[38px] leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase">
            Zero Hours Wasted
          </h4>
          <p className="text-[28px] leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[23px]">
            Our systems analyze, deconstruct, and surge your web-2 assets into
            thriving web-3 <br /> ecosystems. Every transformation is
            strategically engineered for maximum impact.
          </p>{" "}
          <div className="flex justify-between items-center w-full">
            <div className="px-2.5 h-[37px] border border-[#4D4D4D] rounded-[9px] flex justify-between items-center mt-[31px]">
              <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
                <span>Web2</span>
                <ArrowRight />
                <span>Web3 Transformation</span>
              </div>
            </div>
            <div className=" relative z-[1000]">
              <NavigationArrows
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[105px] w-full relative">
        <AutoScroll
          cards={featureCards}
          ref={scrollRef}
          onNavigationChange={handleNavigationChange}
        />
      </div>
    </div>
  );
}
