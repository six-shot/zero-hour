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
  },
  {
    title: "MICHAEL RODRIGUEZ",
    description:
      "The transparency and efficiency of Zero Hour's tokenization process is unmatched. We've seen incredible results since implementing their RWA solutions in our portfolio.",
    image: "/2.svg",
  },
  {
    title: "EMILY WATSON",
    description:
      "As a financial advisor, I trust Zero Hour to provide my clients with secure, compliant access to tokenized real-world assets. The platform delivers on its promises.",
    image: "/3.svg",
  },
  {
    title: "DAVID KIM",
    description:
      "Zero Hour's innovative approach to RWA tokenization has opened up new investment opportunities that were previously inaccessible to retail investors.",
    image: "/33.svg",
  },
  {
    title: "LISA THOMPSON",
    description:
      "The team behind Zero Hour understands the complexities of both traditional finance and blockchain technology. Their platform bridges the gap perfectly.",
    image: "/1.svg",
  },
  {
    title: "JAMES WILSON",
    description:
      "Zero Hour has made it possible for us to diversify our portfolio with real-world assets while maintaining the benefits of blockchain technology.",
    image: "/2.svg",
  },
];

// Convert testimonial data to ReactNode array
const testimonialCards = testimonialData.map((testimonial, index) => (
  <div key={index} className="relative z-[100] w-full h-full">
    {/* Background SVG */}
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 384 538"
      fill="none"
      className="absolute inset-0"
      preserveAspectRatio="none"
    >
      <mask id={`card-mask-${Math.random()}`} fill="white">
        <path d="M384 481.013C384 483.493 383.225 485.911 381.785 487.93L349.608 533.01C347.373 536.141 343.764 538 339.917 538H11.907C5.33094 538 0 532.669 0 526.093V11.907C0 5.33093 5.33094 0 11.907 0H372.093C378.669 0 384 5.33094 384 11.907V481.013Z" />
      </mask>
      <path
        d="M384 481.013C384 483.493 383.225 485.911 381.785 487.93L349.608 533.01C347.373 536.141 343.764 538 339.917 538H11.907C5.33094 538 0 532.669 0 526.093V11.907C0 5.33093 5.33094 0 11.907 0H372.093C378.669 0 384 5.33094 384 11.907V481.013Z"
        fill="#0B0211"
        fillOpacity="0.64"
      />
      <path
        d="M349.608 533.01L350.093 533.356L349.608 533.01ZM381.785 487.93L382.269 488.276L381.785 487.93ZM381.785 487.93L381.3 487.584L349.124 532.665L349.608 533.01L350.093 533.356L382.269 488.276L381.785 487.93ZM339.917 538V537.405H11.907V538V538.595H339.917V538ZM0 526.093H0.595349V11.907H0H-0.595349V526.093H0ZM11.907 0V0.595349H372.093V0V-0.595349H11.907V0ZM384 11.907H383.405V481.013H384H384.595V11.907H384ZM372.093 0V0.595349C378.34 0.595349 383.405 5.65974 383.405 11.907H384H384.595C384.595 5.00213 378.998 -0.595349 372.093 -0.595349V0ZM0 11.907H0.595349C0.595349 5.65973 5.65974 0.595349 11.907 0.595349V0V-0.595349C5.00213 -0.595349 -0.595349 5.00213 -0.595349 11.907H0ZM11.907 538V537.405C5.65974 537.405 0.595349 532.34 0.595349 526.093H0H-0.595349C-0.595349 532.998 5.00213 538.595 11.907 538.595V538ZM349.608 533.01L349.124 532.665C347.001 535.639 343.571 537.405 339.917 537.405V538V538.595C343.956 538.595 347.746 536.644 350.093 533.356L349.608 533.01ZM381.785 487.93L382.269 488.276C383.782 486.156 384.595 483.617 384.595 481.013H384H383.405C383.405 483.369 382.669 485.666 381.3 487.584L381.785 487.93Z"
        fill="#9C9C9C"
        fillOpacity="0.55"
        mask={`url(#card-mask-${Math.random()})`}
      />
    </svg>

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col items-start text-white z-20">
      {/* Quote Icon */}
    <Image width={66} height={78} src="quote.svg" alt="quote"/>


      {/* Testimonial Text */}
      <p className="text-[#c5c5c5] text-[28px] text-left leading-[28px] font-[family-name:var(--font-vt323)] mt-6 mb-8 flex-1">
        {testimonial.description}
      </p>

      {/* User Image */}
      {/* <div className="mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.title}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div> */}

      {/* User Name */}
      {/* <h3 className="font-[family-name:var(--font-sentex)] text-[24px] leading-[24px] uppercase text-center">
        {testimonial.title}
      </h3> */}
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
