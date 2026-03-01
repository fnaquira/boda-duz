import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Boda de Duzcelly & Álvaro | 30 mayo 2026",
  description:
    "Únete a nuestra celebración de amor. Te invitamos a ser parte del día más especial de nuestras vidas en Tiabaya, Arequipa.",
  keywords: [
    "boda",
    "matrimonio",
    "Duzcelly",
    "Álvaro",
    "Tiabaya",
    "Arequipa",
    "2026",
  ],
  authors: [{ name: "Duzcelly & Álvaro" }],
  openGraph: {
    title: "Boda de Duzcelly & Álvaro | 30 mayo 2026",
    description:
      "Únete a nuestra celebración de amor en Tiabaya, Arequipa. ¡Te esperamos!",
    type: "website",
    locale: "es_PE",
    url: "https://boda-duzcelly-alvaro.vercel.app",
    siteName: "Boda Duzcelly & Álvaro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Boda de Duzcelly & Álvaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boda de Duzcelly & Álvaro | 30 mayo 2026",
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
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
