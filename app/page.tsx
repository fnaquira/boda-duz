import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { WeddingDetails } from "@/components/WeddingDetails";
import { RSVPForm } from "@/components/RSVPForm";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Gifts } from "@/components/Gifts";
import { Footer, WhatsAppFloatingButton } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero - Sección principal con countdown */}
      <Hero />

      {/* Nuestra Historia - Timeline de la relación */}
      <OurStory />

      {/* Detalles del Día - Ceremonia, cóctel, fiesta */}
      <WeddingDetails />

      {/* RSVP - Formulario de confirmación */}
      <RSVPForm />

      {/* Preguntas Frecuentes */}
      <FAQ />

      {/* Galería de Fotos */}
      <Gallery />

      {/* Mesa de Regalos */}
      <Gifts />

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatingButton />
    </>
  );
}
