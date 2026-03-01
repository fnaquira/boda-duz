"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  willAttend: string;
  numberOfAdults: number;
  adults: Array<{ name: string; allergies: string }>;
  needsBus: string;
  songRequest: string;
}

export function AttendanceForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    willAttend: "",
    numberOfAdults: 1,
    adults: [{ name: "", allergies: "" }],
    needsBus: "",
    songRequest: "",
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateAdult = (index: number, field: "name" | "allergies", value: string) => {
    setFormData(prev => ({
      ...prev,
      adults: prev.adults.map((adult, i) => 
        i === index ? { ...adult, [field]: value } : adult
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "¡Confirmación enviada!",
        description: "Gracias por confirmar tu asistencia. Nos vemos pronto.",
        duration: 5000,
      });

      // Resetear formulario
      setFormData({
        willAttend: "",
        numberOfAdults: 1,
        adults: [{ name: "", allergies: "" }],
        needsBus: "",
        songRequest: "",
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar la confirmación. Intenta de nuevo.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="bg-beige-light border-2 border-gold-soft text-brown-warm hover:bg-gold-soft hover:text-white-warm text-lg px-12 py-6 rounded-full transition-all duration-300 shadow-lg"
        >
          Confirmar Asistencia
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white-warm rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white-warm border-b border-gold-soft/20 p-6 flex justify-between items-center">
          <h2 className="font-serif text-2xl text-brown-warm">Confirmar Asistencia</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-brown-warm/60 hover:text-brown-warm"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* ¿Asistirás? */}
          <div>
            <label className="block text-brown-warm font-medium mb-3">¿Asistirás?</label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="willAttend"
                  value="yes"
                  checked={formData.willAttend === "yes"}
                  onChange={(e) => updateFormData("willAttend", e.target.value)}
                  className="mr-2 text-gold-soft focus:ring-gold-soft"
                />
                <span className="text-brown-warm/80">Sí</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="willAttend"
                  value="no"
                  checked={formData.willAttend === "no"}
                  onChange={(e) => updateFormData("willAttend", e.target.value)}
                  className="mr-2 text-gold-soft focus:ring-gold-soft"
                />
                <span className="text-brown-warm/80">No</span>
              </label>
            </div>
          </div>

          {/* Número de adultos */}
          <div>
            <label className="block text-brown-warm font-medium mb-3">Número de adultos</label>
            <select
              value={formData.numberOfAdults}
              onChange={(e) => updateFormData("numberOfAdults", parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gold-soft/20 rounded-lg bg-white-warm text-brown-warm focus:outline-none focus:ring-2 focus:ring-gold-soft"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Adultos - Nombre y alergias */}
          {Array.from({ length: formData.numberOfAdults }).map((_, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label className="block text-brown-warm font-medium mb-3">
                  Nombre y apellido / Adulto {index + 1}
                </label>
                <input
                  type="text"
                  value={formData.adults[index]?.name || ""}
                  onChange={(e) => updateAdult(index, "name", e.target.value)}
                  placeholder="Ingresa nombre completo"
                  className="w-full px-4 py-2 border border-gold-soft/20 rounded-lg bg-white-warm text-brown-warm placeholder:text-brown-warm/40 focus:outline-none focus:ring-2 focus:ring-gold-soft"
                  required={formData.willAttend === "yes"}
                />
              </div>
              <div>
                <label className="block text-brown-warm font-medium mb-3">
                  Alergias / Intolerancias
                </label>
                <input
                  type="text"
                  value={formData.adults[index]?.allergies || ""}
                  onChange={(e) => updateAdult(index, "allergies", e.target.value)}
                  placeholder="(Rellenar solo si procede)"
                  className="w-full px-4 py-2 border border-gold-soft/20 rounded-lg bg-white-warm text-brown-warm placeholder:text-brown-warm/40 focus:outline-none focus:ring-2 focus:ring-gold-soft"
                />
              </div>
            </div>
          ))}

          {/* Servicio de autobús */}
          <div>
            <label className="block text-brown-warm font-medium mb-3">
              ¿Vas a hacer uso del servicio de autobús?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="needsBus"
                  value="yes"
                  checked={formData.needsBus === "yes"}
                  onChange={(e) => updateFormData("needsBus", e.target.value)}
                  className="mr-2 text-gold-soft focus:ring-gold-soft"
                />
                <span className="text-brown-warm/80">Sí</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="needsBus"
                  value="no"
                  checked={formData.needsBus === "no"}
                  onChange={(e) => updateFormData("needsBus", e.target.value)}
                  className="mr-2 text-gold-soft focus:ring-gold-soft"
                />
                <span className="text-brown-warm/80">No</span>
              </label>
            </div>
          </div>

          {/* Solicitud de canción */}
          <div>
            <label className="block text-brown-warm font-medium mb-3">
              ¿Qué canción te gustaría que sonara en la boda?
            </label>
            <input
              type="text"
              value={formData.songRequest}
              onChange={(e) => updateFormData("songRequest", e.target.value)}
              placeholder="(opcional)"
              className="w-full px-4 py-2 border border-gold-soft/20 rounded-lg bg-white-warm text-brown-warm placeholder:text-brown-warm/40 focus:outline-none focus:ring-2 focus:ring-gold-soft"
            />
          </div>

          {/* Botón de envío */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-brown-warm text-white-warm hover:bg-brown-warm/90 transition-colors duration-300 py-4"
            >
              {isSubmitting ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Pulsa aquí para enviar
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
