"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function FrequentlyAskedQuestions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const data = [
    {
      title: "What is the underlying asset of the USDX stablecoin?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "What are tokenized stocks?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "How is the price of USDX decided?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "What are the legal rights of WhiteRock RWA tokenholders?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "What is the underlying asset of the USDX stablecoin?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
    {
      title: "What are tokenized stocks?",
      answer:
        "USDX is a stablecoin backed by short-term U.S. Treasury bills, which are government bonds issued by the U.S. government. As these bonds are guaranteed by the U.S. government, they are considered to be virtually risk-free and among the safest investments globally.",
    },
  ];

  return (
    <div className="relative py-8 sm:py-12 md:py-16 lg:py-[109px] px-4 sm:px-6 lg:px-8">
      {/* Background layer */}
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[11px] items-center">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[657px] border-[0.5px] border-[#B7B4B4] bg-black relative order-1 lg:order-1">
              <Image
                src="/faq.svg"
                className="w-full h-full mix"
                alt="cta"
                width={660}
                height={1174}
              />
              <h3 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[119px] leading-[40px] sm:leading-[60px] md:leading-[80px] lg:leading-[119px] text-left font-[family-name:var(--font-sentex)] uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                FAQS
              </h3>
            </div>
            <div className="flex flex-col w-full h-auto lg:h-[657px] justify-between gap-2 lg:gap-0 order-2 lg:order-2">
              {data.map((item, index) => (
                <Accordion
                  key={index}
                  index={index}
                  title={item.title}
                  answer={item.answer}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const Accordion = ({
  title,
  answer,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  answer: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => {
        // If clicking on the currently open accordion, keep it open (prevent closing)
        if (hoveredIndex === index) return;
        setHoveredIndex(index); // Open the clicked accordion
      }}
      className={`relative p-[1px] overflow-hidden cursor-pointer border-[0.5px] border-[#B7B4B4] ${
        isOpen ? "pb-3" : "py-1.5"
      }`}
    >
      <div className="px-2.5">
        <motion.button className="flex justify-between items-start w-full py-[10px]">
          <span className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[33px] leading-[18px] sm:leading-[24px] md:leading-[28px] lg:leading-[33px] text-left font-[family-name:var(--font-vt323)] uppercase pr-2">
            {title}
          </span>
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 border-[2px] rounded-full flex justify-center items-center flex-shrink-0 mt-1 sm:mt-0 ${
              isOpen ? "border-[#fff]" : "border-[#fff]"
            }`}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-4 sm:h-4 ml-[1px] mt-[1px]"
            >
              {/* Vertical line (always present, animates opacity) */}
              <motion.path
                d="M12 5V19"
                stroke={isOpen ? "#ffffff" : "#ffffff"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* Horizontal line (always present) */}
              <motion.path
                d="M5 12H19"
                stroke={isOpen ? "#ffffff" : "#ffffff"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-[14px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] font-[family-name:var(--font-vt323)] uppercase">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
