import { metodo } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const entregaveis = [
  "Mapa da estrutura e da cultura atual",
  "Plano de ação priorizado e sob medida",
  "Rituais e lideranças em operação",
  "Indicadores acompanhados no tempo",
];

export default function ComoTrabalhamos() {
  return (
    <section id="metodo" className="bg-royal py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag tone="light">Método</Tag>
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.1rem,5vw,4rem)] text-white">
                Um método, quatro tempos.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-white/70">
              Cada etapa entrega algo concreto. Nada de diagnóstico que dorme na
              gaveta — o plano nasce pra ser implementado com a sua liderança.
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={0.1} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metodo.map((m, i) => (
            <RevealItem
              key={m.n}
              className="flex flex-col rounded-[var(--radius-card)] bg-blue/40 p-7 ring-1 ring-inset ring-white/10"
            >
              <h3 className="font-display text-2xl text-white">{m.titulo}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                {m.texto}
              </p>
              <div className="mt-6 border-t border-white/15 pt-4">
                <span className="kicker text-sky">Você sai com</span>
                <p className="mt-1.5 text-sm leading-snug text-white">
                  {entregaveis[i]}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
