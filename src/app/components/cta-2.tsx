"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { CTACircle } from "./ui/icons";
import Footer from "./footer";
import { useSound } from "@/lib/useSoundContext";

export default function CTA2() {
  const { playSound: playHoverSound } = useSound();

  // Refs for scroll animations
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  // InView hooks
  const containerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px",
  });
  const buttonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      className="relative mt-14 md:mt-[50px] lg:mt-[108px] "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-100 px-4 sm:px-6 lg:px-0">
        <motion.div
          ref={containerRef}
          className="border-[0.5px] border-[#ffffff5f] h-[300px] sm:h-[400px] lg:h-[511px] py-8 sm:py-12 lg:py-[63px] px-6 sm:px-8 lg:px-[34px] rounded-[19px] flex flex-col items-start relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            containerInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={{

            boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#0B0211] rounded-[19px]">
            <Image
              src="/cta.svg"
              alt="cta-2-bg"
              className="w-full h-full object-cover mix-blend-luminosity"
              width={100}
              height={100}
            />
          </div>
          <div className="relative z-100 w-full">
            <motion.h3
              ref={headingRef}
              className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[32px] sm:leading-[48px] lg:leading-[64px] font-[family-name:var(--font-sentex)]"
              initial={{ opacity: 0, y: 50 }}
              animate={
                headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
            >
              Ready to make <br />
              the leap?
            </motion.h3>

            <motion.div
              ref={descriptionRef}
              className="flex items-start gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-[18px]"
              initial={{ opacity: 0, y: 30 }}
              animate={
                descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.01,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <CTACircle />
              </motion.div>
              <p className="text-[18px] sm:text-[28px] lg:text-[38px] leading-[18px] sm:leading-[28px] lg:leading-[38px] font-[family-name:var(--font-vt323)] mt-1 sm:mt-1.5 lg:mt-2">
                The clock is ticking. ZeroHour is here to{" "}
                <br className="hidden sm:block" /> transform your brand&apos;s
                future in Web3.
              </p>
            </motion.div>
            <motion.div
              ref={buttonRef}
              className="mt-6 sm:mt-8 lg:mt-[35px] flex justify-end items-end w-full md:px-[70px]"
              initial={{ opacity: 0, y: 30 }}
              animate={
                buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <Button onMouseEnter={playHoverSound}>Book A Session</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
