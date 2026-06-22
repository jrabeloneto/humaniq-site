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
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">
                Sete frentes, um só cuidado.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Da seleção à saúde mental — soluções integradas para pessoas e
              resultados, sempre sob medida para a sua empresa.
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={0.05} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {servicos.map((s) => (
            <RevealItem
              key={s.nome}
              className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 md:p-8"
            >
              <h3 className="font-display text-[1.45rem] leading-tight text-ink">
                {s.nome}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/65">
                {s.resumo}
              </p>
              <ul className="mt-6 grid gap-2.5 border-t border-mist pt-5">
                {s.itens.map((it) => (
                  <li key={it} className="flex gap-3 text-[0.92rem] leading-snug text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {it}
                  </li>
                ))}
              </ul>
              {s.nota && (
                <p className="mt-5 text-xs leading-relaxed text-ink/45">{s.nota}</p>
              )}
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
