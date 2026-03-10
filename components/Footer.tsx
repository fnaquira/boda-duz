export default function Footer() {
  return (
    <footer className="relative py-16 md:py-24 lg:py-32 text-center overflow-hidden">
      {/* Decorative branches */}
      <img 
        src="/decorations/branch-left.svg" 
        alt="" 
        aria-hidden="true"
        className="absolute bottom-12 left-4 w-24 opacity-60 pointer-events-none"
      />
      <img 
        src="/decorations/branch-right.svg" 
        alt="" 
        aria-hidden="true"
        className="absolute bottom-12 right-4 w-24 opacity-60 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Names in script */}
        <h2 className="font-script text-5xl text-brown-text mb-4">
          Alvaro & Duzcelly
        </h2>

        {/* Date */}
        <p className="font-serif uppercase tracking-[0.2em] text-xs text-brown-light mb-4">
          30 de Mayo de 2026
        </p>

        {/* Tagline */}
        <p className="font-serif uppercase tracking-[0.3em] text-sm text-brown-text mb-8">
          ¡Te Esperamos!
        </p>

        {/* Location */}
        <p className="font-body text-xs text-brown-light">
          Tiabaya, Arequipa - Perú
        </p>

        {/* Copyright */}
        <p className="font-body text-xs text-brown-light mt-6">
          © 2026 Boda Duzcelly & Alvaro. Hecho con ❤️
        </p>
      </div>
    </footer>
  )
}

