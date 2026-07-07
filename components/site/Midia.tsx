import { midia, videoInstitucional } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

export default function Midia() {
  return (
    <section id="midia" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag>Mídia</Tag>
              <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-ink">
                A Humaniq na mídia.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Presença constante em TV, rádio, podcasts e revistas — levando saúde
              mental e gestão de pessoas para o debate público.
            </p>
          </div>
        </Reveal>

        {/* Vídeo institucional (vertical) */}
        <Reveal delay={0.05} className="mt-12">
          <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[var(--radius-card)] bg-ink">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/midia/m17.jpg"
              className="w-full"
            >
              <source src={videoInstitucional} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
          <p className="mt-4 text-center text-sm text-ink/55">
            Conheça a Humaniq — dê o play.
          </p>
        </Reveal>

        {/* Galeria de imprensa — masonry */}
        <Reveal delay={0.1}>
          <p className="kicker mt-14 text-blue">Na imprensa</p>
          <div className="mt-6 columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
            {midia.map((m) => (
              <figure
                key={m.src}
                className="overflow-hidden rounded-[var(--radius-card)] bg-mist break-inside-avoid"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-500 hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
