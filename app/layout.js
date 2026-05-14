import "./globals.css";

export const metadata = {
  title: "Restaurante Roque del Conde · Asador canario en Tenerife",
  description:
    "Asador de carnes a la brasa y platos típicos canarios y nacionales, a los pies del Roque del Conde. Reserva tu mesa.",
  openGraph: {
    title: "Restaurante Roque del Conde",
    description:
      "Asador de carnes y cocina tradicional canaria en Tenerife. Reservas online.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
