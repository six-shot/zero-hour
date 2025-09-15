"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import SVGProgressLoader from "./SVGProgressLoader";

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
    // Fast loading simulation - show content quickly
    const fastLoad = () => {
      // Simulate quick initial load
      setProgress(20);

      setTimeout(() => {
        setProgress(60);
      }, 200);

      setTimeout(() => {
        setProgress(100);
      }, 400);

      // Show content after very short delay
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 600);
    };

    // Start fast loading immediately
    fastLoad();
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
          priority
        />

        <div className="flex flex-col justify-center items-center h-full relative z-10">
          {/* SVG Progress Loader with integrated percentage text */}
          <SVGProgressLoader progress={displayProgress} />
        </div>
      </div>
    );
  }

  return children;
};

export default GlobalImageLoader;
