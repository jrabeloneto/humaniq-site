"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { servicos } from "@/lib/site";
import { Container, Tag } from "./ui";
import { Reveal } from "@/components/motion/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Servicos() {
  const [open, setOpen] = useState<number | null>(0);

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
              Da seleção à saúde mental. Toque em uma frente para ver o que ela
              inclui.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-[var(--radius-card)] bg-white">
          {servicos.map((s, i) => {
            const aberto = open === i;
            return (
              <div key={s.nome} className="border-b border-mist last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(aberto ? null : i)}
                  aria-expanded={aberto}
                  className="flex w-full items-center gap-5 px-6 py-5 text-left md:px-8 md:py-6"
                >
                  <span className="flex-1">
                    <span
                      className={`font-display block text-[clamp(1.2rem,2.2vw,1.6rem)] leading-tight transition-colors ${
                        aberto ? "text-blue" : "text-ink"
                      }`}
                    >
                      {s.nome}
                    </span>
                    <span className="mt-1 block text-sm text-ink/55">{s.resumo}</span>
                  </span>
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      aberto ? "bg-blue text-white" : "bg-mist text-ink"
                    }`}
                    aria-hidden
                  >
                    <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                    <span
                      className={`absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                        aberto ? "scale-y-0" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {aberto && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 md:px-8">
                        <ul className="grid gap-2.5 sm:grid-cols-2">
                          {s.itens.map((it) => (
                            <li
                              key={it}
                              className="flex gap-3 text-[0.92rem] leading-snug text-ink/80"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                              {it}
                            </li>
                          ))}
                        </ul>
                        {s.nota && (
                          <p className="mt-5 text-xs leading-relaxed text-ink/45">
                            {s.nota}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
