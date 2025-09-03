import React from "react";
import { FooterCircle } from "./ui/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-[119px] px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto pb-[89px] gap-8 md:gap-0">
        <div className="flex items-center">
          <ul className="flex flex-wrap gap-[15px] md:gap-[30px] items-center uppercase justify-center md:justify-start">
            <li className="text-[24px] md:text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              About
            </li>

            <div className="w-[20px] h-[20px] md:w-[33px] md:h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>

            <li className="text-[24px] md:text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              Services
            </li>
            <div className="w-[20px] h-[20px] md:w-[33px] md:h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>
            <li className="text-[24px] md:text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              Projects
            </li>
            <div className="w-[20px] h-[20px] md:w-[33px] md:h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>

            <li className="text-[24px] md:text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[15px] md:gap-[30px]">
          <div className="relative">
            <div className="absolute top-0 left-[15px] md:left-[25px] right-[15px] md:right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute bottom-0 left-[15px] md:left-[25px] right-[15px] md:right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            {/* Corner accents */}
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 left-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 right-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 left-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 right-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            <button className="w-[50px] h-[40px] md:w-[70px] md:h-[50px] bg-white/20 flex justify-center items-center">
              <Image
                src="/discord.svg"
                width={32}
                height={32}
                className="md:w-12 md:h-12"
                alt="discord"
              />
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-[15px] md:left-[25px] right-[15px] md:right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute bottom-0 left-[15px] md:left-[25px] right-[15px] md:right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            {/* Corner accents */}
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 left-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 right-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 left-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 right-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            <button className="w-[50px] h-[40px] md:w-[70px] md:h-[50px] bg-white/20 flex justify-center items-center">
              <Image
                src="/x.svg"
                width={32}
                height={32}
                className="md:w-12 md:h-12"
                alt="x"
              />
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-[15px] md:left-[25px] right-[15px] md:right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute bottom-0 left-[15px] md:left-[25px] right-[15px] md:right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            {/* Corner accents */}
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 left-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 right-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 left-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[3px] h-[10px] md:h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 right-0 w-[10px] md:w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            <button className="w-[50px] h-[40px] md:w-[70px] md:h-[50px] bg-white/20 flex justify-center items-center">
              <Image
                src="/telegram.svg"
                width={32}
                height={32}
                className="md:w-12 md:h-12"
                alt="telegram"
              />
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-[#949494] text-[14px] md:text-[17px] pb-[46px] px-4">
        © 2025 ZeroHour. All rights reserved.
      </p>
    </div>
  );
}
