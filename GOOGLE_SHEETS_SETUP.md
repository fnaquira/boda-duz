# Configuración de Google Sheets API

Esta guía te ayudará a configurar Google Cloud Console para conectar tu aplicación con Google Sheets y registrar automáticamente las confirmaciones de asistencia.

## 📋 Requisitos Previos

- Una cuenta de Google
- Una hoja de cálculo de Google Sheets creada (guarda el ID de la hoja)

---

## 🚀 Paso 1: Crear un Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Haz clic en el selector de proyectos (arriba a la izquierda)
3. Haz clic en **"Nuevo proyecto"**
4. Asigna un nombre al proyecto (ej: `boda-confirmaciones`)
5. Haz clic en **"Crear"**
6. Espera a que se cree el proyecto y selecciónalo

---

## 🔌 Paso 2: Habilitar Google Sheets API

1. En el menú lateral, ve a **"APIs y servicios"** → **"Biblioteca"**
2. En el buscador, escribe: `Google Sheets API`
3. Haz clic en **"Google Sheets API"**
4. Haz clic en el botón **"Habilitar"**
5. Espera a que se habilite (puede tardar unos segundos)

---

## 🔑 Paso 3: Crear una Service Account (Cuenta de Servicio)

1. En el menú lateral, ve a **"APIs y servicios"** → **"Credenciales"**
2. Haz clic en **"Crear credenciales"** (arriba)
3. Selecciona **"Cuenta de servicio"**
4. Completa los datos:
   - **Nombre de la cuenta de servicio**: `boda-sheets-service`
   - **ID de la cuenta de servicio**: (se genera automáticamente)
   - **Descripción**: `Service account para registrar confirmaciones en Google Sheets`
5. Haz clic en **"Crear y continuar"**
6. En **"Otorgar acceso a este proyecto"** (opcional):
   - Puedes omitir este paso o seleccionar rol "Editor"
7. Haz clic en **"Continuar"**
8. En **"Otorgar acceso a usuarios"** (opcional):
   - Omite este paso
9. Haz clic en **"Listo"**

---

## 📥 Paso 4: Descargar las Credenciales JSON

1. En la página de **"Credenciales"**, verás tu cuenta de servicio listada
2. Haz clic en el **email de la cuenta de servicio** (ej: `boda-sheets-service@...`)
3. Ve a la pestaña **"Claves"** (Keys)
4. Haz clic en **"Agregar clave"** → **"Crear clave nueva"**
5. Selecciona el tipo **"JSON"**
6. Haz clic en **"Crear"**
7. Se descargará automáticamente un archivo JSON (ej: `boda-confirmaciones-abc123.json`)
8. **⚠️ IMPORTANTE**: Guarda este archivo en un lugar seguro. **NO lo subas a GitHub ni lo compartas públicamente**

---

## 📊 Paso 5: Preparar tu Hoja de Cálculo de Google Sheets

### 5.1 Obtener el ID de tu hoja

1. Abre tu hoja de Google Sheets en el navegador
2. La URL se verá así:
   ```
   https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit
   ```
3. El ID de la hoja es la parte entre `/d/` y `/edit`:
   ```
   1A2B3C4D5E6F7G8H9I0J
   ```
4. Copia este ID, lo necesitarás para las variables de entorno

### 5.2 Configurar los encabezados de la hoja

1. En tu hoja de Google Sheets, crea una pestaña llamada **"Confirmaciones"** (o el nombre que prefieras)
2. En la **primera fila**, agrega los siguientes encabezados:

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Fecha y Hora | Nombre Completo | Alergias/Intolerancias | Asiste | Necesita Autobús | Canción Solicitada | Total Adultos |

3. Guarda la hoja

### 5.3 Compartir la hoja con la Service Account

1. Abre el archivo JSON que descargaste en el Paso 4
2. Busca el campo `client_email`, se verá algo así:
   ```json
   "client_email": "boda-sheets-service@boda-confirmaciones-123456.iam.gserviceaccount.com"
   ```
3. Copia ese email completo
4. En tu hoja de Google Sheets, haz clic en el botón **"Compartir"** (arriba a la derecha)
5. Pega el email de la service account
6. Asegúrate de que tenga permisos de **"Editor"**
7. **Desmarca** la opción "Notificar a las personas" (no es necesario)
8. Haz clic en **"Compartir"** o **"Enviar"**

---

## 🔐 Paso 6: Configurar Variables de Entorno

Ahora necesitas extraer la información del archivo JSON y configurarla en tu aplicación.

### 6.1 Abrir el archivo JSON

Abre el archivo JSON descargado con un editor de texto. Verás algo como:

```json
{
  "type": "service_account",
  "project_id": "boda-confirmaciones-123456",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg...\n-----END PRIVATE KEY-----\n",
  "client_email": "boda-sheets-service@boda-confirmaciones-123456.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  ...
}
```

### 6.2 Extraer los valores necesarios

De este archivo JSON, necesitas:

1. **`client_email`**: El email de la service account
2. **`private_key`**: La clave privada completa (incluyendo `-----BEGIN PRIVATE KEY-----` y `-----END PRIVATE KEY-----`)

### 6.3 Crear archivo `.env.local`

En la raíz de tu proyecto, crea un archivo llamado `.env.local` con el siguiente contenido:

```env
# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL="boda-sheets-service@boda-confirmaciones-123456.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="1A2B3C4D5E6F7G8H9I0J"
GOOGLE_SHEET_NAME="Confirmaciones"
```

**⚠️ IMPORTANTE**:
- Reemplaza los valores con los tuyos
- La `GOOGLE_PRIVATE_KEY` debe estar entre comillas dobles
- Mantén los saltos de línea (`\n`) en la clave privada
- **NO subas este archivo a GitHub** (ya está en `.gitignore`)

---

## ✅ Verificación

Para verificar que todo está configurado correctamente:

1. ✅ Google Sheets API habilitada en tu proyecto
2. ✅ Service Account creada
3. ✅ Archivo JSON de credenciales descargado
4. ✅ Hoja de Google Sheets con encabezados configurados
5. ✅ Hoja compartida con el email de la service account (con permisos de Editor)
6. ✅ Archivo `.env.local` creado con las 4 variables de entorno

---

## 🚀 Próximos Pasos

Una vez completada esta configuración:

1. Instala las dependencias: `npm install`
2. Ejecuta el servidor de desarrollo: `npm run dev`
3. Prueba el formulario de confirmación
4. Verifica que los datos se registren en tu hoja de Google Sheets

---

## 🐛 Solución de Problemas

### Error: "The caller does not have permission"

- Verifica que hayas compartido la hoja con el email de la service account
- Asegúrate de que la service account tenga permisos de "Editor"

### Error: "Unable to parse private key"

- Verifica que la `GOOGLE_PRIVATE_KEY` esté entre comillas dobles
- Asegúrate de que incluya `-----BEGIN PRIVATE KEY-----` y `-----END PRIVATE KEY-----`
- Mantén los `\n` en la clave

### Error: "Requested entity was not found"

- Verifica que el `GOOGLE_SHEET_ID` sea correcto
- Verifica que el `GOOGLE_SHEET_NAME` coincida exactamente con el nombre de la pestaña

### Los datos no aparecen en la hoja

- Abre la consola del navegador (F12) y revisa si hay errores
- Verifica los logs del servidor (`npm run dev`)
- Asegúrate de que la hoja tenga los encabezados en la primera fila

---

## 📚 Recursos Adicionales

- [Documentación de Google Sheets API](https://developers.google.com/sheets/api)
- [Guía de Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**¿Necesitas ayuda?** Revisa los logs de la aplicación o contacta al desarrollador.
