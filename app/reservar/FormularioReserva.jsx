"use client";

import { useState } from "react";
import { enviarReserva } from "../lib/actions";

const HORAS = [];
for (let h = 13; h <= 22; h++) {
  HORAS.push(`${String(h).padStart(2, "0")}:00`);
  if (h < 22) HORAS.push(`${String(h).padStart(2, "0")}:30`);
}

function hoy() {
  return new Date().toISOString().split("T")[0];
}

export default function FormularioReserva() {
  const [form, setForm] = useState({
    personas: "2",
    fecha: hoy(),
    hora: "14:00",
    email: "",
  });
  const [estado, setEstado] = useState("form"); // "form" | "loading" | "exito"

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado("loading");

    const response = await enviarReserva(form);

    if (!response.success) {
      console.error("Error al enviar reserva:", response.error);
      setEstado("form");
      return;
    }

    setEstado("exito");
  }

  if (estado === "exito") {
    return (
      <div className="text-center py-8">
        <p className="text-5xl mb-4">✓</p>
        <p className="font-display text-2xl font-semibold text-bark-800 mb-2">
          ¡Reserva recibida!
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Te enviaremos la confirmación a{" "}
          <span className="font-medium text-bark-700">{form.email}</span>
        </p>
        <a
          href="/"
          className="text-sm text-clay-500 hover:text-clay-600 underline underline-offset-4"
        >
          Volver al inicio
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label className="block text-sm font-medium text-bark-800 mb-1">
          Fecha
        </label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          min={hoy()}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-bark-800 focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
        />
      </div>

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

      <button
        type="submit"
        disabled={estado === "loading"}
        className="w-full rounded-lg bg-clay-500 py-3 text-sm font-semibold text-white hover:bg-clay-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      >
        {estado === "loading" ? "Enviando reserva…" : "Reservar"}
      </button>
    </form>
  );
}
