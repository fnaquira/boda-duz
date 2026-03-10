import { SectionDivider } from './SectionDivider'

export default function ParentsBlessing() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <h2 className="font-serif uppercase tracking-[0.25em] text-center text-md text-brown-text mb-12">
        Con la bendición de Dios y nuestros padres
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 text-center mb-12">
        {/* Groom's parents */}
        <div>
          <h3 className="font-serif uppercase tracking-[0.2em] text-xs text-brown-light mb-4">
            Padres del Novio
          </h3>
          <p className="font-script text-2xl text-brown-text leading-relaxed">
            Margarita Amanqui Condori<br />
            Matías Edilberto Cari Flores
          </p>
        </div>

        {/* Bride's parents */}
        <div>
          <h3 className="font-serif uppercase tracking-[0.2em] text-xs text-brown-light mb-4">
            Padres de la Novia
          </h3>
          <p className="font-script text-2xl text-brown-text leading-relaxed">
            Aladina Manuela Vargas Manchego<br />
            Juan Antonio Náquira Saavedra
          </p>
        </div>
      </div>

      <SectionDivider />
    </section>
  )
}
