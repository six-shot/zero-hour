import Image from "next/image";
import React from "react";
import { HeroHeader } from "./hero-header";
import { ArrowRight, Circle, Pluses } from "./ui/icons";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="h-screen">
      <div className=" relative overflow-hidden h-full pt-6">
        <HeroHeader />
        <Image
          src="/hero.svg"
          alt="hero"
          width={1440}
          height={942}
          className="absolute inset-0 w-full h-full object-cover bg-her"
        />
        <div
          className="w-full h-full absolute inset-0 z-10"
          style={{
            backgroundImage: "url(/mask.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        <div className="h-full flex flex-col items-center relative z-10 mt-[151px]">
          <div className="px-2.5 h-[37px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
            <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>Web2</span>
              <ArrowRight />
              <span>Web3 Transformation</span>
            </div>
          </div>

          <Image src="/zero.svg" alt="hero" width={520} height={228} />
          <p className="mt-[17px] text-[28px] text-white font-[family-name:var(--font-vt323)] uppercase text-center leading-[28px]">
            Helping systems strategically tokenize, dedicated <br /> to growing
            Web-3 roots into your IP
          </p>
          <div className="my-[54px] flex gap-[45px] items-center justify-center">
            <Button>Contact</Button>
            <Button>Past Projects</Button>
          </div>
          <div className="flex gap-[9px] items-start justify-center relative">
            <div className="absolute -right-[200px] top-[92px]">
              <Pluses />
            </div>
            <div
              style={{
                width: "240px",
                height: "199px",
                backgroundColor: "rgba(58, 58, 58, 0.16)",
                clipPath:
                  "polygon(0% 96%, 0% 10.5%, 1% 7.8%, 7.5% 0.9%, 9.5% 0%, 97% 0%, 100% 3.0%, 100% 81%, 97% 84%, 50% 84%, 48% 85%, 36% 98%, 34% 99%, 3% 99%, 0% 96%)",
              }}
              className="flex flex-col gap-[14px] pt-[37px] items-center"
            >
              <h1 className="text-white text-[61px] leading-[61px] font-[family-name:var(--font-vt323)] text-center uppercase">
                127+
              </h1>
              <p className="text-white text-[30px] leading-[30px] font-[family-name:var(--font-vt323)] text-center uppercase">
                Ips Transformed
              </p>
            </div>
            <div
              style={{
                width: "284px",
                height: "170px",
                backgroundColor: "rgba(58, 58, 58, 0.16)",
              }}
              className="flex flex-col gap-[14px] pt-[37px]  items-center rounded-[7.1px]"
            >
              <h1 className="text-white text-[61px] leading-[61px] font-[family-name:var(--font-vt323)] text-center uppercase">
                $2.4B
              </h1>
              <p className="text-white text-[30px] leading-[30px] font-[family-name:var(--font-vt323)] text-center uppercase">
                Value created
              </p>
            </div>
            <div
              style={{
                width: "240px",
                height: "199px",
                backgroundColor: "rgba(58, 58, 58, 0.16)",
                clipPath:
                  "polygon(100% 96%, 100% 10.5%, 99% 7.8%, 92.5% 0.9%, 90.5% 0%, 3% 0%, 0% 3.0%, 0% 81%, 3% 84%, 50% 84%, 52% 85%, 64% 98%, 66% 99%, 97% 99%, 100% 96%)",
              }}
              className="flex flex-col gap-[14px] pt-[37px] items-center"
            >
              <h1 className="text-white text-[61px] leading-[61px] font-[family-name:var(--font-vt323)] text-center uppercase">
                98%
              </h1>
              <p className="text-white text-[30px] leading-[30px] font-[family-name:var(--font-vt323)] text-center uppercase">
                Success rate
              </p>
            </div>
          </div>
          <div className="mt-[29px] h-[37px] px-2.5 bg-white/9 rounded-[9px] flex gap-[9px] items-center justify-center">
            <Circle />
            <h5 className="text-white text-[17px] font-[family-name:var(--font-vt323)]">
              Schedule your Web3 transformation consultation
            </h5>
            <Circle />
          </div>
        </div>
      </div>
    </div>
  );
}
