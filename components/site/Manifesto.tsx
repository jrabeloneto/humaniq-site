"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { quemSomos, missao, visao, valores } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

const abas = [
  { id: "missao", label: "Missão", texto: missao },
  { id: "visao", label: "Visão", texto: visao },
] as const;

export default function Manifesto() {
  const [aba, setAba] = useState(0);

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

        {/* Missão / Visão em abas — só uma por vez */}
        <Reveal delay={0.1} className="mt-12 rounded-[var(--radius-card)] bg-royal p-8 text-white md:p-12">
          <div role="tablist" aria-label="Missão e visão" className="flex gap-2">
            {abas.map((a, i) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                id={`aba-${a.id}`}
                aria-selected={aba === i}
                aria-controls={`painel-${a.id}`}
                onClick={() => setAba(i)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  aba === i ? "bg-white text-royal" : "bg-white/15 text-white/85 hover:bg-white/25"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
          <motion.p
            key={aba}
            role="tabpanel"
            id={`painel-${abas[aba].id}`}
            aria-labelledby={`aba-${abas[aba].id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-7 max-w-3xl text-[clamp(1.5rem,2.6vw,2.3rem)] leading-[1.18]"
          >
            {abas[aba].texto}
          </motion.p>
        </Reveal>
      </Container>
    </section>
  );
}
