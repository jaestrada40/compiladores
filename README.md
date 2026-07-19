# CompilaLab

Plataforma educativa interactiva para el curso de Compiladores 2026. Incluye 21 semanas, lecciones, cuestionarios, seguimiento local de progreso y laboratorios de análisis léxico, expresiones regulares, autómatas, gramáticas, parsing, AST, tabla de símbolos y código intermedio.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

La aplicación se abre en `http://localhost:3000`.

## Verificación

```bash
npm run lint
npm test
npm run build
```

## Despliegue en Coolify

El repositorio incluye un `Dockerfile` preparado para Coolify.

1. En Coolify, selecciona **New Resource → Application → Public Repository** o conecta tu cuenta de GitHub.
2. Usa el repositorio `https://github.com/jaestrada40/compiladores`.
3. Selecciona **Dockerfile** como método de construcción.
4. Configura el puerto de la aplicación como `3000`.
5. Asigna tu dominio y activa HTTPS.
6. Pulsa **Deploy**.

No se requieren variables de entorno para la versión actual. El progreso del estudiante se guarda en el navegador del dispositivo mediante almacenamiento local.

## Construcción con Docker

```bash
docker build -t compilalab .
docker run --rm -p 3000:3000 compilalab
```
