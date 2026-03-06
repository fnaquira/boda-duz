"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getTimeRemaining } from "@/lib/utils";

// Fecha de la boda: 30 de mayo de 2026 a las 14:00
const WEDDING_DATE = new Date("2026-05-30T14:00:00");

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function Countdown() {
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
      id="countdown"
      className="py-16 md:py-20 relative overflow-hidden"
    >
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/fondo-1.jpeg')`,
        }}
      />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white-warm/88" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Mensaje "Nos vemos" */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brown-warm/70 text-lg mb-8 font-serif italic"
          >
            Nos vemos el
          </motion.p>

          {/* Cuenta regresiva */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto"
          >
            {[
              { value: timeRemaining.days, label: "Días" },
              { value: timeRemaining.hours, label: "Horas" },
              { value: timeRemaining.minutes, label: "Min" },
              { value: timeRemaining.seconds, label: "Seg" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-white-warm rounded-xl p-3 sm:p-4 shadow-lg border border-gold-soft/20"
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold-soft">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="block text-xs sm:text-sm text-brown-warm/70 mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
