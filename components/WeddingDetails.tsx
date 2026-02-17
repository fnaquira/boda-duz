"use client";

import { motion } from "framer-motion";
import { Church, PartyPopper, Wine, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    time: "14:00",
    title: "Ceremonia Religiosa",
    location: "Parroquia Santiago Apóstol de Tiabaya",
    address: "Calle Bolívar 316, Plaza Principal, Tiabaya",
    mapUrl: "https://maps.app.goo.gl/SQp1Dp48DZaAW3gi8",
    icon: Church,
    description: "Celebración del sacramento del matrimonio",
  },
  {
    time: "16:00",
    title: "Cóctel de Bienvenida",
    location: "Kusisqa Eventos",
    address: "Av. Arancota 201, Tiabaya",
    mapUrl: "https://maps.app.goo.gl/yZAU9UEFURoVjUyJA",
    icon: Wine,
    description: "Brindis y aperitivos mientras disfrutamos juntos",
  },
  {
    time: "18:00",
    title: "Recepción y Fiesta",
    location: "Kusisqa Eventos",
    address: "Av. Arancota 201, Tiabaya",
    mapUrl: "https://maps.app.goo.gl/yZAU9UEFURoVjUyJA",
    icon: PartyPopper,
    description: "¡A celebrar y bailar toda la noche!",
  },
];

export function WeddingDetails() {
  return (
    <section
      id="detalles"
      className="py-20 md:py-28 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-rose-100/30 rounded-full translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Detalles del Día
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-gray-800/70 max-w-xl mx-auto">
            Te compartimos el itinerario de nuestro día especial
          </p>
        </motion.div>

        {/* Timeline de eventos */}
        <div className="relative">
          {/* Línea vertical central (solo desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`md:flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${index !== 0 ? "md:mt-8" : ""}`}
              >
                {/* Tarjeta del evento */}
                <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icono */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <event.icon className="w-7 h-7 text-amber-600" />
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        {/* Hora */}
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span className="text-lg font-semibold text-amber-600">
                            {event.time}
                          </span>
                        </div>

                        {/* Título */}
                        <h3 className="font-serif text-xl text-gray-800 mb-1">
                          {event.title}
                        </h3>

                        {/* Descripción */}
                        <p className="text-gray-800/60 text-sm mb-3">
                          {event.description}
                        </p>

                        {/* Ubicación */}
                        <div className="flex items-start gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-800 font-medium text-sm">
                              {event.location}
                            </p>
                            <p className="text-gray-800/60 text-xs">
                              {event.address}
                            </p>
                          </div>
                        </div>

                        {/* Botón de mapa */}
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="group"
                        >
                          <a
                            href={event.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Ver en Google Maps
                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Punto central en timeline (solo desktop) */}
                <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-amber-500 border-amber-400 border-white shadow-md z-10" />

                {/* Espacio vacío para el otro lado (desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
