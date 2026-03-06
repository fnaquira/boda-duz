# 🏗️ Arquitectura de la Integración Google Sheets

## 📐 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (Cliente)                       │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  AttendanceForm.tsx                                     │    │
│  │  - Recolecta datos del usuario                         │    │
│  │  - Validación básica                                   │    │
│  │  - Envía POST a /api/rsvp                              │    │
│  └────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              │ fetch()                           │
│                              ▼                                   │
└─────────────────────────────────────────────────────────────────┘
                               │
                               │ HTTPS
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│                    BACKEND (Next.js API Routes)                  │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  /app/api/rsvp/route.ts                                │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ 1. Validar configuración                     │     │    │
│  │  │    validateGoogleSheetsConfig()              │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ 2. Validar datos con Zod                     │     │    │
│  │  │    RSVPSchema.parse(body)                    │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ 3. Preparar filas                            │     │    │
│  │  │    - Timestamp                               │     │    │
│  │  │    - Una fila por adulto                     │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ 4. Enviar a Google Sheets                    │     │    │
│  │  │    appendRowToSheet(rows)                    │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  └────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  /lib/google-sheets.ts                                 │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ getGoogleSheetsClient()                      │     │    │
│  │  │ - Autenticación con Service Account          │     │    │
│  │  │ - Scope: spreadsheets                        │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ appendRowToSheet(values)                     │     │    │
│  │  │ - Conecta con Google Sheets API v4           │     │    │
│  │  │ - Agrega filas a la hoja                     │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  └────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              │ Google API                        │
│                              ▼                                   │
└─────────────────────────────────────────────────────────────────┘
                               │
                               │ HTTPS
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│                        GOOGLE CLOUD                              │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Google Sheets API v4                                  │    │
│  │  - Autenticación: Service Account                      │    │
│  │  - Método: spreadsheets.values.append                  │    │
│  │  - Scope: auth/spreadsheets                            │    │
│  └────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Google Sheets                                         │    │
│  │  ┌──────────────────────────────────────────────┐     │    │
│  │  │ Hoja: "Confirmaciones"                       │     │    │
│  │  │ ┌────────────────────────────────────────┐   │     │    │
│  │  │ │ Fecha | Nombre | Alergias | Asiste ... │   │     │    │
│  │  │ ├────────────────────────────────────────┤   │     │    │
│  │  │ │ 06/03 | Juan P | Ninguna  | Sí     ... │   │     │    │
│  │  │ │ 06/03 | María G| Gluten   | Sí     ... │   │     │    │
│  │  │ └────────────────────────────────────────┘   │     │    │
│  │  └──────────────────────────────────────────────┘     │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔐 Flujo de Autenticación

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Configuración Inicial (Una vez)                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Google Cloud Console                                       │
│       │                                                      │
│       ├─► Crear Proyecto                                    │
│       ├─► Habilitar Google Sheets API                       │
│       ├─► Crear Service Account                             │
│       └─► Descargar credentials.json                        │
│                                                              │
│  Desarrollador                                              │
│       │                                                      │
│       ├─► Extraer client_email                              │
│       ├─► Extraer private_key                               │
│       └─► Configurar en .env.local                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 2. Runtime (Cada Request)                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  API Route recibe request                                   │
│       │                                                      │
│       ├─► Lee variables de entorno                          │
│       │   - GOOGLE_SERVICE_ACCOUNT_EMAIL                    │
│       │   - GOOGLE_PRIVATE_KEY                              │
│       │                                                      │
│       ├─► Crea GoogleAuth con credenciales                  │
│       │                                                      │
│       ├─► Google valida Service Account                     │
│       │                                                      │
│       ├─► Genera access token temporal                      │
│       │                                                      │
│       ├─► Envía request a Sheets API                        │
│       │                                                      │
│       └─► Recibe respuesta                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Estructura de Datos

### Request (Frontend → Backend)

```typescript
{
  willAttend: "yes" | "no",
  numberOfAdults: number,        // 1-6
  adults: [
    {
      name: string,              // Requerido si willAttend = "yes"
      allergies: string          // Opcional
    },
    // ... más adultos
  ],
  needsBus: "yes" | "no",        // Opcional
  songRequest: string            // Opcional
}
```

### Validación (Zod Schema)

```typescript
const RSVPSchema = z.object({
  willAttend: z.enum(["yes", "no"]),
  numberOfAdults: z.number().min(1).max(6),
  adults: z.array(
    z.object({
      name: z.string().min(1),
      allergies: z.string().optional()
    })
  ).min(1),
  needsBus: z.enum(["yes", "no"]).optional(),
  songRequest: z.string().optional()
});
```

### Transformación (Backend → Google Sheets)

```typescript
// Si numberOfAdults = 2, se crean 2 filas:

[
  [
    "06/03/2026, 00:15:30",  // Timestamp
    "Juan Pérez",            // Nombre adulto 1
    "Ninguna",               // Alergias adulto 1
    "Sí",                    // Asiste
    "Sí",                    // Necesita bus
    "La Bamba",              // Canción
    2                        // Total adultos
  ],
  [
    "06/03/2026, 00:15:30",  // Mismo timestamp
    "María García",          // Nombre adulto 2
    "Gluten",                // Alergias adulto 2
    "Sí",                    // Asiste
    "Sí",                    // Necesita bus
    "La Bamba",              // Canción
    2                        // Total adultos
  ]
]
```

---

## 🔄 Manejo de Errores

```
Request
  │
  ├─► Validar configuración
  │   ├─► ❌ Falta variable → 500 "Error de configuración"
  │   └─► ✅ OK → Continuar
  │
  ├─► Validar datos (Zod)
  │   ├─► ❌ Datos inválidos → 400 "Datos inválidos"
  │   └─► ✅ OK → Continuar
  │
  ├─► Conectar a Google Sheets
  │   ├─► ❌ Hoja no encontrada → 500 "Hoja no encontrada"
  │   ├─► ❌ Permiso denegado → 500 "Permiso denegado"
  │   ├─► ❌ Clave inválida → 500 "Credenciales inválidas"
  │   └─► ✅ OK → Continuar
  │
  └─► Agregar filas
      ├─► ❌ Error → 500 "Error al procesar"
      └─► ✅ OK → 200 "Confirmación enviada"
```

---

## 🌍 Entornos

### Desarrollo Local

```
┌──────────────────────┐
│   localhost:3000     │
│                      │
│  .env.local          │
│  ├─ Variables reales │
│  └─ No en Git        │
│                      │
│  npm run dev         │
└──────────────────────┘
```

### Producción (Vercel)

```
┌──────────────────────────────┐
│   tu-proyecto.vercel.app     │
│                              │
│  Environment Variables       │
│  ├─ Configuradas en Vercel   │
│  ├─ Encriptadas              │
│  └─ Inyectadas en runtime    │
│                              │
│  Serverless Functions        │
│  └─ /api/rsvp                │
└──────────────────────────────┘
```

---

## 🔒 Seguridad

### Capa 1: Variables de Entorno
```
✅ Credenciales en .env.local (local)
✅ Credenciales en Vercel Environment Variables (producción)
❌ NUNCA en código fuente
❌ NUNCA en Git
❌ NUNCA expuestas al cliente
```

### Capa 2: API Routes (Server-Side)
```
✅ Procesamiento solo en servidor
✅ Cliente no ve credenciales
✅ Validación con Zod
✅ Manejo de errores sin exponer detalles
```

### Capa 3: Google Service Account
```
✅ Permisos mínimos (solo Editor en hoja específica)
✅ No requiere OAuth del usuario
✅ Hoja compartida solo con Service Account
✅ Revocable desde Google Cloud Console
```

---

## 📊 Escalabilidad

### Límites de Google Sheets API

- **Requests por minuto:** 60 (por usuario)
- **Requests por día:** 500,000 (por proyecto)
- **Filas por hoja:** 10,000,000
- **Celdas por hoja:** 10,000,000

### Para este proyecto:

- **Invitados esperados:** ~200
- **Requests estimados:** ~200 (uno por confirmación)
- **Filas generadas:** ~400 (promedio 2 adultos por confirmación)

**Conclusión:** ✅ Google Sheets es más que suficiente para este caso de uso.

---

## 🚀 Performance

### Tiempo de Respuesta Típico

```
Validación local:        ~5ms
Autenticación Google:    ~100ms
Escritura en Sheets:     ~200ms
Total:                   ~300ms
```

### Optimizaciones Implementadas

- ✅ Validación temprana (fail fast)
- ✅ Batch insert (todas las filas en una request)
- ✅ Logs solo en desarrollo
- ✅ Caché de autenticación (googleapis lo maneja)

---

## 🧪 Testing

### Verificación de Configuración

```bash
# GET /api/rsvp
curl http://localhost:3000/api/rsvp

# Respuesta esperada:
{
  "status": "ok",
  "googleSheetsConfigured": true,
  "timestamp": "2026-03-06T..."
}
```

### Prueba de Envío

```bash
# POST /api/rsvp
curl -X POST http://localhost:3000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{...}'

# Respuesta esperada:
{
  "success": true,
  "message": "¡Gracias por confirmar...",
  "data": {...}
}
```

---

## 📚 Referencias

- [Google Sheets API v4](https://developers.google.com/sheets/api)
- [Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- [googleapis npm](https://www.npmjs.com/package/googleapis)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Zod Validation](https://zod.dev/)

---

**Última actualización:** 6 de marzo de 2026
