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
      {/* Fondo con degradado elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-100" />
      
      {/* Patrón decorativo sutil */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Decoración superior */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Heart className="w-8 h-8 md:w-10 md:h-10 text-amber-500 mx-auto fill-amber-200" />
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-4"
        >
          <span className="block">Duzcelly Náquira</span>
          <span className="text-amber-600 text-3xl sm:text-4xl md:text-5xl">&</span>
          <span className="block">Álvaro Cari</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-amber-600 italic mb-6"
        >
          Nos casamos
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
          className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-8"
        >
          Sábado 30 de mayo de 2026
        </motion.p>

        {/* Cuenta regresiva */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto mb-10"
        >
          {[
            { value: timeRemaining.days, label: "Días" },
            { value: timeRemaining.hours, label: "Horas" },
            { value: timeRemaining.minutes, label: "Min" },
            { value: timeRemaining.seconds, label: "Seg" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-amber-200"
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-600">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="block text-xs sm:text-sm text-gray-600 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("rsvp")}
            className="text-base md:text-lg px-8 md:px-10 py-6"
          >
            <Heart className="w-5 h-5 mr-2" />
            Confirmar asistencia
          </Button>
        </motion.div>
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
