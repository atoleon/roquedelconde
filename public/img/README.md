# Fotos del restaurante

Guarda **cada foto del chat** en esta carpeta (`public/img/`) usando
**exactamente** estos nombres. El código de la web ya las busca por aquí.

> 💡 Truco para guardarlas rápido en macOS: arrastra cada imagen del chat
> al escritorio, renómbrala con el nombre de la izquierda, y muévela
> luego a `public/img/`.

## Logo

| Nombre del archivo | Qué imagen |
| --- | --- |
| `logo.png` | El logo del restaurante (la imagen cuadrada con la llama naranja, el círculo blanco, la espátula y "Roque del Conde · restaurante" en cursiva blanca) |

> 💡 **Recomendado**: guarda el logo en PNG **con fondo transparente** (no
> negro). La cabecera de la web está sobre la foto del hero, y un fondo
> negro cuadrado quedaría visible. Si solo tienes la versión con fondo
> negro, también funcionará pero se verá un cuadrado negro encima del
> hero. Puedes quitarle el fondo gratis en [remove.bg](https://www.remove.bg/).

## Foto principal (hero)

| Nombre del archivo | Qué foto |
| --- | --- |
| `hero.jpg` | Chuletón cortado en pizarra con sal en cuenco (la primera foto, la del chuletón laminado con el hueso curvado) |

## Carta — 6 platos destacados

| Nombre del archivo | Qué foto |
| --- | --- |
| `chuleton.jpg` | Chuletón a la brasa con pimientos verdes y tomate, sobre pizarra |
| `tomahawk.jpg` | Tomahawk a la brasa con lima y ensalada de col, en plato turquesa |
| `parrillada.jpg` | Parrillada mixta de carnes con verduras a la plancha y patatas fritas |
| `rancho.jpg` | Cazuela de barro con rancho canario (garbanzos con chorizo) y servilleta roja |
| `pescado-mojo.jpg` | Pescado al mojo verde con papas y maíz cocido |
| `calamares.jpg` | Calamares rellenos con salsa de perejil, papas nuevas y col |

## Galería — 12 fotos

| Nombre del archivo | Qué foto |
| --- | --- |
| `g-ensalada-anchoas.jpg` | Ensalada de cogollos con anchoas y pimientos asados en plato azul |
| `g-escaldon.jpg` | Cazuela con escaldón / gofio con queso fresco en dados y cebolla morada |
| `g-chuleton-pimientos.jpg` | Chuletón cortado con pimientos de Padrón y tomate (segunda foto de chuletón) |
| `g-langostinos.jpg` | Langostinos en salsa rosa con perejil, en plato azul |
| `g-solomillo.jpg` | Solomillo a la brasa con parrillada de verduras y limón, plato grande |
| `g-padron.jpg` | Pimientos de Padrón fritos en plato blanco ovalado |
| `g-parrillada-verduras.jpg` | Parrillada de verduras a la brasa sobre tabla negra (pimientos, cebolla, calabacín) |
| `g-vitrina.jpg` | Vitrina expositora con carnes maduradas y quesos canarios bajo campanas de cristal |
| `g-fachada.jpg` | Fachada del restaurante con el cartel "Carnes y pollo a la brasa" |
| `g-interior-1.jpg` | Comedor principal con mesas de madera y lámparas colgantes |
| `g-interior-2.jpg` | Sala interior con arco y pared con fotografía del Roque del Conde |
| `g-terraza.jpg` | Terraza exterior con mesas azules y verdes y vistas al mar |

## Si te falta alguna o quieres cambiarla

Edita `app/page.js`:

- **Carta**: cambia el campo `img` en el array `menu`.
- **Galería**: añade/quita entradas en el array `galeria` (con `src` y `alt`).
- **Hero**: edita el `backgroundImage` de la sección `#inicio`.

Las fotos pueden ser `.jpg`, `.png` o `.webp`. Para que carguen rápido,
ideal entre **800 px y 1600 px** de ancho y **menos de 300 KB** por foto.
Puedes optimizarlas con herramientas gratuitas como [squoosh.app](https://squoosh.app/).
