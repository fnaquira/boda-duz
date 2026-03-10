import { Clock, MapPin } from 'lucide-react'

export default function Ceremony() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        {/* Left: Church illustration */}
        <div className="md:col-span-3 flex justify-center">
          <img
            src="/img/iglesia.png"
            alt="Iglesia"
            width={400}
            height={400}
            className="w-full max-w-[280px] md:max-w-none h-auto object-contain"
          />
        </div>

        {/* Right: Details */}
        <div className="md:col-span-2">
          <h3 className="font-serif uppercase tracking-[0.25em] text-lg md:text-2xl text-brown-text mb-10">
            Ceremonia Religiosa
          </h3>

          <div className="flex items-center justify-center gap-8 md:gap-12">
            {/* Time */}
            <div className="text-center">
              <Clock size={36} className="mx-auto mb-3 text-brown-light" />
              <span className="font-serif uppercase tracking-widest text-lg md:text-xl text-brown-text block">
                14:00H
              </span>
            </div>

            {/* Vertical separator */}
            <div className="w-px h-20 bg-separator" />

            {/* Location */}
            <div className="text-center">
              <MapPin size={36} className="mx-auto mb-3 text-brown-light" />
              <span className="font-serif uppercase tracking-widest text-lg md:text-xl text-brown-text block">
                Iglesia de Tiabaya
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="https://maps.app.goo.gl/SQp1Dp48DZaAW3gi8" className="inline-block border border-brown-light text-brown-light hover:bg-brown-light hover:text-white-warm transition-colors duration-300 px-6 py-2 text-sm md:text-base font-serif uppercase tracking-widest" target='_blank'>
              Ver ubicación de Iglesia
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
