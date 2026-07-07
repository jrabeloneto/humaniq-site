import Image from "next/image";
import { equipe } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

export default function Equipe() {
  return (
    <section id="equipe" className="bg-mist py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>Time</Tag>
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">
                Quem faz a Humaniq acontecer.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Gente que cuida de gente — o time por trás de cada processo,
              diagnóstico e conversa.
            </p>
          </div>
        </Reveal>

        <Reveal
          stagger
          delay={0.05}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-3xl"
        >
          {equipe.map((p) => (
            <RevealItem key={p.nome} className="group">
              <div className="overflow-hidden rounded-[var(--radius-card)] bg-white">
                <Image
                  src={p.foto}
                  alt={`${p.nome}, ${p.cargo} na Humaniq`}
                  width={760}
                  height={1140}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display mt-4 text-xl text-ink">{p.nome}</h3>
              <p className="kicker mt-1 text-blue">{p.cargo}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
