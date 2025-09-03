"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { preloadAllImages } from "../../lib/image-preloader";

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
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 flex h-screen justify-center items-center text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="loader-content text-center relative z-10">
          {/* Animated Logo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative mb-4">
              {/* Static logo with color fill animation */}
              <div className="relative">
                {/* Background logo (gray) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 112 111"
                  fill="none"
                  className="drop-shadow-lg absolute"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.2057 50.3066C46.3973 49.7702 46.9337 49.502 47.4701 49.502C48.1214 49.502 48.7345 49.8851 48.7345 50.7663V57.7395H50.1521V58.774H48.7345V61.5326H47.4318V58.774H44.7881C43.9835 58.774 43.6387 58.1993 43.6387 57.5863C43.6387 57.3564 43.7153 57.1265 43.7919 56.8966L46.2057 50.3066ZM44.7881 57.7012H47.4318V50.4982L44.7881 57.7012Z"
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.2747 58.3909C58.2747 60.3832 57.0869 61.6476 55.0563 61.6476C53.0256 61.6476 51.8379 60.3832 51.8379 58.3909V52.7587C51.8379 50.7663 53.0256 49.502 55.0563 49.502C57.0869 49.502 58.2747 50.7663 58.2747 52.7587V58.3909ZM56.972 52.797C56.972 51.4943 56.3973 50.6514 55.0563 50.6514C53.7536 50.6514 53.1406 51.4943 53.1406 52.797V58.3909C53.1406 59.7319 53.7536 60.5365 55.0563 60.5365C56.3973 60.5365 56.972 59.7319 56.972 58.3909V52.797Z"
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.0296 48.1992C63.179 48.1992 64.2518 49.0421 64.2518 50.6513C64.2518 52.2605 63.179 53.0268 62.0296 53.0268C60.9568 53.0268 59.8457 52.2605 59.8457 50.6513C59.8457 49.0421 60.9568 48.1992 62.0296 48.1992ZM69.4626 48.3141L61.5698 61.5325H60.0756L67.9683 48.3141H69.4626ZM62.0296 51.9157C62.4894 51.9157 62.9875 51.4942 62.9875 50.6513C62.9875 49.7701 62.4894 49.3486 62.0296 49.3486C61.5698 49.3486 61.0718 49.7701 61.0718 50.6513C61.0718 51.4942 61.5698 51.9157 62.0296 51.9157ZM67.4319 56.8199C68.5813 56.8199 69.6541 57.6628 69.6541 59.272C69.6541 60.8812 68.5813 61.6475 67.4319 61.6475C66.3591 61.6475 65.248 60.8812 65.248 59.272C65.248 57.6628 66.3591 56.8199 67.4319 56.8199ZM67.4319 60.5364C67.93 60.5364 68.4281 60.1149 68.4281 59.272C68.4281 58.3908 67.93 57.9693 67.4319 57.9693C67.0105 57.9693 66.5124 58.3908 66.5124 59.272C66.5124 60.1149 67.0105 60.5364 67.4319 60.5364Z"
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                </svg>

                {/* Foreground logo with fill animation */}
                <div
                  className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    clipPath: `inset(${100 - displayProgress}% 0 0 0)`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 112 111"
                    fill="none"
                    className="drop-shadow-lg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M46.2057 50.3066C46.3973 49.7702 46.9337 49.502 47.4701 49.502C48.1214 49.502 48.7345 49.8851 48.7345 50.7663V57.7395H50.1521V58.774H48.7345V61.5326H47.4318V58.774H44.7881C43.9835 58.774 43.6387 58.1993 43.6387 57.5863C43.6387 57.3564 43.7153 57.1265 43.7919 56.8966L46.2057 50.3066ZM44.7881 57.7012H47.4318V50.4982L44.7881 57.7012Z"
                      fill="#F45201"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M58.2747 58.3909C58.2747 60.3832 57.0869 61.6476 55.0563 61.6476C53.0256 61.6476 51.8379 60.3832 51.8379 58.3909V52.7587C51.8379 50.7663 53.0256 49.502 55.0563 49.502C57.0869 49.502 58.2747 50.7663 58.2747 52.7587V58.3909ZM56.972 52.797C56.972 51.4943 56.3973 50.6514 55.0563 50.6514C53.7536 50.6514 53.1406 51.4943 53.1406 52.797V58.3909C53.1406 59.7319 53.7536 60.5365 55.0563 60.5365C56.3973 60.5365 56.972 59.7319 56.972 58.3909V52.797Z"
                      fill="#F45201"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0296 48.1992C63.179 48.1992 64.2518 49.0421 64.2518 50.6513C64.2518 52.2605 63.179 53.0268 62.0296 53.0268C60.9568 53.0268 59.8457 52.2605 59.8457 50.6513C59.8457 49.0421 60.9568 48.1992 62.0296 48.1992ZM69.4626 48.3141L61.5698 61.5325H60.0756L67.9683 48.3141H69.4626ZM62.0296 51.9157C62.4894 51.9157 62.9875 51.4942 62.9875 50.6513C62.9875 49.7701 62.4894 49.3486 62.0296 49.3486C61.5698 49.3486 61.0718 49.7701 61.0718 50.6513C61.0718 51.4942 61.5698 51.9157 62.0296 51.9157ZM67.4319 56.8199C68.5813 56.8199 69.6541 57.6628 69.6541 59.272C69.6541 60.8812 68.5813 61.6475 67.4319 61.6475C66.3591 61.6475 65.248 60.8812 65.248 59.272C65.248 57.6628 66.3591 56.8199 67.4319 56.8199ZM67.4319 60.5364C67.93 60.5364 68.4281 60.1149 68.4281 59.272C68.4281 58.3908 67.93 57.9693 67.4319 57.9693C67.0105 57.9693 66.5124 58.3908 66.5124 59.272C66.5124 60.1149 67.0105 60.5364 67.4319 60.5364Z"
                      fill="#F45201"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Brand text */}
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zero Hour
            </div>
          </div>

          {/* Progress percentage with smooth animation */}
          <div className="progress-percent text-white text-7xl font-bold mb-6 drop-shadow-lg">
            {displayProgress}%
          </div>

          {/* Loading text */}
          <div className="loading-text text-white text-xl opacity-90 mb-8 font-light">
            Loading assets...
          </div>

          {/* Enhanced progress bar */}
          <div className="progress-bar mt-6 w-80 h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600/30">
            <div
              className="progress-fill h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 ease-out rounded-full shadow-lg"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default GlobalImageLoader;
