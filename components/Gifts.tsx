"use client";

import { motion } from "framer-motion";
import { Gift, Plane, CreditCard, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bankDetails = [
  {
    bank: "BCP - Banco de Crédito del Perú",
    accountType: "Cuenta de Ahorros Soles",
    accountNumber: "XXX-XXXXXXX-X-XX",
    cci: "002-XXX-XXXXXXXX-X-XX",
    holder: "Duzcelly Náquira / Álvaro Cari",
  },
  {
    bank: "Interbank",
    accountType: "Cuenta de Ahorros Soles",
    accountNumber: "XXX-XXXXXXX-XXX",
    cci: "003-XXX-XXXXXXXX-XX",
    holder: "Duzcelly Náquira / Álvaro Cari",
  },
];

export function Gifts() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="regalos"
      className="py-20 md:py-28 bg-gradient-to-b from-beige-light to-white-warm relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-gold-soft/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-gold-soft/10 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brown-warm mb-4">
            Regalos
          </h2>
          <div className="decorative-line mb-6" />
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icono */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gold-soft/10 flex items-center justify-center">
              <Gift className="w-8 h-8 text-gold-soft" />
            </div>
          </div>

          {/* Texto exacto del PDF */}
          <p className="text-brown-warm/80 text-lg leading-relaxed font-serif italic mb-8">
            Tu presencia es nuestro mejor regalo. Sin embargo, si deseas contribuir para nuestra luna de miel cualquier aporte será muy apreciado.
          </p>

          {/* Opción de transferencia */}
          <div className="bg-white-warm border border-gold-soft/20 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="font-serif text-xl text-brown-warm mb-4">
              Luna de Miel
            </h3>
            <p className="text-brown-warm/70 text-sm mb-6">
              Si deseas colaborar con nuestro viaje, puedes hacerlo mediante transferencia
            </p>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-white-warm transition-all duration-300"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Ver datos bancarios
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
