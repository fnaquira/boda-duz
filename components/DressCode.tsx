"use client";

import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

export function DressCode() {
  const dressCodeText = "Elegante formal. Para caballeros sugerimos traje y corbata. Para damas, vestido largo o de cóctel elegante. Los colores pasteles y tonos tierra son bienvenidos. Por favor evitar el color blanco, reservado para la novia.";

  return (
    <section
      id="dress-code"
      className="py-16 md:py-20 bg-gradient-to-b from-white-warm to-beige-light relative overflow-hidden"
    >
      {/* Decoración sutil */}
      <div className="absolute top-1/4 left-0 w-36 h-36 bg-gold-soft/5 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-beige-warm/20 rounded-full translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Contenido principal simplificado */}
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
              <Shirt className="w-8 h-8 text-gold-soft" />
            </div>
          </div>

          {/* Texto del código de vestimenta - Exactamente como el PDF */}
          <p className="text-brown-warm/80 text-lg leading-relaxed font-serif italic">
            {dressCodeText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
