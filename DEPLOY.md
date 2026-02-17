# 🚀 Guía de Despliegue - Boda Duzcelly & Álvaro

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

💒 ¡Feliz despliegue y feliz boda!
