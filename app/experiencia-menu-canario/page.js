export const metadata = {
  title:
    "Experiencia Menú Canario · Restaurante Roque del Conde",
  description:
    "Nueve platos emblemáticos de la cocina canaria en un mismo menú. Una cena para descubrir las islas por el paladar, en Tenerife. 39,50 € por persona.",
  openGraph: {
    title: "Experiencia Menú Canario · Roque del Conde",
    description:
      "Una cena por los sabores tradicionales de Canarias. 9 platos · 39,50 € por persona.",
    type: "website",
    locale: "es_ES",
  },
};

const platos = [
  {
    nombre: "Pimientos de Padrón",
    img: "/img/pimientos-de-padron.webp",
    descripcion:
      "Los pimientos de Padrón se cultivan con éxito en las islas gracias al clima subtropical. Además de la tradicional tapa frita con sal gorda, en Canarias se utilizan ampliamente para preparar el popular mojo verde de pimientos de Padrón, ideal para acompañar papas arrugadas, carnes y pescados.",
  },
  {
    nombre: "Garbanzas",
    img: "/img/garbanzas.jpg",
    descripcion:
      "Las garbanzas canarias son un contundente y tradicional guiso de cuchara de las Islas Canarias, que destaca por el uso de una variedad local de garbanzo más grande, suave y blanca. Se cocina a fuego lento con carnes de cerdo (costillas saladas, panceta y chorizo) y un característico majado de especias.",
  },
  {
    nombre: "Escaldón",
    img: "/img/escaldon.jpeg",
    descripcion:
      "El escaldón de gofio es un plato tradicional canario que consiste en mezclar harina de gofio (cereales tostados) con caldo hirviendo de carne o pescado. Se remueve hasta formar una masa espesa y reconfortante, que suele comerse acompañada de cebolla roja, mojo y queso.",
  },
  {
    nombre: "Atún en mojo",
    img: "/img/atun-mojo.jpg",
    descripcion:
      "El atún en mojo canario es un plato tradicional de las islas donde el pescado fresco (generalmente en lomos o rodajas) se cocina y se impregna del emblemático mojo rojo. Resulta en un bocado de textura jugosa y sabor intenso, donde destacan las especias, el ajo y el aceite de oliva.",
  },
  {
    nombre: "Choco a la plancha",
    img: "/img/choco.jpg",
    descripcion:
      "El choco a la plancha en Canarias es una elaboración sencilla y tradicional donde la sepia fresca se cocina a la parrilla o sartén bien caliente. Se caracteriza por su textura tierna y carnosa, un sabor a mar ligeramente ahumado y se sirve tradicionalmente con ajo, perejil y mojo canario.",
  },
  {
    nombre: "Papas, costillas y piña",
    img: "/img/papas-costillas.jpeg",
    descripcion:
      "Las papas, costillas y piñas es uno de los platos más representativos y reconfortantes de la gastronomía canaria. Consiste en un guiso tradicional donde se combinan costillas de cerdo (generalmente saladas), papas canarias y piñas de millo (mazorcas de maíz).",
  },
  {
    nombre: "Carne de cabra",
    img: "/img/cabra.jpeg",
    descripcion:
      "La carne de cabra en Canarias es un producto estrella de su gastronomía tradicional. Es una carne roja, magra y de sabor muy intenso, guisada a fuego lento hasta quedar tierna y jugosa.",
  },
  {
    nombre: "Papas arrugadas",
    img: "/img/papas-arrugadas.webp",
    descripcion:
      "Las papas arrugadas son un plato estrella de la gastronomía canaria. Consisten en papas pequeñas y tiernas hervidas con su piel en agua muy salada. Al evaporarse el agua, queda una capa de sal cristalizada en el exterior y una textura arrugada, acompañándose tradicionalmente con el clásico mojo picón.",
  },
  {
    nombre: "Quesillo",
    img: "/img/quesillo.webp",
    descripcion:
      "El quesillo canario es un postre tradicional de las Islas Canarias muy similar al flan, pero de textura más densa, esponjosa y cremosa. Se elabora principalmente a base de huevos, leche condensada y leche entera o evaporada, y destaca por no llevar queso entre sus ingredientes a pesar de su nombre.",
  },
];

export default function ExperienciaMenuCanario() {
  return (
    <main className="min-h-screen bg-parchment-50 text-bark-900 font-body">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-parchment-50 sm:px-6 sm:py-6">
          <a href="/" className="font-display text-xl tracking-wide sm:text-2xl">
            Roque del Conde
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li>
              <a href="/" className="hover:text-gold-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#carta" className="hover:text-gold-400 transition">
                Carta
              </a>
            </li>
            <li>
              <a href="/#ubicacion" className="hover:text-gold-400 transition">
                Ubicación
              </a>
            </li>
          </ul>
          <a
            href="#reservar"
            className="rounded-full border border-parchment-50/70 px-4 py-2 text-xs font-medium transition hover:border-gold-400 hover:text-gold-400 sm:px-5 sm:text-sm"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/cena-grupo-experiencia.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/75 via-bark-900/65 to-bark-900/90" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-parchment-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            alt="Restaurante Roque del Conde"
            className="mx-auto mb-6 h-28 w-auto sm:h-36 md:h-44"
          />
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-400 sm:text-sm">
            Una experiencia gastronómica
          </p>
          <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
            Experiencia
            <span className="block italic text-gold-400">Menú Canario</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-parchment-100 sm:text-lg">
            Nueve platos para descubrir las islas por el paladar.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="#reservar"
              className="rounded-full bg-clay-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-parchment-50 shadow-lg shadow-bark-900/40 transition hover:bg-clay-600"
            >
              Reservar experiencia
            </a>
            <a
              href="#menu"
              className="text-xs uppercase tracking-[0.3em] text-parchment-100/80 transition hover:text-gold-400"
            >
              Ver el menú ↓
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="paper-texture py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-clay-500">
            La experiencia
          </p>
          <h2 className="font-display text-3xl text-bark-800 sm:text-4xl md:text-5xl">
            Una cena para descubrir Canarias
          </h2>
          <div className="section-divider mx-auto mt-6 w-32" />

          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-bark-800/90 sm:text-lg sm:leading-[1.7]">
            <p>
              Hemos juntado en una misma mesa <strong>nueve platos</strong> con
              los que se han criado generaciones de canarios. Los que se cocinan
              en las casas, los que pasan de madres a hijas, los que aparecen
              en cualquier fiesta de pueblo.
            </p>
            <p>
              Una experiencia pensada tanto para quien <strong>visita las
              islas por primera vez</strong> y quiere conocerlas a través de
              su cocina, como para el canario que quiere volver, por una noche,
              a los sabores de toda la vida.
            </p>
            <p className="font-display text-xl italic text-clay-500 sm:text-2xl">
              Mejor en compañía. Mejor sin prisas.
            </p>
          </div>
        </div>
      </section>

      {/* MENÚ */}
      <section id="menu" className="bg-parchment-100 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-clay-500">
              El menú
            </p>
            <h2 className="font-display text-3xl text-bark-800 sm:text-4xl md:text-5xl">
              Nueve sabores, una sola mesa
            </h2>
            <div className="section-divider mx-auto mt-6 w-32" />
          </div>

          <ol className="space-y-12 sm:space-y-16">
            {platos.map((plato, i) => (
              <li
                key={plato.nombre}
                className="overflow-hidden rounded-3xl bg-parchment-50 shadow-sm ring-1 ring-bark-900/5"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-bark-800 sm:aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={plato.img}
                    alt={plato.nombre}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl leading-none text-gold-500 sm:text-5xl"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl text-bark-800 sm:text-3xl">
                      {plato.nombre}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-bark-800/85 sm:text-[17px] sm:leading-[1.7]">
                    {plato.descripcion}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUYE */}
      <section className="bg-parchment-50 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-2xl border border-dashed border-clay-400/40 bg-parchment-100 p-6 text-center sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-clay-500">
              El menú incluye
            </p>
            <p className="mt-3 font-display text-xl text-bark-800 sm:text-2xl">
              Pan recién horneado y bebida a elegir
            </p>
            <p className="mt-3 text-sm text-bark-700/80 sm:text-base">
              Agua · cerveza · o vino de la tierra
            </p>
          </div>
        </div>
      </section>

      {/* PRECIO */}
      <section className="bg-bark-900 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="rounded-3xl bg-gradient-to-b from-bark-800 to-bark-900 p-8 text-center text-parchment-50 ring-1 ring-gold-500/30 sm:p-12">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-400">
              Precio de la experiencia
            </p>
            <div className="my-2 flex items-start justify-center gap-1 font-display leading-none text-parchment-50">
              <span className="mt-3 text-3xl sm:text-4xl">€</span>
              <span className="text-7xl sm:text-8xl md:text-9xl">39,50</span>
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-parchment-100/80">
              por persona · IVA incluido
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gold-500/40" />
            <p className="mt-6 text-sm leading-relaxed text-parchment-100/85 sm:text-base">
              9 platos · pan · bebida (agua, cerveza o vino de la tierra)
            </p>
          </div>
        </div>
      </section>

      {/* CTA RESERVAR */}
      <section id="reservar" className="bg-bark-900 pb-20 pt-4 text-parchment-50">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            ¿Te vienes a vivirla?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-parchment-100/85 sm:text-lg">
            Reserva tu mesa y déjate guiar por los sabores de las islas. Lo
            mejor es venir con tiempo — esto no es para tener prisa.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+34922000000"
              className="rounded-full bg-clay-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-parchment-50 shadow-lg shadow-bark-900/40 transition hover:bg-clay-600"
            >
              Llamar para reservar
            </a>
            <a
              href="https://wa.me/34922000000?text=Hola%2C%20quer%C3%ADa%20reservar%20la%20Experiencia%20Men%C3%BA%20Canario"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-parchment-50/80 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-parchment-50 transition hover:border-gold-400 hover:text-gold-400"
            >
              Reservar por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-xs text-parchment-100/60">
            Recomendamos reservar con al menos 24 h de antelación.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bark-900 border-t border-parchment-50/10 py-10 text-center text-sm text-parchment-100/70">
        <p className="font-display text-lg text-gold-400">Roque del Conde</p>
        <p className="mt-2">Asador · Cocina canaria y nacional · Tenerife</p>
        <p className="mt-4 text-xs">
          <a href="/" className="hover:text-gold-400">← Volver al inicio</a>
        </p>
      </footer>
    </main>
  );
}
