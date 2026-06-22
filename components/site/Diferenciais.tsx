import { diferenciais } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-royal py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag tone="light">Diferenciais</Tag>
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-white">
                Por que a Humaniq.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-white/80">
              Desenvolvimento humano como diferencial competitivo — com ética,
              método e foco em resultado.
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={0.1} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => (
            <RevealItem
              key={d.titulo}
              className="rounded-[var(--radius-card)] bg-blue/40 p-7 ring-1 ring-inset ring-white/10"
            >
              <h3 className="font-display text-xl text-white">{d.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{d.texto}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
