const menu = [
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
const galeria = [
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

const horario = [
  { dia: "Lunes y Martes", horas: "Cerrado" },
  { dia: "Miércoles – Domingo", horas: "13:00 – 23:00" },
];

// Reseñas de clientes (5★).
// Para añadir nuevas: copia el texto desde Google, añade un objeto al array.
// El nombre puede ir abreviado por privacidad (p. ej. "María G.").
const resenas = [
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

// URL pública de tu ficha en Google Maps (para el botón "Ver todas las reseñas").
const URL_GOOGLE_MAPS = "https://share.google/fRxtIyKAeJcGXlDSL";

function StarRow({ rating = 5 }) {
  return (
    <div
      className="flex gap-0.5 text-gold-500"
      aria-label={`${rating} de 5 estrellas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment-50 text-bark-900 font-body">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-parchment-50">
          <a href="#inicio" className="font-display text-2xl tracking-wide">
            Roque del Conde
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li>
              <a href="#carta" className="hover:text-gold-400 transition">
                Carta
              </a>
            </li>
            <li>
              <a
                href="/experiencia-menu-canario"
                className="hover:text-gold-400 transition"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-gold-400 transition">
                Galería
              </a>
            </li>
            <li>
              <a href="#resenas" className="hover:text-gold-400 transition">
                Reseñas
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="hover:text-gold-400 transition">
                Ubicación
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-gold-400 transition">
                Contacto
              </a>
            </li>
          </ul>
          <a
            href="#reservar"
            className="rounded-full border border-parchment-50/70 px-5 py-2 text-sm font-medium transition hover:border-gold-400 hover:text-gold-400"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/70 via-bark-900/55 to-bark-900/85" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-parchment-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            alt="Restaurante Roque del Conde"
            className="mx-auto h-40 w-auto sm:h-52 md:h-60"
          />
          <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Restaurante
            <span className="block italic text-gold-400">Roque del Conde</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-parchment-100 sm:text-lg">
            Disfruta de las mejores carnes a la brasa de leña, recetas tradicionales canarias y un ambiente acogedor en el corazón de Tenerife.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#reservar"
              className="rounded-full bg-clay-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-parchment-50 shadow-lg shadow-bark-900/40 transition hover:bg-clay-600"
            >
              Reservar mesa
            </a>
            <a
              href="#carta"
              className="rounded-full border border-parchment-50/80 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-parchment-50 transition hover:border-gold-400 hover:text-gold-400"
            >
              Ver carta
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-parchment-50/70">
          <a href="#carta" aria-label="Bajar a la carta" className="block animate-bounce">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="paper-texture py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-clay-500">
              Nuestra carta
            </p>
            <h2 className="font-display text-4xl text-bark-800 md:text-5xl">
              Sabores de la tierra y del fuego
            </h2>
            <div className="section-divider mx-auto mt-6 w-40" />
            <p className="mt-6 text-bark-700/80">
              Una selección de platos preparados con producto local: carnes a
              la brasa de leña, papas bonitas, queso de cabra majorera y
              recetas que pasan de fogón en fogón.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menu.map((plato) => (
              <article
                key={plato.nombre}
                className="overflow-hidden rounded-2xl bg-parchment-100 shadow-sm ring-1 ring-bark-900/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={plato.img}
                    alt={plato.nombre}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-bark-900/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                    {plato.etiqueta}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl text-bark-800">
                      {plato.nombre}
                    </h3>
                    <span className="whitespace-nowrap font-display text-lg text-clay-500">
                      {plato.precio}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-bark-700/85">
                    {plato.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm italic text-bark-700/70">
            La carta cambia con la temporada según el producto del mercado.
          </p>
        </div>
      </section>

      {/* BANNER EXPERIENCIA */}
      <section className="bg-bark-800 py-16 text-parchment-100 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <a
            href="/experiencia-menu-canario"
            className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-bark-900 to-bark-800 p-8 ring-1 ring-gold-500/30 transition hover:ring-gold-500/60 sm:p-12"
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="flex-1">
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-400">
                  Experiencia gastronómica
                </p>
                <h2 className="font-display text-3xl leading-tight text-parchment-50 sm:text-4xl md:text-5xl">
                  Menú Canario
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-parchment-100/85 sm:text-lg">
                  Nueve platos emblemáticos de nuestra cocina, en una sola
                  mesa. Una cena para descubrir las islas por el paladar.
                </p>
              </div>
              <div className="flex w-full flex-col items-start gap-4 md:w-auto md:items-end">
                <div className="text-left md:text-right">
                  <p className="text-xs uppercase tracking-[0.3em] text-parchment-100/60">
                    Desde
                  </p>
                  <p className="font-display text-4xl text-gold-400 sm:text-5xl">
                    39,50 €
                  </p>
                  <p className="text-xs text-parchment-100/60">por persona</p>
                </div>
                <span className="rounded-full bg-clay-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-parchment-50 transition group-hover:bg-clay-600 sm:text-sm">
                  Descubrir la experiencia →
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="bg-bark-900 py-24 text-parchment-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-400">
              Galería
            </p>
            <h2 className="font-display text-4xl text-parchment-50 md:text-5xl">
              Nuestra cocina, nuestra casa
            </h2>
            <div className="section-divider mx-auto mt-6 w-40" />
            <p className="mt-6 text-parchment-100/80">
              Un vistazo a los platos del día y al ambiente del restaurante.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galeria.map((foto, i) => (
              <a
                key={i}
                href={foto.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-bark-800"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bark-900/0 transition group-hover:bg-bark-900/30" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="bg-parchment-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-clay-500">
              Reseñas
            </p>
            <h2 className="font-display text-4xl text-bark-800 md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <div className="section-divider mx-auto mt-6 w-40" />
            <div className="mt-6 flex items-center justify-center gap-3 text-bark-700/80">
              <StarRow rating={5} />
              <span className="text-sm">
                Últimas opiniones de 5 estrellas en Google
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resenas.map((r, i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl bg-parchment-50 p-6 shadow-sm ring-1 ring-bark-900/5"
              >
                <StarRow rating={5} />
                <p className="mt-4 text-sm leading-relaxed text-bark-800">
                  “{r.texto}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-bark-900/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-500 font-display text-parchment-50">
                    {r.autor?.[0] ?? "?"}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-bark-800">
                      {r.autor}
                    </p>
                    {r.fecha && (
                      <p className="text-xs text-bark-700/60">{r.fecha}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={URL_GOOGLE_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-bark-700/30 px-6 py-2 text-sm font-medium text-bark-800 transition hover:border-clay-500 hover:text-clay-500"
            >
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* UBICACIÓN / HORARIOS / CONTACTO */}
      <section id="ubicacion" className="bg-bark-800 py-24 text-parchment-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-400">
              Visítanos
            </p>
            <h2 className="font-display text-4xl text-parchment-50 md:text-5xl">
              A los pies del Roque
            </h2>
            <div className="section-divider mx-auto mt-6 w-40" />
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Mapa */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-parchment-50/10">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.6480387133897!2d-16.685777787463405!3d28.096276875861772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9967efff2fcf%3A0xf747f89deeafafb0!2sRestaurante%20Roque%20del%20Conde!5e0!3m2!1ses!2ses!4v1778724859934!5m2!1ses!2ses" 
              width="600" 
              height="450" 
              className="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h3 id="contacto" className="font-display text-2xl text-gold-400">
                  Dirección y contacto
                </h3>
                <p className="mt-4 text-parchment-100/90">
                  Carretera General TF-51, número 67
                  <br />
                  Arona, Tenerife · 38640
                </p>
                <p className="mt-4 text-parchment-100/90">
                  <a href="tel:+34922290721" className="hover:text-gold-400">
                    +34 922 29 07 21
                  </a>
                  <br />
                  <a
                    href="mailto:grupocayle@gmail.com"
                    className="hover:text-gold-400"
                  >
                    grupocayle@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-gold-400">Horarios</h3>
                <ul className="mt-4 divide-y divide-parchment-50/10">
                  {horario.map((h) => (
                    <li
                      key={h.dia}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <span className="font-medium text-parchment-50">
                        {h.dia}
                      </span>
                      <span className="text-parchment-100/80">{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="reservar" className="rounded-2xl bg-bark-900 p-6">
                <h3 className="font-display text-xl text-gold-400">
                  ¿Quieres reservar?
                </h3>
                <p className="mt-2 text-sm text-parchment-100/85">
                  Llámanos o escríbenos. Recomendamos reservar con al menos 24 h
                  de antelación, especialmente para los fines de semana.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+34922290721"
                    className="flex-1 rounded-full bg-clay-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-parchment-50 transition hover:bg-clay-600"
                  >
                    Llamar
                  </a>
                  <a
                    href="https://wa.me/34922290721?text=Hola%2C%20quer%C3%ADa%20reservar%20mesa%20en%20Roque%20del%20Conde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-parchment-50/70 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-parchment-50 transition hover:border-gold-400 hover:text-gold-400"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bark-900 py-10 text-center text-sm text-parchment-100/70">
        <p className="font-display text-lg text-gold-400">Roque del Conde</p>
        <p className="mt-2">Asador · Cocina canaria y nacional · Tenerife</p>
        <p className="mt-4 text-xs text-parchment-100/50">
          © {new Date().getFullYear()} Restaurante Roque del Conde. Todos los
          derechos reservados.
        </p>
      </footer>
    </main>
  );
}
