import { Hero } from "@/components/Hero";
import { Ceremony } from "@/components/Ceremony";
import { Reception } from "@/components/Reception";
import { DressCode } from "@/components/DressCode";
import { Gallery } from "@/components/Gallery";
import { Gifts } from "@/components/Gifts";
import { AdultsOnly } from "@/components/AdultsOnly";
import { Confirmation } from "@/components/Confirmation";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      {/* Música de fondo */}
      <MusicPlayer />
      
      {/* 🕊 Hero - Ilustración lineal superior, nombres, fecha */}
      <Hero />

      {/* ⛪ Ceremonia - Iglesia, 14:00, padres */}
      <Ceremony />

      {/* 🥂 Recepción - 15:00, Kusisqa Eventos */}
      <Reception />

      {/* 👗 Código de Vestimenta - Texto exacto PDF */}
      <DressCode />

      {/* 📷 Galería - Botón "Compartir fotografías" */}
      <Gallery />

      {/* 🎁 Regalos - Texto sobre luna de miel */}
      <Gifts />

      {/* 🧒 Nota adultos - Celebración solo para adultos */}
      <AdultsOnly />

      {/* ✅ Confirmación - Botón principal */}
      <Confirmation />

      {/* ⏰ Cuenta Regresiva - "Nos vemos" */}
      <Countdown />

      {/* Footer */}
      <Footer />
    </>
  );
}
