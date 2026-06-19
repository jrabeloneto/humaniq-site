import { ceo, contato } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

export default function Lideranca() {
  return (
    <section id="lideranca" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Tag>Liderança</Tag>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Retrato — TODO: foto oficial da Marcela (4:5) */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)] bg-royal">
              <div className="absolute inset-0 flex items-end p-7">
                <span className="font-display-black text-[9rem] leading-[0.8] text-white/10" aria-hidden>
                  MV
                </span>
              </div>
              <span className="kicker absolute left-7 top-7 text-white/55">
                Retrato · a inserir
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <h2 className="font-display-black text-[clamp(2.6rem,6vw,4.6rem)] text-ink">
              {ceo.nome}
            </h2>
            <p className="kicker mt-3 text-blue">{ceo.cargo}</p>

            <div className="mt-7 rounded-[var(--radius-card)] bg-mist p-7 md:p-8">
              <p className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.12] text-ink">
                “{ceo.quote}”
              </p>
            </div>

            <div className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-ink/80">
              {ceo.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {ceo.bandeiras.map((b) => (
                <li
                  key={b}
                  className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink"
                >
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={contato.linkedinCeo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              Perfil no LinkedIn ↗
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
