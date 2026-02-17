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
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-amber-200 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-rose-200 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Mesa de Regalos
          </h2>
          <div className="decorative-line mb-6" />
        </motion.div>

        {/* Mensaje principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <Plane className="w-8 h-8 text-amber-500" />
          </div>
          <p className="text-gray-800/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Tu presencia es nuestro mejor regalo. Sin embargo, si deseas
            contribuir a nuestra <strong className="text-amber-500">luna de miel</strong>, 
            cualquier aporte será muy apreciado y nos ayudará a crear recuerdos
            inolvidables juntos.
          </p>
        </motion.div>

        {/* Tarjetas de datos bancarios */}
        <div className="grid md:grid-cols-2 gap-6">
          {bankDetails.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CreditCard className="w-5 h-5 text-amber-500" />
                    {bank.bank}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-800/50 uppercase tracking-wide">
                      Tipo de cuenta
                    </p>
                    <p className="text-gray-800">{bank.accountType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-800/50 uppercase tracking-wide">
                      Número de cuenta
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-800 font-mono">
                        {bank.accountNumber}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(bank.accountNumber, index)}
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-800/50 uppercase tracking-wide">
                      CCI (para transferencias interbancarias)
                    </p>
                    <p className="text-gray-800 font-mono text-sm">
                      {bank.cci}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-800/50 uppercase tracking-wide">
                      Titular
                    </p>
                    <p className="text-gray-800">{bank.holder}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-800/60 text-sm mt-10 flex items-center justify-center gap-2"
        >
          <Gift className="w-4 h-4 text-amber-500" />
          Gracias por tu generosidad y cariño
        </motion.p>
      </div>
    </section>
  );
}
