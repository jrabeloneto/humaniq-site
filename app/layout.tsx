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
    default: "Humaniq · Gestão de Pessoas e Saúde Mental em Manaus",
    template: "%s · Humaniq",
  },
  description:
    "Consultoria que estrutura gestão de pessoas, liderança e saúde mental para empresas do Amazonas. Cultura e bem-estar em produtividade, retenção e conformidade com a NR-1.",
  keywords: [
    "consultoria de RH Manaus",
    "saúde mental no trabalho",
    "NR-1 riscos psicossociais",
    "gestão de pessoas",
    "bem-estar corporativo",
    "desenvolvimento de lideranças",
    "Amazonas",
  ],
  authors: [{ name: "Humaniq Consultoria" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://humaniq.net.br",
    siteName: "Humaniq Consultoria",
    title: "Humaniq · A inteligência de cuidar de pessoas",
    description:
      "Gestão de pessoas, saúde mental e bem-estar corporativo em Manaus/AM — com técnica e humanidade.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Humaniq Consultoria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humaniq · A inteligência de cuidar de pessoas",
    description:
      "Gestão de pessoas, saúde mental e bem-estar corporativo em Manaus/AM.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Humaniq Consultoria",
  description:
    "Consultoria em gestão de pessoas, saúde mental, bem-estar corporativo e desenvolvimento humano.",
  url: "https://humaniq.net.br",
  email: "marcela.viana@humaniq.net.br",
  telephone: "+55-92-98472-7761",
  areaServed: "Amazonas, Brasil",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  founder: { "@type": "Person", name: "Marcela Viana", jobTitle: "CEO · Psicóloga" },
  sameAs: [
    "https://www.instagram.com/humaniqq/",
    "https://www.linkedin.com/in/marcela-viana-970075ab/",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
