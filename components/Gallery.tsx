import { Camera } from 'lucide-react'

export default function Gallery() {
  return (
    <section className="py-24 md:py-32">
      <h2 className="font-serif uppercase tracking-[0.25em] text-center text-sm text-brown-text mb-8">
        Galería de Fotos
      </h2>

      <div className="rounded-2xl border border-separator p-8 md:p-12 text-center max-w-sm mx-auto">
        <Camera size={40} className="mx-auto mb-4 text-brown-light" />

        <p className="font-body text-sm text-brown-light text-center mb-6 leading-relaxed">
          Te invitamos a compartir los momentos especiales de nuestro evento a través de tus fotografías. Apreciamos que capturen y compartan sus recuerdos para que todos podamos revivir esta ocasión tan especial.
        </p>

        <button className="px-8 py-2 rounded-full border border-separator text-brown-text font-serif uppercase tracking-widest text-xs hover:bg-beige-organic transition">
          Compartir Fotografías
        </button>
      </div>
    </section>
  )
}
