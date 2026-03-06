"use client";

import { motion } from "framer-motion";
import { AttendanceForm } from "@/components/AttendanceForm";

export function Confirmation() {
  return (
    <section
      id="confirmacion"
      className="py-20 md:py-28 relative overflow-hidden z-20"
    >
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/fondo-1.jpeg')`,
        }}
      />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white-warm/86" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-20">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Imagen de invitación */}
          <div className="flex justify-center mb-8">
            <div className="w-56 h-56 md:w-64 md:h-64">
              <img 
                src="/img/invitacion.png" 
                alt="Invitación" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brown-warm mb-4">
            Confirmación
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-brown-warm/70 text-lg max-w-2xl mx-auto">
            Tu presencia es muy importante para nosotros. Por favor, confirma tu asistencia antes del 15 de mayo de 2026.
          </p>
        </motion.div>

        {/* Formulario de confirmación */}
        <AttendanceForm />
      </div>
    </section>
  );
}
