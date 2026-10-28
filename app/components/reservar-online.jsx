import { useState } from "react";
import { enviarReserva } from "../lib/actions";

// Genera los tramos horarios de 13:00 a 22:00 cada 30 minutos
const HORAS = [];
for (let h = 13; h <= 22; h++) {
  HORAS.push(`${String(h).padStart(2, "0")}:00`);
  if (h < 22) HORAS.push(`${String(h).padStart(2, "0")}:30`);
}

// Días que el restaurante está cerrado (0 = domingo, 1 = lunes, 2 = martes…)
const DIAS_CERRADO = [1, 2];
// Cuántos días hacia delante se puede reservar
const DIAS_RESERVABLES = 30;

// Convierte una fecha a "AAAA-MM-DD" usando la hora local (no UTC)
function aISO(fecha) {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// Lista de días abiertos desde hoy, saltando los días de cierre
function fechasDisponibles() {
  const fechas = [];
  const dia = new Date();
  for (let i = 0; i < DIAS_RESERVABLES; i++) {
    if (!DIAS_CERRADO.includes(dia.getDay())) {
      const texto = dia.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      fechas.push({
        valor: aISO(dia),
        texto: texto.charAt(0).toUpperCase() + texto.slice(1),
      });
    }
    dia.setDate(dia.getDate() + 1);
  }
  return fechas;
}

function primerDiaDisponible() {
  return fechasDisponibles()[0].valor;
}

export default function ReservarOnline({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    personas: "2",
    fecha: primerDiaDisponible(),
    hora: "14:00",
    email: "",
  });
  const [estado, setEstado] = useState("form"); // "form" | "loading" | "exito"

  if (!isOpen) return null;

  const fechas = fechasDisponibles();

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado("loading");

    const response = await  enviarReserva(form);

    if (!response.success) {
      // TODO: manejar error de envío (mostrar mensaje al usuario, etc.)
      console.error("Error al enviar reserva:", response.error);
      setEstado("form");
      return;
    } 

    setEstado("exito");
  }

  function handleCerrar() {
    setEstado("form");
    setForm({
      name: "",
      personas: "2",
      fecha: primerDiaDisponible(),
      hora: "14:00",
      email: "",
    });
    onClose?.();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => e.target === e.currentTarget && handleCerrar()}
    >
      <div className="mx-4 w-full max-w-md rounded-xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="font-display text-lg font-semibold text-bark-800">
            Reservar mesa
          </h2>
          <button
            onClick={handleCerrar}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="px-6 py-6">
          {estado === "exito" ? (
            <div className="text-center py-6">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-display text-xl font-semibold text-bark-800 mb-2">
                ¡Reserva recibida!
              </p>
              <p className="text-sm text-gray-500">
                Te enviaremos la confirmación a{" "}
                <span className="font-medium text-bark-700">{form.email}</span>
              </p>
              <button
                onClick={handleCerrar}
                className="mt-6 w-full rounded-lg bg-clay-500 py-3 text-sm font-semibold text-white hover:bg-clay-600 transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-bark-800 mb-1">
                  Nombre
                </label>
                <input
                  type="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-bark-800 placeholder-gray-400 focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                />
              </div>

              {/* Número de personas */}
              <div>
                <label className="block text-sm font-medium text-bark-800 mb-1">
                  Número de personas
                </label>
                <select
                  name="personas"
                  value={form.personas}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-bark-800 focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fecha */}
              <div>
                <label className="block text-sm font-medium text-bark-800 mb-1">
                  Fecha
                </label>
                <select
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-bark-800 focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                >
                  {fechas.map((f) => (
                    <option key={f.valor} value={f.valor}>
                      {f.texto}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hora */}
              <div>
                <label className="block text-sm font-medium text-bark-800 mb-1">
                  Hora
                </label>
                <select
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-bark-800 focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                >
                  {HORAS.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-bark-800 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-bark-800 placeholder-gray-400 focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={estado === "loading"}
                className="w-full rounded-lg bg-clay-500 py-3 text-sm font-semibold text-white hover:bg-clay-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {estado === "loading" ? "Enviando reserva…" : "Reservar"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
