import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { CTACircle } from "./ui/icons";
import Footer from "./footer";

export default function CTA2() {
  return (
    <div className=" relative py-8">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-100">
        <div className=" border-[0.5px] border-white h-[511px] py-[63px] px-[34px] rounded-[19px] flex flex-col items-start relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/cta.svg"
              alt="cta-2-bg"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-[64px] leading-[64px] font-[family-name:var(--font-sentex)]">
            Ready to make <br />
            the leap?
          </h3>
          <div className="flex items-start gap-4 mt-[18px]">
            <CTACircle />
            <p className="text-[38px] leading-[38px] font-[family-name:var(--font-vt323)] mt-2">
              The clock is ticking. ZeroHour is here to <br /> transform your
              brand’s future in Web3.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
