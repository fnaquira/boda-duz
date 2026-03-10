"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "2020",
    title: "Nos conocimos",
    description:
      "Dos almas que se encontraron en un momento mágico y supieron que era el inicio de algo especial.",
    icon: Sparkles,
  },
  {
    year: "2023",
    title: "La propuesta",
    description:
      "En un atardecer inolvidable, sellamos nuestra promesa de amor eterno con un 'Sí, quiero'.",
    icon: Heart,
  },
  {
    year: "2026",
    title: "Nuestra boda",
    description:
      "Celebramos nuestro amor rodeados de familia y amigos en el día más especial de nuestras vidas.",
    icon: Calendar,
  },
];

export function OurStory() {
  return (
    <section
      id="historia"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50/50 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Nuestra Historia
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Dos almas que se encontraron en el camino de la vida y supieron que
            era para siempre. Después de años de amor, risas y sueños
            compartidos, celebramos nuestro sí eterno.
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
                alt="Duzcelly y Alvaro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent" />
            </div>
            {/* Marco decorativo */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-300 rounded-2xl -z-10" />
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  {/* Icono */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  {/* Contenido */}
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-600 font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cita romántica */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pl-6 border-l-2 border-amber-400 italic text-gray-700"
            >
              "El amor no se mira el uno al otro, sino juntos en la misma
              dirección."
              <footer className="mt-2 text-sm text-amber-600 not-italic">
                — Antoine de Saint-Exupéry
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
