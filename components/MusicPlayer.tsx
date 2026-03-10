"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Iniciar reproduciendo
  const [showEntryScreen, setShowEntryScreen] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Iniciar música automáticamente al cargar
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // Intentar reproducir automáticamente
      audioRef.current.play().catch(() => {
        // Si el navegador bloquea autoplay, esperar interacción
        console.log("Autoplay bloqueado, esperando interacción del usuario");
        setIsPlaying(false);
      });
    }
  }, []);

  const handleEnter = async () => {
    setShowEntryScreen(false);
    
    // Si la música no está reproduciendo, intentar iniciarla
    if (audioRef.current && !isPlaying) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Error al reproducir música:", error);
      }
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Error al reproducir música:", error);
      }
    }
  };

  return (
    <>
      {/* Elemento de audio - siempre presente */}
      <audio
        ref={audioRef}
        loop
        src="/music/boda.mp3"
      />

      {/* Pantalla de entrada */}
      {showEntryScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-beige-warm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center px-8"
          >
            <div className="mb-8">
              <h1 className="font-script text-5xl md:text-6xl text-brown-warm mb-4">
                Duzcelly & Alvaro
              </h1>
              <p className="text-xl text-gold-soft font-serif italic">
                30 Mayo 2026
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={handleEnter}
              className="bg-white-warm border-2 border-gold-soft text-brown-warm hover:bg-gold-soft hover:text-white-warm text-lg px-8 py-4 rounded-full transition-all duration-300 font-serif"
            >
              Entrar a la invitación
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Botón flotante de control de música - siempre visible */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full bg-white-warm border-2 border-gold-soft flex items-center justify-center shadow-lg hover:bg-gold-soft hover:text-white-warm transition-all duration-300"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-brown-warm group-hover:text-white-warm" />
        ) : (
          <VolumeX className="w-5 h-5 text-brown-warm group-hover:text-white-warm" />
        )}
      </motion.button>
    </>
  );
}
