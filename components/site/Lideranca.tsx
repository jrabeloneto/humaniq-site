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

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Foto da CEO — extraída do portfólio. TODO: confirmar uso/licença */}
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[var(--radius-card)] bg-mist">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ceo.foto}
                alt={`${ceo.nome}, ${ceo.cargo}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <h2 className="font-display-black text-[clamp(2.6rem,6vw,4.4rem)] text-ink">
              {ceo.nome}
            </h2>
            <p className="kicker mt-3 text-blue">{ceo.cargo}</p>

            <div className="mt-7 rounded-[var(--radius-card)] bg-royal p-7 text-white md:p-8">
              <p className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.15]">
                {ceo.stat}
              </p>
            </div>

            <div className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-ink/80">
              {ceo.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {ceo.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink"
                >
                  {h}
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
