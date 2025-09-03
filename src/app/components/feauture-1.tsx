"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "./ui/icons";
import { AutoSlider, AutoSliderRef } from "./AutoSlider";
import { NavigationArrows } from "./NavigationArrows";
import { ReusableCard } from "./ReusableCard";
import Image from "next/image";

// Card data - converted to ReactNode array for AutoSlider
const featureCardsData = [
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "We work 24/7 to ensure your entry to market exceeds expectations, our in house systems work 24/7 to strategically place your IP in front of investors.",
    pattern: (
      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
    ),
    image: "/1.svg",
  },
  {
    title: "BLOCKCHAIN ARCHITECTURE",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    pattern: (
      <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20" />
    ),
    image: "/2.svg",
  },
  {
    title: "Launch  Protocol",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    pattern: (
      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
    ),
    image: "/3.svg",
  },
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "We work 24/7 to ensure your entry to market exceeds expectations, our in house systems work 24/7 to strategically place your IP in front of investors.",
    pattern: (
      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
    ),
    image: "/4.svg",
  },

 
];

// Convert data to ReactNode array
const featureCards = featureCardsData.map((cardData, index) => (
  <ReusableCard
    key={index}
    title={cardData.title}
    description={cardData.description}
    image={cardData.image}
    pattern={cardData.pattern}
    enableBlendMode={true}
  />
));

export default function Feauture1() {
  const sliderRef = useRef<AutoSliderRef>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const handleNavigationChange = (canGoPrev: boolean, canGoNxt: boolean) => {
    setCanGoPrevious(canGoPrev);
    setCanGoNext(canGoNxt);
  };

  const handlePrevious = () => {
    sliderRef.current?.goToPrevious();
  };

  const handleNext = () => {
    sliderRef.current?.goToNext();
  };

  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-[181px] w-full relative px-4 sm:px-6 lg:px-0">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start">
          <h4 className="text-[24px] leading-[28px] sm:text-[32px] sm:leading-[36px] lg:text-[38px] lg:leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase">
            Zero Hours Wasted
          </h4>
          <p className="text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] lg:text-[28px] lg:leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[16px] sm:mt-[20px] lg:mt-[23px]">
            Our systems analyze, deconstruct, and surge your web-2 assets into
            thriving web-3 <br className="hidden sm:block" /> ecosystems. Every
            transformation is strategically engineered for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
            <div className="px-2.5 h-[32px] sm:h-[37px] border border-[#4D4D4D] rounded-[9px] flex justify-between items-center mt-[20px] sm:mt-[31px]">
              <div className="px-2 flex items-center gap-[2px] text-[14px] sm:text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase">
                <span>Web2</span>
                <ArrowRight />
                <span>Web3 Transformation</span>
              </div>
            </div>
            <div className="relative z-[100] mt-4 sm:mt-0">
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

      <div className="mt-[40px] sm:mt-[80px] lg:mt-[105px] py-5 w-full relative z-[100]">
        <AutoSlider
          cards={featureCards}
          ref={sliderRef}
          onNavigationChange={handleNavigationChange}
        />
      </div>
    </div>
  );
}
