import { Baby } from 'lucide-react'
import { SectionDivider } from './SectionDivider'

export default function AdultsOnly() {
  return (
    <section className="py-16 md:py-24 lg:py-32 text-center">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-beige-organic flex items-center justify-center">
          <Baby size={28} className="text-brown-light" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-script text-4xl md:text-5xl text-brown-text mb-3">
        Celebración sólo para adultos
      </h2>

      {/* Decorative line */}
      <div className="w-10 h-px bg-brown-light mx-auto mb-8" />

      {/* Body */}
      <p className="font-body text-base md:text-lg text-brown-text leading-relaxed max-w-md mx-auto mb-4">
        Amamos a los pequeños, pero hemos decidido que esta sea una celebración sólo para adultos.
      </p>
      <p className="font-body text-base md:text-lg text-brown-light leading-relaxed max-w-md mx-auto mb-10">
        Esperamos contar con su comprensión para que todos puedan disfrutar de la velada con tranquilidad.
      </p>

      {/* Footer label */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-px bg-separator" />
        <span className="font-serif uppercase tracking-[0.3em] text-xs text-brown-light">Gracias</span>
        <div className="w-12 h-px bg-separator" />
      </div>

      <div className="mt-16">
        <SectionDivider />
      </div>
    </section>
  )
}
