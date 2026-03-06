"use client";

import { motion } from "framer-motion";
import { Baby } from "lucide-react";

export function AdultsOnly() {
  return (
    <section
      id="adultos-solo"
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
      <div className="absolute inset-0 bg-white-warm/89" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold-soft/10 flex items-center justify-center">
              <Baby className="w-8 h-8 text-gold-soft" />
            </div>
          </div>

          {/* Título */}
          <h2 className="font-script text-3xl md:text-4xl text-brown-warm mb-6">
            Celebración sólo para adultos
          </h2>

          {/* Línea decorativa */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-soft to-transparent mx-auto mb-8" />

          {/* Mensaje */}
          <p className="text-lg font-serif leading-relaxed text-brown-warm/80 mb-4">
            Amamos a los pequeños, pero hemos decidido que esta sea una celebración sólo para adultos.
          </p>
          <p className="text-lg font-serif leading-relaxed text-brown-warm/70">
            Esperamos contar con su comprensión para que todos puedan disfrutar de la velada con tranquilidad.
          </p>

          {/* Detalle decorativo inferior */}
          <div className="mt-8 flex items-center justify-center gap-3 text-gold-soft/50">
            <div className="w-8 h-px bg-gold-soft/30" />
            <span className="text-xs font-serif tracking-[0.3em] uppercase text-gold-soft/60">Gracias</span>
            <div className="w-8 h-px bg-gold-soft/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
