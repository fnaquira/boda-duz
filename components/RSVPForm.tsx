"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Heart, Send, Users, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

// Esquema de validación con Zod
const rsvpSchema = z.object({
  nombre: z.string().min(2, "Por favor ingresa tu nombre completo"),
  acompanantes: z.coerce.number().min(1, "Mínimo 1 persona").max(10, "Máximo 10 personas"),
  asistira: z.enum(["si", "no"], {
    required_error: "Por favor indica si asistirás",
  }),
  mensaje: z.string().optional(),
  contacto: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      acompanantes: 1,
    },
  });

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);

    try {
      // Llamada a la API dummy
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "¡Gracias por confirmar! 💒",
          description: data.asistira === "si" 
            ? "¡Nos alegra mucho que puedas acompañarnos!" 
            : "Lamentamos que no puedas asistir. ¡Te tendremos presente!",
          variant: "success",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-amber-50/50 relative"
    >
      {/* Decoración */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-amber-300 rounded-full" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-rose-200 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Confirma tu Asistencia
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-gray-600 max-w-lg mx-auto">
            Tu presencia es el mejor regalo. Por favor confirma antes del 15 de mayo de 2026.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-amber-500 fill-amber-200" />
                RSVP
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-gray-800 mb-2">
                    ¡Confirmación Recibida!
                  </h3>
                  <p className="text-gray-600">
                    Gracias por tomarte el tiempo de confirmar.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar otra respuesta
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <Users className="w-4 h-4 inline mr-2" />
                      Nombre(s) completo(s) *
                    </label>
                    <input
                      {...register("nombre")}
                      type="text"
                      id="nombre"
                      placeholder="Ej: María García y Juan Pérez"
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  {/* Número de acompañantes */}
                  <div>
                    <label
                      htmlFor="acompanantes"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <Users className="w-4 h-4 inline mr-2" />
                      Número de personas (incluyéndote) *
                    </label>
                    <input
                      {...register("acompanantes")}
                      type="number"
                      id="acompanantes"
                      min="1"
                      max="10"
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                    />
                    {errors.acompanantes && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.acompanantes.message}
                      </p>
                    )}
                  </div>

                  {/* ¿Asistirás? */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      ¿Asistirás a nuestra boda? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer">
                        <input
                          {...register("asistira")}
                          type="radio"
                          value="si"
                          className="peer sr-only"
                        />
                        <div className="p-4 text-center rounded-lg border-2 border-amber-200 peer-checked:border-amber-500 peer-checked:bg-amber-50 transition-all hover:bg-amber-50/50">
                          <span className="text-2xl mb-1 block">🎉</span>
                          <span className="font-medium text-gray-800">
                            ¡Sí, asistiré!
                          </span>
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                        <input
                          {...register("asistira")}
                          type="radio"
                          value="no"
                          className="peer sr-only"
                        />
                        <div className="p-4 text-center rounded-lg border-2 border-amber-200 peer-checked:border-amber-500 peer-checked:bg-amber-50 transition-all hover:bg-amber-50/50">
                          <span className="text-2xl mb-1 block">😢</span>
                          <span className="font-medium text-gray-800">
                            No podré asistir
                          </span>
                        </div>
                      </label>
                    </div>
                    {errors.asistira && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.asistira.message}
                      </p>
                    )}
                  </div>

                  {/* Mensaje opcional */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Mensaje especial (opcional)
                    </label>
                    <textarea
                      {...register("mensaje")}
                      id="mensaje"
                      rows={3}
                      placeholder="Déjanos unas palabras..."
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none bg-white"
                    />
                  </div>

                  {/* Contacto opcional */}
                  <div>
                    <label
                      htmlFor="contacto"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email o teléfono (opcional)
                    </label>
                    <input
                      {...register("contacto")}
                      type="text"
                      id="contacto"
                      placeholder="Para mantenerte informado"
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Botón de envío */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Confirmar Asistencia
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
