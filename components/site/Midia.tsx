import Image from "next/image";
import { midia } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const PLACEHOLDERS = 6;

function Camera() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export default function Midia() {
  const temFotos = midia.length > 0;

  return (
    <section id="midia" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>Mídia</Tag>
              <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">
                A Humaniq por aí.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Palestras, workshops e ações in company — os bastidores de quem
              cuida de gente todos os dias.
            </p>
          </div>
        </Reveal>

        {temFotos ? (
          <Reveal stagger delay={0.05} className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {midia.map((m, i) => (
              <RevealItem
                key={m.src}
                className={`relative overflow-hidden rounded-[var(--radius-card)] bg-mist ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image src={m.src} alt={m.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
              </RevealItem>
            ))}
          </Reveal>
        ) : (
          <Reveal stagger delay={0.05} className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: PLACEHOLDERS }).map((_, i) => (
              <RevealItem
                key={i}
                className={`flex flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-line ${
                  i === 0 ? "bg-royal text-white/70 sm:row-span-2 sm:aspect-[3/4]" : "bg-mist text-ink/35"
                } aspect-[4/3]`}
              >
                <Camera />
                <span className="text-xs font-medium tracking-wide">Foto em breve</span>
              </RevealItem>
            ))}
          </Reveal>
        )}

        {!temFotos && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-ink/40">
              {/* TODO: enviar fotos para /public/midia e listá-las em lib/site.ts (midia[]) */}
              Espaço reservado para as fotos da Humaniq — em breve.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
