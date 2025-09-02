import React from "react";
import { FooterCircle } from "./ui/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-[119px] ">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto pb-[89px]">
        <div className="flex items-center ">
          <ul className="flex gap-[30px] items-center uppercase">
            <li className="text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              About
            </li>

            <div className="w-[33px] h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>

            <li className="text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              Services
            </li>
            <div className="w-[33px] h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>
            <li className="text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              Projects
            </li>
            <div className="w-[33px] h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>

            <li className="text-[38px] upppercase font-[family-name:var(--font-vt323)]">
              Projects
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="relative">
            <div className="absolute top-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute bottom-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            {/* Corner accents */}
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            <button className="w-[70px] h-[50px] bg-white/20 flex justify-center items-center">
              <Image src="/discord.svg" width={48} height={48} alt="discord" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute bottom-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            {/* Corner accents */}
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            <button className="w-[70px] h-[50px] bg-white/20 flex justify-center items-center">
              <Image src="/x.svg" width={48} height={48} alt="x" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute bottom-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
            {/* Corner accents */}
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute top-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
            <div className="absolute bottom-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
            <button className="w-[70px] h-[50px] bg-white/20 flex justify-center items-center">
              <Image
                src="/telegram.svg"
                width={48}
                height={48}
                alt="telegram"
              />
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-[#949494] text-[17px] pb-[46px]">
        © 2025 ZeroHour. All rights reserved.
      </p>
    </div>
  );
}
