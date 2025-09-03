"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { CTACircle } from "./ui/icons";
import Footer from "./footer";
import { useSound } from "@/lib/useSoundContext";

export default function CTA2() {
  const { playSound: playHoverSound } = useSound();

  return (
    <div className="relative py-4 sm:py-6 lg:py-8">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-100 px-4 sm:px-6 lg:px-0">
        <div className="border-[0.5px] border-white h-[250px] sm:h-[400px] lg:h-[511px] py-8 sm:py-12 lg:py-[63px] px-6 sm:px-8 lg:px-[34px] rounded-[19px] flex flex-col items-start relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/cta.svg"
              alt="cta-2-bg"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[32px] sm:leading-[48px] lg:leading-[64px] font-[family-name:var(--font-sentex)]">
            Ready to make <br />
            the leap?
          </h3>

          <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-[18px]">
            <CTACircle />
            <p className="text-[18px] sm:text-[28px] lg:text-[38px] leading-[18px] sm:leading-[28px] lg:leading-[38px] font-[family-name:var(--font-vt323)] mt-1 sm:mt-1.5 lg:mt-2">
              The clock is ticking. ZeroHour is here to{" "}
              <br className="hidden sm:block" /> transform your brand&apos;s
              future in Web3.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-[35px] flex justify-end items-end w-full px-[70px]">
            <Button onMouseEnter={playHoverSound}>Book A Session</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
