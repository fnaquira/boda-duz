# Etapa 1: Instalación de dependencias
FROM node:18-alpine AS deps
WORKDIR /app

# Instalar dependencias necesarias para compilación
RUN apk add --no-cache libc6-compat

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# Etapa 2: Build de la aplicación
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar dependencias instaladas
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Deshabilitar telemetría de Next.js durante build
ENV NEXT_TELEMETRY_DISABLED 1

# Build de producción
RUN npm run build

# Etapa 3: Imagen de producción
FROM node:18-alpine AS runner
WORKDIR /app

# Configurar entorno de producción
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios para producción
# Crear carpeta public si no existe y copiar contenido
RUN mkdir -p ./public
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar al usuario no-root
USER nextjs

# Exponer puerto
EXPOSE 3000

# Variable de entorno para el puerto
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando de inicio
CMD ["node", "server.js"]
