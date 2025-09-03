"use client";
import React from "react";
import { useSound } from "@/lib/useSoundContext";

export const SoundToggle = () => {
  const { isAudioEnabled, enableAudio } = useSound();

  if (isAudioEnabled) {
    return null; // Don't show button if audio is already enabled
  }

  return (
    <button
      onClick={enableAudio}
      className="fixed bottom-6 right-6 z-50 bg-black/40 hover:bg-black/60 text-white text-sm px-4 py-2 rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
      title="Enable sound effects"
    >
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 group-hover:animate-pulse text-white/90 group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
        <span className="font-[family-name:var(--font-vt323)] uppercase tracking-wide">
          Enable Sound
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
    </button>
  );
};
