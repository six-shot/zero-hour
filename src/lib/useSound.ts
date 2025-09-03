import { useCallback } from "react";

export const useSound = (soundPath: string) => {
  const playSound = useCallback(() => {
    try {
      const audio = new Audio(soundPath);
      audio.volume = 0.5; // Adjust volume as needed
      audio.play().catch(() => {
        // Silently handle errors (e.g., user hasn't interacted with page yet)
      });
    } catch (error) {
      // Silently handle errors
    }
  }, [soundPath]);

  return playSound;
};

