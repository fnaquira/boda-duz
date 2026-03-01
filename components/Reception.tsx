"use client";

import { motion } from "framer-motion";
import { PartyPopper, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Reception() {
  return (
    <section
      id="reception"
      className="py-16 md:py-20 bg-gradient-to-b from-beige-light to-white-warm relative overflow-hidden"
    >
      {/* Decoración sutil */}
      <div className="absolute top-1/3 left-0 w-40 h-40 bg-gold-soft/5 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-beige-warm/15 rounded-full translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Contenido principal simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icono lineal minimal */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold-soft/10 flex items-center justify-center">
              <PartyPopper className="w-8 h-8 text-gold-soft" />
            </div>
          </div>

          {/* Hora */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gold-soft" />
            <span className="text-xl font-semibold text-gold-soft">
              15:00 h
            </span>
          </div>

          {/* Lugar */}
          <h3 className="font-serif text-2xl md:text-3xl text-brown-warm mb-6">
            Kusisqa Eventos
          </h3>

          {/* Dirección simplificada */}
          <p className="text-brown-warm/70 text-lg mb-8">
            Av. Arancota 201, Tiabaya
          </p>

          {/* Botón de mapa */}
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-white-warm transition-all duration-300"
          >
            <a
              href="https://maps.app.goo.gl/yZAU9UEFURoVjUyJA"
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
