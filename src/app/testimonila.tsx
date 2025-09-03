"use client";
import React, { useRef, useState } from "react";
import { AutoSlider, AutoSliderRef } from "./components/AutoSlider";
import { NavigationArrows } from "./components/NavigationArrows";
import { ReusableCard } from "./components/ReusableCard";
import Image from "next/image";

// Testimonial data
const testimonialData = [
  {
    title: "SARAH CHEN",
    description:
      "Zero Hour has revolutionized how we approach decentralized finance. The platform's intuitive interface and robust security features make it the perfect solution for both beginners and experts.",
    image: "/1.svg",
    userImage: "/user-1.svg",
  },
  {
    title: "MICHAEL RODRIGUEZ",
    description:
      "The transparency and efficiency of Zero Hour's tokenization process is unmatched. We've seen incredible results since implementing their RWA solutions in our portfolio.",
    image: "/2.svg",
    userImage: "/user-1.svg",
  },
  {
    title: "EMILY WATSON",
    description:
      "As a financial advisor, I trust Zero Hour to provide my clients with secure, compliant access to tokenized real-world assets. The platform delivers on its promises.",
    image: "/3.svg",
    userImage: "/user-1.svg",
  },
  {
    title: "DAVID KIM",
    description:
      "Zero Hour's innovative approach to RWA tokenization has opened up new investment opportunities that were previously inaccessible to retail investors.",
    image: "/33.svg",
    userImage: "/user-1.svg",
  },
  {
    title: "LISA THOMPSON",
    description:
      "The team behind Zero Hour understands the complexities of both traditional finance and blockchain technology. Their platform bridges the gap perfectly.",
    image: "/1.svg",
    userImage: "/user-1.svg",
  },
  {
    title: "JAMES WILSON",
    description:
      "Zero Hour has made it possible for us to diversify our portfolio with real-world assets while maintaining the benefits of blockchain technology.",
    image: "/2.svg",
    userImage: "/user-1.svg",
  },
];

// Convert testimonial data to ReactNode array
const testimonialCards = testimonialData.map((testimonial, index) => (
  <div key={index} className="relative z-[100] w-full h-full">
    {/* Background SVG */}
    <svg
      width="573"
      height="500"
      viewBox="0 0 573 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_40_29796" fill="white">
        <path d="M573 445.168C573 448.607 571.513 451.879 568.922 454.14L519.73 497.065C517.561 498.957 514.78 500 511.902 500H11.907C5.33094 500 0 494.669 0 488.093V11.907C0 5.33094 5.33094 0 11.907 0H561.093C567.669 0 573 5.33094 573 11.907V445.168Z" />
      </mask>
      <path
        d="M573 445.168C573 448.607 571.513 451.879 568.922 454.14L519.73 497.065C517.561 498.957 514.78 500 511.902 500H11.907C5.33094 500 0 494.669 0 488.093V11.907C0 5.33094 5.33094 0 11.907 0H561.093C567.669 0 573 5.33094 573 11.907V445.168Z"
        fill="#0B0211"
        fill-opacity="0.64"
      />
      <path
        d="M519.73 497.065L520.122 497.513L519.73 497.065ZM568.922 454.14L568.53 453.691L568.922 454.14ZM568.922 454.14L568.53 453.691L519.339 496.616L519.73 497.065L520.122 497.513L569.313 454.588L568.922 454.14ZM511.902 500V499.405H11.907V500V500.595H511.902V500ZM0 488.093H0.595349V11.907H0H-0.595349V488.093H0ZM11.907 0V0.595349H561.093V0V-0.595349H11.907V0ZM573 11.907H572.405V445.168H573H573.595V11.907H573ZM561.093 0V0.595349C567.34 0.595349 572.405 5.65974 572.405 11.907H573H573.595C573.595 5.00213 567.998 -0.595349 561.093 -0.595349V0ZM0 11.907H0.595349C0.595349 5.65974 5.65974 0.595349 11.907 0.595349V0V-0.595349C5.00213 -0.595349 -0.595349 5.00214 -0.595349 11.907H0ZM11.907 500V499.405C5.65975 499.405 0.595349 494.34 0.595349 488.093H0H-0.595349C-0.595349 494.998 5.00214 500.595 11.907 500.595V500ZM519.73 497.065L519.339 496.616C517.278 498.414 514.636 499.405 511.902 499.405V500V500.595C514.924 500.595 517.844 499.5 520.122 497.513L519.73 497.065ZM568.922 454.14L569.313 454.588C572.034 452.214 573.595 448.779 573.595 445.168H573H572.405C572.405 448.436 570.992 451.543 568.53 453.691L568.922 454.14Z"
        fill="#9C9C9C"
        fill-opacity="0.55"
        mask="url(#path-1-inside-1_40_29796)"
      />
    </svg>

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col items-start text-white z-20">
      {/* Quote Icon */}
      <Image width={66} height={78} src="quote.svg" alt="quote" />

      {/* Testimonial Text */}
      <p className="text-[#c5c5c5] text-[28px] text-left leading-[28px] font-[family-name:var(--font-vt323)] mt-6 mb-8 flex-1">
        {testimonial.description}
      </p>

      <div className="mb-4 flex gap-[15px] items-center">
        <img
          src={testimonial.userImage}
          alt={testimonial.title}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <h3 className="font-[family-name:var(--font-sentex)] text-[24px] leading-[24px] uppercase text-center">
          {testimonial.title}
        </h3>
      </div>
    </div>
  </div>
));

export default function Testimonial() {
  const sliderRef = useRef<AutoSliderRef>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const handleNavigationChange = (canPrev: boolean, canNext: boolean) => {
    setCanGoPrevious(canPrev);
    setCanGoNext(canNext);
  };

  const handlePrevious = () => {
    sliderRef.current?.goToPrevious();
  };

  const handleNext = () => {
    sliderRef.current?.goToNext();
  };

  return (
    <div className="pt-[98px] pb-[102px]  relative">
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
      <div className="max-w-[1440px] mx-auto relative z-[1000]">
        <div className="flex flex-col items-center">
          <div className="px-2.5 h-[23px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
            <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>User testimonials</span>
            </div>
          </div>
          <h4 className="text-[38px] leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase text-center">
            WHAT OUR USERS SAY
          </h4>
          <p className="text-[28px] leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[17px]">
            Discover how Zero Hour is transforming the way people interact with
            <br /> real-world assets through our platform.
          </p>
        </div>
      </div>
      <div className="w-full relative overflow-hidden z-[1000] mt-[117px]">
        <AutoSlider
          cards={testimonialCards}
          ref={sliderRef}
          onNavigationChange={handleNavigationChange}
          cardWidth={573}
          cardGap={22}
          containerHeight={500}
        />
      </div>
      <div className="flex justify-end items-center w-full max-w-[1440px] mx-auto mt-8">
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
  );
}
