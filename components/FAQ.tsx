"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuál es el código de vestimenta?",
    answer:
      "Elegante formal. Para caballeros sugerimos traje y corbata. Para damas, vestido largo o de cóctel elegante. Los colores pasteles y tonos tierra son bienvenidos. Por favor evitar el color blanco, reservado para la novia.",
  },
  {
    question: "¿Pueden asistir niños?",
    answer:
      "Amamos a los pequeños, pero hemos decidido que esta sea una celebración solo para adultos. Esperamos contar con su comprensión para que todos puedan disfrutar de la velada con tranquilidad.",
  },
  {
    question: "¿Qué pasa si quiero hacerles un regalo?",
    answer:
      "Tu presencia es nuestro mejor regalo. Sin embargo, si deseas contribuir a nuestra luna de miel, encontrarás los datos bancarios en la sección de Regalos. ¡Cualquier aporte será muy apreciado!",
  },
  {
    question: "¿Hay estacionamiento disponible?",
    answer:
      "Sí, el local Kusisqa Eventos cuenta con amplio estacionamiento gratuito para todos los invitados. También hay zonas de estacionamiento en la calle cerca de la iglesia.",
  },
  {
    question: "¿Habrá transporte del lugar de la ceremonia a la recepción?",
    answer:
      "No hemos organizado transporte oficial, pero la distancia entre la Parroquia y Kusisqa Eventos es de aproximadamente 5 minutos en auto. Recomendamos coordinar con otros invitados o usar taxi/Uber.",
  },
  {
    question: "¿Hasta qué fecha debo confirmar mi asistencia?",
    answer:
      "Por favor confirma tu asistencia antes del 15 de mayo de 2026. Esto nos ayudará a organizar mejor todos los detalles de la recepción.",
  },
  {
    question: "¿Puedo llevar acompañante?",
    answer:
      "Las invitaciones son personalizadas. Si tu invitación incluye un '+1' o menciona a tu pareja, entonces sí puedes llevar acompañante. Si tienes dudas, contáctanos directamente.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-amber-50/50 rounded-full translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-rose-100/30 rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-gray-800/70 max-w-lg mx-auto flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            Aquí respondemos las dudas más comunes
          </p>
        </motion.div>

        {/* Acordeón */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-amber-50/50 rounded-2xl p-6 sm:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-800 hover:no-underline">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-800/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Nota adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-800/60 text-sm mt-8"
        >
          ¿Tienes otra pregunta? Escríbenos directamente y con gusto te ayudaremos.
        </motion.p>
      </div>
    </section>
  );
}
