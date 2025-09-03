"use client";
import React, { useRef, useState } from "react";
import { AutoSlider, AutoSliderRef } from "./AutoSlider";
import { NavigationArrows } from "./NavigationArrows";
import { ReusableCard } from "./ReusableCard";

// Victory cards data for the slider
const victoryCardsData = [
  {
    title: "EOFlow",
    description:
      "Turning life-saving health technology into a decentralized movement that rewards every heartbeat.",
    image: "/eoflow.svg",
  },
  {
    title: "Purple Talk",
    description:
      "PurpleTalk’s AI-driven Early Autism Test System (EATS) enables pediatricians to deliver accurate, objective autism diagnoses in just two minutes. EATS is supported by research from Massachusetts General Hospital —a Harvard Medical School affiliate—and achieves a remarkable 92% accuracy rate.",
    image: "/33.svg",
  },
  {
    title: "Apex AI",
    description:
      "Apex AI’s artificial intelligence delivers unprecedented accuracy (95%+) in identifying early-stage gastrointestinal (GI) cancers. Developed in partnership with Korea’s leading institutions, including Seoul National University Bundang Hospital and the Catholic University of Korea, and trained on over 1 million GI endoscopy images, Apex AI empowers doctors with early, life-saving cancer detection.",
    image: "/eoflow.svg",
  },
  {
    title: "MySmaX",
    description:
      "Transformed a classic Web2 MMORPG into a player-owned metaverse with NFT characters, land ownership, and DAO governance.",
    image: "/33.svg",
  },
];

// Convert data to ReactNode array
const victoryCards = victoryCardsData.map((cardData, index) => (
  <ReusableCard
    key={index}
    title={cardData.title}
    description={cardData.description}
    image={cardData.image}
    titleClassName="font-[family-name:var(--font-sentex)] text-[18px] md:text-[24px] leading-[18px] md:leading-[24px] uppercase mt-5"
    descriptionClassName="text-[#c5c5c5] text-[14px] md:text-[20px] leading-[16px] md:leading-[20px] font-[family-name:var(--font-vt323)] mt-2.5"
    imageClassName="w-full"
    enableBlendMode={false}
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
    <div className="pt-[60px] pb-[60px] md:pt-[98px] md:pb-[102px] bg-black relative">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-[1000] px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="px-2.5 h-[23px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
            <div className="px-2 flex items-center gap-[2px] text-[14px] md:text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>Success protocol</span>
            </div>
          </div>
          <h4 className="text-[24px] md:text-[38px] leading-[24px] md:leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase text-center px-4">
            ZEROhoURS VICTORIES
          </h4>
          <p className="text-[16px] md:text-[28px] leading-[20px] md:leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[17px] text-center px-4">
            Witness the transformation. These IPs didn&apos;t just survive the
            Web3 transition—
            <br className="hidden md:block" /> they evolved into something more
            powerful than their creators ever imagined.
          </p>
          <div className="flex justify-end items-center w-full my-[31px] px-4 md:px-0">
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
