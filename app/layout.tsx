import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";

// Display — Archivo (grotesca forte, pesos altos)
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

// Corpo — Hanken Grotesk (limpa, calorosa)
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://humaniq.net.br"),
  title: {
    default: "Humaniq · Consultoria de RH em Manaus",
    template: "%s · Humaniq",
  },
  description:
    "Há mais de 18 anos estruturando gestão de pessoas, liderança e cultura para empresas que querem crescer com consistência — sem perder o lado humano no caminho.",
  keywords: [
    "consultoria de RH",
    "recursos humanos Manaus",
    "gestão de pessoas",
    "desenvolvimento de lideranças",
    "ESG",
    "Amazonas",
  ],
  authors: [{ name: "Humaniq Consultoria de RH" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Humaniq Consultoria de RH",
    title: "Humaniq · A inteligência de cuidar de pessoas",
    description:
      "Consultoria de RH em Manaus. Gestão de pessoas, liderança e cultura com técnica e humanidade.",
    // TODO: idealmente uma OG image 1200x630 dedicada; por ora, o badge da marca
    images: ["/logo-badge.png"],
  },
  icons: { icon: "/logo-badge.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
