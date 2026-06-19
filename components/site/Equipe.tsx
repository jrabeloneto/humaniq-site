import { equipe } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

function iniciais(nome: string) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Equipe() {
  return (
    <section id="equipe" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>Equipe</Tag>
              <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2.1rem,5vw,4rem)] text-ink">
                Quem está por trás.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Um time pequeno, próximo e técnico — que assina o que entrega.
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={0.05} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((p) => (
            <RevealItem
              key={p.nome}
              className="flex items-start gap-4 rounded-[var(--radius-card)] border border-mist bg-white p-6"
            >
              <span
                className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-royal text-lg text-white"
                aria-hidden
              >
                {iniciais(p.nome)}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">{p.nome}</h3>
                <p className="kicker mt-1 text-blue">{p.cargo}</p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/65">
                  {p.bio}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
