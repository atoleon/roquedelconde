export const menu = [
  {
    nombre: "Chuletón de vaca madurada",
    descripcion:
      "Pieza de vaca madurada, asada a la brasa y servida en pizarra caliente con sal en escamas.",
    precio: "Según peso",
    etiqueta: "Asador",
    img: "/img/chuleton.jpg",
  },
  {
    nombre: "Tomahawk a la brasa",
    descripcion:
      "Imponente corte de ternera con hueso largo, marcado a fuego vivo y acompañado de ensalada fresca y lima.",
    precio: "Según peso",
    etiqueta: "Asador",
    img: "/img/tomahawk.jpg",
  },
  {
    nombre: "Parrillada de carnes a la brasa",
    descripcion:
      "Surtido de carnes de la casa con chorizo, morcilla, costillas y verduras a la parrilla. Para compartir.",
    precio: "Para 2 pers.",
    etiqueta: "Asador",
    img: "/img/parrillada.jpg",
  },
  {
    nombre: "Garbanzas",
    descripcion:
      "Guiso tradicional de garbanzos con carne, chorizo y verduras. Receta de toda la vida.",
    precio: "Plato del día",
    etiqueta: "Canario",
    img: "/img/rancho.jpg",
  },
  {
    nombre: "Papas, costillas y piña",
    descripcion:
      "Guiso típico canario elaborado con papas de la tierra, costillas de cerdo saladas y piña dulce. Un clásico que no puede faltar.",
    precio: "Según mercado",
    etiqueta: "Canario",
    img: "/img/pescado-mojo.jpg",
  },
  {
    nombre: "Chocos a la plancha",
    descripcion:
      "Clásico choco a la plancha con mojo verde, tan sensillo como delicioso.",
    precio: "Especialidad",
    etiqueta: "Mar",
    img: "/img/calamares.jpg",
  },
];

// Galería — fotos de platos y del local.
// Los archivos deben estar en public/img/ con estos nombres exactos.
export const galeria = [
  { src: "/img/g-ensalada-anchoas.jpg", alt: "Ensalada de cogollos con anchoas y pimientos asados" },
  { src: "/img/g-escaldon.jpg", alt: "Escaldón de gofio con queso fresco y cebolla morada" },
  { src: "/img/g-chuleton-pimientos.jpg", alt: "Chuletón a la brasa con pimientos de Padrón" },
  { src: "/img/g-langostinos.jpg", alt: "Langostinos en salsa" },
  { src: "/img/g-solomillo.jpg", alt: "Solomillo a la brasa con parrillada de verduras" },
  { src: "/img/g-padron.jpg", alt: "Pimientos de Padrón fritos" },
  { src: "/img/g-parrillada-verduras.jpg", alt: "Parrillada de verduras a la brasa" },
  { src: "/img/g-vitrina.jpg", alt: "Vitrina de carnes maduradas y quesos canarios" },
  { src: "/img/g-fachada.jpg", alt: "Fachada del restaurante Roque del Conde" },
  { src: "/img/g-interior-1.jpg", alt: "Comedor principal de madera" },
  { src: "/img/g-interior-2.jpg", alt: "Sala interior con arco" },
  { src: "/img/g-terraza.jpg", alt: "Terraza exterior con vistas" },
];

export const horario = [
  { dia: "Lunes y Martes", horas: "Cerrado" },
  { dia: "Miércoles – Domingo", horas: "13:00 – 23:00" },
];

// Reseñas de clientes (5★).
// Para añadir nuevas: copia el texto desde Google, añade un objeto al array.
// El nombre puede ir abreviado por privacidad (p. ej. "María G.").
export const resenas = [
  {
    autor: "Inmius Lp",
    texto:
      "Hemos acudido a este local por las buenas reseñas y son todas ciertas. Hemos comido de maravilla y nos han atendido estupendamente. Para recomendar 100 %.",
  },
  {
    autor: "Alexandra Biehler",
    texto:
      "En la tarde de hoy nos hemos sentido muy atendidos y satisfechos con Aitor, excelente comida, y ambiente brutal.",
  },
  {
    autor: "Angelo cavallo",
    texto:
      "Cena par quattro con la grigliata mista , una buontà , consigliatissimo",
  },
];