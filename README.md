# Restaurante Roque del Conde — Landing page

Landing page hecha con **Next.js 14 (App Router) + Tailwind CSS**, lista para desplegar en **Vercel**.

Incluye:

- Hero con foto de fondo y CTA "Reservar"
- Carta destacada con 6 platos (asador + cocina canaria)
- Galería de fotos del local y los platos
- Sección de reseñas de clientes (5★) editables a mano
- Sección de ubicación con mapa, horarios y contacto (teléfono + WhatsApp)
- SEO básico en español y diseño responsive

## 1. Probar en local

Necesitas Node.js 18+ instalado.

```bash
cd roque-del-conde
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## 2. Personalizar el contenido

Casi todo el contenido editable está en dos archivos:

- `app/page.js`
  - Array `menu` → platos, precios, descripciones, fotos
  - Array `horario` → días y horas de apertura
  - Array `resenas` → comentarios de clientes (ver sección 3)
  - Constante `URL_GOOGLE_MAPS` → enlace al botón "Ver todas las reseñas en Google"
  - Dirección, teléfono y email (busca "Calle del Roque", "+34 922" y "hola@roquedelconde.es")
  - Coordenadas del mapa en el iframe de OpenStreetMap (cambia `bbox` y `marker`)
- `app/layout.js` → título y descripción SEO

Los colores rústicos están en `tailwind.config.js` bajo `theme.extend.colors`
(parchment, clay, bark, moss, gold).

### Fotos

Las fotos del hero, la carta y la galería se cargan desde `public/img/`.

📋 **Ya hay una guía detallada con los nombres exactos de cada archivo en
[`public/img/README.md`](./public/img/README.md)** — solo tienes que
guardar cada foto del chat con el nombre indicado y soltarlas en esa
carpeta.

Si quieres cambiar fotos después: edita los arrays `menu` y `galeria`
en `app/page.js`, o el `backgroundImage` de la sección `#inicio` para
el hero.

## 3. Añadir reseñas de clientes

Las reseñas están en `app/page.js`, en el array `resenas`. Cada una es un objeto:

```js
{
  autor: "María G.",
  fecha: "hace 2 semanas",
  texto: "El chuletón es brutal..."
}
```

Para añadir una nueva, copia el texto desde tu ficha de Google Maps y añade
otro objeto al array. Recomendaciones:

- **Privacidad**: usa el nombre abreviado (p. ej. "María G.") en lugar del nombre completo.
- **Solo 5★**: filtra a mano las que tengan las 5 estrellas.
- **3-6 reseñas**: con 3 a 6 va sobrado. Más cansa al lector.
- El botón "Ver todas las reseñas en Google" enlaza a tu ficha real
  (`URL_GOOGLE_MAPS` en `page.js`) para los que quieran ver todas.

No hace falta tocar nada más — cuando subas el cambio a GitHub, Vercel
vuelve a desplegar la web automáticamente en menos de un minuto.

## 4. Desplegar en Vercel

### Opción A — Desde GitHub (recomendada)

1. Crea un repositorio nuevo en GitHub (vacío, sin README).
2. Dentro de la carpeta `roque-del-conde/`:

   ```bash
   git init
   git add .
   git commit -m "Landing inicial Roque del Conde"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/roque-del-conde.git
   git push -u origin main
   ```

3. Entra en [vercel.com/new](https://vercel.com/new), conecta tu cuenta de GitHub y selecciona el repo.
4. Vercel detecta automáticamente que es un proyecto Next.js — pulsa **Deploy**.
5. En 1-2 minutos tendrás una URL `https://roque-del-conde.vercel.app` funcionando.

### Opción B — Vercel CLI (sin GitHub)

```bash
npm i -g vercel
cd roque-del-conde
vercel
```

Sigue las preguntas, y al terminar tendrás la URL de producción.

## 5. Dominio personalizado

Cuando tengas el sitio en Vercel:

1. Compra el dominio (por ejemplo `roquedelconde.es`) en cualquier registrador.
2. En el dashboard de Vercel: **Project → Settings → Domains → Add**.
3. Sigue las instrucciones para apuntar los registros DNS. Vercel emite el certificado SSL automáticamente.

## Estructura del proyecto

```
roque-del-conde/
├── app/
│   ├── globals.css    # estilos globales + fuentes + texturas
│   ├── layout.js      # layout raíz y metadata SEO
│   └── page.js        # landing (hero, carta, galería, reseñas, ubicación)
├── public/
│   └── img/
│       └── README.md  # mapeo de fotos → archivos que debes crear
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

¡Listo! Si quieres añadir formulario de reservas online, blog, o página
de eventos privados, dímelo y te lo monto.
