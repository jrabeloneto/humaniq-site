import { clientes, depoimentos } from "@/lib/site";
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

        {/* Depoimentos */}
        <Reveal stagger delay={0.05} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {depoimentos.map((d) => (
            <RevealItem
              key={d.nome}
              className="flex flex-col rounded-[var(--radius-card)] border border-mist bg-white p-7 md:p-8"
            >
              <p className="font-display text-[1.3rem] leading-[1.25] text-ink">
                “{d.texto}”
              </p>
              <p className="mt-6 text-sm font-medium text-ink">
                {d.nome}
                <span className="font-normal text-ink/55">
                  {" "}
                  · {d.cargo}, {d.empresa}
                </span>
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal
          stagger
          delay={0.05}
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clientes.map((src) => (
            <RevealItem
              key={src}
              className="flex items-center justify-center rounded-[var(--radius-card)] border border-mist bg-white p-6"
            >
              {/* alt="" = decorativo (nomes dos clientes a confirmar). TODO: mapear nomes reais */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-12 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
