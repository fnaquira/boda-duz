import { Clock, MapPin } from 'lucide-react'

export default function Reception() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        {/* Left: Details */}
        <div className="md:col-span-2 order-2 md:order-1">
          <h3 className="font-serif uppercase tracking-[0.25em] text-lg md:text-2xl text-brown-text mb-10">
            Recepción Social
          </h3>

          <div className="flex items-center justify-center gap-8 md:gap-12">
            {/* Time */}
            <div className="text-center">
              <Clock size={36} className="mx-auto mb-3 text-brown-light" />
              <span className="font-serif uppercase tracking-widest text-lg md:text-xl text-brown-text block">
                15:00H
              </span>
            </div>

            {/* Vertical separator */}
            <div className="w-px h-20 bg-separator" />

            {/* Location */}
            <div className="text-center">
              <MapPin size={36} className="mx-auto mb-3 text-brown-light" />
              <span className="font-serif uppercase tracking-widest text-lg md:text-xl text-brown-text block">
                Kusisqa Eventos
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a target="_blank" href="https://maps.app.goo.gl/yZAU9UEFURoVjUyJA" className="inline-block border border-brown-light text-brown-light hover:bg-brown-light hover:text-white-warm transition-colors duration-300 px-6 py-2 text-sm md:text-base font-serif uppercase tracking-widest">
              Ver ubicación
            </a>
          </div>
        </div>

        {/* Right: Champagne illustration */}
        <div className="md:col-span-3 order-1 md:order-2 flex justify-center">
          <img
            src="/img/copas.png"
            alt="Recepción"
            width={400}
            height={400}
            className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
          />
        </div>
      </div>
    </section>
  )
}
