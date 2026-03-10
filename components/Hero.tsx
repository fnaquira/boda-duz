export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-24 text-center overflow-hidden">
      {/* Decorative blobs in background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/decorations/blob-1.svg" 
          alt="" 
          aria-hidden="true"
          className="absolute top-10 right-10 w-32 opacity-40"
        />
        <img 
          src="/decorations/blob-2.svg" 
          alt="" 
          aria-hidden="true"
          className="absolute bottom-20 left-8 w-40 opacity-30"
        />
      </div>

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
        {/* Couple illustration */}
        <div className="mb-8">
          <img 
            src="/img/pareja.png" 
            alt="Pareja" 
            width={280} 
            height={280}
            className="mx-auto w-48 h-48 md:w-full md:h-full"
          />
        </div>

        {/* Names in script font */}
        <h1 className="font-script text-4xl md:text-6xl lg:text-8xl text-brown-text mb-2">
          Duzcelly & Alvaro
        </h1>

        {/* Date in serif uppercase */}
        <p className="font-serif uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm text-brown-text mb-6">
          30 Mayo 2026
        </p>

        {/* Tagline in script */}
        <p className="font-script text-3xl md:text-4xl lg:text-5xl text-brown-text">
          ¡Nos casamos!
        </p>
      </div>
    </section>
  )
}
