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
  title: "Prackt — custom websites for small businesses",
  description:
    "Prackt designs and builds custom, fast, easy-to-edit websites for small businesses. Book a discovery call.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${courier.variable}`}>
      <body>{children}</body>
    </html>
  );
}
