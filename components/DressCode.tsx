import { SectionDivider } from './SectionDivider'

export default function DressCode() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <SectionDivider />

      <h2 className="font-serif uppercase tracking-[0.25em] text-center text-lg md:text-2xl text-brown-text mb-8">
        Código de Vestimenta
      </h2>

      {/* Elegant couple illustration */}
      <div className="mb-8">
        <img
          src="/img/vestimenta.png"
          alt="Vestimenta"
          width={220}
          height={220}
          className="mx-auto w-40 h-40 md:w-56 md:h-56 object-contain"
        />
      </div>

      {/* Dress code text */}
      <p className="font-serif uppercase tracking-wider text-center text-base md:text-lg leading-loose max-w-sm mx-auto text-brown-text mb-8">
        Elegante formal. Para caballeros sugerimos traje y corbata. Para damas, vestido largo o de cóctel elegante. Los colores pasteles y tonos tierra son bienvenidos. Por favor evitar el color blanco, reservado para la novia.
      </p>

      <SectionDivider />
    </section>
  )
}
