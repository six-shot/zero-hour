"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "./ui/icons";
import { AutoSlider, AutoSliderRef } from "./AutoSlider";
import { NavigationArrows } from "./NavigationArrows";
import { ReusableCard } from "./ReusableCard";

// Victory cards data for the slider
const victoryCardsData = [
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/eoflow.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/33.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/eoflow.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/33.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/eoflow.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/33.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/eoflow.svg",
  },
  {
    title: "CRYPTO PUNKS REVOLUTION",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/eoflow.svg",
  },
];

// Convert data to ReactNode array
const victoryCards = victoryCardsData.map((cardData, index) => (
  <ReusableCard
    key={index}
    title={cardData.title}
    description={cardData.description}
    image={cardData.image}
    titleClassName="font-[family-name:var(--font-sentex)] text-[24px] leading-[24px] uppercase mt-5"
    descriptionClassName="text-[#c5c5c5] text-[20px] leading-[20px] font-[family-name:var(--font-vt323)] mt-2.5"
  />
));

export default function Feauture3() {
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
    <div className="pt-[98px] pb-[102px] relative">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-[1000]">
        <div className="flex flex-col items-center">
          <div className="px-2.5 h-[23px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
            <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>Success protocol</span>
            </div>
          </div>
          <h4 className="text-[38px] leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase text-center">
            ZEROhoURS VICTORIES
          </h4>
          <p className="text-[28px] leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[17px]">
            Witness the transformation. These IPs didn't just survive the Web3
            transition—
            <br /> they evolved into something more powerful than their creators
            ever imagined.
          </p>
          <div className="flex justify-end items-center w-full my-[31px]">
            <div className="relative z-[1000]">
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
      <div className="w-full relative overflow-hidden z-[1000]">
        <AutoSlider
          cards={victoryCards}
          ref={sliderRef}
          onNavigationChange={handleNavigationChange}
        />
      </div>
    </div>
  );
}
