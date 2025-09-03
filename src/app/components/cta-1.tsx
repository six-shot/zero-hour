"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { useSound } from "@/lib/useSoundContext";

export default function CTA1() {
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
      className="bg-black relative pt-8 pb-[80px]"
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
          className="border-[0.5px] border-[#ffffff64] py-8 px-6 sm:py-12 h-[477px] sm:px-8 lg:py-[55px] lg:px-[63px] rounded-[19px] flex flex-col items-start"
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
            borderColor: "#ffffff",
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
          }}
        >
          <motion.h3
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight sm:leading-tight md:leading-tight lg:leading-[64px] font-[family-name:var(--font-sentex)]"
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
            Ready to Transform <br />
            Your IP?
          </motion.h3>
          <motion.p
            ref={descriptionRef}
            className="mt-4 sm:mt-6 lg:mt-[18px] text-lg sm:text-xl md:text-2xl lg:text-[38px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[38px] font-[family-name:var(--font-vt323)]"
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
              color: "#f0f0f0",
            }}
          >
            Join the revolution. Let us decode your IP&apos;s Web3 potential{" "}
            <br className="hidden sm:block" />
            and build something extraordinary together.
          </motion.p>
          <motion.div
            ref={buttonRef}
            className="mt-6 sm:mt-8 lg:mt-[35px]"
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
        </motion.div>
      </div>
    </motion.div>
  );
}
