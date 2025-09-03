"use client";
import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface SoundContextType {
  playSound: () => void;
  isAudioEnabled: boolean;
  debugInfo: string[];
  enableAudio: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const addDebugInfo = (info: string) => {
    console.log(`[Sound Debug] ${info}`);
    setDebugInfo((prev) => [
      ...prev.slice(-4),
      `${new Date().toLocaleTimeString()}: ${info}`,
    ]);
  };

  // Initialize audio once
  useEffect(() => {
    addDebugInfo(`Initializing shared sound: /menu-select.mp3`);

    try {
      const audio = new Audio("/menu-select.mp3");
      audio.preload = "auto";
      audio.volume = 0.8;
      audioRef.current = audio;

      // Add event listeners for debugging
      audio.addEventListener("loadstart", () =>
        addDebugInfo("Audio load started")
      );
      audio.addEventListener("canplay", () => addDebugInfo("Audio can play"));
      audio.addEventListener("error", (e) => addDebugInfo(`Audio error: ${e}`));
      audio.addEventListener("loadeddata", () =>
        addDebugInfo("Audio data loaded")
      );

      addDebugInfo("Audio initialized - will unlock on first hover");
    } catch (error) {
      addDebugInfo(`Failed to initialize audio: ${error}`);
    }
  }, []);

  const playSound = useCallback(() => {
    addDebugInfo(
      `playSound called - isAudioEnabled: ${isAudioEnabled}, audioRef: ${!!audioRef.current}`
    );

    if (!audioRef.current) {
      addDebugInfo("Audio ref is null");
      return;
    }

    if (!isAudioEnabled) {
      addDebugInfo("Audio not enabled - user needs to click enable button");
      return;
    }

    try {
      audioRef.current.currentTime = 0;
      addDebugInfo("Attempting to play audio...");

      audioRef.current
        .play()
        .then(() => {
          addDebugInfo("Audio played successfully!");
        })
        .catch((error) => {
          addDebugInfo(`Failed to play audio: ${error.message}`);
        });
    } catch (error) {
      addDebugInfo(`Error in playSound: ${error}`);
    }
  }, [isAudioEnabled]);

  const enableAudio = useCallback(() => {
    addDebugInfo("Manual audio enable requested");
    setIsAudioEnabled(true);

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          addDebugInfo("Audio enabled successfully!");
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        })
        .catch((error) => {
          addDebugInfo(`Failed to enable audio: ${error.message}`);
        });
    }
  }, []);

  return (
    <SoundContext.Provider
      value={{ playSound, isAudioEnabled, debugInfo, enableAudio }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};
