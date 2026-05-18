import FormularioReserva from "./FormularioReserva";

export const metadata = {
  title: "Reservar mesa — Roque del Conde",
  description: "Reserva tu mesa en Roque del Conde, asador en Tenerife.",
};

export default function PaginaReservar() {
  return (
    <main className="min-h-screen bg-bark-800 flex flex-col items-center px-4 py-12">
      {/* Logo */}
      <a href="/" className="mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/logo.png"
          alt="Roque del Conde"
          className="h-20 w-auto object-contain"
        />
      </a>

      {/* Tarjeta del formulario */}
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl px-6 py-8">
        <h1 className="font-display text-2xl font-semibold text-bark-800 mb-6 text-center">
          Reservar mesa
        </h1>
        <FormularioReserva />
      </div>
    </main>
  );
}
