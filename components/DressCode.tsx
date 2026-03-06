"use client";

import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

export function DressCode() {
  const dressCodeText = "Elegante formal. Para caballeros sugerimos traje y corbata. Para damas, vestido largo o de cóctel elegante. Los colores pasteles y tonos tierra son bienvenidos. Por favor evitar el color blanco, reservado para la novia.";

  return (
    <section
      id="dress-code"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16"
    >
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/fondo-1.jpeg')`,
        }}
      />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white-warm/90" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 w-full">
        {/* Contenido principal simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Imagen de vestimenta */}
          <div className="flex justify-center mb-8">
            <div className="w-56 h-56 md:w-64 md:h-64">
              <img 
                src="/img/vestimenta.png" 
                alt="Código de vestimenta" 
                className="w-full h-full object-contain"
              />
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
