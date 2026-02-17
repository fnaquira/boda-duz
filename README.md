# 💒 Boda de Duzcelly & Álvaro

Portal de invitación virtual para la boda de Duzcelly Náquira y Álvaro Cari.

**Fecha:** Sábado 30 de mayo de 2026  
**Lugar:** Tiabaya, Arequipa - Perú

## ✨ Características

- 🎨 **Diseño elegante y romántico** con paleta de colores crema, dorado y rosa pálido
- 📱 **Totalmente responsive** (mobile-first)
- ⏱️ **Cuenta regresiva** en tiempo real
- 📝 **Formulario RSVP** con validación
- 🎵 **Música de fondo** con control play/mute persistente
- 🗺️ **Integración con Google Maps** para ubicaciones
- 📸 **Galería de fotos** preparada para el evento
- 💬 **Compartir por WhatsApp** con mensaje pre-armado
- ❓ **FAQ con acordeón** interactivo
- 🎁 **Sección de regalos** con datos bancarios
- 🔍 **SEO optimizado** con Open Graph tags

## 🛠️ Tecnologías

- **Next.js 14+** con App Router
- **TypeScript**
- **TailwindCSS** para estilos
- **Framer Motion** para animaciones
- **React Hook Form + Zod** para formularios
- **Radix UI** para componentes accesibles
- **Lucide React** para iconos

## 🚀 Instalación y Ejecución

```bash
# Clonar o navegar al proyecto
cd boda-duz

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 📁 Estructura del Proyecto

```
boda-duz/
├── app/
│   ├── api/
│   │   └── rsvp/
│   │       └── route.ts      # API dummy para RSVP
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout con metadata y navbar
│   └── page.tsx              # Página principal
├── components/
│   ├── ui/                   # Componentes UI base (shadcn/ui style)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   ├── FAQ.tsx               # Preguntas frecuentes
│   ├── Footer.tsx            # Footer y WhatsApp flotante
│   ├── Gallery.tsx           # Galería de fotos
│   ├── Gifts.tsx             # Mesa de regalos
│   ├── Hero.tsx              # Sección hero con countdown
│   ├── MusicProvider.tsx     # Contexto de música
│   ├── Navbar.tsx            # Navegación fija
│   ├── OurStory.tsx          # Historia de la pareja
│   ├── RSVPForm.tsx          # Formulario de confirmación
│   └── WeddingDetails.tsx    # Detalles del evento
├── lib/
│   └── utils.ts              # Utilidades (cn, scroll, etc.)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Personalización

### Cambiar datos de la boda

1. **Fecha y hora:** Editar `WEDDING_DATE` en `components/Hero.tsx`
2. **Nombres:** Buscar y reemplazar "Duzcelly" y "Álvaro" en todos los archivos
3. **Ubicaciones:** Editar `events` en `components/WeddingDetails.tsx`
4. **Datos bancarios:** Editar `bankDetails` en `components/Gifts.tsx`
5. **FAQ:** Editar `faqs` en `components/FAQ.tsx`

### Cambiar música

En `components/MusicProvider.tsx`, reemplazar la URL del audio:
```tsx
src="TU_URL_DE_MUSICA_AQUI"
```

### Cambiar imágenes

Las imágenes placeholder usan Unsplash. Reemplazar las URLs en:
- `components/OurStory.tsx`
- `components/Gallery.tsx`
- `app/layout.tsx` (Open Graph image)

### Cambiar colores

Editar `tailwind.config.ts` para modificar la paleta:
```ts
colors: {
  cream: "#F5F5DC",
  gold: "#D4AF37",
  "dark-elegant": "#2C3E50",
  "pink-pale": "#FADADD",
}
```

## 🌐 Despliegue

### Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Subir carpeta .next o configurar Netlify para Next.js
```

## 📝 Notas

- El formulario RSVP es **dummy** - no guarda datos realmente. Para producción, conectar a una base de datos (Supabase, MongoDB, etc.)
- La música de fondo es un placeholder. Reemplazar con música romántica libre de derechos.
- Las imágenes son placeholders de Unsplash. Subir fotos reales de la pareja.

## 💕 Créditos

Hecho con amor para Duzcelly & Álvaro.

---

© 2026 Boda Duzcelly & Álvaro
