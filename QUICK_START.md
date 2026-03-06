# 🚀 Inicio Rápido - Integración Google Sheets

Esta guía te ayudará a poner en marcha el formulario de confirmación con Google Sheets en **menos de 15 minutos**.

## ✅ Checklist Rápido

- [ ] Cuenta de Google
- [ ] Hoja de Google Sheets creada
- [ ] 15 minutos de tiempo

---

## 📋 Paso a Paso

### 1️⃣ Configurar Google Cloud (5 minutos)

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto: **"boda-confirmaciones"**
3. Habilita **Google Sheets API**
4. Crea una **Service Account**
5. Descarga el archivo JSON de credenciales

> 📖 **Guía detallada:** [`GOOGLE_SHEETS_SETUP.md`](./GOOGLE_SHEETS_SETUP.md)

### 2️⃣ Preparar Google Sheets (3 minutos)

1. Crea una hoja nueva o usa una existente
2. Crea una pestaña llamada **"Confirmaciones"**
3. Agrega estos encabezados en la primera fila:

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Fecha y Hora | Nombre Completo | Alergias/Intolerancias | Asiste | Necesita Autobús | Canción Solicitada | Total Adultos |

4. Comparte la hoja con el email de la Service Account (del archivo JSON)
   - Permisos: **Editor**

### 3️⃣ Configurar Variables de Entorno (3 minutos)

```bash
# Copia el archivo de ejemplo
cp .env.example .env.local
```

Abre `.env.local` y completa:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL="tu-service@proyecto.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU_CLAVE...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="1A2B3C4D5E6F7G8H9I0J"
GOOGLE_SHEET_NAME="Confirmaciones"
```

**Dónde encontrar cada valor:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Campo `client_email` del JSON
- `GOOGLE_PRIVATE_KEY`: Campo `private_key` del JSON (copia tal cual, con `\n`)
- `GOOGLE_SHEET_ID`: De la URL de tu hoja (entre `/d/` y `/edit`)
- `GOOGLE_SHEET_NAME`: Nombre de la pestaña (ej: "Confirmaciones")

### 4️⃣ Instalar y Ejecutar (2 minutos)

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### 5️⃣ Probar (2 minutos)

1. **Verificar API:**
   - Abre: http://localhost:3000/api/rsvp
   - Deberías ver: `"googleSheetsConfigured": true`

2. **Probar formulario:**
   - Abre: http://localhost:3000
   - Navega a la sección "Confirmación"
   - Completa el formulario con datos de prueba
   - Haz clic en "Pulsa aquí para enviar"

3. **Verificar Google Sheets:**
   - Abre tu hoja de Google Sheets
   - Deberías ver una nueva fila con los datos

---

## 🎉 ¡Listo!

Si todo funcionó, verás:
- ✅ Mensaje de éxito en la página
- ✅ Nueva fila en Google Sheets con los datos
- ✅ Logs en la consola del servidor

---

## 🐛 Problemas Comunes

### Error: "Missing environment variables"

**Solución:** Verifica que `.env.local` exista y tenga las 4 variables configuradas.

### Error: "The caller does not have permission"

**Solución:** Comparte la hoja con el email de la Service Account (con permisos de Editor).

### Error: "Unable to parse private key"

**Solución:** Asegúrate de copiar la clave privada completa del JSON, incluyendo:
- `-----BEGIN PRIVATE KEY-----`
- `-----END PRIVATE KEY-----`
- Los `\n` (literalmente, no como saltos de línea)

### No aparecen datos en Google Sheets

**Solución:**
1. Verifica el `GOOGLE_SHEET_ID` en la URL de tu hoja
2. Confirma que el `GOOGLE_SHEET_NAME` coincida exactamente con el nombre de la pestaña
3. Revisa los logs del servidor en la terminal

---

## 📚 Siguiente Paso: Desplegar

Una vez que funcione localmente, despliega en Vercel:

1. Sube tu código a GitHub (sin `.env.local`)
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las mismas 4 variables de entorno en Vercel
4. Deploy

> 📖 **Guía completa:** [`DEPLOY.md`](./DEPLOY.md)

---

## 💡 Tips

- **Prueba primero localmente** antes de desplegar
- **No subas `.env.local` a Git** (ya está en `.gitignore`)
- **Guarda el archivo JSON** de credenciales en un lugar seguro
- **Usa datos de prueba** para verificar que todo funciona

---

¿Necesitas ayuda? Revisa:
- [`GOOGLE_SHEETS_SETUP.md`](./GOOGLE_SHEETS_SETUP.md) - Configuración detallada de Google
- [`DEPLOY.md`](./DEPLOY.md) - Guía de despliegue en Vercel/Docker
- [`README.md`](./README.md) - Documentación general del proyecto
