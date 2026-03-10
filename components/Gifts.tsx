'use client'

import { useState } from 'react'
import { X, Copy, Check } from 'lucide-react'
import { SectionDivider } from './SectionDivider'

const BANK_ACCOUNTS = [
  {
    bank: 'BCP',
    account: '000-00000000-0-00',
    cci: '000 000 000000000000 00',
    holder: 'Nombre Titular',
  },
  {
    bank: 'Interbank',
    account: '000-000000000-0',
    cci: '003 000 000000000000 00',
    holder: 'Nombre Titular',
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button onClick={handleCopy} className="ml-2 text-brown-light hover:text-brown-text transition-colors">
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  )
}

export default function Gifts() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <SectionDivider />

      <h2 className="font-serif uppercase tracking-[0.25em] text-center text-sm text-brown-text mb-8">
        Regalos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
        {/* Left: Gift illustration */}
        <div className="md:col-span-2">
          <img
            src="/img/regalos.png"
            alt="Regalo"
            width={200}
            height={200}
            className="mx-auto w-32 h-32 md:w-full md:h-full"
          />
        </div>

        {/* Right: Gift text */}
        <div className="md:col-span-3">
          <p className="font-serif uppercase tracking-wider text-sm leading-loose text-brown-text mb-6">
            Tu presencia es nuestro mejor regalo. Sin embargo, si deseas contribuir para nuestra luna de miel cualquier aporte será muy apreciado.
          </p>

          <h3 className="font-serif uppercase tracking-[0.2em] text-xs text-brown-light mb-4">
            Luna de Miel
          </h3>

          <p className="font-body text-sm text-brown-light mb-6">
            Si deseas colaborar con nuestro viaje, puedes hacerlo mediante transferencia
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2 rounded-full border border-separator text-brown-text font-serif uppercase tracking-widest text-xs hover:bg-beige-organic transition"
          >
            Ver Datos Bancarios
          </button>
        </div>
      </div>

      <SectionDivider />

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown-text/30 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-beige-light rounded-sm w-full max-w-sm p-8 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-brown-light hover:text-brown-text transition-colors"
            >
              <X size={18} />
            </button>

            <h3 className="font-serif uppercase tracking-[0.25em] text-base text-brown-text text-center mb-6">
              Datos Bancarios
            </h3>

            <div className="space-y-6">
              {BANK_ACCOUNTS.map((acc) => (
                <div key={acc.bank} className="border-t border-separator pt-5 first:border-0 first:pt-0">
                  <p className="font-serif uppercase tracking-widest text-xs text-brown-light mb-3">{acc.bank}</p>
                  <div className="space-y-2 text-sm font-body text-brown-text">
                    <div className="flex items-center justify-between">
                      <span className="text-brown-light text-xs uppercase tracking-wider">Titular</span>
                      <span className="flex items-center">{acc.holder} <CopyButton text={acc.holder} /></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brown-light text-xs uppercase tracking-wider">Cuenta</span>
                      <span className="flex items-center">{acc.account} <CopyButton text={acc.account} /></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brown-light text-xs uppercase tracking-wider">CCI</span>
                      <span className="flex items-center">{acc.cci} <CopyButton text={acc.cci} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
