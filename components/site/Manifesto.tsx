import { quemSomos, missao, visao, valores } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function Manifesto() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Tag>Sobre</Tag>
            <h2 className="font-display mt-6 text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">
              Ambientes de trabalho mais saudáveis, produtivos e humanos.
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7 lg:pt-3">
            <p className="text-lg leading-relaxed text-ink/80">{quemSomos}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {valores.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-mist bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Missão / Visão */}
        <Reveal stagger delay={0.1} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <RevealItem className="rounded-[var(--radius-card)] bg-royal p-8 text-white md:p-10">
            <Tag tone="light">Missão</Tag>
            <p className="font-display mt-5 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.15]">
              {missao}
            </p>
          </RevealItem>
          <RevealItem className="rounded-[var(--radius-card)] bg-mist p-8 md:p-10">
            <Tag>Visão</Tag>
            <p className="font-display mt-5 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.15] text-ink">
              {visao}
            </p>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
