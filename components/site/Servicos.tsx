import { servicos } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-mist py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>Serviços</Tag>
              <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2.1rem,5vw,4rem)] text-ink">
                Seis frentes que se conectam.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Você começa por onde dói mais — e cada frente puxa a próxima. Não é
              um cardápio solto; é um sistema.
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={0.05} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <RevealItem
              key={s.n}
              className="group flex flex-col rounded-[var(--radius-card)] bg-white p-7 transition-colors duration-300 hover:bg-royal"
            >
              <h3 className="font-display text-[1.45rem] leading-tight text-ink transition-colors group-hover:text-white">
                {s.nome}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/65 transition-colors group-hover:text-white/75">
                {s.desc}
              </p>
              <div className="mt-6 border-t border-mist pt-4 transition-colors group-hover:border-white/20">
                <span className="kicker text-blue transition-colors group-hover:text-sky">
                  O que você leva
                </span>
                <p className="mt-1.5 text-[0.95rem] leading-snug text-ink transition-colors group-hover:text-white">
                  {s.leva}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
