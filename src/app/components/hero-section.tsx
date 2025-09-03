"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HeroHeader } from "./hero-header";
import { ArrowRight, Circle, Pluses } from "./ui/icons";
import { Button } from "./ui/button";
import { useSound } from "@/lib/useSoundContext";
import { SoundToggle } from "./sound-toggle";

export default function HeroSection() {
  const { playSound: playHoverSound, isAudioEnabled, debugInfo } = useSound();

  const handleHoverSound = () => {
    console.log("Hover sound triggered, isAudioEnabled:", isAudioEnabled);
    console.log("Debug info:", debugInfo);
    playHoverSound();
  };

  const handleClickSound = () => {
    console.log("Click sound triggered - this should unlock audio");
    playHoverSound();
  };

  return (
    <div className=" relative">
      <SoundToggle />
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className=" relative overflow-hidden h-full pt-6">
        <HeroHeader />
        <Image
          src="/hero.svg"
          alt="hero"
          width={1440}
          height={942}
          className="absolute inset-0 w-full h-full object-cover bg-her"
        />

        <motion.div
          className="h-full flex flex-col items-center relative z-10 mt-[100px] md:mt-[151px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="px-2.5 h-[30px] md:h-[37px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[16px] md:mb-[22px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="px-2 flex items-center gap-[2px] text-[14px] md:text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>Web2</span>
              <ArrowRight />
              <span>Web3 Transformation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/zero.svg"
              alt="hero"
              width={520}
              height={228}
              className="w-[280px] h-auto md:w-[520px] md:h-[228px]"
            />
          </motion.div>
          <motion.p
            className="mt-[12px] md:mt-[17px] text-[18px] md:text-[28px] text-white font-[family-name:var(--font-vt323)] uppercase text-center leading-[20px] md:leading-[28px] px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Helping systems strategically tokenize, dedicated{" "}
            <br className="hidden md:block" /> to growing Web-3 roots into your
            IP
          </motion.p>
          <motion.div
            className="my-[32px] md:my-[54px] flex  sm:flex-row gap-[20px] md:gap-[45px] items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onMouseEnter={handleHoverSound}
              onClick={handleClickSound}
              className="hover:scale-105 transition-transform duration-200 active:scale-95"
            >
              Contact
            </Button>
            <Button
              onMouseEnter={handleHoverSound}
              onClick={handleClickSound}
              className="hover:scale-105 transition-transform duration-200 active:scale-95"
            >
              Past Projects
            </Button>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-[9px] items-center md:items-start justify-center relative px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.div
              className="absolute -right-[200px] top-[92px] hidden md:block"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            >
              <Pluses />
            </motion.div>
            <motion.div
              style={{
                width: "240px",
                height: "199px",
                backgroundColor: "rgba(58, 58, 58, 0.16)",
                clipPath:
                  "polygon(0% 96%, 0% 10.5%, 1% 7.8%, 7.5% 0.9%, 9.5% 0%, 97% 0%, 100% 3.0%, 100% 81%, 97% 84%, 50% 84%, 48% 85%, 36% 98%, 34% 99%, 3% 99%, 0% 96%)",
              }}
              className="flex flex-col gap-[14px] pt-[37px] items-center w-[200px] md:w-[240px] h-[160px] md:h-[199px]"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <h1 className="text-white text-[48px] md:text-[61px] leading-[48px] md:leading-[61px] font-[family-name:var(--font-vt323)] text-center uppercase">
                127+
              </h1>
              <p className="text-white text-[24px] md:text-[30px] leading-[24px] md:leading-[30px] font-[family-name:var(--font-vt323)] text-center uppercase">
                Ips Transformed
              </p>
            </motion.div>
            <motion.div
              style={{
                backgroundColor: "rgba(58, 58, 58, 0.16)",
              }}
              className="md:w-[284px] w-[240px] md:h-[170px] h-[199px] flex flex-col gap-[14px] pt-[37px] items-center rounded-[7.1px] "
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <h1 className="text-white text-[48px] md:text-[61px] leading-[48px] md:leading-[61px] font-[family-name:var(--font-vt323)] text-center uppercase">
                $2.4B
              </h1>
              <p className="text-white text-[24px] md:text-[30px] leading-[24px] md:leading-[30px] font-[family-name:var(--font-vt323)] text-center uppercase">
                Value created
              </p>
            </motion.div>
            <motion.div
              style={{
                width: "240px",
                height: "199px",
                backgroundColor: "rgba(58, 58, 58, 0.16)",
                clipPath:
                  "polygon(100% 96%, 100% 10.5%, 99% 7.8%, 92.5% 0.9%, 90.5% 0%, 3% 0%, 0% 3.0%, 0% 81%, 3% 84%, 50% 84%, 52% 85%, 64% 98%, 66% 99%, 97% 99%, 100% 96%)",
              }}
              className="flex flex-col gap-[14px] pt-[37px] items-center w-[200px] md:w-[240px] h-[160px] md:h-[199px]"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <h1 className="text-white text-[48px] md:text-[61px] leading-[48px] md:leading-[61px] font-[family-name:var(--font-vt323)] text-center uppercase">
                98%
              </h1>
              <p className="text-white text-[24px] md:text-[30px] leading-[24px] md:leading-[30px] font-[family-name:var(--font-vt323)] text-center uppercase">
                Success rate
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-[20px] md:mt-[29px] h-[32px] md:h-[37px] px-2.5 bg-white/9 rounded-[9px] flex gap-[6px] md:gap-[9px] items-center justify-center mx-4 md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <Circle />
            <h5 className="text-white text-[14px] md:text-[17px] font-[family-name:var(--font-vt323)] text-center">
              Schedule your Web3 transformation consultation
            </h5>
            <Circle />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="mt-[60px] md:mt-[117px] h-[300px] md:h-[589px] relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 2.0 }}
      >
        <Image
          src="/sub-hero.svg"
          alt="hero"
          width={1801}
          height={589}
          className="opacity-[0.38] mix-blend-luminosity w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
