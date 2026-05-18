# Roque del Conde — contexto para Claude

Landing page de un restaurante asador en Tenerife (cocina canaria + nacional).
Pensada para desplegarse en **Vercel**.

## Stack

- **Next.js 14** (App Router, JavaScript — sin TypeScript)
- **Tailwind CSS 3** (configuración custom con paleta rústica)
- React 18, sin librerías UI externas. Solo componentes propios.
- Sin estado global. Sin backend (de momento).

## Estructura

```
roque-del-conde/
├── app/
│   ├── globals.css                          # estilos globales + fuentes + texturas
│   ├── layout.js                            # layout raíz + metadata SEO
│   ├── page.js                              # landing principal (server component)
│   └── experiencia-menu-canario/
│       └── page.js                          # página de la experiencia (server component)
├── components/
│   └── ReservaModal.jsx                     # client component: botón + modal de reserva
├── public/
│   └── img/                                 # todas las fotos del sitio
│       └── README.md                        # mapeo de nombres de archivo → contenido
├── tailwind.config.js                       # paleta custom (parchment, clay, bark, moss, gold)
├── next.config.mjs
├── README.md                                # instrucciones para desplegar
└── CLAUDE.md                                # este archivo
```

## Paleta de colores (en `tailwind.config.js`)

- `parchment-50/100/200` — fondos claros, color pergamino
- `clay-400/500/600` — terracota (CTAs primarios, acentos)
- `bark-700/800/900` — marrones oscuros (texto, fondos oscuros)
- `moss-600/700` — verde musgo (acentos)
- `gold-400/500` — dorado (acentos premium, hover states)

Fuentes (cargadas en `globals.css` desde Google Fonts):
- `font-display` → **Playfair Display** (títulos, números, énfasis)
- `font-body` → **Inter** (cuerpo)

## Estado actual del proyecto

### Páginas

- **`/`** (home) — hero con logo + foto del chuletón, CTA destacado a la experiencia, carta con 6 platos, banner promocional de la experiencia, galería de 12 fotos, reseñas de clientes (5★ editables a mano), ubicación con mapa + horarios + contacto.
- **`/experiencia-menu-canario`** — página dedicada al menú degustación canario. Hero con foto `cena-grupo-experiencia.jpeg`, intro narrativo, 9 platos en una sola columna (mobile-first), aviso de bebidas+pan incluidos, precio destacado 39,50 €, CTA de reserva, footer con link a inicio.

### Modal de reserva (`components/ReservaModal.jsx`)

Client component (`"use client"`) que se renderiza en `document.body` vía `createPortal` para evitar problemas de `position: fixed` con ancestros transformados.

- `<ReservaButton>` — botón disparador. Props: `className`, `children`, `tipo` (opcional, etiqueta que aparece en el modal).
- Formulario con 4 campos (todos obligatorios):
  - Número de personas (dropdown 1–12)
  - Fecha (`<input type="date">`, mínimo hoy, default hoy)
  - Hora (dropdown 13:00 → 22:00 cada 30 min, 19 opciones)
  - Email (`<input type="email">`)
- Estados: `form` → `loading` → `success`
- `handleSubmit` ahora mismo es un **mock con `setTimeout(1500)`** — buscar el comentario `TODO: aquí irá la lógica real de envío de reserva` en `ReservaModal.jsx`.
- Cierre con tecla ESC, clic fuera, o botón X.
- Bloquea el scroll del body mientras está abierto.

### Reseñas

- En `app/page.js`, array `resenas` (estático, editable a mano).
- Se decidió **no** integrar la Google Places API (coste y complejidad).
- Hay link "Ver todas las reseñas en Google" que apunta a la ficha real vía constante `URL_GOOGLE_MAPS` (`https://www.google.com/maps?cid=17658005046656573781`).

### Fotos

Todas en `public/img/`. **Importante:** el archivo `public/img/README.md` tiene la tabla maestra de qué foto va en cada `nombre.extension`. Las extensiones son mezcla de `.jpg`, `.jpeg` y `.webp` — respetar siempre lo que dice ese README, no asumir `.jpg` por defecto.

Imágenes clave:
- `logo.png` (idealmente con fondo transparente)
- `hero.jpg` (foto del chuletón laminado, fondo del hero del home)
- `cena-grupo-experiencia.jpeg` (fondo del hero de la página de experiencia)

## Cosas pendientes / TODO

- [ ] **Conectar el formulario de reserva a un backend real**. Opciones a evaluar:
  - **Resend** + API route de Next.js (envío de email a restaurante y cliente). Recomendado por simplicidad.
  - **Formspree** o similar (sin backend, pero menos control).
  - **Supabase** (si en el futuro se quiere panel de gestión de reservas).
  - El punto de inserción es la función `handleSubmit` en `components/ReservaModal.jsx`.
- [ ] Validación adicional en el formulario:
  - Bloquear domingo (cerrado lunes — domingo abierto pero solo a mediodía)
  - Bloquear horas fuera de servicio según día de la semana
  - Validar que la fecha no sea festivo
- [ ] Email de confirmación al cliente (cuando esté el backend).
- [ ] Notificación al restaurante (email o webhook a un canal interno).
- [ ] **Menú hamburguesa móvil** — el nav actual oculta los links en `md:`. En móvil solo se ve el logo y el CTA "Reservar". Hace falta un hamburger menu para los links internos.
- [ ] Página de aviso legal / privacidad (obligatoria en España, especialmente al recoger email).
- [ ] Schema.org `Restaurant` + `AggregateRating` para rich snippets en Google.
- [ ] Open Graph image dedicada (`/og-image.jpg`) para compartir en redes.
- [ ] Sitemap.xml + robots.txt.

## Convenciones que estamos siguiendo

- **Sin TypeScript** — JS plano. No introducir TS sin acordarlo.
- **Sin Next/Image** — usamos `<img>` normal (con `eslint-disable-next-line @next/next/no-img-element` cuando hace falta). Razón: queremos URLs públicas simples en `/img/...` y no complicar con remotePatterns.
- **Server Components por defecto.** Solo `"use client"` cuando hace falta interactividad (modal, etc.).
- **Datos editables (menú, horario, reseñas, galería) están en arrays al principio de `page.js`** para que el dueño los pueda tocar sin saber React.
- **CSS solo con Tailwind.** Clases utilitarias. Sin CSS modules ni styled-components.
- **Comentarios en español** cuando ayudan a alguien sin background técnico (ver `lib/` ya borrado y `components/ReservaModal.jsx`).
- **Mobile-first** — todo el diseño se piensa primero para móvil, luego se escala. La página de experiencia en particular se pensó así (el dueño dijo que se vería mayoritariamente desde móvil).
- **Build limpio.** Al hacer cambios significativos, correr `npm run build` antes de dar nada por terminado. Cada vez que hemos verificado, hemos obtenido `✓ Compiled successfully · Generating static pages (5/5)`.

## Comandos habituales

```bash
npm install           # instalar dependencias
npm run dev           # servidor local en :3000
npm run build         # build de producción
npm run start         # servir el build de producción
```

## Despliegue

Vía Vercel — `vercel.com/new`, importar el repo de GitHub, Vercel detecta Next.js
automáticamente. Sin variables de entorno necesarias actualmente (se eliminó la
integración con Google Places API por coste). Las únicas que harán falta en el
futuro son las del servicio de email (cuando se conecte el formulario de reserva).

## Detalle del dominio / negocio

- **Restaurante:** Roque del Conde — asador en Tenerife.
- **Especialidades:** carnes a la brasa (chuletón, tomahawk, parrilladas) + cocina canaria tradicional (rancho, escaldón, pescado al mojo, etc.).
- **Experiencia destacada:** menú degustación canario de 9 platos por 39,50 € (incluye pan + bebida).
- **Place ID Google (CID):** `17658005046656573781`. El Place ID en formato `ChIJ...` está pendiente de obtener si en algún momento se quiere integrar la API.
- **Teléfono que aparece en la web:** `+34 922 29 07 21` (verificar y actualizar a número real definitivo cuando esté).

---

Si vienes nuevo a este proyecto y vas a editar algo, empieza por leer `README.md` (para el lado del despliegue) y `public/img/README.md` (para entender el sistema de fotos).
