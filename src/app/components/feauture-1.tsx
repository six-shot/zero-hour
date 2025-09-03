"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
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
    imageClassName="w-[290px] h-[100%]"
    descriptionClassName="text-[#c5c5c5] md:text-[24px] md:leading-[24px] text-[18px] leading-[22px] font-[family-name:var(--font-vt323)] mt-2.5"
  />
));

export default function Feauture1() {
  const sliderRef = useRef<AutoSliderRef>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  // Refs for scroll animations
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const badgeRef = useRef(null);
  const navigationRef = useRef(null);

  // InView hooks
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const badgeInView = useInView(badgeRef, { once: true, margin: "-100px" });
  const navigationInView = useInView(navigationRef, {
    once: true,
    margin: "-100px",
  });

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
    <motion.div
      className="pt-[60px] sm:pt-[100px] lg:pt-[181px] w-full relative px-4 sm:px-6 lg:px-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start relative z-100">
          <motion.h4
            ref={headingRef}
            className="text-[24px] leading-[28px] sm:text-[32px] sm:leading-[36px] lg:text-[38px] lg:leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
          >
            Zero Hours Wasted
          </motion.h4>
          <motion.p
            ref={descriptionRef}
            className="text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] lg:text-[28px] lg:leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[16px] sm:mt-[20px] lg:mt-[23px]"
            initial={{ opacity: 0, y: 30 }}
            animate={
              descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.01,
              color: "#f0f0f0",
            }}
          >
            Our systems analyze, deconstruct, and surge your web-2 assets into
            thriving web-3 <br className="hidden sm:block" /> ecosystems. Every
            transformation is strategically engineered for maximum impact.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
            <motion.div
              ref={badgeRef}
              className="px-2.5 h-[32px] sm:h-[37px] border border-[#4D4D4D] rounded-[9px] flex justify-between items-center mt-[20px] sm:mt-[31px]"
              initial={{ opacity: 0, x: -30 }}
              animate={
                badgeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "#666666",
                boxShadow: "0 0 20px rgba(77, 77, 77, 0.3)",
              }}
            >
              <div className="px-2 flex items-center gap-[2px] text-[14px] sm:text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase">
                <span>Web2</span>
                <motion.div
                  whileHover={{
                    x: 2,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <ArrowRight />
                </motion.div>
                <span>Web3 Transformation</span>
              </div>
            </motion.div>
            <motion.div
              ref={navigationRef}
              className="relative z-[100] mt-4 sm:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={
                navigationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
              }
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <NavigationArrows
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
              />
            </motion.div>
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
    </motion.div>
  );
}
