"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function AdultsOnly() {
  return (
    <section
      id="adultos-solo"
      className="py-16 md:py-20 bg-gradient-to-b from-beige-light to-white-warm relative overflow-hidden"
    >
      {/* Decoración sutil */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-gold-soft/5 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-beige-warm/15 rounded-full translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icono */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gold-soft/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-gold-soft" />
            </div>
          </div>

          {/* Texto en mayúsculas como solicitado */}
          <div className="space-y-4 text-brown-warm/80">
            <p className="text-lg font-serif leading-relaxed">
              AMALOS P E Q U E Ñ O S
            </p>
            <p className="text-lg font-serif leading-relaxed">
              PEROHOMOSDECIID OQUE
            </p>
            <p className="text-lg font-serif leading-relaxed">
              ESTASEAUNA
            </p>
            <p className="text-lg font-serif leading-relaxed">
              CELEBRACIÓNSOLOPARA
            </p>
            <p className="text-lg font-serif leading-relaxed">
              ADULTOS.ESPERAMOS
            </p>
            <p className="text-lg font-serif leading-relaxed">
              CONTARCONSU
            </p>
            <p className="text-lg font-serif leading-relaxed">
              COMPRENSIÓNPARAQUE
            </p>
            <p className="text-lg font-serif leading-relaxed">
              TODOSPUEDANDISFRUTAR
            </p>
            <p className="text-lg font-serif leading-relaxed">
              DELAVIDADACON
            </p>
            <p className="text-lg font-serif leading-relaxed">
              TRANQUILIDAD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
