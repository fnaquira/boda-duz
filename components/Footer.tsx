"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppShareUrl } from "@/lib/utils";

export function Footer() {
  // Usar la URL dinámica actual sin fallback hardcoded
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappUrl = getWhatsAppShareUrl(currentUrl);

  return (
    <footer className="relative bg-brown-warm text-white-warm py-16 overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-soft/50 to-transparent" />
      <div className="absolute top-10 left-10 w-20 h-20 border border-gold-soft/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-gold-soft/10 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Mensaje principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Heart className="w-8 h-8 text-gold-soft mx-auto mb-4 fill-gold-soft/20" />
          <h3 className="font-serif text-2xl sm:text-3xl mb-3">
            Con amor,
          </h3>
          <p className="font-serif text-3xl sm:text-4xl text-gold-soft font-semibold">
            Duzcelly & Álvaro
          </p>
        </motion.div>

        {/* Línea decorativa */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-soft/50 to-transparent mx-auto mb-10" />

        {/* Botón WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <p className="text-white/70 text-sm mb-4">
            ¡Comparte nuestra invitación con tus amigos y familiares!
          </p>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Compartir por WhatsApp
            </a>
          </Button>
        </motion.div>

        {/* Fecha y lugar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/60 text-sm space-y-1 mb-8"
        >
          <p>Sábado 30 de mayo de 2026</p>
          <p>Tiabaya, Arequipa - Perú</p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/40 text-xs"
        >
          <p>© 2026 Boda Duzcelly & Álvaro. Hecho con ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
}

// Botón flotante de WhatsApp
export function WhatsAppFloatingButton() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://boda-duzcelly-alvaro.vercel.app";
  const whatsappUrl = getWhatsAppShareUrl(currentUrl);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
      aria-label="Compartir por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Compartir invitación
      </span>
    </motion.a>
  );
}
