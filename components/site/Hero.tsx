"use client";

import { motion, useReducedMotion } from "motion/react";
import { numeros, sobre } from "@/lib/site";
import { Container, Tag } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  // H1: "A inteligência de cuidar de pessoas."
  // Alternativas p/ o cliente: "Gente bem cuidada constrói empresa que dura."
  const linhas = ["A inteligência de", "cuidar de pessoas."];

  return (
    <section id="topo" className="relative overflow-hidden bg-royal text-white">
      {/* detalhe geométrico chapado — círculo da marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-32 h-[440px] w-[440px] rounded-full"
        style={{ background: "#11119e" }}
      />

      <Container className="relative z-10 pt-16 pb-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Tag tone="light">Consultoria de RH · Manaus, Amazonas</Tag>
        </motion.div>

        <h1 className="font-display-black mt-6 max-w-[18ch] text-[clamp(2.4rem,6vw,5.2rem)] text-white">
          {linhas.map((linha, i) => (
            <span key={linha} className="block overflow-hidden pb-[0.05em]">
              <motion.span
                initial={{ y: reduce ? 0 : "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease, delay: 0.15 + i * 0.1 }}
                className="block"
              >
                {linha}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-8 flex max-w-3xl flex-col gap-7 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-lg text-lg leading-relaxed text-white/80">
            {sobre.standfirst} Há 18 anos cuidando de gestão de pessoas, liderança
            e cultura em Manaus e no Amazonas.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="#contato" className="btn btn-light">
              Falar com a gente
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Ver serviços →
            </a>
          </div>
        </motion.div>

        {/* Tiles de números */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {numeros.map((item) => (
            <div key={item.k} className="rounded-2xl bg-blue/55 p-5 ring-1 ring-inset ring-white/10">
              <div className="font-display tnum text-[clamp(1.7rem,2.6vw,2.4rem)] text-white">
                {item.v}
              </div>
              <div className="mt-2 text-sm font-medium text-white">{item.k}</div>
              <div className="mt-0.5 text-xs text-white/60">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
