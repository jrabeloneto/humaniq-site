"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ceo, contato } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Lideranca() {
  const [mais, setMais] = useState(false);

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
              <Image
                src={ceo.foto}
                alt={`${ceo.nome}, ${ceo.cargo}`}
                width={560}
                height={700}
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

            <p className="mt-7 text-[1.02rem] leading-relaxed text-ink/80">
              {ceo.paragrafos[0]}
            </p>

            {/* Selos sempre visíveis (autoridade escaneável) */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {ceo.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink"
                >
                  {h}
                </li>
              ))}
            </ul>

            <AnimatePresence initial={false}>
              {mais && (
                <motion.div
                  id="ceo-mais"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p className="mt-6 text-[1.02rem] leading-relaxed text-ink/80">
                    {ceo.paragrafos[1]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setMais((v) => !v)}
                aria-expanded={mais}
                aria-controls="ceo-mais"
                className="btn btn-primary"
              >
                {mais ? "Ver menos" : "Ler mais sobre a Marcela"}
              </button>
              <a
                href={contato.linkedinCeo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-ink"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
