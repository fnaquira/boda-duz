"use client";

import { motion } from "framer-motion";
import { PartyPopper, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Reception() {
  return (
    <section
      id="reception"
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
          {/* Imagen de paloma */}
          <div className="flex justify-center mb-6">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-white-warm shadow-md">
              <img 
                src="/img/paloma.jpeg" 
                alt="Paloma" 
                className="w-full h-full object-cover"
              />
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
