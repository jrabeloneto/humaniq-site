"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { diferenciais } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Diferenciais() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="diferenciais" className="bg-royal py-20 text-white md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag tone="light">Diferenciais</Tag>
              <h2 className="font-display mt-6 max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] text-white">
                Por que a Humaniq.
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-white/70">
              Seis razões para confiar a sua gente à gente. Toque para ver cada
              uma.
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={0.1} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => {
            const aberto = open === i;
            return (
              <RevealItem key={d.titulo}>
                <button
                  type="button"
                  onClick={() => setOpen(aberto ? null : i)}
                  aria-expanded={aberto}
                  className="flex w-full flex-col rounded-[var(--radius-card)] bg-blue/40 p-6 text-left ring-1 ring-inset ring-white/10 transition-colors hover:bg-blue/55"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-xl text-white">{d.titulo}</span>
                    <span
                      className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors ${
                        aberto ? "bg-white text-royal" : "text-white"
                      }`}
                      aria-hidden
                    >
                      <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                      <span
                        className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                          aberto ? "scale-y-0" : ""
                        }`}
                      />
                    </span>
                  </span>
                  <AnimatePresence initial={false}>
                    {aberto && (
                      <motion.span
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="block overflow-hidden"
                      >
                        <span className="mt-3 block text-sm leading-relaxed text-white/70">
                          {d.texto}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </RevealItem>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
