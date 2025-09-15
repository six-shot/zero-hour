"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { preloadCriticalImages } from "../../lib/image-preloader";
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
        const increment = Math.max(1, Math.ceil(difference * 0.2)); // 20% of remaining difference for faster animation
        setDisplayProgress((prev) => Math.min(prev + increment, progress));
      }
    };

    const interval = setInterval(animateProgress, 20); // Update every 20ms for ultra smooth animation
    return () => clearInterval(interval);
  }, [progress, displayProgress]);

  useEffect(() => {
    const loadCriticalImages = async () => {
      try {
        console.log("⚡ Starting ULTRA FAST critical image preloading...");

        // Start preloading only critical images with real-time progress updates
        const success = await preloadCriticalImages((progress: number) =>
          setProgress(progress)
        );

        // Ensure we end at 100%
        setProgress(100);

        // Ultra short delay for smooth transition
        setTimeout(
          () => {
            setIsLoading(false);
            onLoadingComplete?.();
            console.log("⚡ Critical images loaded! Showing content...");
          },
          success ? 200 : 300 // Ultra fast transition
        );
      } catch (error) {
        console.error("Critical image preloading failed:", error);
        // Proceed anyway with minimal delay
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete?.();
        }, 300);
      }
    };

    // Start loading immediately
    loadCriticalImages();
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
