"use client";
import { motion } from "framer-motion";
import {
  ReactNode,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

interface AutoSliderProps {
  cards: ReactNode[];
  onNavigationChange?: (canGoPrevious: boolean, canGoNext: boolean) => void;
  cardWidth?: number;
  cardGap?: number;
  containerHeight?: number;
}

export interface AutoSliderRef {
  goToPrevious: () => void;
  goToNext: () => void;
  goToIndex: (index: number) => void;
  currentIndex: number;
  totalItems: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const AutoSlider = forwardRef<AutoSliderRef, AutoSliderProps>(
  (
    {
      cards,
      onNavigationChange,
      cardWidth = 384,
      cardGap = 22,
      containerHeight = 538,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive dimensions
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const responsiveCardWidth = isMobile ? 280 : cardWidth;
    const responsiveCardGap = isMobile ? 16 : cardGap;
    const responsiveContainerHeight = isMobile ? 400 : containerHeight;

    // Navigation functions with animation state management
    const goToPrevious = () => {
      if (currentIndex > 0 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => setIsAnimating(false), 500); // Match animation duration
      }
    };

    const goToNext = () => {
      if (currentIndex < cards.length - 1 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 500); // Match animation duration
      }
    };

    const goToIndex = (index: number) => {
      if (index >= 0 && index < cards.length && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
      }
    };

    // Notify parent of navigation state changes
    useEffect(() => {
      const canGoPrevious = currentIndex > 0 && !isAnimating;
      const canGoNext = currentIndex < cards.length - 1 && !isAnimating;
      onNavigationChange?.(canGoPrevious, canGoNext);
    }, [currentIndex, cards.length, isAnimating, onNavigationChange]);

    // Expose controls to parent component
    useImperativeHandle(
      ref,
      () => ({
        goToPrevious,
        goToNext,
        goToIndex,
        currentIndex,
        totalItems: cards.length,
        canGoPrevious: currentIndex > 0 && !isAnimating,
        canGoNext: currentIndex < cards.length - 1 && !isAnimating,
      }),
      [currentIndex, cards.length, isAnimating]
    );

    // Keyboard navigation
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft" && currentIndex > 0 && !isAnimating) {
          event.preventDefault();
          goToPrevious();
        } else if (
          event.key === "ArrowRight" &&
          currentIndex < cards.length - 1 &&
          !isAnimating
        ) {
          event.preventDefault();
          goToNext();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, cards.length, isAnimating]);

    return (
      <div className="relative w-full">
        {/* Slider Container */}
        <div
          className="relative overflow-hidden"
          style={{ height: `${responsiveContainerHeight}px` }}
        >
          <motion.div
            className="flex"
            style={{ gap: `${responsiveCardGap}px` }}
            animate={{
              x: `calc(-${
                currentIndex * (responsiveCardWidth + responsiveCardGap)
              }px + max(0px, (100vw - 1440px) / 2))`,
            }} // Dynamic width + gap, with responsive offset
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0"
                style={{
                  width: `${responsiveCardWidth}px`,
                  height: `${responsiveContainerHeight}px`,
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {card}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
);

AutoSlider.displayName = "AutoSlider";
