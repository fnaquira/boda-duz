"use client";

import { motion } from "framer-motion";
import { Camera, ImagePlus } from "lucide-react";
import Image from "next/image";

const placeholderImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
    alt: "Foto placeholder 1",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop",
    alt: "Foto placeholder 2",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop",
    alt: "Foto placeholder 3",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop",
    alt: "Foto placeholder 4",
  },
];

export function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 md:py-28 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Galería de Fotos
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-gray-800/70 max-w-lg mx-auto flex items-center justify-center gap-2">
            <Camera className="w-5 h-5 text-amber-500" />
            Momentos especiales que queremos compartir
          </p>
        </motion.div>

        {/* Grid de fotos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {placeholderImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay al hover */}
              <div className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje para fotos futuras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-300 rounded-full px-6 py-3">
            <ImagePlus className="w-5 h-5 text-amber-500" />
            <span className="text-gray-800/80 text-sm sm:text-base">
              ¡Pronto aquí fotos del día especial! Podrás subir las tuyas también.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
