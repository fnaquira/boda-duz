"use client";

import { motion } from "framer-motion";
import { Church, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Ceremony() {
  return (
    <section
      id="ceremony"
      className="py-16 md:py-20 bg-gradient-to-b from-white-warm to-beige-light relative overflow-hidden"
    >
      {/* Decoración floral sutil */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-gold-soft/5 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-beige-warm/20 rounded-full translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Contenido principal simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold-soft/10 flex items-center justify-center">
              <Church className="w-8 h-8 text-gold-soft" />
            </div>
          </div>

          {/* Hora */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gold-soft" />
            <span className="text-xl font-semibold text-gold-soft">
              14:00 h
            </span>
          </div>

          {/* Lugar */}
          <h3 className="font-serif text-2xl md:text-3xl text-brown-warm mb-2">
            Iglesia de Tiabaya
          </h3>

          {/* Bendición */}
          <p className="text-brown-warm/80 text-lg mb-8 italic">
            Con la bendición de Dios y nuestros padres
          </p>

          {/* Padres - Columnas separadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
            {/* Padres del novio */}
            <div className="text-center">
              <h4 className="font-serif text-lg text-brown-warm mb-2">
                Padres del Novio
              </h4>
              <p className="text-brown-warm/70">
                Margarita Amanqui Condori<br />
                Matías Edilberto Cari Flores
              </p>
            </div>

            {/* Padres de la novia */}
            <div className="text-center">
              <h4 className="font-serif text-lg text-brown-warm mb-2">
                Padres de la Novia
              </h4>
              <p className="text-brown-warm/70">
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
