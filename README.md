# 💒 Boda de Duzcelly & Alvaro

Portal de invitación virtual para la boda de Duzcelly Náquira y Alvaro Cari.

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
- **Google Sheets API** para almacenar confirmaciones de asistencia

## 🚀 Instalación y Ejecución

### 1. Instalar Dependencias

```bash
# Clonar o navegar al proyecto
cd boda-duz

# Instalar dependencias
npm install
```

### 2. Configurar Google Sheets (Requerido)

Para que el formulario de confirmación funcione, necesitas configurar Google Sheets API:

1. **Sigue la guía completa:** [`GOOGLE_SHEETS_SETUP.md`](./GOOGLE_SHEETS_SETUP.md)
2. **Configura las variables de entorno:**

```bash
# Copia el archivo de ejemplo
cp .env.example .env.local

# Edita .env.local con tus credenciales de Google
# (Sigue las instrucciones en GOOGLE_SHEETS_SETUP.md)
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

### 4. Verificar Configuración

Visita http://localhost:3000/api/rsvp para verificar que Google Sheets está configurado correctamente.

## 📁 Estructura del Proyecto

```
boda-duz/
├── app/
│   ├── api/
│   │   └── rsvp/
│   │       └── route.ts      # API para RSVP con Google Sheets
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
│   ├── AdultsOnly.tsx        # Advertencia de evento solo adultos
│   ├── AttendanceForm.tsx    # Formulario de confirmación
│   ├── Ceremony.tsx          # Detalles de la ceremonia
│   ├── Confirmation.tsx      # Sección de confirmación
│   ├── DressCode.tsx         # Código de vestimenta
│   ├── FAQ.tsx               # Preguntas frecuentes
│   ├── Footer.tsx            # Footer y WhatsApp flotante
│   ├── Gallery.tsx           # Galería de fotos
│   ├── Gifts.tsx             # Mesa de regalos
│   ├── Hero.tsx              # Sección hero con countdown
│   ├── MusicProvider.tsx     # Contexto de música
│   ├── Navbar.tsx            # Navegación fija
│   ├── OurStory.tsx          # Historia de la pareja
│   ├── Reception.tsx         # Detalles de la recepción
│   └── WeddingDetails.tsx    # Detalles del evento
├── lib/
│   ├── google-sheets.ts      # Integración con Google Sheets API
│   └── utils.ts              # Utilidades (cn, scroll, etc.)
├── .env.example              # Ejemplo de variables de entorno
├── .env.local                # Variables de entorno (no subir a Git)
├── DEPLOY.md                 # Guía de despliegue (Docker y Vercel)
├── GOOGLE_SHEETS_SETUP.md    # Guía de configuración de Google Sheets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Personalización

### Cambiar datos de la boda

1. **Fecha y hora:** Editar `WEDDING_DATE` en `components/Hero.tsx`
2. **Nombres:** Buscar y reemplazar "Duzcelly" y "Alvaro" en todos los archivos
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

Para instrucciones detalladas de despliegue, consulta [`DEPLOY.md`](./DEPLOY.md).

### Opción 1: Vercel (Recomendado)

Vercel es la plataforma ideal para Next.js. Despliegue automático desde Git con HTTPS incluido.

```bash
# Opción A: CLI
npm install -g vercel
vercel

# Opción B: Dashboard web
# 1. Ve a vercel.com
# 2. Importa tu repositorio
# 3. Configura las variables de entorno
# 4. Deploy
```

**Importante:** Configura las variables de entorno en Vercel antes de desplegar. Ver [`DEPLOY.md`](./DEPLOY.md) para detalles.

### Opción 2: Docker

Para desplegar en tu propio servidor usando Docker:

```bash
docker compose up -d --build
```

Ver [`DEPLOY.md`](./DEPLOY.md) para configuración completa con Nginx/Traefik.

## 📝 Notas

- ✅ El formulario RSVP está **totalmente funcional** y guarda las confirmaciones en Google Sheets automáticamente
- 🔐 Las credenciales de Google se manejan de forma segura mediante variables de entorno
- 🎵 La música de fondo es un placeholder. Reemplazar con música romántica libre de derechos
- 📸 Las imágenes son placeholders de Unsplash. Subir fotos reales de la pareja
- 🌐 El proyecto está listo para producción en Vercel o Docker

## 📊 Datos de Confirmación

Las confirmaciones se almacenan en Google Sheets con la siguiente información:
- Fecha y hora de la confirmación
- Nombre completo de cada adulto
- Alergias/intolerancias alimentarias
- Confirmación de asistencia (Sí/No)
- Necesidad de servicio de autobús
- Canción solicitada
- Total de adultos en el grupo

## 💕 Créditos

Hecho con amor para Duzcelly & Alvaro.

---

© 2026 Boda Duzcelly & Alvaro
