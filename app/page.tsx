import Hero from "@/components/Hero";
import ParentsBlessing from "@/components/ParentsBlessing";
import Ceremony from "@/components/Ceremony";
import Reception from "@/components/Reception";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts";
import AdultsOnly from "@/components/AdultsOnly";
import Confirmation from "@/components/Confirmation";
import { Countdown } from "@/components/Countdown";
import Footer from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      {/* Música de fondo */}
      <MusicPlayer />
      
      <main className="min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Hero />
          <ParentsBlessing />
          <Ceremony />
          <Reception />
          <DressCode />
          <Gallery />
          <Gifts />
          <AdultsOnly />
          <Confirmation />
          <Countdown />
          <Footer />
        </div>
      </main>
    </>
  );
}
