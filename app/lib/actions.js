"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_RDC);
const RESERVAS_EMAIL = process.env.RESERVAS_EMAIL || "";

export async function enviarReserva(form) {
  // send email to restaurant with reservation details
  const { dataGuest, errorGuest } = await resend.emails.send({
    from: "no-reply@roquedelconde.grupocayle.es",
    to: [`${RESERVAS_EMAIL}`],
    subject: "Nueva Reserva en Roque del Conde",
    html: `
        <p>Personas: ${form.personas}</p>
        <p>Fecha: ${form.fecha}</p>
        <p>Hora: ${form.hora}</p>
        <p>Email: ${form.email}</p>`,
  });

  if (errorGuest) {
    //TODO: manejar error de envío (mostrar mensaje al usuario, etc.)
    console.error("Error al enviar reserva al cliente:", errorGuest);
    return { success: false, error: errorGuest };
  }

  // send confirmation email to guest
  const { dataRest, errorRest } = await resend.emails.send({
    from: "no-reply@roquedelconde.grupocayle.es",
    to: [`${form.email}`],
    template: {
      id: "reserva_rdc",
      variables: {
        GUESTS_NUMBER: form.personas,
        DATE: form.fecha,
        TIME: form.hora,
        CUSTOMER_NAME: form.name,
      },
    },
  });

  if (errorRest) {
    //TODO: manejar error de envío (mostrar mensaje al usuario, etc.)
    console.error("Error al enviar reserva al restaurante:", errorRest);
    return { success: false, errorRest };
  }

  console.log("Reserva enviada con éxito:", dataRest);

  return { success: true, data: dataRest };
}
