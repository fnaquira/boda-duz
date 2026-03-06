"use client";

import { motion } from "framer-motion";
import { Camera, ImagePlus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/fondo-1.jpeg')`,
        }}
      />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white-warm/88" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brown-warm mb-4">
            Galería
          </h2>
          <div className="decorative-line mb-6" />
        </motion.div>

        {/* Galería de imágenes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
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

        {/* Botón "Compartir fotografías" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-beige-light border-2 border-gold-soft text-brown-warm hover:bg-gold-soft hover:text-white-warm text-lg px-10 py-4 rounded-full transition-all duration-300"
          >
            <ImagePlus className="w-5 h-5 mr-2" />
            Compartir fotografías
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
