"use client";

import { motion } from "framer-motion";
import { Church, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Ceremony() {
  return (
    <section
      id="ceremony"
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
      <div className="absolute inset-0 bg-white-warm/85" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 w-full">
        {/* Contenido principal simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Lugar con imagen */}
          <div className="flex flex-col items-center gap-4 mb-2">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/img/iglesia.jpeg" 
                alt="Iglesia de Tiabaya" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-brown-warm">
              Iglesia de Tiabaya
            </h3>
          </div>

          {/* Bendición */}
          <p className="text-brown-warm/80 text-lg mb-8 italic">
            Con la bendición de Dios y nuestros padres
          </p>

          {/* Hora */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gold-soft" />
            <span className="text-xl font-semibold text-gold-soft">
              14:00 h
            </span>
          </div>

          {/* Padres - Columnas separadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
            {/* Padres del novio */}
            <div className="text-center">
              <h4 className="font-serif text-lg text-brown-warm mb-2">
                Padres del Novio
              </h4>
              <p className="font-serif text-brown-warm/70">
                Margarita Amanqui Condori<br />
                Matías Edilberto Cari Flores
              </p>
            </div>

            {/* Padres de la novia */}
            <div className="text-center">
              <h4 className="font-serif text-lg text-brown-warm mb-2">
                Padres de la Novia
              </h4>
              <p className="font-serif text-brown-warm/70">
                Aladina Manuela Vargas Manchego<br />
                Juan Antonio Náquira Saavedra
              </p>
            </div>
          </div>

          {/* Botón de mapa */}
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-white-warm transition-all duration-300"
          >
            <a
              href="https://maps.app.goo.gl/SQp1Dp48DZaAW3gi8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver ubicación
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
