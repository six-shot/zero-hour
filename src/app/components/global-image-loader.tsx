"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { preloadAllImages } from "../../lib/image-preloader";
import Image from "next/image";

interface GlobalImageLoaderProps {
  children: ReactNode;
  onLoadingComplete?: () => void;
}

const GlobalImageLoader: React.FC<GlobalImageLoaderProps> = ({
  children,
  onLoadingComplete,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth progress animation with easing
  useEffect(() => {
    const animateProgress = () => {
      if (displayProgress < progress) {
        // Use easing function for smoother animation
        const difference = progress - displayProgress;
        const increment = Math.max(1, Math.ceil(difference * 0.15)); // 15% of remaining difference
        setDisplayProgress((prev) => Math.min(prev + increment, progress));
      }
    };

    const interval = setInterval(animateProgress, 30); // Update every 30ms for very smooth animation
    return () => clearInterval(interval);
  }, [progress, displayProgress]);

  useEffect(() => {
    const loadAllImages = async () => {
      try {
        // Start preloading with real-time progress updates
        const success = await preloadAllImages((progress: number) =>
          setProgress(progress)
        );

        // Ensure we end at 100%
        setProgress(100);

        // Wait for display animation to reach 100% before transitioning
        setTimeout(
          () => {
            setIsLoading(false);
            onLoadingComplete?.();
          },
          success ? 800 : 1000 // Give time for smooth animation to complete
        );
      } catch (error) {
        console.error("Image preloading failed:", error);
        // Proceed anyway with minimal delay
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete?.();
        }, 1000);
      }
    };

    // Start loading immediately
    loadAllImages();
  }, [onLoadingComplete]);

  if (isLoading) {
    return (
      <div className="bg-[#0B0211] relative overflow-hidden h-screen">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="loader-hero.svg"
          width={1452}
          height={830}
          alt="loader-hero"
        />

        <div className="flex justify-center items-center h-full relative z-10">
          {/* Progress percentage with smooth animation */}
          <div className="text-[#F45201] font-bold text-[60px] font-[family-name:var(--font-vt323)]">
            {displayProgress}%
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default GlobalImageLoader;
