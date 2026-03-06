"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTimeRemaining, scrollToSection } from "@/lib/utils";

// Fecha de la boda: 30 de mayo de 2026 a las 14:00
const WEDDING_DATE = new Date("2026-05-30T14:00:00");

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function Hero() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(getTimeRemaining(WEDDING_DATE));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/fondo-1.jpeg')`,
        }}
      />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white-warm/80" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Imagen de la pareja */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-gold-soft/30 shadow-lg">
            <img 
              src="/img/pareja.jpeg" 
              alt="Duzcelly y Álvaro" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Título principal - Script elegante PDF */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-brown-warm mb-4"
        >
          <span className="block">Duzcelly</span>
          <span className="text-gold-soft text-2xl sm:text-3xl md:text-4xl lg:text-5xl">&</span>
          <span className="block">Álvaro</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-gold-soft italic mb-6"
        >
          ¡Nos casamos!
        </motion.p>

        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="decorative-line mb-6"
        />

        {/* Fecha */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-brown-warm font-medium mb-8"
        >
          30 Mayo 2026
        </motion.p>

        {/* Mucho espacio vertical */}
        <div className="h-12 md:h-20" />
      </div>

      {/* Indicador de scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={() => scrollToSection("historia")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-elegant/50 hover:text-gold transition-colors"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}
