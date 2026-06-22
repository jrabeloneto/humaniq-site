import { clientes } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function Clientes() {
  return (
    <section id="clientes" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>Clientes</Tag>
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">
                Empresas que confiam na Humaniq.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Organizações que já cuidam da sua gente com a gente — do diagnóstico
              à transformação da cultura.
            </p>
          </div>
        </Reveal>

        <Reveal
          stagger
          delay={0.05}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clientes.map((src, i) => (
            <RevealItem
              key={src}
              className="flex items-center justify-center rounded-[var(--radius-card)] border border-mist bg-white p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Cliente ${i + 1}`}
                className="h-12 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
