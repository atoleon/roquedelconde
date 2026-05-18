"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_RDC);
const RESERVAS_EMAIL = process.env.RESERVAS_EMAIL || "";

export async function enviarReserva(form) {
  const { data, error } = await resend.emails.send({
    from: "no-reply@roquedelconde.grupocayle.es",
    to: [`${RESERVAS_EMAIL}`],
    subject: "Nueva Reserva en Roque del Conde",
    html: `
        <p>Personas: ${form.personas}</p>
        <p>Fecha: ${form.fecha}</p>
        <p>Hora: ${form.hora}</p>
        <p>Email: ${form.email}</p>`,
  });

  if (error) {
    //TODO: manejar error de envío (mostrar mensaje al usuario, etc.)
    console.error("Error al enviar reserva:", error);
    return { success: false, error };
  }

    return { success: true, data };
}
