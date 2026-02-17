"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function useMusicContext() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext debe usarse dentro de MusicProvider");
  }
  return context;
}

interface MusicProviderProps {
  children: React.ReactNode;
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Cargar preferencia de música desde localStorage
    const savedPreference = localStorage.getItem("musicPreference");
    if (savedPreference === "playing") {
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // El navegador puede bloquear la reproducción automática
          setIsPlaying(false);
        });
        localStorage.setItem("musicPreference", "playing");
      } else {
        audioRef.current.pause();
        localStorage.setItem("musicPreference", "paused");
      }
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
      {/* Audio de fondo - música romántica instrumental (placeholder URL) */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      >
        {/* URL placeholder - reemplazar con música romántica real */}
        Tu navegador no soporta el elemento de audio.
      </audio>
    </MusicContext.Provider>
  );
}
