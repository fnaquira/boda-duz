import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import FloralBackground from "@/components/FloralBackground";

export const metadata: Metadata = {
  title: "Boda de Duzcelly & Alvaro | 30 mayo 2026",
  description:
    "Únete a nuestra celebración de amor. Te invitamos a ser parte del día más especial de nuestras vidas en Tiabaya, Arequipa.",
  keywords: [
    "boda",
    "matrimonio",
    "Duzcelly",
    "Alvaro",
    "Tiabaya",
    "Arequipa",
    "2026",
  ],
  authors: [{ name: "Duzcelly & Alvaro" }],
  openGraph: {
    title: "Boda de Duzcelly & Alvaro | 30 mayo 2026",
    description:
      "Únete a nuestra celebración de amor en Tiabaya, Arequipa. ¡Te esperamos!",
    type: "website",
    locale: "es_PE",
    url: "https://boda-duzcelly-alvaro.vercel.app",
    siteName: "Boda Duzcelly & Alvaro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Boda de Duzcelly & Alvaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boda de Duzcelly & Alvaro | 30 mayo 2026",
    description: "Únete a nuestra celebración de amor en Tiabaya, Arequipa.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-beige-bg relative">
        <FloralBackground />
        <main className="relative z-10">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
