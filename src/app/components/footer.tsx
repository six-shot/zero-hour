import React from "react";
import { FooterCircle } from "./ui/icons";
import Image from "next/image";
import Link from "next/link";
import { ShufflingText } from "./ShufflingText";
import { useSound } from "@/lib/useSoundContext";

export default function Footer() {
  const { playSound: playHoverSound } = useSound();

  const handleHoverSound = () => {
    console.log("Footer hover sound triggered!");
    playHoverSound();
  };

  return (
    <div className="relative z-[100] pt-[119px] px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto pb-[89px] gap-8 md:gap-0">
        <div className="flex items-center">
          <ul className="flex flex-wrap gap-[15px] md:gap-[30px] items-center uppercase justify-center md:justify-start">
            <li>
              <Link
                href="#about"
                className="text-[24px] md:text-[38px] uppercase font-[family-name:var(--font-vt323)] hover:text-[#ffffff] block duration-150"
                onMouseEnter={handleHoverSound}
              >
                <ShufflingText
                  text="About"
                  className="block"
                  shuffleDuration={30}
                  restoreDuration={80}
                />
              </Link>
            </li>

            <div className="w-[20px] h-[20px] md:w-[33px] md:h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>

            <li>
              <Link
                href="#services"
                className="text-[24px] md:text-[38px] uppercase font-[family-name:var(--font-vt323)] hover:text-[#ffffff] block duration-150"
                onMouseEnter={handleHoverSound}
              >
                <ShufflingText
                  text="Services"
                  className="block"
                  shuffleDuration={30}
                  restoreDuration={80}
                />
              </Link>
            </li>
            <div className="w-[20px] h-[20px] md:w-[33px] md:h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>
            <li>
              <Link
                href="#projects"
                className="text-[24px] md:text-[38px] uppercase font-[family-name:var(--font-vt323)] hover:text-[#ffffff] block duration-150"
                onMouseEnter={handleHoverSound}
              >
                <ShufflingText
                  text="Projects"
                  className="block"
                  shuffleDuration={30}
                  restoreDuration={80}
                />
              </Link>
            </li>
            <div className="w-[20px] h-[20px] md:w-[33px] md:h-[34px] flex items-center justify-center">
              <FooterCircle />
            </div>

            <li>
              <Link
                href="#contact"
                className="text-[24px] md:text-[38px] uppercase font-[family-name:var(--font-vt323)] hover:text-[#ffffff] block duration-150"
                onMouseEnter={handleHoverSound}
              >
                <ShufflingText
                  text="Contact"
                  className="block"
                  shuffleDuration={30}
                  restoreDuration={80}
                />
              </Link>
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
            <button
              className="w-[50px] h-[40px] md:w-[70px] md:h-[50px] bg-white/20 flex justify-center items-center group relative overflow-hidden"
              onMouseEnter={handleHoverSound}
            >
              {/* Sound wave animation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-1">
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "100ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "16px", animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "400ms" }}
                  ></div>
                </div>
              </div>
              <Image
                src="/discord.svg"
                width={32}
                height={32}
                className="md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300 relative z-10"
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
            <button
              className="w-[50px] h-[40px] md:w-[70px] md:h-[50px] bg-white/20 flex justify-center items-center group relative overflow-hidden"
              onMouseEnter={handleHoverSound}
            >
              {/* Sound wave animation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-1">
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "100ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "16px", animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "400ms" }}
                  ></div>
                </div>
              </div>
              <Image
                src="/x.svg"
                width={32}
                height={32}
                className="md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300 relative z-10"
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
            <button
              className="w-[50px] h-[40px] md:w-[70px] md:h-[50px] bg-white/20 flex justify-center items-center group relative overflow-hidden"
              onMouseEnter={handleHoverSound}
            >
              {/* Sound wave animation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-1">
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "100ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "16px", animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white/60 rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "400ms" }}
                  ></div>
                </div>
              </div>
              <Image
                src="/telegram.svg"
                width={32}
                height={32}
                className="md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300 relative z-10"
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
