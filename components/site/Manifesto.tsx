import { pilares, sobre } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function Manifesto() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Tag>Sobre</Tag>
          <h2 className="font-display mt-6 max-w-[18ch] text-[clamp(2.1rem,5vw,4rem)] text-ink">
            Empresas não crescem <span className="text-blue">apesar</span> das
            pessoas — crescem <span className="text-blue">por causa</span> delas.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              {sobre.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Card-citação azul */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-royal p-8 text-white md:p-10">
              <p className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1]">
                “Não entregamos um relatório bonito e vamos embora — ficamos até a
                mudança virar rotina.”
              </p>
              <p className="mt-8 text-sm text-white/60">{sobre.nota}</p>
            </div>
          </Reveal>
        </div>

        {/* Pilares */}
        <Reveal stagger delay={0.1} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pilares.map((p) => (
            <RevealItem
              key={p.titulo}
              className="rounded-[var(--radius-card)] border border-mist bg-white p-7 transition-colors hover:border-blue"
            >
              <h3 className="font-display text-2xl text-ink">{p.titulo}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/65">
                {p.texto}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
