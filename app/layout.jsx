import { Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-print",
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-type",
  display: "swap",
});

export const metadata = {
  title: "Hammerwell Piano Care — tuning, regulation and repair",
  description:
    "Piano tuning, regulation and repair at home, school or venue. Every visit ends with a written service card. (Fictional demo business.)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${courier.variable}`}>
      <body>{children}</body>
    </html>
  );
}
