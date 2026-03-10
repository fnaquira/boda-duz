# 🚀 Guía de Despliegue - Boda Duzcelly & Alvaro

## Requisitos del Servidor
- Docker 20.10+
- Docker Compose 2.0+
- Mínimo 512MB RAM disponible
- Puerto 3000 libre (o configurar otro)

## Despliegue Rápido

### 1. Clonar o copiar el proyecto al servidor
```bash
# Si usas git
git clone <tu-repositorio> boda-duz
cd boda-duz

# O copia los archivos con scp/rsync
scp -r ./boda-duz usuario@servidor:/ruta/destino/
```

### 2. Construir y levantar con Docker Compose
```bash
# Build y arranque en segundo plano
docker compose up -d --build

# Ver logs
docker compose logs -f

# Verificar estado
docker compose ps
```

### 3. Verificar que funciona
```bash
curl http://localhost:3000
```

## Comandos Útiles

```bash
# Detener el servicio
docker compose down

# Reiniciar
docker compose restart

# Reconstruir (después de cambios)
docker compose up -d --build

# Ver logs en tiempo real
docker compose logs -f boda-web

# Entrar al contenedor
docker exec -it boda-duzcelly-alvaro sh
```

## Configurar con Nginx (Proxy Reverso)

Si quieres usar un dominio con HTTPS, configura Nginx como proxy:

```nginx
server {
    listen 80;
    server_name tuboda.com www.tuboda.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tuboda.com www.tuboda.com;

    ssl_certificate /etc/letsencrypt/live/tuboda.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tuboda.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Configurar con Traefik

Si usas Traefik, agrega estas labels al `docker-compose.yml`:

```yaml
services:
  boda-web:
    # ... configuración existente ...
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.boda.rule=Host(`tuboda.com`)"
      - "traefik.http.routers.boda.entrypoints=websecure"
      - "traefik.http.routers.boda.tls.certresolver=letsencrypt"
      - "traefik.http.services.boda.loadbalancer.server.port=3000"
    networks:
      - traefik-network

networks:
  traefik-network:
    external: true
```

## Cambiar Puerto

Si necesitas usar otro puerto, edita `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # Acceder por puerto 8080
```

## Troubleshooting

### Error de memoria
Si el build falla por memoria, aumenta el límite en `docker-compose.yml`:
```yaml
deploy:
  resources:
    limits:
      memory: 1G
```

### Imágenes no cargan
Verifica que las URLs de Unsplash sean accesibles desde el servidor.

### El contenedor se reinicia
Revisa los logs:
```bash
docker compose logs boda-web
```

## Actualizar el Sitio

1. Hacer cambios en el código
2. Reconstruir:
```bash
docker compose up -d --build
```

---

## 🌐 Despliegue en Vercel (Recomendado para Next.js)

Vercel es la plataforma ideal para desplegar aplicaciones Next.js. Es gratuita para proyectos personales y ofrece despliegue automático desde Git.

### Requisitos Previos

1. Cuenta en [Vercel](https://vercel.com) (puedes usar tu cuenta de GitHub)
2. Google Sheets API configurada (ver `GOOGLE_SHEETS_SETUP.md`)
3. Repositorio Git (GitHub, GitLab o Bitbucket)

### Paso 1: Preparar el Proyecto

1. Asegúrate de que tu código esté en un repositorio Git
2. Verifica que `.env.local` esté en `.gitignore` (ya debería estarlo)
3. Confirma que `.env.example` esté en el repositorio como referencia

```bash
git add .
git commit -m "Preparar para despliegue en Vercel"
git push origin main
```

### Paso 2: Importar Proyecto en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en **"Add New..."** → **"Project"**
3. Importa tu repositorio Git
4. Vercel detectará automáticamente que es un proyecto Next.js
5. **NO hagas clic en Deploy todavía** - primero configura las variables de entorno

### Paso 3: Configurar Variables de Entorno

En la sección **"Environment Variables"** de Vercel, agrega las siguientes variables:

#### Variables Requeridas:

| Nombre | Valor | Descripción |
|--------|-------|-------------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `tu-service@proyecto.iam.gserviceaccount.com` | Email de la Service Account |
| `GOOGLE_PRIVATE_KEY` | `-----BEGIN PRIVATE KEY-----\n...` | Clave privada completa (con `\n`) |
| `GOOGLE_SHEET_ID` | `1A2B3C4D5E6F7G8H9I0J` | ID de tu hoja de Google Sheets |
| `GOOGLE_SHEET_NAME` | `Confirmaciones` | Nombre de la pestaña en la hoja |

#### ⚠️ IMPORTANTE: Formato de GOOGLE_PRIVATE_KEY

La clave privada debe incluir:
- Los delimitadores `-----BEGIN PRIVATE KEY-----` y `-----END PRIVATE KEY-----`
- Los saltos de línea como `\n` (literalmente los caracteres backslash-n)
- Todo el contenido entre comillas en Vercel

**Ejemplo correcto:**
```
-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n
```

### Paso 4: Desplegar

1. Haz clic en **"Deploy"**
2. Espera a que Vercel construya y despliegue tu aplicación (2-3 minutos)
3. Una vez completado, recibirás una URL como: `https://tu-proyecto.vercel.app`

### Paso 5: Verificar el Despliegue

1. Visita tu URL de Vercel
2. Navega a la sección de confirmación
3. Prueba el formulario con datos de prueba
4. Verifica que los datos aparezcan en tu hoja de Google Sheets

#### Verificar la API:

Visita: `https://tu-proyecto.vercel.app/api/rsvp`

Deberías ver:
```json
{
  "status": "ok",
  "message": "API RSVP activa - Boda Duzcelly & Alvaro",
  "googleSheetsConfigured": true,
  "timestamp": "2026-03-06T..."
}
```

### Despliegues Automáticos

Vercel configurará automáticamente:
- ✅ Despliegue automático en cada `git push` a la rama principal
- ✅ Preview deployments para pull requests
- ✅ HTTPS automático con certificado SSL
- ✅ CDN global para mejor rendimiento

### Dominios Personalizados

Para usar tu propio dominio (ej: `www.tuboda.com`):

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio
4. Configura los DNS según las instrucciones de Vercel
5. Espera a que se propague (puede tardar hasta 48 horas)

### Actualizar Variables de Entorno

Si necesitas cambiar alguna variable:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Edita o agrega variables
4. **Importante:** Haz un nuevo deploy para que los cambios surtan efecto
   - Settings → Deployments → (último deployment) → ⋯ → Redeploy

### Monitoreo y Logs

Para ver logs y errores:

1. Ve a tu proyecto en Vercel
2. Deployments → (selecciona un deployment)
3. Functions → `/api/rsvp` → View Logs

Aquí verás todos los logs de `console.log()` y errores.

---

## 🧪 Pruebas Locales Antes de Desplegar

Antes de desplegar a producción, prueba localmente:

### 1. Configurar Variables de Entorno Locales

Crea `.env.local` en la raíz del proyecto:

```bash
# Copia el ejemplo
cp .env.example .env.local

# Edita con tus valores reales
# (usa tu editor de texto favorito)
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

### 4. Probar el Formulario

1. Abre http://localhost:3000
2. Navega a la sección de confirmación
3. Completa el formulario con datos de prueba
4. Verifica que aparezcan en Google Sheets

### 5. Verificar la API

Abre en tu navegador o usa curl:

```bash
# Verificar que la API está activa
curl http://localhost:3000/api/rsvp

# Probar envío (desde terminal)
curl -X POST http://localhost:3000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{
    "willAttend": "yes",
    "numberOfAdults": 1,
    "adults": [{"name": "Test User", "allergies": "Ninguna"}],
    "needsBus": "no",
    "songRequest": "Canción de prueba"
  }'
```

---

## 🔒 Seguridad

### Variables de Entorno

- ✅ **NUNCA** subas `.env.local` a Git
- ✅ `.env.local` ya está en `.gitignore`
- ✅ Las credenciales solo se usan en el servidor (API Routes)
- ✅ El cliente nunca ve las credenciales de Google

### Google Sheets

- ✅ La hoja solo es accesible por la Service Account
- ✅ Usa permisos de "Editor" solo para la Service Account
- ✅ No compartas el archivo JSON de credenciales públicamente

---

## 🐛 Solución de Problemas en Vercel

### Error: "Missing environment variables"

**Causa:** Variables de entorno no configuradas en Vercel

**Solución:**
1. Ve a Settings → Environment Variables
2. Agrega todas las variables requeridas
3. Redeploy el proyecto

### Error: "The caller does not have permission"

**Causa:** La hoja no está compartida con la Service Account

**Solución:**
1. Abre tu Google Sheet
2. Haz clic en "Compartir"
3. Agrega el email de la Service Account con permisos de "Editor"

### Error: "Unable to parse private key"

**Causa:** Formato incorrecto de `GOOGLE_PRIVATE_KEY`

**Solución:**
- Asegúrate de incluir `-----BEGIN PRIVATE KEY-----` y `-----END PRIVATE KEY-----`
- Mantén los `\n` como caracteres literales (no saltos de línea reales)
- Copia la clave exactamente como aparece en el archivo JSON

### Los datos no llegan a Google Sheets

**Pasos de diagnóstico:**

1. Verifica los logs en Vercel (Deployments → Functions → View Logs)
2. Prueba la API directamente: `https://tu-proyecto.vercel.app/api/rsvp`
3. Verifica que el `GOOGLE_SHEET_ID` sea correcto
4. Confirma que el nombre de la pestaña coincida con `GOOGLE_SHEET_NAME`

### Build falla en Vercel

**Causa común:** Error de TypeScript o dependencias

**Solución:**
1. Ejecuta `npm run build` localmente para ver el error
2. Corrige los errores de TypeScript
3. Asegúrate de que todas las dependencias estén en `package.json`
4. Haz commit y push de los cambios

---

## 📊 Comparación: Docker vs Vercel

| Característica | Docker (VPS) | Vercel |
|----------------|--------------|--------|
| **Costo** | Requiere VPS (~$5-10/mes) | Gratis para proyectos personales |
| **Configuración** | Manual, más compleja | Automática, muy simple |
| **Escalabilidad** | Manual | Automática |
| **HTTPS** | Configuración manual (Let's Encrypt) | Automático |
| **Despliegues** | Manual (`docker compose up`) | Automático con Git |
| **Logs** | `docker logs` | Dashboard web |
| **Mejor para** | Control total, múltiples servicios | Next.js, despliegue rápido |

**Recomendación:** Usa Vercel para este proyecto. Es más simple, gratuito y optimizado para Next.js.

---

💒 ¡Feliz despliegue y feliz boda!
