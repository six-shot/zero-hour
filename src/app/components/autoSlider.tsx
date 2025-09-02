"use client";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface TechCard {
  title: string;
  description: string;
  pattern: ReactNode;
}

interface AutoSliderProps {
  cards: TechCard[];
}

export const AutoSlider = ({ cards }: AutoSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentIndex > 0) {
        event.preventDefault();
        goToPrevious();
      } else if (
        event.key === "ArrowRight" &&
        currentIndex < cards.length - 1
      ) {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, cards.length]);

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative h-[538px] overflow-hidden">
        <motion.div
          className="flex gap-[22px]"
          animate={{ x: -(currentIndex * 392) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-[384px] h-[538px] flex-shrink-0"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <svg
                width="384"
                height="538"
                viewBox="0 0 384 538"
                fill="none"
                className="absolute inset-0"
              >
                <mask id={`path-1-inside-1_34_19267_${index}`} fill="white">
                  <path d="M384 481.013C384 483.493 383.225 485.911 381.785 487.93L349.608 533.01C347.373 536.141 343.764 538 339.917 538H11.907C5.33094 538 0 532.669 0 526.093V11.907C0 5.33093 5.33094 0 11.907 0H372.093C378.669 0 384 5.33094 384 11.907V481.013Z" />
                </mask>
                <path
                  d="M384 481.013C384 483.493 383.225 485.911 381.785 487.93L349.608 533.01C347.373 536.141 343.764 538 339.917 538H11.907C5.33094 538 0 532.669 0 526.093V11.907C0 5.33093 5.33094 0 11.907 0H372.093C378.669 0 384 5.33094 384 11.907V481.013Z"
                  fill="#0B0211"
                  fillOpacity="0.64"
                />
                <path
                  d="M349.608 533.01L350.093 533.356L349.608 533.01ZM381.785 487.93L382.269 488.276L381.785 487.93ZM381.785 487.93L381.3 487.584L349.124 532.665L349.608 533.01L350.093 533.356L382.269 488.276L381.785 487.93ZM339.917 538V537.405H11.907V538V538.595H339.917V538ZM0 526.093H0.595349V11.907H0H-0.595349V526.093H0ZM11.907 0V0.595349H372.093V0V-0.595349H11.907V0ZM384 11.907H383.405V481.013H384H384.595V11.907H384ZM372.093 0V0.595349C378.34 0.595349 383.405 5.65974 383.405 11.907H384H384.595C384.595 5.00213 378.998 -0.595349 372.093 -0.595349V0ZM0 11.907H0.595349C0.595349 5.65973 5.65974 0.595349 11.907 0.595349V0V-0.595349C5.00213 -0.595349 -0.595349 5.00213 -0.595349 11.907H0ZM11.907 538V537.405C5.65974 537.405 0.595349 532.34 0.595349 526.093H0H-0.595349C-0.595349 532.998 5.00213 538.595 11.907 538.595V538ZM349.608 533.01L349.124 532.665C347.001 535.639 343.571 537.405 339.917 537.405V538V538.595C343.956 538.595 347.746 536.644 350.093 533.356L349.608 533.01ZM381.785 487.93L382.269 488.276C383.782 486.156 384.595 483.617 384.595 481.013H384H383.405C383.405 483.369 382.669 485.666 381.3 487.584L381.785 487.93Z"
                  fill="#9C9C9C"
                  fillOpacity="0.55"
                  mask={`url(#path-1-inside-1_34_19267_${index})`}
                />
              </svg>

              {/* Pattern container */}
              <div className="absolute inset-0 h-64 bg-gradient-tech">
                {card.pattern}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tech-card/80" />
              </div>

              {/* Content */}
              <motion.div
                className="absolute inset-0 p-4 flex flex-col justify-center items-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                <h3 className="text-lg font-bold uppercase mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-center">{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient masks for smooth edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Navigation Buttons */}
        {/* <motion.button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 backdrop-blur-sm border rounded-full flex items-center justify-center transition-all duration-300 group ${
            currentIndex === 0
              ? "bg-white/5 border-white/10 cursor-not-allowed opacity-50"
              : "bg-white/10 border-white/20 hover:bg-white/20"
          }`}
          whileHover={currentIndex > 0 ? { scale: 1.1 } : {}}
          whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <svg
            className="w-6 h-6 text-white group-hover:text-tech-mint transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button> */}

        <motion.button
          onClick={goToNext}
          disabled={currentIndex === cards.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 backdrop-blur-sm border rounded-full flex items-center justify-center transition-all duration-300 group ${
            currentIndex === cards.length - 1
              ? "bg-white/5 border-white/10 cursor-not-allowed opacity-50"
              : "bg-white/10 border-white/20 hover:bg-white/20"
          }`}
          whileHover={currentIndex < cards.length - 1 ? { scale: 1.1 } : {}}
          whileTap={currentIndex < cards.length - 1 ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <svg
            className="w-6 h-6 text-white group-hover:text-tech-mint transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};
