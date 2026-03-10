import { SectionDivider } from './SectionDivider'
import { AttendanceForm } from '@/components/AttendanceForm'

export default function Confirmation() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <SectionDivider />

      {/* Invitation illustration */}
      <div className="flex justify-center mb-8">
        <img
          src="/img/invitacion.png"
          alt="Invitación"
          width={220}
          height={220}
          className="w-40 h-40 md:w-56 md:h-56 object-contain"
        />
      </div>

      <h2 className="font-serif uppercase tracking-[0.25em] text-center text-sm text-brown-text mb-4">
        Nos Gustaría Compartir Este Día Contigo
      </h2>

      <p className="font-serif uppercase tracking-[0.2em] text-center text-xs text-brown-light mb-8">
        ¿Te Apuntas?
      </p>

      {/* AttendanceForm component handles the button and modal */}
      <AttendanceForm />

      <SectionDivider />

      {/* Countdown component (keep existing) */}
      <div className="text-center mt-8">
        <p className="font-serif uppercase tracking-[0.2em] text-xs text-brown-light mb-4">
          Nos vemos el
        </p>
        {/* Your existing countdown component here */}
      </div>
    </section>
  )
}
