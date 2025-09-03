import React from "react";
import { ArrowRight } from "./ui/icons";

export default function Feauture2() {
  return (
    <div className="pt-[98px] pb-[102px] relative px-4 md:px-0">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="flex flex-col items-center relative z-[100]">
        <div className="px-2.5 h-[23px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
          <div className="px-2 flex items-center gap-[2px] text-[14px] sm:text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
            <span>Web2</span>
            <ArrowRight />
            <span>Web3 Transformation</span>
          </div>
        </div>
        <h4 className="text-[24px] sm:text-[32px] md:text-[38px] leading-[24px] sm:leading-[32px] md:leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase text-center px-4">
          ZERO hoURS <br /> TRANSFORMATION PIPELINE
        </h4>
        <p className="text-[18px] sm:text-[24px] md:text-[28px] leading-[18px] sm:leading-[24px] md:leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[17px] text-center px-4">
          From legacy systems to decentralized dominance in 4 phases
        </p>{" "}
      </div>
      <div className="mt-[45px] px-4 md:px-0">
        <div className="flex flex-col sm:flex-row gap-[15px] items-center sm:items-start justify-center relative z-[100]">
          <div
            style={{
              width: "240px",
              height: "199px",
              backgroundColor: "rgba(58, 58, 58, 0.16)",
              clipPath:
                "polygon(0% 96%, 0% 10.5%, 1% 7.8%, 7.5% 0.9%, 9.5% 0%, 97% 0%, 100% 3.0%, 100% 81%, 97% 84%, 50% 84%, 48% 85%, 36% 98%, 34% 99%, 3% 99%, 0% 96%)",
            }}
            className="flex flex-col pt-[23px] items-center font-[family-name:var(--font-vt323)] w-[200px] sm:w-[240px] h-[160px] sm:h-[199px]"
          >
            <h2 className="text-[28px] sm:text-[34px]">01</h2>
            <h3 className="text-white text-[28px] sm:text-[35px] leading-[28px] sm:leading-[35px] font-[family-name:var(--font-sentex)] text-center uppercase">
              SCAN
            </h3>
            <p className="text-white text-[20px] sm:text-[26px] leading-[20px] sm:leading-[26px] font-[family-name:var(--font-vt323)] text-center uppercase mt-[13px]">
              Deep IP Analysis
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgba(58, 58, 58, 0.16)",
            }}
            className="flex flex-col pt-[23px] items-center rounded-[7.1px] font-[family-name:var(--font-vt323)] w-[240px] sm:w-[284px] h-[199px] sm:h-[170px]"
          >
            <h2 className="text-[28px] sm:text-[34px]">02</h2>
            <h3 className="text-white text-[28px] sm:text-[35px] leading-[28px] sm:leading-[35px] font-[family-name:var(--font-sentex)] text-center uppercase">
              SCAN
            </h3>
            <p className="text-white text-[20px] sm:text-[26px] leading-[20px] sm:leading-[26px] font-[family-name:var(--font-vt323)] text-center uppercase mt-[13px]">
              Deep IP Analysis
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgba(58, 58, 58, 0.16)",
            }}
            className="flex flex-col pt-[23px] items-center rounded-[7.1px] font-[family-name:var(--font-vt323)] w-[240px] sm:w-[284px] h-[199px] sm:h-[170px]"
          >
            <h2 className="text-[28px] sm:text-[34px]">03</h2>
            <h3 className="text-white text-[28px] sm:text-[35px] leading-[28px] sm:leading-[35px] font-[family-name:var(--font-sentex)] text-center uppercase">
              SCAN
            </h3>
            <p className="text-white text-[20px] sm:text-[26px] leading-[20px] sm:leading-[26px] font-[family-name:var(--font-vt323)] text-center uppercase mt-[13px]">
              Deep IP Analysis
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
            className="flex flex-col pt-[23px] items-center font-[family-name:var(--font-vt323)] w-[200px] sm:w-[240px] h-[160px] sm:h-[199px]"
          >
            <h2 className="text-[28px] sm:text-[34px]">04</h2>
            <h3 className="text-white text-[28px] sm:text-[35px] leading-[28px] sm:leading-[35px] font-[family-name:var(--font-sentex)] text-center uppercase">
              SCAN
            </h3>
            <p className="text-white text-[20px] sm:text-[26px] leading-[20px] sm:leading-[26px] font-[family-name:var(--font-vt323)] text-center uppercase mt-[13px]">
              Deep IP Analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
