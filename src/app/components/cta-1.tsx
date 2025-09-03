"use client";
import React from "react";
import { Button } from "./ui/button";
import { useSound } from "@/lib/useSoundContext";

export default function CTA1() {
  const { playSound: playHoverSound } = useSound();

  return (
    <div className="bg-black relative pt-8 pb-[80px]">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-100 px-4 sm:px-6 lg:px-0">
        <div className="border-[0.5px] border-[#ffffff64] py-8 px-6 sm:py-12 h-[477px] sm:px-8 lg:py-[55px] lg:px-[63px] rounded-[19px] flex flex-col items-start">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight sm:leading-tight md:leading-tight lg:leading-[64px] font-[family-name:var(--font-sentex)]">
            Ready to Transform <br />
            Your IP?
          </h3>
          <p className="mt-4 sm:mt-6 lg:mt-[18px] text-lg sm:text-xl md:text-2xl lg:text-[38px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[38px] font-[family-name:var(--font-vt323)]">
            Join the revolution. Let us decode your IP&apos;s Web3 potential{" "}
            <br className="hidden sm:block" />
            and build something extraordinary together.
          </p>
          <div className="mt-6 sm:mt-8 lg:mt-[35px]">
            <Button onMouseEnter={playHoverSound}>Book A Session</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
